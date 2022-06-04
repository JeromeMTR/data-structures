var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  // extend treemethods on to newtree
  _.extend(newTree, treeMethods);
  newTree.children = []; // fix me  --an array containing a number of subtrees (can be many children not just left and right)

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  //takes any value, sets that as the target of a node, and adds that node as a child of the tree
  //create a newTree by invoking Tree function
  var child = Tree();
  //give it input value for value property
  child.value = value;
  //push the child into 'this'.children
  this.children.push(child);
};

treeMethods.contains = function(target) {
  //takes any input and returns a boolean reflecting whether it can be found as the value of the target node or any descendant node

  // 'this' -- tree object that is calling contains left of the dot
  var tree = this;
  // I - target value
  // O - boolean value

  //default boolean false for found
  var found = false;
  // create a recursion function to loop through entire tree children
  var searchTree = function(tree) {
    // I - tree
    // O - boolean value
    // E - if input tree doesnt exist or no children, multiple children

    // if value in tree matches
    if (tree.value === target) {
      // reassign found
      found = true;
      // if tree has children
    } else if (tree.children.length > 0) {
      // loop through each child
      for (let i = 0; i < tree.children.length; i++) {
        //invoke recursive function on each child
        searchTree(tree.children[i]);
      }
    }
  };
  //inovke recursion function on main tree
  searchTree(tree);
  return found;
  //linear time - requires visiting every single node (recursion)
};

/*
 * Complexity: What is the time complexity of the above functions?
   addChild - O(1)
   contains - O(n)
 */
