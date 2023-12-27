import React from 'react'

const Homepage = () => {


  return (
    <div className='d-flex'>
        <aside style={{
         border:"2px solid red",
         height:"600px"
        }}
        >
           <div style={{
            border:"2px solid red",
            width:"100%",
          
           }}><img src="https://brihaspathi.com/img/logo/logo.png" alt=""
           style={{
            height:"70px",
            width:"150px"
           }} /></div>
        <div style={{
            paddingLeft:"19px",
            marginTop:"40px"
        }}>
           <div className="mb-5" >&nbsp;&nbsp;&nbsp;<span className=' rounded-2 btns'>content</span></div>
           <div className="mb-5"><span className='rounded-2  btns'>Add empolyee</span></div>
           <div className="mb-5"><span className='rounded-2  btns'>salary details</span></div>
           <div className="mb-5">&nbsp;&nbsp;<span className='rounded-2  btns'>Logout</span></div>
           
            
        </div>
        </aside>
        <nav>

        </nav>
        <div >
            <div style={{
                width:"1200px",
                border:"2px solid brown",
                height:"72px"
            }}>

            </div>
          
       <center>

       <table cellpadding={10}  border={"1px solid"} style={{
            border:"1px solid",
           }}>
            <tr>
                <td>Name</td>
                <td>Designation</td>
                <td>Salary</td>
            </tr>
            <tr>
                <td>Pavan kumar kolli</td>
                <td>Software Intern</td>
                <td>23400</td>
            </tr>
            <tr>
                <td>Nagendra Buridi</td>
                <td>Software Intern</td>
                <td>12000</td>
            </tr>
        </table>
       </center>
        </div>
    </div>
  )
}

export default Homepage