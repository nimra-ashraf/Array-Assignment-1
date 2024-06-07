"use strict";
/*
Part 1: Basic Arrays - Product Inventory
Challenge:
You are tasked with creating a Product Inventory system. Implement functions and logic to manage object manipulation effectively.
1.Define a type alias named Product to represent a product with the following properties:
•name (string): The name of the product.
•price (number): The price of the product.
•inventory (object): An object containing inventory details including:
•stock (number): The number of products available.
•colorOptions (string[ ]): An array listing available colors.
2.Create an array named products containing at least three product objects. Each product object should include a name, price, and inventory details.
3.Implement a function named changeColor that takes a product object and a new color as input. This function should update the color property of the product and adjust the price based on the new color (implement your own logic, e.g., increase by 10% for red, decrease by 5% for blue).
4.Display each product's name, price, stock, and available colors. Iterate through the products array and print each product's details.
*/
let products = [
    {
        name: "Lipstick",
        price: 800,
        inventory: {
            stock: 100,
            colorOption: ["Blood Red", "Baby pink", "Brown"]
        }
    },
    {
        name: "Blushon",
        price: 500,
        inventory: {
            stock: 20,
            colorOption: ["pink", "red", "peach"]
        }
    },
    {
        name: "Nail Paints",
        price: 300,
        inventory: {
            stock: 120,
            colorOption: ["Black", "Red", "Golden"]
        }
    }
];
let students = [
    {
        name: "Ali",
        grades: [90, 80, 70]
    },
    {
        name: "Zain",
        grades: [82, 76, 80]
    },
    {
        name: "Zara",
        grades: [91, 87, 77]
    }
];
function calculateAverageGrades(grades) {
    let total = 0;
    for (let i = 0; i < grades.length; i++) {
        total += grades[i];
    }
    console.log(`Total: ${total}, Grade Length: ${grades.length}`);
    return total / grades.length;
}
for (let i = 0; i < students.length; i++) {
    const student = students[i];
    const AverageGrades = calculateAverageGrades(student.grades);
    console.log(`Student's Name: ${student.name}`);
    console.log(`Student's Avegare Grade: ${AverageGrades.toFixed(2)}`);
    console.log("#####################");
}
// RETURN METHOD:
// students.forEach(student => {
//   const averageGrade = calculateAverageGrades(student.grades);
//   console.log(`Student Name: ${student.name}`);
//   console.log(`Average Grade: ${averageGrade.toFixed(2)}`); 
//   console.log('-------------------------');
// });
/*
Part 3: Array with Types and Indexing - Employee Salaries
Challenge:
You are managing employee salaries for a company. Implement logic to calculate salaries and handle bonuses.
1.Define a type alias named Employee with the following properties:
•name (string): The name of the employee.
•hoursWorked (number): The number of hours the employee worked.
•hourlyRate (number): The hourly rate of the employee.
•salary (number): The base salary of the employee.
2.Define an array named employees containing employee objects. Each employee object should include a name, hoursWorked, hourlyRate, and salary.
3.Implement a function named calculateSalary that calculates the salary for each employee based on the hours worked and hourly rate.
4.If an employee has worked 20 hours or more, apply a 10% bonus to their salary.
*/
// type Employee = {
//   name: string,
//   hoursWorked : number,
//   hourlyRate : number,
//   salary : number
// };
// const employees : Employee[] = [
//   {
//   name : "Mr. Khan",
//   hoursWorked : 15,
//   hourlyRate : 30, // hourlyrate in dollars
//   salary : 0
//   },
//   {
//   name : "Mr. Nasir",
//   hoursWorked : 22,
//   hourlyRate : 35,
//   salary : 0
//   },
//   {
//   name : "Mr. Omar",
//   hoursWorked : 19,
//   hourlyRate : 40,
//   salary : 0
//   }
// ];
// const calculateSalary = (employee : Employee) => {
//   let salary = employee.hoursWorked * employee.hourlyRate;
//   if (employee.hoursWorked >= 20) {
//     salary = salary * 10/100 + salary
//   }
//   return salary;
// }
// for (let i=0; i < employees.length; i++) {
//   const employee = employees[i];
//   const calculatedSalary = calculateSalary(employee);
//   console.log(`Employee's Name: ${employee.name}`);
//   console.log(`Emmployee's Salary: ${calculatedSalary}`);
//   console.log("..................");
// }
