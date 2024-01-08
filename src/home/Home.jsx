import React,{useEffect, useRef, useState} from 'react'
import "./Home.css"
import{CiMenuBurger} from "react-icons/ci"
import {AiOutlineClose} from "react-icons/ai"
import {BsSun} from "react-icons/bs";
import {AiOutlineThunderbolt} from "react-icons/ai"
import {CiWarning} from "react-icons/ci"
import {MdAdd} from "react-icons/md"
import {RiSendPlane2Fill} from "react-icons/ri";
import {BsThreeDots} from"react-icons/bs";
import {FiLogOut} from "react-icons/fi"
import {AiFillSetting}  from"react-icons/ai"
import{HiOutlineExternalLink} from "react-icons/hi"
import Typist from 'react-typist-component';
import Cookies from "js-cookies"
import axios from 'axios';
import ReactDOM from 'react-dom';

function Home() {
    const Close = useRef(null);
    const Hide = useRef(null);
    const labelRefs = [useRef(null), useRef(null), useRef(null)];
    const [Show,SetShow] = useState(true);
    const [content,SetContent] = useState("");
    const [DropUp,SetDropUp] = useState(false);
    const DROPUP = useRef(null)
    const [pop,SetPop] = useState(false)
    const POPUP = useRef(null);
    const [Toogle,SetToggle] = useState(true);
    const [paragraphs, setParagraphs] = useState([]);
    const [showContent, setShowContent] = useState(false);
    const [getTheEmail,SetEmail] = useState('SomeRandomegmail@gmail.com')
    const [Respose,SetResponse] = useState('');
   

    const toggleContent = () => {
      setShowContent(!showContent);
    };


    useEffect(
      ()=>{
        const getted = Cookies.getItem('email')

        if(getted){
          SetEmail(getted)
        }
      
        window.addEventListener('change',()=>{
          if (window.screen.width >= 1024){
           Close.current.style.width = "20%";
           
       } 
       })
      },[window.screen.width])
     
    const HandleContent =(index)=>()=>{
       if(labelRefs[index].current){
        const labelContent = labelRefs[index].current.textContent ;
        const removeQuotes =  labelContent.replace(/["]/g, '')
        SetContent(removeQuotes);
        if(content.length !=0){
          document.getElementById('Send_btn').style.color='aquamarine'
 

        }
       }

    }

    const HandleDropUp =()=>{

      if(!DropUp){
          if(DROPUP.current)
          DROPUP.current.style.display = "block"
          SetDropUp(!DropUp)

      }else{
        DROPUP.current.style.display="none";
        SetDropUp(!DropUp)
      }
    }

    const handleInputChange = (event) => {
        SetContent(event.target.value);
      };
   
      function HandleClick() {
       

        if (!Show) {
          if (window.screen.width > 800 || window.screen.width < 900) {
            Close.current.style.width = "400px";
            Close.current.style.display = "inline-block"
            const closeIcons = document.getElementsByClassName("Close_Icon");
            for (let i = 0; i < closeIcons.length; i++) {
              closeIcons[i].style.display = "inline";
            }
            Hide.current.style.display = "none";
            SetShow(!Show);
          }
          if (window.screen.width <= 500) {
            Close.current.style.width = "300px";
            Close.current.style.display = "inline-block"
            const closeIcons = document.getElementsByClassName("Close_Icon");
            for (let i = 0; i < closeIcons.length; i++) {
              closeIcons[i].style.display = "inline";
            }
            Hide.current.style.display = "none";
            SetShow(!Show);
          }
        } else {
          Close.current.style.width = "0px";
          const closeIcons = document.getElementsByClassName("Close_Icon");
          for (let i = 0; i < closeIcons.length; i++) {
            closeIcons[i].style.display = "none";
          }
          Close.current.style.display = "none"
          Hide.current.style.display = "block";
          SetShow(!Show);
        }
      }
      
      function HandlePopUp(){
        if(!pop){
            
              POPUP.current.style.display="block"
              SetPop(!pop)
        }
            else{
              POPUP.current.style.display="none"
              SetPop(!pop)
            }
        

      }

      function Refresh(){
        window.location.reload()
      }
// =======================================================
     async function HandlePostRequest(){
           
        if(content.length === 0)
        SetToggle(true)
        if(content.length >2){
        SetToggle(false)
        // const options = {
        //   method: 'POST',
        //   url: 'https://open-ai21.p.rapidapi.com/conversationgpt35',
        //   headers: {
        //     'content-type': 'application/json',
        //     'X-RapidAPI-Key': '82144b873cmsh40e7aa099d55490p119b26jsnb797b7307290',
        //     'X-RapidAPI-Host': 'open-ai21.p.rapidapi.com'
        //   },
        //   data: {
        //     messages: [
        //       {
        //         role: 'user',
        //         content: content
        //       }
        //     ],
        //     web_access: false,
        //     stream: false
        //   }
        // };
        
        // try {
        //   const response = await axios.request(options);
        //   let GetResponse = response.data
        //   SetResponse(GetResponse);
        // } catch (error) {
        //   console.error(error);
        // }
        }

      }

      const appendParagraph = () => {
        
        const newParagraph = (
          <p key={paragraphs.length} className="paragraph">
            {content}
            <button className="removeButton" onClick={() => removeParagraph(paragraphs.length)}>
              X
            </button>
          </p>
        );
        setParagraphs([...paragraphs, newParagraph]);
      };
    
      const removeParagraph = (indexToRemove) => {
        const updatedParagraphs = paragraphs.filter((_, index) => index !== indexToRemove);
        setParagraphs(updatedParagraphs);
      };

      const appendPrompt = ()=>{
       
      }
    
// =========================================================

function RepeatableContent() {

  return (
    <div className="_____toggle_content_ai_____">
      <Typist typingDelay={30} cursor={<span className='cursor'>|</span>}>
        <p>Our server are busy</p>
        <br />
        <p> Development Team are still working on to resolve the issues</p>
        <br />
        <p>Let me tell you a joke : </p>
        <br />
        <p> A woman gets on a bus with her baby. The bus driver says: </p><br/> 
          <p>“Ugh, that’s the ugliest baby I’ve ever seen!” The woman walks to the rear of the bus and sits down, fuming. She says to a man next to her:</p>
           <br/>
           <p>
          “The driver just insulted me!” The man says:</p>
          <p> “You go up there and tell him off. Go on, I’ll hold your monkey for you.”</p>
        <br />

      </Typist>
      
    </div>
  );
}



  return (
    <>
    
<div className="Main-Container">
    <div className="pop_up_div" ref={POPUP}>
      <div className="Pop_up_Heading">
        <div className="POP_up_settings"  >
        <AiFillSetting/>Settings
        </div>
        <div className="POP_UP_Close" style={{cursor:'pointer'}} onClick={HandlePopUp}>
          <AiOutlineClose />
        </div>
      </div>
      <div className="Pop_Up_Body">
        <div style={{borderBottom:'1px solid white',display:'flex',alignItems:'center',justifyContent:'space-between',boxSizing:'border-box',paddingLeft:'20px',paddingRight:'20px',height:'80px'}}>
          <label style={{color:'white',fontSize:'25px'}} >Clear Chat</label>
          <button className='Clear_chat_btn' >Clear</button>
        </div>
        <div  style={{borderBottom:'1px solid white',display:'flex',alignItems:'center',justifyContent:'space-between',boxSizing:'border-box',paddingLeft:'20px',paddingRight:'20px',height:'80px'}}>
        <label style={{color:'white',fontSize:'25px'}}>Delete Account</label>
          <button className='Clear_chat_btn'>Delete</button>
        </div>
      </div>
    </div>
    <div className="Sub-Container">
            <div className="SideBar" ref={Close}  >    
                <div className="Close">
                   {
                    ((window.screen.width) <=1200) ? 
                    (<AiOutlineClose size={40} className='Close_Icon' onClick={HandleClick}  />):
                    (<>
                        <button className='button_display'> <MdAdd className='Plus'  size={30} onClick={Refresh}/>  New Chart</button>
                     </>)
                   }
                </div>           
                    <div className="History" id='targetDiv'>            
                            {paragraphs.map((paragraph, index) => (
                              <div key={index}>
                                {paragraph}
                              </div>
                            ))}
                    </div>
                    <div className="Logout">
                      <div className="SUB-LOGOUT" onClick={HandleDropUp}>
                        <div className="DROP-up" ref={DROPUP}>
                          <div className="HElp"> <HiOutlineExternalLink/> Help&FAQ</div>
                          <div className="Settings" onClick={HandlePopUp} > <AiFillSetting   />Settings</div>                 
                          <div className="res-logout"><FiLogOut/> Logout</div>
                        </div>
                      <div className="GET-EMAIL-FORM-DB">
                        <p className='GET-EMAIL'>{getTheEmail}</p>                     
                      </div>
                          <BsThreeDots className='THREEDOTS'  size={30}  />
                      </div>
                    </div>                   
             </div>
            <div className="AI-Content" ref={Hide} >
                     <div className="Navigation">
                        <CiMenuBurger size={40} className='Hamburger' onClick={HandleClick} /> 
                        <label className='Add'>+</label>
                    </div>
                    {/* -------------------------------------------------------------------------- */}
                    <>
                    {Toogle?(
                <div className="Toggle-Content"> 
                    <div className="Text">
                        <h1 className='H1'>ChatGpt</h1>
                        <div className="Body">
                                 <div className="Example">
                                        <div className="Exe">
                                            <BsSun/> Examples
                                        </div>
                                        <label ref={labelRefs[0]} onClick={HandleContent(0)} >"Explain quantum computing in simple terms"</label>
                                        <label ref={labelRefs[1]} onClick={HandleContent(1)}>"Got any creative ideas for a 10 year old’s birthday?"</label>
                                        <label ref={labelRefs[2]} onClick={HandleContent(2)} >"How do I make an HTTP request in Javascript?"</label>
                                 </div>
                                 <div className="Capabilites">
                                        <div className="Cap">
                                                <AiOutlineThunderbolt/> Capabilites
                                        </div>
                                         <label >Remembers what user said earlier in the conversation</label>
                                         <label >Allows user to provide follow-up corrections</label>
                                         <label style={{height:'60px'}} >Trained to decline inappropriate requests</label>
                                </div>
                                <div className="Limitations">
                                        <div className="Lim">
                                            <CiWarning/> Limitations
                                        </div>
                                        <label >May occasionally generate incorrect information</label>
                                        <label >May occasionally produce harmful instructions or biased content</label>
                                        <label >Limited knowledge of world and events after 2021</label>
                                    </div>
                            </div>
                    </div>
                </div>
                    ):(
                      <div >
                         <>
                          {showContent && <RepeatableContent/> }
                          </>
                        </div>
                      )
                  }
                </>
                {/* ================================================= */}
                <div className="Footer" style={{position:'fixed',bottom:'0%'}}>
                    <div className="Prompt">
                        <input type="text" className='Text-Prompt' placeholder='send a message' value={content} onChange={handleInputChange} />
                        <RiSendPlane2Fill color='white' size={30} style={{marginRight:'20px',cursor:'pointer'}} id='Send_btn'
                         onClick={
                          ()=>{
                            HandlePostRequest();
                            appendParagraph();
                             SetContent(content);
                             toggleContent();
                             appendPrompt();
                          }
                            }
                              />
                    </div>
                </div>
            </div>
        </div>
    </div>


    
    </>
  )
}

export default Home;