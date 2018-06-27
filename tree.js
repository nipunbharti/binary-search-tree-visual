function Tree(){
	this.root = null;
}

Tree.prototype.addValue = function(n){
	if(this.root == null){
		this.root = n;
	} 
	else{
		this.root.addNode(n);
	}
}

Tree.prototype.traverse = function(){
	this.root.visit();
}

Tree.prototype.search = function(val){
	var found = this.root.search(val);
	if(found == undefined){
		return "Not found";
	}
	return "Found ".concat(found);
}