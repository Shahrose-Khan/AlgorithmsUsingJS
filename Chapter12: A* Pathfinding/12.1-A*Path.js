class Node {
  constructor(state, parent, action, pathCost) {
    this.state = state;
    this.parent = parent;
    this.action = action;
    this.pathCost = pathCost;
  }
}

function aStarSearch(startState, goalState, actionsF, takeActionF, hF) {
  let h = new Map();
  let nodes = new PriorityQueue();
  let startNode = new Node(startState, null, null, 0);
  nodes.push(startNode, hF(startState, goalState));
  while (true) {
    if (nodes.empty()) {
      return null;
    }
    let node = nodes.pop();
    if (goalTestF(node.state, goalState)) {
      return node;
    }
    let actions = actionsF(node.state);
    for (let action of actions) {
      let childState = takeActionF(node.state, action);
      let hChild = h.get(childState.toString());
      let fChild = node.pathCost + 1 + hF(childState, goalState);
      if (hChild === undefined || fChild < hChild) {
        h.set(childState.toString(), fChild);
        nodes.push(
          new Node(childState, node, action, node.pathCost + 1),
          fChild
        );
      }
    }
  }
}

// Test
let startState = [
  [2, 8, 3],
  [1, 6, 4],
  [7, 0, 5],
];
let goalState = [
  [1, 2, 3],
  [8, 0, 4],
  [7, 6, 5],
];

let actionsF = actions;
let takeActionF = takeAction;
let hF = manhattan;
let goalTestF = goalTest;

let solutionNode = aStarSearch(
  startState,
  goalState,
  actionsF,
  takeActionF,
  hF,
  goalTestF
);
if (solutionNode === null) {
  console.log("No solution found");
} else {
  console.log("Solution found!");
}
