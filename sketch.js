var tree;

function setup(){
	noCanvas();
	tree = new Tree();
	for(var i=0;i<10;i++){
		tree.addValue(new Node(floor(random(0, 100))));
	}
	console.log(tree);
	tree.traverse();
}