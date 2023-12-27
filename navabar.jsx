import { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Body from './body'
import { useEffect } from "react";

const Navbar = () => {
  const [isShowMore, setIsShowMore] = useState(false);
  const [elem,setElemenet]=useState("")
  const values=()=>{
      // document.body.children[2].innerHTML+=`${elem}`;
      console.log(elem);
  }
 
  const transition = { type: "spring", duration: 3 };

  const toggleReadMoreLess = () => {
    setIsShowMore(!isShowMore);
  };
  return ( 
    // <>
    //   <div>
    //     <div className="login-background-div">
    //       <div className="login-maindiv-container">
    //         <div>
    //           <motion.img
    //             initial={{ left: "-100px" }}
    //             whileInView={{ left: "0px" }}
    //             transition={transition} 
    //             style={{
    //               width: "150px",
    //               marginLeft: "20px",
    //               position: "relative",
    //             }}
    //             src="https://brihaspathi.com/img/logo/logo.png"
    //             alt=""
    //           />
    //         </div>
    //         <motion.div
    //           className="login-header-container"
    //           initial={{ left: "-450px" }}
    //           whileInView={{ left: "0px" }}
    //           transition={{ ...transition, duration: 2 }}
    //           style={{ position: "relative" }}
    //         >
    //           {/* <Link
    //             style={{ textDecoration: "none", color: "black" }}
    //             to="/home"
    //           > */}
    //            <span style={{
    //              fontFamily:"sans-serif",
    //              fontWeight:500
    //            }}>Home</span>
    //           {/* </Link> */}
    //           <span>About Us</span>
    //           <span>Freatures</span>
    //           {/* <span>Pricing</span> */}
    //           <div className="header__login__and__ul">
    //             <button>
    //               <Link
    //                 style={{
    //                   textDecoration: "none",
    //                   color: "white",
    //                   fontFamily: "Arial",
    //                   fontWeight: "600",
    //                 }}
    //                 to="/Login"
    //               >
    //                 Log In
    //               </Link>
    //             </button>
    //             <button>
    //               <Link
    //                 style={{
    //                   textDecoration: "none",
    //                   color: "white",
    //                   fontFamily: "Arial",
    //                   fontWeight: "600",
    //                 }}
    //                 to="/Signup"
    //               >
    //                 SIgn Up
    //               </Link>
    //             </button>
    //           </div>
    //         </motion.div>
    //       </div>

    //       <div className="login-middle-div">
    //         <div className="login-homeleftside-con">
    //           <motion.h1
    //             initial={{ left: "-500px" }}
    //             whileInView={{ left: "0px" }}
    //             transition={transition}
    //             id="heading"
    //             style={{
    //               width: "600px",
    //               fontSize: "50px",
    //               position: "relative",
    //             }}
    //           >
    //             Make your workplace Safe &Secure
    //           </motion.h1>
    //           <motion.p
    //             initial={{ left: "-450px" }}
    //             whileInView={{ left: "0px" }}
    //             transition={{ ...transition, duration: 5 }}
    //             style={{ position: "relative" }}
    //           >
    //             The safety of your employees and the enivornment in which they
    //             operate is paramount.The future of modern offices will be
    //             check-ins.
    //           </motion.p>
    //           {isShowMore && (
    //             <p>
    //               Employees and guests can check in safely with the Visitor
    //               Management System,Lowering the risk of infection
    //             </p>
    //           )}

    //           <button
    //             className="loginvisitor-read-more-less"
    //             onClick={toggleReadMoreLess}
    //           >
    //             {isShowMore ? "Read Less..." : "Read More...  "}
    //           </button>
    //         </div>
    //         <div
    //           style={{
    //             width: "45%",
    //             // height: "350px",
    //           }}
    //         >
    //           <motion.img
    //             initial={{ left: "-500px" }}
    //             whileInView={{ left: "0px" }}
    //             transition={{ ...transition, duration: 5 }}
    //             style={{
    //               width: "100%",
    //               backgroundImage: "cover",
    //               borderRadius: "15px 50px",
    //               backgroundSize: "cover",
    //               position: "relative",
    //             }}
    //             src="https://cdn.pixabay.com/photo/2017/04/23/19/30/earth-2254769_640.jpg"
    //             alt=""
    //           />
              
    //         </div>
             
    //       </div>
    //          <center><h3>OUR SERVICES</h3></center>
    //            <div>
    //             <Body/>
    //           </div>
    //     </div>
    //   </div>
   <>
   

   <textarea name="" id="" cols="30" rows="10" onChange={(e)=>{
       setElemenet(e.target.value)
   }}  ></textarea> <br />
   <textarea name="" id="" cols="30" rows="10">{values()}</textarea>
   
   
   
    </>
  );
};

export default Navbar;
