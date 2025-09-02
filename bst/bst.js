const bst_node = (value) => {
    return { value, left: null, right: null };
    }

const bst = () => {
    return {
        root: null,
        insert(value) {
            const newNode = bst_node(value);
            if (!this.root) {
                this.root = newNode;
                return this;
            }
            let currentNode = this.root;
            while (true) {
                if (value < currentNode.value) {
                    if (!currentNode.left) {
                        currentNode.left = newNode;
                        return this;
                    }
                    currentNode = currentNode.left;
                } else {
                    if (!currentNode.right) {
                        currentNode.right = newNode;
                        return this;
                    }
                    currentNode = currentNode.right;
                }
            }
        },
        contains(value) {
            if (!this.root) {
                return false;
            }
            let currentNode = this.root;
            while (currentNode) {
                if (value === currentNode.value) {
                    return true;
                }
                if (value < currentNode.value) {
                    currentNode = currentNode.left;
                } else {
                    currentNode = currentNode.right;
                }
            }
            return false;
        },
        traverse() {
            const result = [];
            function inOrder(node) {
                if (node) {
                    inOrder(node.left);
                    result.push(node.value);
                    inOrder(node.right);
                }
            }
            inOrder(this.root);
            return result;
        },
        prettyPrint() {
            const lines = [];
            function print(node, prefix = "", isLeft = true) {
                if (node) {
                    lines.push(prefix + (isLeft ? "├── " : "└── ") + node.value);
                    print(node.left, prefix + (isLeft ? "│   " : "    "), true);
                    print(node.right, prefix + (isLeft ? "│   " : "    "), false);
                }
            }
            print(this.root);
            console.log(lines.join("\n"));
        },
        deleteItem(value) {
            const deleteNode = (node, value) => {
                if (!node) return null;
                if (value < node.value) {
                    node.left = deleteNode(node.left, value);
                    return node;
                } else if (value > node.value) {
                    node.right = deleteNode(node.right, value);
                    return node;
                } else {
                    // Node with only one child or no child
                    if (!node.left) return node.right;
                    if (!node.right) return node.left;
                
                }
                // Node with two children: Get the inorder successor (smallest in the right subtree)
                let minLargerNode = node.right;
                while (minLargerNode.left) {
                    minLargerNode = minLargerNode.left;
                }
                node.value = minLargerNode.value;
                node.right = deleteNode(node.right, minLargerNode.value);
                return node;
            }
            this.root = deleteNode(this.root, value);
        },
        find(value) {
            let currentNode = this.root;
            while (currentNode) {
                if (value === currentNode.value) {
                    return currentNode;
                }
                if (value < currentNode.value) {
                    currentNode = currentNode.left;
                } else {
                    currentNode = currentNode.right;
                }
            }
            return null;
        },
        height(node = this.root) {
            if (!node) return -1;
            const leftHeight = this.height(node.left);
            const rightHeight = this.height(node.right);
            return Math.max(leftHeight, rightHeight) + 1;
        },
        isBalanced() {
            const checkBalance = (node) => {
                if (!node) return { height: -1, balanced: true };
                const left = checkBalance(node.left);
                const right = checkBalance(node.right);
                const balanced = left.balanced && right.balanced && Math.abs(left.height - right.height) <= 1;
                return { height: Math.max(left.height, right.height) + 1, balanced };
            }
            return checkBalance(this.root).balanced;
        },
        rebalance() {
            const values = this.traverse();
            const buildBalancedTree = (vals) => {
                if (!vals.length) return null;
                const mid = Math.floor(vals.length / 2);
                const node = bst_node(vals[mid]);
                node.left = buildBalancedTree(vals.slice(0, mid));
                node.right = buildBalancedTree(vals.slice(mid + 1));
                return node;
            }
            this.root = buildBalancedTree(values);
        },
        depth(value) {
            let currentNode = this.root;
            let depth = 0;
            while (currentNode) {
                if (value === currentNode.value) {
                    return depth;
                }
                depth++;
                if (value < currentNode.value) {
                    currentNode = currentNode.left;
                } else {
                    currentNode = currentNode.right;
                }
            }
            return -1; // Value not found
        }
    };
}

export default bst;