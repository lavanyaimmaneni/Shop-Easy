const ErrorResponse = require('../utils/errorResponse')
const connectDB = require('../config/db')
const url = require('url');

exports.search = (req ,res , next) => {


        const query = url.parse(req.url,true).query

        let where = 0;

        let min = "0";
        let max = "10000";
        let c = []
        let b = []
        let q = ""

        let sql = ""


        if(query.q){
            q = query.q
            if(q === "all"){
                    sql += "select * from products where name like '%' " 
            }
            else{
                    
                    sql += "select * from products where name like '%" + q + "%'" + " or category like '%" + q + "%'" + " or brand like '%" + q + "%'" 
            }
        }


        function Brands(item, index)
        {
            console.log(item);
            sql += "brand = '" + item + "' " + "and " 
        }


        if(query.b){
            b = query.b
            if(typeof b !== "object"){
                b = []
                b.push(query.b)
            }
            sql += " and (  "      
            b.forEach(Brands);
            sql = sql.slice(0, -4)

            sql += ")"      

        }
        console.log(b)


        function Categories(item, index)
        {
            console.log(item);
            sql += "category  = '" + item + "' " + "and " 

        }
        
        
        if(query.c){
            c = query.c
            if(typeof c !== "object"){
                c = []
                c.push(query.c)
            }

            sql += " and (  "      
            c.forEach(Categories);
            sql = sql.slice(0, -4)

            sql += ")"  

        }
        console.log(c)

        if(query.min){
            min = query.min
            if(query.max){
                max  = query.max
            }
            sql += " and price between  " + min + " and " + max + " "
            
        } 
        console.log(min)

        

        

        console.log(max)
        console.log(sql)

        let sql2 = "select brand, category from products"
        let result1 ;

        connectDB.query(sql2,[], function(err, result, fields) {
            if(err){
                return next(err);
            }
            else{
                result1 = result;
            }
        })


        connectDB.query(sql,[], function(err, result, fields) {
            if(err){
                return next(err);
            }
            else{
                res.status(201).json({
                    success :true, 
                    result1 : result1,
                    result : result
                });
            }
        })

    

        // let sql = 'SELECT cid,password FROM customer WHERE mobileno = ?'
        
        // connectDB.query(sql, [mobileno], async function(err, result, fields) {
        //     if(err) throw err;
        //     if(result.length == 0)
        //     {
        //         return next(new ErrorResponse("User Not Found", 404));
        //     }
        //     else{
        //         encryptedPwd = result[0].password;
        //         const matchPasswords = await bcrypt.compare( password, encryptedPwd);
        //         if(matchPasswords){
        //             let token = jwt.sign({cid : result[0].cid}, process.env.JWT_SECRET, {});
        //             res.status(201).json({
        //                 success :true, 
        //                 token : token
        //             });
        //         }
        //     }
        // })
    
}

