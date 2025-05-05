const express = require('express');
const router = express.Router();
const employeeController = require('../../controllers/employeecontro');
const employeeData = require('../../data/employee.json');

// Routes for employees
router
    .route('/')
    .get(employeeController.getEmployees)
    .post(employeeController.createEmployee)
    .put(employeeController.updateEmployee)
    .delete(employeeController.deleteEmployee);

router
    .route('/:id')
    .get(employeeController.getEmployeeById);

module.exports = router;