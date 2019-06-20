function msg1(){
	var x=document.getElementById("number").value;
	if(x.length>10 || x.length<10){
		alert("phone number contain only 10 digits !");
		return false;
	}
	
	return true;
}

function msg2(){
	//alert("bibhas");
	var y=document.getElementById('pass1').value;
	var z=document.getElementById('address').value;
	var a=document.getElementById('pass2').value;	
	var re = /^(?=.*\d)(?=.*[!@#$%^&*])/;

	if(y!=a){
		alert('Re-entered Password should match with Password');
	}	

	if(z.search(/[A-Z]/ && /[a-z]/ )<0){
		alert('City should contain only character');
	}
	/*if(z.search(/[a-z]/)<0){
		alert('City should contain only character');
	}
*/
	
	if(y.length<8){
		alert('Password must contain 8 character');
	}
	if(y.search(/[A-Z]/)<0){
		alert("Password must contain one Upper case character");
	}
	if(y.search(/[a-z]/)<0){
		alert("Password must contain one lower case character");
	}
	if(y.search(/[0-9]/)<0){
		alert("Password must contain one number");
	}
	if (y.search(re)){
		alert('Password must contain one special character');
	}

	return true;
}
