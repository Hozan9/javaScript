function add(a, b) {
    return a + b;
}
console.log(add(3, 8));
function mult(a, b) {
    return a * b;
}
console.log(mult(5, 2));
function add2(a, b) {
    return a + b;
}
console.log(add2(3, 12));
console.log("_______________zweiter aufgabe------------");
/*const student:{name:string,age:number}={name:"hozan",age:29}
//student.name="bamo"
console.log(student)*/
console.log("__________________________________zweiter aufgabe-------------------------------");
var Student = { name: "Hozan", age: 29 };
//Student.name="Bamo" //ama bo gorine nawakaya
console.log(Student);
var product = { id: "123", name: "kiwi" };
var products = [product, { id: "345", name: "Banana" }];
console.log(products);
console.log(products[0]);
function checkproduct(product) {
    return product.name.length > 5;
}
var newproducts = products.filter(checkproduct);
console.log(newproducts);
