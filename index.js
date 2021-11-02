let employee = {
    name: 'Joe Martin',
    streetAddress: '1234 make believe lane'
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
        ...employee, 
        [key]: value,
    }
}

const updatedEmployee = updateEmployeeWithKeyAndValue(
    employee,
    'streetAddress',
    '2468 who do we appreciate drive'
)

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value
    return employee 
}

function deleteFromEmployeeByKey(employee, key) {
    const newEmployeeObj = {...employee}
    delete newEmployeeObj.name
    return newEmployeeObj
}

function destructivelyDeleteFromEmployeeByKey() {
    delete employee.name
    return employee
}


// const employee = {
//     name: "Joseph Martin",
//     streetAddress: "1350 pitkin st",
// }

// function updateEmployeeWithKeyAndValue(employee, key, value) {
//     const updatedEmployee = {...employee};

//     updatedEmployee[key] = value;

//     return updatedEmployee
// }

// function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
//     employee[key] = value
//     return employee
// }

// function deleteFromEmployeeByKey(employee, key) {
//     const newObject = Object.assign({}, employee)
//     delete newObject[key]
//     return newObject;
// }

// function destructivelyDeleteFromEmployeeByKey(employee, key) {
//     delete employee[key]
//     return employee;
// }