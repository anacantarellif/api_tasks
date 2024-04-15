const connection = require('../config/db');
const dotenv= require('dotenv').config();

async function storeTask(request, response){
    const params = Array(
        request.body.title,
        request.body.discription
    );

    const query = "insert into tasks(title, discription) values(?,?)";

    connection.query(query, params, (err, results) => {
        if (results) {
            response 
                .status(201)
                .json({
                    success: true,
                    massage: "Sucesso!",
                    data: results
                })
        }else{
            response
                .status(400)
                .json({
                    success: false,
                    message: "Ops, deu problema :(",
                    data: err
                })
        }
    })
}

module.exports = {
    storeTask
}