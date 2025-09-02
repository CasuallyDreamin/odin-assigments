const hashtable = (size) => {
  const table = new Array(size? size : 127);
  const loadFactor = 0.7;

  const expandTable = () => {
    const newSize = table.length * 2;
    const newTable = new Array(newSize);
    for (let i = 0; i < table.length; i++) {
      if (table[i]) {
        for (let j = 0; j < table[i].length; j++) {
          const [key, value] = table[i][j];
          const index = hash(key) % newSize;
          if (!newTable[index]) {
            newTable[index] = [];
          }
          newTable[index].push([key, value]);
        }
      }
    }
    return newTable;
  };

  const hash = (key) => {
    let total = 0;
    for (let i = 0; i < key.length; i++) {
      total += key.charCodeAt(i);
    }
    return total % table.length;
  };

  const set = (key, value) => {
    const index = hash(key);
    if (length() / table.length >= loadFactor) {
      table = expandTable();
    }

    if (!table[index]) {
      table[index] = [];
    }
    
    // Check if the key already exists and update its value
    for (let i = 0; i < table[index].length; i++) {
      if (table[index][i][0] === key) {
        table[index][i][1] = value;
        return;
      }
    }
    table[index].push([key, value]);
  };

  const get = (key) => {
    const index = hash(key);
    if (table[index]) {
      for (let i = 0; i < table[index].length; i++) {
        if (table[index][i][0] === key) {
          return table[index][i][1];
        }
      }
    }
    return undefined;
  };

  const remove = (key) => {
    const index = hash(key);
    if (table[index]) {
      for (let i = 0; i < table[index].length; i++) {
        if (table[index][i][0] === key) {
          table[index].splice(i, 1);
          return true;
        }
      }
    }
    return false;
  };

  const display = () => {
    for (let i = 0; i < table.length; i++) {
      if (table[i]) {
        console.log(i, table[i]);
      }
    }
  };

  const keys = () => {
    const keysArray = [];
    for (let i = 0; i < table.length; i++) {
      if (table[i]) {
        for (let j = 0; j < table[i].length; j++) {
          keysArray.push(table[i][j][0]);
        }
      }
    }
    return keysArray;
  };

  const values = () => {
    const valuesArray = [];
    for (let i = 0; i < table.length; i++) {
      if (table[i]) {
        for (let j = 0; j < table[i].length; j++) {
          valuesArray.push(table[i][j][1]);
        }
      }
    }
    return valuesArray;
  };
  
  const entries = () => {
    const entriesArray = [];
    for (let i = 0; i < table.length; i++) {
      if (table[i]) {
        for (let j = 0; j < table[i].length; j++) {
          entriesArray.push([table[i][j][0], table[i][j][1]]);
        }
      }
    }
    return entriesArray;
  };

  const clear = () => {
    for (let i = 0; i < table.length; i++) {
      table[i] = undefined;
    }
  };

  const length = () => {
    let count = 0;
    for (let i = 0; i < table.length; i++) {
      if (table[i]) {
        count += table[i].length;
      }
    }
    return count;
  };

  const has = (key) => {
    const index = hash(key);
    if (table[index]) {
      for (let i = 0; i < table[index].length; i++) {
        if (table[index][i][0] === key) {
          return true;
        }
      }
    }
    return false;
  }

  return {
    set,
    get,
    remove,
    keys,
    values,
    entries,
    clear,
    length,
    display,
  };
};

export default hashtable;