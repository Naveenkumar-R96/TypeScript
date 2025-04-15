const express = require('express');
const router = express.Router();
const path = require('path');

const employeeController = require('../../controllers/employeecontro');
const e = require('express');

router.route('/')
    .get(employeeController.getEmployees)
    .post(employeeController.createEmployee)
    .put(employeeController.updateEmployee)
    .delete(employeeController.deleteEmployee);
    router.route('/:id').get(employeeController.getEmployeeById)    
module.exports = router;