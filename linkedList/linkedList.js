const sll_node = (value) => {
    return {
        value: value,
        next: null
    }
}

const sll = () => {
    return {
        head: null,
        tail: null,
        length: 0,
        append(value) {
            const newNode = sll_node(value);
            if (!this.head) {
                this.head = newNode;
                this.tail = newNode;
            } else {
                this.tail.next = newNode;
                this.tail = newNode;
            }
            this.length++;
            return this;
        },
        prepend(value) {
            const newNode = sll_node(value);
            if (!this.head) {
                this.head = newNode;
                this.tail = newNode;
            } else {
                newNode.next = this.head;
                this.head = newNode;
            }
            this.length++;
            return this;
        },
        insert(index, value) {
            if (index >= this.length) {
                return this.append(value);
            }
            if (index === 0) {
                return this.prepend(value);
            }
            const newNode = sll_node(value);
            let currentNode = this.head;
            let previousNode;
            let currentIndex = 0;
            while (currentIndex < index) {
                previousNode = currentNode;
                currentNode = currentNode.next;
                currentIndex++;
            }
            previousNode.next = newNode;
            newNode.next = currentNode;
            this.length++;
            return this;
        },
        remove(index) {
            if (index < 0 || index >= this.length) {
                return null;
            }
            let currentNode = this.head;
            let previousNode;
            let currentIndex = 0;
            if (index === 0) {
                this.head = currentNode.next;
                if (this.length === 1) {
                    this.tail = null;
                }
                this.length--;
                return currentNode.value;
            }
            while (currentIndex < index) {
                previousNode = currentNode;
                currentNode = currentNode.next;
                currentIndex++;
            }
            previousNode.next = currentNode.next;
            if (index === this.length - 1) {
                this.tail = previousNode;
            }
            this.length--;
            return currentNode.value;
        },
        traverse() {
            const elements = [];
            let currentNode = this.head;
            while (currentNode) {
                elements.push(currentNode.value);
                currentNode = currentNode.next;
            }
            return elements;
        },
        reverse() {
            if (!this.head || !this.head.next) {
                return this;
            }
            let previousNode = null;
            let currentNode = this.head;
            let nextNode = null;
            this.tail = this.head;
            while (currentNode) {
                nextNode = currentNode.next;
                currentNode.next = previousNode;
                previousNode = currentNode;
                currentNode = nextNode;
            }
            this.head = previousNode;
            return this;
        }
    }
}

export default sll;