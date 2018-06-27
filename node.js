function Node(val){
	this.value = val;
	this.left = null;
	this.right = null;
}

Node.prototype.addNode = function(n){
	if(n.value < this.value){
		(this.left == null) ? this.left = n : this.left.addNode(n);
	}
	else if(n.value > this.value){
		(this.right == null) ? this.right = n : this.right.addNode(n);
	}
	else{
		console.log("Equal values not allowed.")
	}
}

Node.prototype.visit = function(){
	if(this.left != null){
		this.left.visit();
	}
	console.log(this.value)
	if(this.right != null){
		this.right.visit();
	}
}

Node.prototype.search = function(val){
	if(this.value == val){
		return val;
	}
	else if(this.value > val && this.left != null){
		return this.left.search(val);
	}
	else if(this.value < val && this.right != null){
		return this.right.search(val);
	}
}