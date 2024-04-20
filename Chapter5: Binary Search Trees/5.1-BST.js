class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);

    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(node, newNode) {
    if (newNode.value < node.value) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  delete(value) {
    this.root = this.deleteNode(this.root, value);
  }

  deleteNode(node, value) {
    if (node === null) {
      return null;
    } else if (value < node.value) {
      node.left = this.deleteNode(node.left, value);
      return node;
    } else if (value > node.value) {
      node.right = this.deleteNode(node.right, value);
      return node;
    } else {
      if (node.left === null && node.right === null) {
        node = null;
        return node;
      }

      if (node.left === null) {
        node = node.right;
        return node;
      } else if (node.right === null) {
        node = node.left;
        return node;
      }

      const minNode = this.findMinNode(node.right);
      node.value = minNode.value;
      node.right = this.deleteNode(node.right, minNode.value);
      return node;
    }
  }

  findMinNode(node) {
    if (node.left === null) {
      return node;
    } else {
      return this.findMinNode(node.left);
    }
  }

  inorder() {
    this.inorderTraversal(this.root);
  }

  inorderTraversal(node) {
    if (node !== null) {
      this.inorderTraversal(node.left);
      console.log(node.value);
      this.inorderTraversal(node.right);
    }
  }

  preorder() {
    this.preorderTraversal(this.root);
  }

  preorderTraversal(node) {
    if (node !== null) {
      console.log(node.value);
      this.preorderTraversal(node.left);
      this.preorderTraversal(node.right);
    }
  }

  postorder() {
    this.postorderTraversal(this.root);
  }

  postorderTraversal(node) {
    if (node !== null) {
      this.postorderTraversal(node.left);
      this.postorderTraversal(node.right);
      console.log(node.value);
    }
  }

  commonAncestor(value1, value2) {
    return this.findCommonAncestor(this.root, value1, value2);
  }

  findCommonAncestor(node, value1, value2) {
    if (node === null) {
      return null;
    }

    if (value1 < node.value && value2 < node.value) {
      return this.findCommonAncestor(node.left, value1, value2);
    } else if (value1 > node.value && value2 > node.value) {
      return this.findCommonAncestor(node.right, value1, value2);
    } else {
      return node;
    }
  }
}

// Usage example:
const bst = new BST();
bst.insert(5);
bst.insert(3);
bst.insert(7);
bst.insert(2);
bst.insert(4);
bst.insert(6);
bst.insert(8);

console.log("Inorder traversal:");
bst.inorder();

console.log("Preorder traversal:");
bst.preorder();

console.log("Postorder traversal:");
bst.postorder();

console.log("Common Ancestor of 2 and 4:");
console.log(bst.commonAncestor(2, 4));
