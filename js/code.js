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