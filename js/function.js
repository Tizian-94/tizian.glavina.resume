function showMe(){
var x = document.getElementById("imgA");
var y = document.getElementById("A");

if (x.style.display === "none") {
	x.style.display = "block";
}
else {
	x.style.display = "none";
}
}

function showhide(){
	var div = document.getElementById("text"):
	if(div.style.display !== "block"){
		div.style.display = "block";
	}
	else{
		div.style.display = "none";
	}
}