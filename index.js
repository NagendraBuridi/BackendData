import con from "./db/db.js";
import express, { query } from "express";
import cors from "cors";

const app = express();
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(express.json());

app.listen(5000, () => {
  console.log("server connected");
});
//Getting details from the end user and stroing in the signup table
app.post("/signup", async (req, res) => {
  const sql =
    "INSERT INTO `signup`(email,pwd,uname,phone,address,file) values (?,?,?,?,?,?);";
  con.query(
    sql,
    [
      req.body.email,
      req.body.pwd,
      req.body.uname,
      req.body.phno,
      req.body.address,
      req.body.file,
    ],
    (err, result) => {
      if (err) return res.status(500).json(err);
      res.status(200).json(result);
    }
  );
});

//validating login through the email
app.post("/login", async (req, res) => {
  const { email, pwd, uname, phone, address, file } = req.body;

  const exitUser = "SELECT * From `signup` WHERE email = ?";
  con.query(exitUser, [req.body.email], (err, result) => {
    if (err) return res.status(500).json(err);
    if (result.length > 0) {
      // console.log(result[0]);
      if (result[0]?.pwd === pwd) {
        res.status(200).json({
          email: result[0]?.email,
          uname: result[0]?.uname,
          phone: result[0]?.phone,
          address: result[0]?.address,
          file: result[0]?.file,
        });
      } else {
        res.status(500).json({ message: "password not correct" });
      }
    } else {
      res.status(500).json({ message: "user does't exit" });
    }
  });
});
//inserting values into the visitor list table
app.post("/addvisitor", async (req, res) => {
  const sql =
    "INSERT INTO `visitorlist`(email,gender,name,age,phone,rov,dov,toom,img) values(?,?,?,?,?,?,?,?,?);";
  con.query(
    sql,
    [
      req.body.email,
      req.body.gender,
      req.body.name,
      req.body.age,
      req.body.phone,
      req.body.rov,
      req.body.dov,
      req.body.toom,
      req.body.img,
    ],
    (err, result) => {
      if (err) return res.status(500).json(err);
      res.status(200).json(result);
    }
  );
});

//updating details

app.post("/updatevisitor", async (req, res) => {
  const { email } = req.body;
  const exist = "select * from visitorlist where email=?";
  con.query(exist, [req.body.email], (err, result) => {
    if (err) return res.status(500).json({ message: "user doesnt exist" });
    if (result.length > 0) {
      const updatesql =
        "UPDATE `visitorlist` SET email=?,gender=?,name=?,age=?,phone=?,rov=?,dov=?,toom=?,img=? WHERE email=?;";
      con.query(
        updatesql,
        [
          req.body.email,
          req.body.gender,
          req.body.name,
          req.body.age,
          req.body.phone,
          req.body.rov,
          req.body.dov,
          req.body.toom,
          req.body.img,
          req.body.email,
        ],
        (err, result) => {
          if (err) return err.status(500).json({ message: "error occured" });
          res.status(200).json({ message: "user details updsted successful" });
        }
      );
      console.log(result[0]);
    }
  });
});

//getting results and sending those results to the front-end part
app.get("/getdetails", async (req, res) => {
  const sql = "SELECT * FROM `visitorlist`;";
  con.query(sql, (err, result) => {
    if (err) return err.status(500).json({ message: "invalid query" });
    res.status(200).json(result);
  });
});

app.delete("/deletedata/:email", async (req, res) => {
  // const { email } = req.body;
  const { email } = req.params;
  const existuserDel = "select * from visitorlist where email=?;";
  con.query(existuserDel, [email], (err, result) => {
    if (err) return err.status(500).json({ message: "user doesnt exist" });
    // console.log(result.length+6);
    if (result.length > 0) {
      const sql = "Delete from visitorlist where email=?;";
      con.query(sql, [email], (err, result) => {
        if (err) return err.status(500).json(err);
        res.status(200).json(result);
        // console.log("hloo");
      });
    }
  });
});

//loading data from bttable to front-end side
app.get("/getemp", async (req, res) => {
  const sql = "select * from btemp";
  con.query(sql, (err, result) => {
    if (err) return err.status(500).json(err);
    res.status(200).json(result);
  });
});

//adding employees to the btemp table...
app.post("/addemp", async (req, res) => {
  const sql =
    "INSERT INTO `btemp`(id,email,gender,name,phone,salary,dept) values(?,?,?,?,?,?,?);";
  con.query(
    sql,
    [
      req.body.id,
      req.body.email,
      req.body.gender,
      req.body.name,
      req.body.phone,
      req.body.salary,
      req.body.dept,
    ],
    (err, result) => {
      if (err) return res.status(500).json(err);
      res.status(200).json(result);
    }
  );
});

//Updating emp table collecting data from frint-end side
app.post("/updateemp", async (req, res) => {
  const { id } = req.body;
  const exist = "select * from btemp where id=?";
  con.query(exist, [req.body.id], (err, result) => {
    if (err) return res.status(500).json({ message: "user doesnt exist" });
    if (result.length > 0) {
      const updatesql =
        "UPDATE `btemp` SET email=?,gender=?,name=?,id=?,phone=?,salary=?,dept=? WHERE id=?;";
      con.query(
        updatesql,
        [
          req.body.email,
          req.body.gender,
          req.body.name,
          req.body.id,
          req.body.phone,
          req.body.salary,
          req.body.dept,
          req.body.id,
        ],
        (err, result) => {
          if (err) return err.status(500).json({ message: "error occured" });
          res.status(200).json({ message: "user details updated successful" });
        }
      );
      console.log(result[0]);
    }
  });
});


//Removing record from btemp

app.delete('/deleteemp/:id',async (req,res)=>{
  const{id}=req.params
  const existone="select * from btemp where id=?";
  con.query(existone,[id],(err,result)=>{
    if(err)return res.status(500).json({message:"user doesnt exist"})
    if(result.length>0){
      const sql="delete from btemp where id=?";
      con.query(sql,[id],(err,result)=>{
        if(err) return res.status(500).json(err)
        res.status(200).json({message:"Empolyee removed success"})
      })
    }
  })
})