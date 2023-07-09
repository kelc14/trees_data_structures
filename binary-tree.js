/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth() {
    // look at all first level children => any without children? yes return count  = 1, otherwise, continue --> look at level 2, any without children, yes return count = 2

    let currentCount = 0;
    if (this.root === null) return currentCount;

    currentCount += 1;
    if (this.root.left === null || this.root.right === null)
      return currentCount;

    let children = [this.root.left, this.root.right];
    while (children.length) {
      let descendents = [];

      if (children.includes(null)) {
        return currentCount;
      } else {
        // add one to count
        currentCount += 1;
        // add next level children to array
        children.forEach((child, idx) => {
          descendents.push(child.left);
          descendents.push(child.right);

          children.splice(idx, 1);
        });
        children = [...descendents];
      }
    }
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth() {
    // look at all first level children => any with children? yes add children to array, otherwise, return currentCount --> look at level 2, any with children, yes, add to array, no return count

    let currentCount = 0;
    if (this.root === null) return currentCount;

    currentCount += 1;
    if (this.root.left === null && this.root.right === null)
      return currentCount;

    let children = [this.root.left, this.root.right];
    while (children.length) {
      let descendents = children.filter((val) => val !== null);
      if (descendents.length === 0) return currentCount;
      // add one to count
      currentCount += 1;
      // reset children to add new children:
      children = [];
      // add next level children to array
      descendents.forEach((child) => {
        children.push(child.left);
        children.push(child.right);
      });
    }
  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {
    let result = 0;

    function sumRecursion(node) {
      // if the node doesn't exist = > add 0
      if (node === null) return 0;
      // keep going until left node is null =>
      const leftSum = sumRecursion(node.left);

      // keep going until right node is null =>
      const rightSum = sumRecursion(node.right);

      // take the larger val
      result = Math.max(result, node.val + leftSum + rightSum);
      return Math.max(0, leftSum + node.val, rightSum + node.val);
    }

    sumRecursion(this.root);
    return result;
  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {}

  //****************** */
  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {}

  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

  static serialize() {}

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  static deserialize() {}

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  lowestCommonAncestor(node1, node2) {}
}

module.exports = { BinaryTree, BinaryTreeNode };
