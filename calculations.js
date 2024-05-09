



function addition(){
	let num1 = parseFloat(document.getElementById("num1").value);
	let num2 = parseFloat(document.getElementById("num2").value);
	
	let add = num1+num2;
	
	document.getElementById("addresult").innerHTML= `Addition Result : ${num1} + ${num2} = `+ add;
}


document.write("<hr>");
document.write("<br>");

 
function subtraction(){
	let num1 = parseInt(document.getElementById("num3").value);
	let num2 = parseInt(document.getElementById("num4").value);
	
	let sub = num1 - num2;
	
	document.getElementById("subresult").innerHTML= `Subtraction Result : ${num1} - ${num2} = ` + sub;
}

 
function multiplication(){
	let num1 = parseInt(document.getElementById("num5").value);
	let num2 = parseInt(document.getElementById("num6").value);
	
	let mul = num1 * num2;
	
	document.getElementById("mulresult").innerHTML = `Product Result : ${num1} * ${num2} = ` + mul;
}

function division(){
	let num1 = parseInt(document.getElementById("num7").value);
	let num2 = parseInt(document.getElementById("num8").value);
	
	let div = num1/num2;
	
	document.getElementById("divresult").innerHTML = `Division Result : ${num1} / ${num2} = `+ div;
}

function sumOfArray(){
	let numbers = document.getElementById("num").value;
	let convertStringToArray = numbers.split(",");
	let sumOfArray = 0;
	for(let i=0; i<convertStringToArray.length; i++){
		sumOfArray = sumOfArray + parseInt(convertStringToArray[i]);
	}
	 
	document.getElementById("sumofarray").innerHTML=`Sum Of Array is ${sumOfArray}`;
}

function parseValue(){
	let number = document.getElementById("parse").value;
	
	if(number.includes(".")){
		document.getElementById("parseValue").innerHTML = "Float Value : " + parseFloat(number);
	}else{
		document.getElementById("parseValue").innerHTML = "Integer Value : " + parseInt(number);
	}
}

function taxCalculator(){
	let inputAmount = parseInt(document.getElementById("input").value);
	let taxAmount = parseInt(document.getElementById("tax").value);
	let tax = taxAmount/100;
	
	 document.getElementById("taxcalculator").innerHTML = `Tax Amount is ${inputAmount*tax} and Total Amount is ${inputAmount+inputAmount*tax}`;
}

function interestCalculator(){
	let principle = parseInt(document.getElementById("principle").value);
	console.log(principle);
	
	let period = parseInt(document.getElementById("period").value);
	console.log(period);
	
	let rateOfInterest = parseFloat(document.getElementById("roi").value);
	console.log(rateOfInterest);
	
	let roiOn = document.getElementById("on").value;
	console.log(roiOn);
	
	
	if(roiOn=="day"){
		let peri = (principle*period*rateOfInterest)/100;
		document.getElementById("taxCal").innerHTML = `Interest Of Amount is ${peri} and Total Amount is ${peri+principle}`;
	}else if(roiOn=="week"){
		period = period/(7*52);
		let peri = (principle*period*rateOfInterest)/100;
		document.getElementById("taxCal").innerHTML = `Interest Of Amount is ${peri} and Total Amount is ${peri+principle}`;	
	}else if(roiOn=="month"){
		period = period/(30*12);
		let peri = (principle*period*rateOfInterest)/100;
		document.getElementById("taxCal").innerHTML = `Interest Of Amount is ${peri} and Total Amount is ${peri+principle}`;	
	}else if(roiOn=="quarter"){
		period = period/(90*4);
		let peri = (principle*period*rateOfInterest)/100;
		document.getElementById("taxCal").innerHTML = `Interest Of Amount is ${peri} and Total Amount is ${peri+principle}`;	
	}else if(roiOn=="halfYear"){
		period = period/(180*2);
		let peri = (principle*period*rateOfInterest)/100;
		document.getElementById("taxCal").innerHTML = `Interest Of Amount is ${peri} and Total Amount is ${peri+principle}`;	
	}else if(roiOn=="year"){
		period = period/365;
		let peri = (principle*period*rateOfInterest)/100;
		document.getElementById("taxCal").innerHTML = `Interest Of Amount is ${peri} and Total Amount is ${peri+principle}`;	
	}

}


function verticalSumOfArray(){

	var dataArray =[
		{ name: "Mobile", price: 30000, qty: 20 },
		{ name: "Laptop", price: 100000, qty: 2 },
		{ name: "PC", price: 200000, qty: 20 }
	];

	let totalPrice = 0;
	let totalQut = 0;
	for(let i=0; i<dataArray.length; i++){
		totalPrice = totalPrice + dataArray[i].price;
		totalQut = totalQut + dataArray[i].qty;
		
	}

	document.getElementById("array").innerHTML=`Total price of material is ${totalPrice} and  Total Quantity of material is ${totalQut}.`;		
}


function randomNumberGenerator(){
	let random = parseInt(document.getElementById("random").value);
	
	if(random==2){
		let x = Math.floor((Math.random() * 10) + 10);
		document.getElementById("randomnumber").innerHTML = x;
	}else if(random==3){
		let x = Math.floor((Math.random() * 100) + 10);
		
		document.getElementById("randomnumber").innerHTML = x;
	}
}
