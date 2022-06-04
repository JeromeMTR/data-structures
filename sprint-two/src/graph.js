// Instantiate a new graph
var Graph = function() {
  //create an array of nodes
  //var nodes  = []
  this.graph = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  var nodeObj = {};
  nodeObj.value = node;
  nodeObj.connections = [];
  //create node array
  //push node to array;
  this.graph[node] = nodeObj;
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
// loop through graph array
  if (this.graph[node]) {
    return true;
  } else {
    return false;
  }
};

// Removes a node from the graph. Takes any node and removes it from the graph, if present. All edges connected to that Node are removed as well.
Graph.prototype.removeNode = function(node) {
  //iterate array to find matching node and save that index
  var self = this;

  self.graph[node].connections.forEach(function(edge) {
    self.removeEdge(node, edge);
  });
  delete self.graph[node];
  //use that index to perform splice
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  //iterate the node array till node match, add edge to 1 index array
  return (this.graph[fromNode].connections.includes(toNode) && this.graph[toNode].connections.includes(fromNode));

};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  console.log(this.graph[fromNode].connections);
  this.graph[fromNode].connections.push(toNode);
  this.graph[toNode].connections.push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var from = this.graph[fromNode];
  var to = this.graph[toNode];
  from.connections.forEach(function(edge, index) {
    if (edge === toNode) {
      from.connections.splice(index, 1);
    }
  });
  to.connections.forEach(function(edge, index) {
    if (edge === fromNode) {
      to.connections.splice(index, 1);
    }
  });
};

// Pass in a callback which will be executed on each node of the graph. traverse graph
Graph.prototype.forEachNode = function(cb) {
  console.log(cb);
  for (var key in this.graph) {
    cb(parseInt(key));
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

