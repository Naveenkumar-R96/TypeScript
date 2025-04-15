data = {}
data.employee = require('../modules/employee.json')


const getEmployees=(req,res)=>{
    res.json(data.employee)
}


const createEmployee=(req,res)=>{
    res.json({
        'firstName':req.body.firstName,
        'lastName':req.body.lastName,
    })
}
const updateEmployee=(req,res)=>{
    res.json({
        'firstName':req.body.firstName,
        'lastName':req.body.lastName,
    })
}
const deleteEmployee=(req,res)=>{
    res.json({
        "id":req.body.id,
    })
}
const getEmployeeById=(req,res)=>{
    res.json({
        "id":req.params.id,
    })
}

module.exports={
    getEmployees,
    createEmployee,
    updateEmployee,
    deleteEmployee,
    getEmployeeById
}