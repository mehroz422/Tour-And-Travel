import React from "react";
import FormPart from './FormPart';
import Sidebar from './Sidebar';
import { Link } from "react-router-dom";
import Si1 from "../src/assets/Si1.jpg";



function SignUp() {

    return(

        <div id="SignUp" >
        <Link to="/sign-up">  </Link>

       <div style={{display:"flex",flexDirection:"row"}}>

           <img src={Si1} style={{marginTop:"40px", marginLeft:"50px",borderBottomRightRadius:"500px", width:"60%", height:"630px"}}/>

        <div style={{position: "absolute", left: "800px", top: "125px", width:"400px"}}>
            <FormPart/>
        </div>
         
       </div>
       </div> 

    );
}

export default SignUp;