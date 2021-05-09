/**
 * sort an array of objects by names
 */

 let employees = [
    {name: 'John', salary: 90000, hireDate: 'July 1, 2010'},
    {name: 'David', salary: 75000, hireDate: 'August 15, 2009'},
    {name: 'Ana', salary: 80000, hireDate: 'December 12, 2011'}
];

employees.sort( function (a, b) {
    let x = a.name.toLocaleUpperCase();
    let y = b.name.toLocaleUpperCase();

    if (x > y) return 1;
    if (x < y) return -1;
    return 0;
});

console.table(employees);
