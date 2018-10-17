function add() {
	var no1=document.getElementById("no1").value;
	var no2=document.getElementById("no2").value;
	var ans;
	if(check()==true)
	{
		ans=parseInt(no1)+parseInt(no2);
		document.getElementById("res").value=ans;
	}
	else
	{
		alert('Please Enter Numbers');
	}
}
function sub() {
	var no1=document.getElementById("no1").value;
	var no2=document.getElementById("no2").value;
	var ans;
	if(check()==true)
	{
		ans=parseInt(no1)-parseInt(no2);
		document.getElementById("res").value=ans;
	}
	else
	{
		alert('Please Enter Numbers');
	}
}
function check() {
	var no1=document.getElementById("no1").value;
	var no2=document.getElementById("no2").value;
	if(no1=="" || no2=="")
	{
			return false;
	}
			return true;
}
