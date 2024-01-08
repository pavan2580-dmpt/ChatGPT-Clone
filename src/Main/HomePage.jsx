import React,{useRef, useState} from 'react'
import "./homePage.css"
import{CiMenuBurger} from "react-icons/ci"
import {AiOutlineClose} from "react-icons/ai"
import {BsSun} from "react-icons/bs";
import {AiOutlineThunderbolt} from "react-icons/ai"
import {CiWarning} from "react-icons/ci"
function HomePage() {
   
    const SHOW = useRef(null);
    const [show,SetShow] = useState("false");
    const fun = ()=>{
        let x =1;
    }
   
   const handleChange = ()=>{
    if(!show){
        if(SHOW.current)
               if(window.screen.width >=600 && window.screen.width<=1000)
               {
                SHOW.current.style.width = "400px";
                SetShow(!show)
               }
               else{
                SHOW.current.style.width = "80%";
                SetShow(!show)
               }
    }
    else{
        if(SHOW.current.style.width >= 1024){
            SetShow(true)
        }
        SHOW.current.style.width = "0%";
        SetShow(!show)
    }
}
  return (
    <>
    <div className="main-container">

        <div className="navbar">    {/*navbar*/}
            <CiMenuBurger size={30} color='white' onClick={ handleChange } style={{marginLeft:'10px'}} className='ham'/> 
            <label className='new'>+</label>
        </div>

        <div className="sub-container">


        <div className="sidemenu" ref={SHOW} >    
            <div className="close">
                <AiOutlineClose size={40} className='close_icon' onClick={handleChange} />
            </div>
            
                <div className="history"></div>
                <div className="logout"></div>
        </div>


        
        <div className="Ai-content">
            <div className="toggle-content">
                        
                            <h1>ChatGPT</h1>

                            <div className="body">
                                 <div className="example">
                                        <div className="exe">
                                            <BsSun/> Examples
                                        </div>
                                        <label >"Explain quantum computing in simple terms"</label>
                                        <label >"Got any creative ideas for a 10 year old’s birthday?"</label>
                                        <label >"How do I make an HTTP request in Javascript?"</label>
                                 </div>
                                 <div className="capabilites">
                                        <div className="cap">
                                                <AiOutlineThunderbolt/> Capabilites
                                        </div>
                                         <label >Remembers what user said earlier in the conversation</label>
                                         <label >Allows user to provide follow-up corrections</label>
                                         <label >Trained to decline inappropriate requests</label>
                                </div>
                                <div className="limitations">
                                        <div className="lim">
                                            <CiWarning/> Limitations
                                        </div>
                                        <label >May occasionally generate incorrect information</label>
                                        <label >May occasionally produce harmful instructions or biased content</label>
                                        <label >Limited knowledge of world and events after 2021</label>
                                    </div>
                            </div>
                     </div>


                            <div className="footer"> </div>


             </div>
        </div>
       {/* toggle End              */}
</div>
    
    </>
  )
}

export default HomePage;





