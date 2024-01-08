import React, { useEffect, useRef, useState } from 'react';
import './Register2.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Register2() {
const bb = useRef(null);
const b1 = useRef(null);
const b2 = useRef(null);

  const [p1, setp1] = useState({ x: 180, y: 50 });
  const [p2, setp2] = useState({ x: 200, y: 150 });
  const [p3, setp3] = useState({ x: 50, y: 120 });
  const [ip1,Setip1] = useState('')
  const [ip2,Setip2] = useState('')
  const [ip3,Setip3] = useState('')
  const [ip4,Setip4] = useState('')
 function HandleOtp(e){
    e.preventDefault();
  if(ip1.length === 0 || ip2.length === 0 || ip3.length === 0 || ip4.length === 0  ){
    toast("Enter valid OTP")

  }else{
    window.location.href = "/User-Details"
  }
 }
useEffect(

  ()=>{
    if(window.screen.width <=500){
    
        bb.current.style.width= '100px';
        bb.current.style.height= '100px';
        bb.current.style.background= 'green';
        b1.current.style.width= '100px';
        b1.current.style.height= '100px';
        b2.current.style.width= '100px';
        b2.current.style.height= '100px';
      }
      else{
        bb.current.style.width= '300px';
        bb.current.style.height= '300px';
        bb.current.style.background= 'rgb(196, 252, 196)';
        b1.current.style.width= '300px';
        b1.current.style.height= '300px';
        b2.current.style.width= '300px';
        b2.current.style.height= '300px';
      }
  },[window.screen.width]
)




  useEffect(() => {
    const updatePosition = () => {
  
      if(window.screen.width<=600){
        const maxX = (window.screen.width)/2;
        const maxY = (window.screen.height)/2;
        const newX = Math.random() * maxX;
        const newY = Math.random() * maxY;
        console.log(newX)
        setp1({ x: newX, y: newY });
  
        const newa = Math.random() * maxX;
        const newb = Math.random() * maxY;
        setp2({ x: newa, y: newb });
  
        const newc = Math.random() * maxX;
        const newd = Math.random() * maxY;
        setp3({ x: newc, y: newd });
      }else{
          
      const maxX = 1000;
      const maxY = 800;
      const newX = Math.random() * maxX;
      const newY = Math.random() * maxY;
      console.log(newX)
      setp1({ x: newX, y: newY });

      const newa = Math.random() * maxX;
      const newb = Math.random() * maxY;
      setp2({ x: newa, y: newb });

      const newc = Math.random() * maxX;
      const newd = Math.random() * maxY;
      setp3({ x: newc, y: newd });
      }

    };

    const intervalId = setInterval(updatePosition, 3000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <div className="body-regis">
        <ToastContainer/>
        <div className="blob" ref={bb} style={{ top: p1.y, left: p1.x }}></div>
        <div className="blob1" ref={b1} style={{ top: p2.y, left: p2.x }}></div>
        <div className="blob2" ref={b2} style={{ top: p3.y, left: p3.x }}></div>

   <div className="Register-container">
<div className="logo">
<svg viewBox="140 140 520 520" xmlns="http://www.w3.org/2000/svg" width={"50px"}>
  <path d="m617.24 354a126.36 126.36 0 0 0 -10.86-103.79 127.8 127.8 0 0 0 
-137.65-61.32 126.36 126.36 0 0 0 -95.31-42.49 127.81 127.81 0 0 0 -121.92 88.49
 126.4 126.4 0 0 0 -84.5 61.3 127.82 127.82 0 0 0 15.72 149.86 126.36 126.36 0 0 0
  10.86 103.79 127.81 127.81 0 0 0 137.65 61.32 126.36 126.36 0 0 0 95.31 42.49 127.81 127.81 
  0 0 0 121.96-88.54 126.4 126.4 0 0 0 84.5-61.3 127.82 127.82 0 0 0 -15.76-149.81zm-190.66 266.49a94.79 94.79 0 
  0 1 -60.85-22c.77-.42 2.12-1.16 3-1.7l101-58.34a16.42 16.42 0 0 0 8.3-14.37v-142.39l42.69 24.65a1.52 1.52 0 0 
  1 .83 1.17v117.92a95.18 95.18 0 0 1 -94.97 95.06zm-204.24-87.23a94.74 94.74 0 0 1 -11.34-63.7c.75.45 2.06 1.25 
  3 1.79l101 58.34a16.44 16.44 0 0 0 16.59 0l123.31-71.2v49.3a1.53 1.53 0 0 1 -.61 1.31l-102.1 58.95a95.16 95.16 0 
  0 1 -129.85-34.79zm-26.57-220.49a94.71 94.71 0 0 1 49.48-41.68c0 .87-.05 2.41-.05 3.48v116.68a16.41 16.41 0 0
   0 8.29 14.36l123.31 71.19-42.69 24.65a1.53 1.53 0 0 1 -1.44.13l-102.11-59a95.16 95.16 0 0 1 -34.79-129.81zm350.74
    81.62-123.31-71.2 42.69-24.64a1.53 1.53 0 0 1 1.44-.13l102.11 58.95a95.08 95.08 0 0 1 -14.69 171.55c0-.88 0-2.42 
    0-3.49v-116.68a16.4 16.4 0 0 0 -8.24-14.36zm42.49-63.95c-.75-.46-2.06-1.25-3-1.79l-101-58.34a16.46 16.46 0 0
     0 -16.59 0l-123.31 71.2v-49.3a1.53 1.53 0 0 1 .61-1.31l102.1-58.9a95.07 95.07 0 0 1 141.19 98.44zm-267.11
      87.87-42.7-24.65a1.52 1.52 0 0 1 -.83-1.17v-117.92a95.07 95.07 0 0 1 155.9-73c-.77.42-2.11 1.16-3 1.7l-101 
      58.34a16.41 16.41 0 0 0 -8.3 14.36zm23.19-50 54.92-31.72 54.92 31.7v63.42l-54.92 31.7-54.92-31.7z"></path></svg>
</div>
<div className="banner">
  <h1 className='HHhh1'>Create your account</h1>
  <p>Note that phone verification may be required gor singup.
    Your number will only be used to verify your identity for security purpose.

  </p>
</div>
<form class="form">
     <div className="TITTLE">OTP</div>
      <div className="TITTLE">Verification Code</div>
       <p className="message">We have sent a verification code to your Email</p>
        <div className="inputs"> 
        <input id="input1" type="text" maxlength="1" onChange={(e)=>Setip1(e.target.value)}/> 
        <input id="input2" type="text" maxlength="1" onChange={(e)=>Setip2(e.target.value)}/> 
        <input id="input3" type="text" maxlength="1" onChange={(e)=>Setip3(e.target.value)}/>
         <input id="input4" type="text" maxlength="1" onChange={(e)=>Setip4(e.target.value)}/>
          </div>
           <button class="action" type='submit' onClick={HandleOtp}>verify me</button>
 </form>

</div>
</div>


  
    </>
  )
}

export default Register2