const ErrorResponse = require('../utils/errorResponse')
const connectDB = require('../config/db')
const orderid = require('order-id')('key')

exports.getProducts = (req ,res , next) => {
    const {oid} = req.body;

    let sql = "select *  from orders where oid = '" + oid + "'";
        
    connectDB.query(sql, [], async function(err, result, fields) {
        console.log(err);
        if(err) {
            throw err
        };
        res.status(201).json({
            success :true, 
            result : result
        });
        
    })
}

exports.placeOrder = (req ,res , next) => {
    
    const {cid, orders} = req.body;
    const id = orderid.generate();

    console.log(orders,id);

    let flag = 1;

    
    

    function myFunction(value, index, array) {
        const { pid, sid,price, qty, MRP, brand, image1} = value;
        console.log("hi");

        let sql = " insert into orders values ( " + cid + " , " + pid + " , " + sid + " , '" + id +"' , " + qty +  " , " + price + ", 0,  " + MRP + " , '" + brand + "' , '" + image1 + "')";
        
        connectDB.query(sql, [], async function(err, result, fields) {
            console.log(err);
            if(err) {
                flag = 0;
                throw err
            };
            console.log(sql,result);
            
        })
    }


    if(!cid){
        return next(new ErrorResponse("Invalid Customer id", 400))
    }
    // cid, pid, sid, oid, qty, price
    else{
        orders.forEach(myFunction);

        if(flag == 0){
            res.status(401).json({
                success :false, 
            });
        }
        else{
            res.status(201).json({
                success :true, 
                orderid : id
            });
        }

    }
}

exports.addToCart = (req ,res , next) => {
    
    const {cid,pid, qty} = req.body;

    if(!cid){
        return next(new ErrorResponse("Invalid Customer id", 400))
    }
    else{
        let sql = "insert into cart values ( " + cid + "  , "  +  pid + " , " + qty + " )" ;
         
        connectDB.query(sql, [], async function(err, result, fields) {
            if(err) throw err;
            else{
              
                res.status(201).json({
                    success :true, 
                    result : result
                });
                
            }
        })
    }
}



exports.getAddress = (req ,res , next) => {
    
    const {cid} = req.body;

    if(!cid){
        return next(new ErrorResponse("Invalid Customer id", 400))
    }
    else{
        let sql = "select * from cust_address where cid =  " + cid ;
         
        connectDB.query(sql, [], async function(err, result, fields) {
            if(err) throw err;
            else{
              
                res.status(201).json({
                    success :true, 
                    result : result
                });
                
            }
        })
    }
}

exports.getCart = (req ,res , next) => {
    
    const {cid} = req.body;

    if(!cid){
        return next(new ErrorResponse("Invalid Customer id", 400))
    }
    else{
        let sql = "SELECT products.sid, products.name, cart.qty, products.pid, products.brand, products.price, products.MRP, products.image1 FROM products INNER JOIN cart ON products.pid=cart.pid" ;
         
        connectDB.query(sql, [], async function(err, result, fields) {
            if(err) throw err;
            else{
              
                res.status(201).json({
                    products : result.length,
                    success :true, 
                    result : result
                });
                
            }
        })
    }
}



exports.UpdateQuantity = (req ,res , next) => {
    const {cid, pid, qty} = req.body;

    if(!cid){
        return next(new ErrorResponse("Invalid Customer id", 400))
    }
    else{
        let sql = "UPDATE cart SET qty = " + qty + "  where cid = " + cid + "  and pid = " + pid ;
         
        connectDB.query(sql, [], async function(err, result, fields) {
            if(err) throw err;
            else{
              
                res.status(201).json({
                    products : result.length,
                    success :true, 
                    result : result
                });
                
            }
        })
    }
}



exports.deleteProduct = (req ,res , next) => {
    const {cid, pid} = req.body;

    if(!cid){
        return next(new ErrorResponse("Invalid Customer id", 400))
    }
    else{
        let sql = "DELETE FROM cart WHERE pid = " + pid + "  and cid =  " + cid ;
         
        connectDB.query(sql, [], async function(err, result, fields) {
            if(err) throw err;
            else{
              
                res.status(201).json({
                    products : result.length,
                    success :true, 
                    result : result
                });
                
            }
        })
    }
}
