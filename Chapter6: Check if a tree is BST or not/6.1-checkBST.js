class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function isBST(root) {
  return isBSTUtil(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
}

function isBSTUtil(node, min, max) {
  if (node === null) {
    return true;
  }

  if (node.value <= min || node.value >= max) {
    return false;
  }

  return (
    isBSTUtil(node.left, min, node.value) &&
    isBSTUtil(node.right, node.value, max)
  );
}

// Example usage:
const root = new Node(4);
root.left = new Node(2);
root.right = new Node(6);
root.left.left = new Node(1);
root.left.right = new Node(3);
root.right.left = new Node(5);
root.right.right = new Node(7);

console.log(isBST(root)); // Output: true
