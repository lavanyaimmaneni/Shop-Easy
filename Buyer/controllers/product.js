const ErrorResponse = require('../utils/errorResponse')
const connectDB = require('../config/db')


exports.product = (req ,res , next) => {
    
    const productID = req.params.productID;

    if(!productID){
        return next(new ErrorResponse("Invalid Product id", 400))
    }
    else{
        let sql = 'SELECT * FROM products WHERE pid = ' + productID ;
        
        connectDB.query(sql, [], async function(err, result, fields) {
            if(err) throw err;
            if(result.length == 0)
            {
                return next(new ErrorResponse("Product not found", 404));
            }
            else{
              
                res.status(201).json({
                    success :true, 
                    result : result
                });
                
            }
        })
    }
}

