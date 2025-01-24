const ErrorResponse = require('../utils/errorResponse')
const crypto = require('crypto');
const connectDB = require('../config/db')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NTI5OTU1MTZ9.0ouTVb33d3ta9NQoPl64HIxCs1EGX_KEzV6p0TwYoV0


exports.login = (req ,res , next) => {
    
    const {mobileno, password} = req.body;

    if(!mobileno || !password){
        return next(new ErrorResponse("Please provide Mobile Number and Password", 400))
    }
    else{
        let sql = 'SELECT cid,password FROM customer WHERE mobileno = ?'
        
        connectDB.query(sql, [mobileno], async function(err, result, fields) {
            if(err) throw err;
            if(result.length == 0)
            {
                return next(new ErrorResponse("User Not Found", 404));
            }
            else{
                encryptedPwd = result[0].password;
                const matchPasswords = await bcrypt.compare( password, encryptedPwd);
                if(matchPasswords){
                    let token = jwt.sign({cid : result[0].cid}, process.env.JWT_SECRET, {});
                    res.status(201).json({
                        success :true, 
                        token : token
                    });
                }
            }
        })
    }
}


exports.register = (req ,res , next) => {
    
    const {fname, lname, mobileno, password} = req.body;

    if(!mobileno || !password){
        return next(new ErrorResponse("Please provide Mobile Number and Password", 400))
    }
    else{


        let sql1 = 'SELECT count(*) as total FROM customer'
        connectDB.query(sql1, async function(err, result, fields) {
            if(err) {
                return next(err);
            }
            let cid = result[0].total + 1 ;
            let token = jwt.sign({cid : cid}, process.env.JWT_SECRET, {});

            const salt = await bcrypt.genSalt(10);
            const encryptedPwd = await bcrypt.hash(password,salt);

            let sql2 = 'insert into customer (cid , fname, lname, email, mobileno, password, walletbalance) values (?,?,?,?,?,?,?)';
            connectDB.query(sql2,[cid, fname, lname, '' ,mobileno,encryptedPwd, 0], function(err, result, fields) {
                if(err){
                    return next(err);
                }
                else{
                    res.status(201).json({
                        success :true, 
                        token : token
                    });
                }
            })

        })

        
    }
}