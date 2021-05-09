/**
 * sort array of objects by the date property
 */

 let employees = [
    {name: 'John', salary: 90000, hireDate: 'July 1, 2010'},
    {name: 'David', salary: 75000, hireDate: 'August 15, 2009'},
    {name: 'Ana', salary: 80000, hireDate: 'December 12, 2011'}
];

employees.sort( function (a, b) {
    
    let x = new Date(a.hireDate),
        y = new Date(b.hireDate);

    return x - y;
});

console.table(employees);