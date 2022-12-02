//  Exercise-2 //
// function Person(firstName, lastName, email) {
// 	this.firstName = firstName;
// 	this.surName = lastName;
//     this.email = email;
// getter method
	// this.getName = function() {
	// 	return this.firstName;
	// }
    // this.getlastName = function() {
    //     return this.surName;
    // }
    // this.getemailAddress = function() {
    //     return this.email;
    // }
// setter / mutator methods
	// this.setName = function(){

	// }
	// this.setlastName = function(){

	// }
	// this.setemailAddress = function(){

    // }
// Calling a Display Method only
//     this.displayName = function(){
//         return this.person1
//     }
//     this.displaylastName = function(){
//         return this.person1
//     }
//     this.displayemailAddress = function(){
//         return this.person1
//     }
// }

// let person1 = new Person('Matthew', 'Thomas', 'matt123@email.com');
// console.log(person1.getName())
// console.log(person1.getlastName())
// console.log(person1.getemailAddress())
// ===========================================================================
// 2nd Approach //
// Solution
// function PersonDetails(firstName, lastName, 
//     email) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.email = email;

//     this.getFirstName = ()=> {
//         return this.firstName
//     }
//     this.setFirstName = (value) =>{
//         this.firstName = value;
//     }
//     this.getLastName = ()=> {
//         return this.lastName
//     }
//     this.setLastName = (value) =>{
//         this.lastName = value;
//     }
//     this.getEmail = ()=> {
//         return this.lastName
//     }
//     this.setEmail = (value) =>{
//         this.email = value;
//     }    
    
//     this.display = ()=> {
//         return `
//         Name: ${this.getFirstName()}
//         Surname: ${this.getLastName()}
//         Email: ${this.getEmail()}`;
//     }
// } 
// let person1 = new PersonDetails("Peter", "Henk",
// "peter@gmail.com");
// console.log(person1.display());
// console.log("=============");
// person1.setFirstName("Sarah");
// person1.setLastName("James");
// person1.setEmail("sarah@gmail.com");
// console.log(person1.display());
// 2nd Approach //
// Solution 2 using a class
// class PersonDetails{
    // Private
    // #firstName;
    // #lastName;
    // #email;
    // constructor(firstName, lastName, email) {
    //     this.#firstName = firstName;
    //     this.#lastName = lastName;
    //     this.#email = email;
    // }
    // FirstName
    // get firstName() {
    //     return this.#firstName;
    // }
    // set firstName(value) {
    //     this.#firstName = value;
    // }
    // LastName
    // get lastName() {
    //     return this.#lastName;
    // }
    // set lastName(value) {
    //     this.#lastName = value;
    // }
    // Email
    // get email() {
    //     return this.#email;
    // }
    // set email(value) {
    //     this.#email = value;
    // }
    // Display
//     display() {
//         console.log(`
//         Name: ${this.firstName}
//         Surname: ${this.lastName}
//         Email: ${this.email}`);
//     }
// }
// let person1 = new PersonDetails("Joel", "Mukanya", "joel@gmail.com");
// person1.display();
// console.log("===========");
// person1.firstName = "Peter";
// person1.lastName = "Henk";
// person1.email = "peter@gmail.com"
// person1.display();
// ===========================================================================
// function addition(e){
//     e.preventDefault();
//     let numb1 = document.querySelector("#numb1").value;
//     let numb2 = document.querySelector("#numb2").value;
//     document.querySelector('#output').innerText = eval(`${numb1} + ${numb2}`);
// }
// 2nd Approach //
// function addition(e){
//     e.preventDefault();
//     let numb1 = document.querySelector("#numb1").value;
//     let numb2 = document.querySelector("#numb2").value;
//     // document.querySelector('#output').innerText = eval(`${numb1} + ${numb2}`);
//     document.querySelector('#output').innerText = 
//     parseInt(numb1) + parseInt(numb2);
// }
// ===========================================================================
// Step-2 //
// let btnAddition = document.querySelector('button');
// btnAddition.addEventListener('click', (e)=>{
//     e.preventDefault();
//     let numb1 = document.querySelector("#numb1").value;
//     let numb2 = document.querySelector("#numb2").value;
//     document.querySelector('#output').innerText = 
//     parseInt(numb1) + parseInt(numb2);

// })
// ===========================================================================
// Reduce-(To get the sum of an Array) //
// let numbers = [1, 2, 3, 4, 5];
// let sum = numbers.reduce((a, b)=>{
//     return a + b;
//     // return a * b;
// })
// console.log(`Sum Of: ${sum}`);
// ===========================================================================
// Mapping //
// let numbers = [1, 2, 3, 4, 5];
// let double = numbers.map((item)=> {
//     return item*2;
// })
// console.log('Current Array: ', numbers);
// console.log('Double: ', double);
// Make Use of For-Of //
// let numbers = [1, 2, 3, 4, 5];
//     for(let numb of numbers) {
//         console.log(numb);
// }
// Make Use of new object within an array //
// let numbers = [1, 2, 3, 4, 5];
// let villains = [
//     {
//         id: "0123456789",
//         firstName: 'Victor',
//         surName: 'Von Doom'

//     },
//     {
//         id: "01234567810",
//         firstName: 'Norman',
//         surName: 'Osborn'

//     }
// ];
// console.table(villains);
// 
// let peopleFirstNames = villains.map((item)=>{
//     return item.firstName;
// })
// console.log(peopleFirstNames)
// ===========================================================================
// Hoisting-(Ability to call a function before declaring it.)//
// function addition(a, b) {
//     console.log(a + b);
// }
// addition(5, 6);
// ===========================================================================
// Rest Operator- Allows for unlimited No. of Arguments //
// function addition(...reich) {
//     let sum = reich.reduce((a,b)=>{
//         return a + b;
//     }) 
//     console.log(sum);
    // console.log(reich);
// }
// addition(1, 2, 3);
// Example# //
// function additionOf(...reich) {
//     let sum = reich.filter(Number).reduce((a, b)=>{
//         return a + b;
//     })
//     console.log(sum);
// }
// additionOf(7, 8, 5, 'Matt');
// ===========================================================================