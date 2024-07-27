class TreeNode {
  constructor(name, context) {
    this.name = name;
    this.context = context;
    this.children = [];
  }

  addChild(child) {
    this.children.push(child);
  }
}

// Create tree nodes
const node1 = new TreeNode('Node 1', 'Context 1');
const node2 = new TreeNode('Node 2', 'Context 2');
const node3 = new TreeNode('Node 3', 'Context 3');

// Add children
node1.addChild(node2);
node1.addChild(node3);

// Add more nodes as needed
