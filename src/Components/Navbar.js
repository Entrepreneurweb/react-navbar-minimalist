import React, { useEffect } from 'react'
import { useState } from 'react'
import image from "../Images/logo192.png"
 
/* COPY RIGHT EXAUCE TCHOUAFENE YANBE FREELANCE WEB DESIGNER telegram +905539423359  */

export default function Navbar() {

    const[size, setsize]=useState(window.innerWidth);
    const[ontoggle, setontoggle]=useState(1)
    const[togglerOpen, settogglerOpen]=useState(0);
    const[togglerDisplay, settogglerDisplay]=useState("flex")
/* COPY RIGHT EXAUCE TCHOUAFENE YANBE FREELANCE WEB DESIGNER telegram +905539423359  */
    useEffect(()=>{
       function resize(){
        setsize(window.innerWidth)
        if(  window.innerWidth <800 ){
            setontoggle(1);
        }else{
            setontoggle(-1)
        }
       }       
      /* COPY RIGHT EXAUCE TCHOUAFENE YANBE FREELANCE WEB DESIGNER telegram +905539423359  */
resize();
       window.addEventListener('resize', resize);
        return ()=>{
            window.removeEventListener('resize', resize );
        }          
    }, [])

    /* COPY RIGHT EXAUCE TCHOUAFENE YANBE FREELANCE WEB DESIGNER telegram +905539423359  */
    
    const elementshorizontal = <ul style={{ listStyle:"none", display:`${togglerDisplay} `
    , flexDirection:"row" , justifyContent:"space-between", margin:"10px",backgroundColor: "#34495E",}} > <li>MAIN PAGE</li> 
    <li>ABOUT US</li> 
    <li>CONTACT</li> 
     </ul>

const elementsvertical = (
    <div style={{ position: 'absolute',
    top: -20, 
    right: -50,
    height:"100%",
    /* COPY RIGHT EXAUCE TCHOUAFENE YANBE FREELANCE WEB DESIGNER telegram +905539423359  */
    }}>
      {togglerOpen ? (
        <ul
          style={{

            listStyle: 'none',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            margin: '50px',
            backgroundColor: '#34495E',
            gap:"20px",
            padding:"100px",
            borderRadius:"20px"
          }}
        >
            
          <li>MAIN PAGE</li>
          <li>ABOUT US</li>
          <li>CONTACT</li>
          <li style={{ textAlign:"center" }} > <h1 onClick={()=>{
            settogglerOpen(0)
          }} >X</h1> </li>
          
        </ul>
      ) : (
        <div style={{ position: 'absolute',
        top: 0, 
        right: 100,}}><h1 onClick={()=>{ settogglerOpen(1) }} >X</h1></div>
      )}
    </div>
  );
  /* COPY RIGHT EXAUCE TCHOUAFENE YANBE FREELANCE WEB DESIGNER telegram +905539423359  */
  return (
    <div style={{ display: "flex", justifyContent: "center", width: "100%", backgroundColor: "#34495E", height: "50px", borderRadius:"20px" }}>
    <div style={{ display: "flex", width: "80%", alignItems: "center", height: "100%" }}>
      <div style={{ width:"20%", margin:"5%", display:"flex", alignItems:"center" }}  > <img src={image} style={{ width:"50px" }} /> <div>NAVBAR</div> </div>
      <div style={{ width:"70%" }} > { size<750? elementsvertical :elementshorizontal }  </div>
    </div>
  </div>
  )
  /* COPY RIGHT EXAUCE TCHOUAFENE YANBE FREELANCE WEB DESIGNER telegram +905539423359  */
}
