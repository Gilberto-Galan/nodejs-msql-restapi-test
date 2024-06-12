//* CONTROLLERS El controlador actúa como intermediario entre el modelo y la vista
import { pool } from '../db.js';

//? EXPORT RUTAS

export const getEmployees = async (req, res) => {
    try {
        //?Crear errores
        // throw new Error('DB Error')
        const [rows] = await pool.query('SELECT * FROM employee')
        res.json(rows)        
    } catch (error) {
        return res.status(500).json({
            message: 'Something goes wrong'
        })
    }
}

//? GET Busca los id, con ello muestra el id, name y salary
export const getEmployee = async (req, res) => {
    try {
        //?Creando Error con throw new Error
        // throw new Error('DB Error')
        // console.log(req.params.id)
        const [rows] = await pool.query('SELECT * FROM employee WHERE id = ?', [req.params.id])
        // console.log(rows)
        // res.send(req.params)
        //?ERROR 404 NOT FOUND
        if (rows.length <= 0 ) return res.status(404).json({
            message: 'Employee not found'
        })

        res.json(rows[0])        
    } catch (error) {
        return res.status(500).json({
            message: 'Something goes wrong'
        })
    }
}

//? POST Creando id, name , salary en MYSQL
export const createEmployees = async (req, res) => {
    const {name, salary} = req.body

    try {
        //?Creando Error con throw new Error
        // throw new Error('DB Error')
        //consulta o cualquier operacion es asincrona se usa await y async
        const [rows] = await pool.query('INSERT INTO employee (name, salary) VALUES(?, ?)', [name, salary])
        res.send({ 
            id: rows.insertId,
            name,
            salary
         })        
    } catch (error) {
        return res.status(500).json({
            message: 'Something goes wrong'
        })
    }
}

//? DELETE usuarios de la tabla de MYSQL
export const deleteEmployees = async (req, res) => {
    try {
        //?Creando Error con throw new Error
        // throw new Error('DB Error')
        const [result] = await pool.query('DELETE FROM employee WHERE id = ?', [req.params.id])
        // console.log(result)
    
        if (result.affectedRows <= 0 ) return res.status(404).json({
            message: 'Employee not found'
        })
    
        res.sendStatus(204)
    } catch (error) {
        return req.status(500).json({
            message: 'Something goes wrong'
        })
    }
}

//? PATCH ACTUALIZACION de id, name, salary
export const updateEmployees = async (req, res) => {
    const {id} = req.params
    const {name, salary} = req.body

    try {
        //?Creando Error con throw new Error
        // throw new Error('DB Error')
        // console.log(id, name, salary)
        // console.log(result) 
        const [result] = await pool.query('UPDATE employee SET name = IFNULL(?, name), salary = IFNULL(?, salary) WHERE id = ?', [name, salary, id])
        
        if(result.affectedRows === 0) return res.status(404).json({
            message: 'Employee not found'
        })
    
        const [rows] = await pool.query('SELECT * FROM employee WHERE id = ?', [id])
        res.json(rows[0])
    } catch (error) {
        return res.status(500).json({
            message: 'Something goes wrong'
        })
    }
}


