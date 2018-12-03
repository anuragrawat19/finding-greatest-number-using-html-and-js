
function greater(){

	var_a=parseInt(prompt("enter the first number that is A"));
	var_b=parseInt(prompt("enter the second number that is B"));
	if(var_a>var_b){
		document.getElementById("demo").innerHTML = " A is greater";
		//console.log("a is greater");
		//document.write("A is greater as A = "+var_a +" "+ "and B ="+" "+var_b)
	}
		

	else if(var_a<var_b){
		document.getElementById("demo").innerHTML = "B is greater";
          //console.log("b is greater");	
          //document.write("B is greater as A="+var_a +" "+ "and B ="+" "+var_b)
	}
		
	else{
		document.getElementById("demo").innerHTML= "both are equal";
		//console.log("both are equal");
		//document.write("both A and B are equal as A="+var_a +" "+ "and B ="+" "+var_b)
	}
}

		
	

