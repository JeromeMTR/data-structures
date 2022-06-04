var LinkedList = function() {
  var list = {}; // list to add nodes to
  list.head = null; //node
  list.tail = null; //node

  list.addToTail = function(value) { // takes a value and adds it to the end of the list
    //create a node
    var newTail = Node(value);
    //next property  would be null

    //make old tails next property points to the next node object
    if (list.tail) {
      list.tail.next = newTail;
    }
    // if head does not exits
    if (!list.head) {
      // reassign head to current tail
      list.head = newTail;
    }
    //reassign list tail to current node
    list.tail = newTail;
  };

  list.removeHead = function() { // removes the first node from the list and returns its value, BIG 0: CONSTANT
    // create temp var for head value
    var retValue = list.head.value;
    // store old heads next property to become new head
    var newHead = list.head.next;
    // delete old head node
    delete list.head;
    // assign list.head to the node at current heads next property
    list.head = newHead;
    // returns heads value
    return retValue;
  };

  list.contains = function(target) { // returns boolean reflecting whether or not the passed-in value is in the linked list  BIG 0: LINEAR
    // I target value
    // O boolean value (true if taget is in, else false)
    // C
    // E
    // P
    // create check value function
    var checkValue = function (head) {
      // I - node
      // O - boolean val
      // C
      // E - input could be null, or another node
      // P
      //if value match
      if (head.value === target) {
        //return true
        return true;
      //check if next is null
      } else if (!head.next) {
        return false;
      }
      //go to next node and repeat
      return checkValue(head.next);
    };
    // return inner function return value
    return checkValue(list.head);
  };

  return list;
};

var Node = function(value) { //creates node object with value and reference
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
* Complexity: What is the time complexity of the above functions?
 removeHead method: constant BIG O(1)
 contains methdod: linear BIG O(n)
*/



//extra credits:

// list.insert = function(reference) {
//   //create node, make prior node point to this reference, point this node to next node
// }

// list.remove = function() {
//   //if head just move head reference to next item
//   //if middle - look up to find value that precedes target node
// }
// };