/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    let sum = 0;
    if (this.root === null) return sum;

    let vals = [this.root];
    while (vals.length) {
      let current = vals.pop();
      sum += current.val;
      vals = [...vals, ...current.children];
    }
    return sum;
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    let count = 0;
    if (this.root === null) return count;

    let nodes = [this.root];
    while (nodes.length) {
      let current = nodes.pop();
      if (current.val % 2 == 0) count += 1;
      nodes = [...nodes, ...current.children];
    }
    return count;
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    let count = 0;
    if (this.root === null) return count;

    let nodes = [this.root];
    while (nodes.length) {
      let current = nodes.pop();
      if (current.val > lowerBound) count += 1;
      nodes = [...nodes, ...current.children];
    }
    return count;
  }
}

module.exports = { Tree, TreeNode };
