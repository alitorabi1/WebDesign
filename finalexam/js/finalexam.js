// JavaScript Document
//create the today() function that returns current date 
//in the followinf format 
function today() {
	//create an instance of the date object
	var now=new Date();
	//Extract from now object the date ,month , current year
	var thisDate=now.getDate();
	var thisMonth=now.getMonth()+1;
	var thisYear=now.getFullYear();
	var dateNow=thisMonth +"/"+thisDate+"/"+thisYear;
	return dateNow;
} 
	