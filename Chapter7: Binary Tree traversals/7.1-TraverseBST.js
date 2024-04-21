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

  // In-order traversal
  inOrderTraversal(node) {
    if (node !== null) {
      this.inOrderTraversal(node.left);
      console.log(node.value);
      this.inOrderTraversal(node.right);
    }
  }

  // Pre-order traversal
  preOrderTraversal(node) {
    if (node !== null) {
      console.log(node.value);
      this.preOrderTraversal(node.left);
      this.preOrderTraversal(node.right);
    }
  }

  // Post-order traversal
  postOrderTraversal(node) {
    if (node !== null) {
      this.postOrderTraversal(node.left);
      this.postOrderTraversal(node.right);
      console.log(node.value);
    }
  }
}

// Usage example
const bst = new BST();
bst.root = new Node(4);
bst.root.left = new Node(2);
bst.root.right = new Node(6);
bst.root.left.left = new Node(1);
bst.root.left.right = new Node(3);
bst.root.right.left = new Node(5);
bst.root.right.right = new Node(7);

console.log("In-order traversal:");
bst.inOrderTraversal(bst.root);

console.log("Pre-order traversal:");
bst.preOrderTraversal(bst.root);

console.log("Post-order traversal:");
bst.postOrderTraversal(bst.root);
