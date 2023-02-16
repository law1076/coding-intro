const readline = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout
  });
  
/*********VARIABLES AND PRINTING*********/
console.log("")

//Creating and manipulating variables


const integerExample = 7 //literal

var stringExample = "Hello, world!" //variable

console.log("Printing....") //print statement

console.log (99)

console.log(integerExample) //print statement

console.log (stringExample) //another print statement


console.log (99+" Hi! " + 9879087 + stringExample) //literal print statement

var testVar

console.log(testVar)

testVar = "I'm adding data to the test variable!"

console.log(testVar)

testVar = 18

console.log(testVar)



/*********NUMBER OPERATIONS*********/
console.log("")

//Mathematics

var x
var y

console.log(x) //undefined

x = 6
y = 9

var z = x-y

console.log(z)


console.log(6 * 7) //multiplication

console.log(45 / 9) //division


console.log (21 % 7) //modulo


var a = 33

x++

a ++

a++

console.log(a)



/************BOOLEANS**************/
console.log("")

//True or False?

var testBool = true

console.log (testBool)

var emptyBool = false

console.log(emptyBool)



/************CONDITIONALS**************/
console.log("")

//if X, then Y

var testVar13 = 7

if (testBool == false) {
	console.log ("variable is false")
}

else if (testBool == true ) {
	console.log("it's true!")
}

else {
	console.log ("no value")
}



if (5 < 7) {

	console.log("hi!")
	console.log ("Testing!")

	if (2 > 4) {
		console.log("tw is greater than 4!")
		var g = 5
	}

	if (2 < 4) {
		console.log ("two is less than 4!")
		console.log (g)
	}

}


var zz = 5

if (zz < 3) {
	console.log ("less than 3")
}

else if (zz >= 3 && zz < 7) {
	console.log("it's between 3-7")
}

else if (true) {
	console.log("it's 5")
}

else {
	console.log ("Guess it's greater than 7")
}


zz = 9

if (zz < 3) {
	console.log ("less than 3")
}

else if (zz >= 3 && zz < 7) {
	console.log("it's between 3-7")
}




/*********DATA STORAGE*********/
console.log("")

//storing large amounts of data

let aa = 1
var bb = "Hello! World!"
var cc = 3


let array1 = [1, 2, 3, 4, 5, true, 2, 3, "string", 5]

console.log (array1)

var array2 = []

console.log (array2)

array2.push("Hello!") //0
array2.push("World!") //1
array2.push("Nice!") //2
array2.push("To!") //3
array2.push("See!") //4
array2.push("You!") //5

console.log(array2)


//array2.pop() ndsfpogjdf'pog dfpogu 'pdofjgpd'osfgj dopfjg'psdofjg'spdofgj'pdosfjgdsfg
//array2.pop() .  dfiopgsdpfgijds'pfoigjsd'pfogjosdpfg

console.log("hi!")

console.log(array2)


console.log(array2[0])
console.log(array2[2])
console.log(array2[5])

var arr1 = [121, 234342, 6756754, 657, 56765, 567, 56756]



/*********OBJECTS*********/
console.log("")

//variables of variables

var student = {
	firstName: "Reuben",
	lastName: "Youngblom",
	class: "Law1076",
	hobbies: "Spaghetti"
}


console.log (student)

console.log (student.lastName)


student.lastName = "Smith"

student.faveSuperhero = "Superman"



console.log (student)


/*********LOOPS*********/
console.log("")

//looping through data

//FOR loop syntax -> for ([variable]; [condition]; [loop task]) { }



for (let i = 10; i > 5; i--) {
	console.log (i)
}


array2.push("See!")
array2.push("You!")
console.log (array2)

array2.pop()
array2.pop()


for (let i = 2; i < array2.length; i++) {
	console.log(array2[i])
}


console.log(array1.length)

for (let x in array1) {
	console.log("reuben")
}



var i = 1
userDataGood = false

while (userDataGood == false) {
	//var userName = prompt ("What is your name? ")

	//if (userName == goodValue) {
		//userData = true
	//}

	console.log ("while loop")

	userDataGood = true
	
  }





/*********FUNCTIONS*********/
console.log("")

//reusing code


var mult1 = 3
var mult2 = 4
var ans3 = mult1 * mult2

var mult4 = 18
var mult5 = 19
var ans6 = mult4 * mult5

var mult7 = 12
var mult8 = 6
var ans9 = mult7 * mult8

console.log(ans9)

function printData (printableData) {

	console.log(printableData)
}

printData ("hi there, Reuben!")
printData ("what's up")




function multiply (number1, number2, Todd) {
	console.log(number1 + number2 + Todd)
	return number1 * number2 * Todd
}


let funcTest1 = multiply (mult1, mult2, 7)
let funcTest2 = multiply (mult4, mult5, 9)
let funcTest3 = multiply (mult7, mult8, 2)


console.log (funcTest1)
console.log(funcTest2)
console.log(funcTest3)

console.log("")
console.log("")
console.log("")
sdfkdsl



readline.question('What is your name', name => {
	console.log(`Hello, ${name}!`);
	readline.close();
  });

