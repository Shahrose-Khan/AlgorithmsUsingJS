class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function compareTrees(tree1, tree2) {
  if (tree1 === null && tree2 === null) {
    return true;
  }

  if (tree1 === null || tree2 === null) {
    return false;
  }

  if (tree1.val !== tree2.val) {
    return false;
  }

  return (
    compareTrees(tree1.left, tree2.left) &&
    compareTrees(tree1.right, tree2.right)
  );
}

// Example usage
const tree1 = new TreeNode(1);
tree1.left = new TreeNode(2);
tree1.right = new TreeNode(3);

const tree2 = new TreeNode(1);
tree2.left = new TreeNode(2);
tree2.right = new TreeNode(3);

console.log(compareTrees(tree1, tree2)); // Output: true

const tree3 = new TreeNode(1);
tree3.left = new TreeNode(2);
tree3.right = new TreeNode(3);

const tree4 = new TreeNode(1);
tree4.left = new TreeNode(2);
tree4.right = new TreeNode(4);

console.log(compareTrees(tree3, tree4)); // Output: false
