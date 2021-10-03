const employee = {
    name: "Joseph Martin",
    streetAddress: "1350 pitkin st",
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const updatedEmployee = {...employee};

    updatedEmployee[key] = value;

    return updatedEmployee
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value
    return employee
}

function deleteFromEmployeeByKey(employee, key) {
    const newObject = Object.assign({}, employee)
    delete newObject[key]
    return newObject;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key]
    return employee;
}