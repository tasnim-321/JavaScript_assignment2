// // // This function is to show hello world


// // /*\
// // 1, dfdff
// // 3 dfd
// // 4. multiline comments

// // */
// // //dfdfd


// document.getElementById ("blue_box") .innerHTML ="This is new text"



// var number = 6;
// console.log(typeof number);

// var firstName = "This is";
// var lastName = "Tasnim";
// var fullName = firstName + " " + lastName;
// console.log(fullName)

// var firstName = "My birthday in";
// var birthYear = 2003;

// var fullName = firstName + " " + birthYear;
// console.log(fullName)

// var num1 = 300;
// var num2 = 100;
// var division = num1 / num2;
// console.log(division)
// var sum=num1+num2;
// console.log(sum);

// var multiplication=num1*num2;
// console.log(multiplication);

// var subtraction=num1-num2;
// console.log(subtraction);




// var average = (num1+num2) * 10;
// console.log(average)

// document.getElementById("blue_box").innerHTML="i am tasnim"


// var userName="user";
// console.log(userName);
// console.log(userName.replace("u"," "));

// document.getElementById("user").innerHTML="Hello" + " "+"!";

// var firstName="tasnim";
// var lastName="hossain";
// var fullName=firstName+" "+lastName;
// console.log( fullName)

// var firstName="jony";
// console.log(typeof firstName);
// console.log(firstName.length);
// console.log(firstName[2]);

// var age=55;
// console.log(typeof age);

// var email="fghfjgkj";
// console.log(typeof email);


// var phoneNumber=55;
// console.log(typeof phoneNumber);


// var birthYear=2003;
// console.log(birthYear);

// var price=17.4;
// console.log(price);

// var temperature=-15;
// console.log(temperature);

// var bigNumber=3e6;
// console.log(bigNumber);

// var power=Math.pow(2,7);
// console.log(power);


// var roundedNumber=Math.round(3.6);
// console.log(roundedNumber);

// var roundup=Math.ceil(4.5);
// console.log(roundup);

// var roundDown=Math.floor(5.8);
// console.log(roundDown);

// var squareRoot=Math.sqrt(49);
// console.log(squareRoot);

// var randomNumber=Math.random();
// console.log(randomNumber);


// var myNumber=23.76866824;
// console.log(myNumber.toFixed(3));

// var myNumber = 90;
// myNumber = myNumber + 5;
// console.log(myNumber);


// myNumber = 21;
// myNumber += 5;
// console.log(myNumber);

// var name="Here is"
// name+=" my"
// name+=" book"
// console.log(name);

// var firstNumber="5646";
// var secondNumber="56";
// console.log(firstNumber+secondNumber);

// var firstNumber = "81"; 
// var secondNumber = "44";

// console.log(  parseInt(firstNumber) -  parseInt(secondNumber) );

// var yearOfBirth=1999;
// console.log(yearOfBirth.toString()+" is the year when my grandpa died");


// var count1="40.05";
// var count2="20";
// console.log(parseFloat(count1)+parseInt(count2));


// var birthday = "1st october";
// var currentDate="2nd october";

// if( birthday == currentDate ) {
//     console.log("Happy Birthday.");
// } else {
//     console.log("Sorry,it's not your birthday");
// }

// var birthday = "17th july";
// var currentDate="21st october"
// if( birthday === currentDate ) {
//     console.log("Happy Birthday.");
// } else {
//     console.log("Sorry,it's not your birthday");
// }

// console.log(undefined === null);




// function minusNumber(num1,num2) {
//     var result=num1-num2;
//     console.log(result);
//     alert(result);
// }


// minusNumber(1024,128)

// function multiplication(num1,num2) {
//     var result=num1*num2;
//     return result;
// }


// var multiplicationNumber=multiplication(14,34);

// alert(multiplicationNumber);

// function sumNumber(num1,num2) {
//     var sum = num1+num2;
//     console.log(sum);
    
// }

// sumNumber(-27,55);

// var num1=-27;
// var num2=55;
// var sum=num1+num2;
// console.log(sum);

// document.getElementById("sum_result").innerHTML =(sum);


// var student=["Tasnim","Tahmid","Tasrif"];
// console.log(student.length);
// console.log(student[2]);


// var evenNumber=[2,4,6,8,10.12,14,16];
// console.log(evenNumber.length);
// console.log(evenNumber[5]);



function number(c) {
        var numbers=(9*c/5)+32;   
       return numbers;
        
}
var result=number(38);
console.log(result);
 document.getElementById("fahr_1").innerHTML=result;




 function number(c) {
    var numbers=(9*c/5)+32;   
   return numbers;
    
}
var result=number(24);
console.log(result);
document.getElementById("fahr_2").innerHTML=result;


function number(c) {
    var numbers=(9*c/5)+32;   
   return numbers;
    
}
var result=number(-1);
console.log(result);
document.getElementById("fahr_3").innerHTML=result;



var classification = [ "John Hill" , "Mary Jane", "Gary Vee", "Paricia Mills", "Helen Hall", "Paul Green" ]; 
classification.shift();
console.log(classification);

var classification = [ "Mary Jane", "Gary Vee", "Paricia Mills", "Helen Hall", "Paul Green" ]; 
classification.shift();
console.log(classification);


var classification = ["Gary Vee", "Paricia Mills", "Helen Hall", "Paul Green" ]; 
classification.shift();
console.log(classification);
document.getElementById("best_students").innerHTML=classification


var course = {
    'title': "Learn to Code in Python 3",
    'categories': ['programming', 'technology', 'python'],
    '5_stars_reviews': 420,
    '4_stars_reviews': 80,
    '3_stars_reviews': 33,
    '2_stars_reviews': 20,
    '1_stars_reviews': 4
}


console.log(course.title);
document.getElementById("course_title").innerHTML=course.title

console.log(course['categories'][0]);
document.getElementById("main_category").innerHTML=course['categories'][0]

var shoppingList = ["Milk", "Butter", "Juice", "Bread", "Beer", "Rice", "Potatoes", "Chocolate"]; 
shoppingList.pop();
shoppingList.shift();
shoppingList.unshift("Chocolate");
console.log(shoppingList);

var shoppingList = ["Milk", "Butter", "Juice", "Bread", "Beer", "Rice", "Potatoes", "Chocolate"]; 
shoppingList.push("Cheese");
shoppingList.push("Eggs");
console.log(shoppingList);


function sum_args(num1,num2,num3,num4,num5) {
    var sum  = num1 + num2 + num3 + num4 + num5;
    console.log(sum);
}

sum_args(420,80,33,20,4);

var average=(420/557)*100;
console.log(average);

var roundedNumber = Math.round(75.40394973070018);
console.log(roundedNumber);

var name = "75";
name += "%";
console.log(name);


document.getElementById("reviews_5_stars").innerHTML=name;




document.getElementById("click-me").onclick = function() {
    alert('are u human');
};

document.getElementById("hover-me").onmouseover = function() {
    alert('take your cap');
};

document.getElementById("leave-me").onmouseout = function() {
    alert('You moved too much');
};

document.getElementById("lookAt-me").onclick = function() {
    alert('take your time');
};

document.getElementById("see-me").onmouseout = function() {
    alert('do not go there');
};

var button = document.getElementById("color_button");

button.onclick = function() {
    document.getElementById("button_one").style.display="block";
}

document.getElementById("color_button").onclick = function() {
    this.style['background-color'] = "orange";
    this.style.transform = "translateX(-10px)";
};


document.getElementById("button_one").onclick = function() {
    this.style['background-color'] = "aqua";
    this.style.transform = "translateY(10px)";
};

var button = document.getElementById("button_two");

button.onclick=function()  {
    button.style["background-color"]="red";
    button.style.transform="translateX(10px)";
};


var clickButton = document.getElementById("color_button");
var showButton = document.getElementById("button_two");


clickButton.onclick=function() {
    document.getElementById("button_one").classList.toggle("show")
}

showButton.onclick=function() {
    document.getElementById("button_one").classList.toggle("show")
}
