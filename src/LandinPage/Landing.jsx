import React from 'react'
import "./Landing.css"
import image from "./assets/Illustration.png"
import image4 from "./assets/image4.png"
import {GrAppsRounded} from "react-icons/gr"
import {BiLogoGoogle} from "react-icons/bi"
import {BiLogoSlack} from "react-icons/bi"
import {FaAtlassian} from "react-icons/fa"
import {FaDropbox} from "react-icons/fa"
import {SiShopify} from "react-icons/si"
import { Link } from 'react-router-dom'
function Landing() {
  return (
    <>
    <div className="landing_container_page">
      <div className="landing_page_navbar">
       <nav className='landing_nav_bar_elements'> 
       <label >Home</label>
        <label >What is GPT?</label>
        <label >Open AI</label>
        <label >Case Studies </label></nav>
        <div className="landing_page_btns">
          <button className='landing_signin'>Sign In</button>
          <button className='landing_signin'>Sign Up</button>
        </div>
      </div>

    <div className="landing_page_hero_section">
      <div className="landing_page_text_div">
        <h1 className='landing_h1'>
        Let’s Build Something
        amazing with GPT-3
        OpenAI
        </h1>
        <p className='landing_para'>
        Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.
        </p>
        <Link to={'/login'}>
        <button className='landing_page_getstarted'>Get Started</button>
        </Link>
      </div>
      <div className="landing_page_image_div">
      <img src={image} alt='image' />
      </div>

    </div>

    <div className="companies_using_chapgpt">
      <label style={{display:'flex',alignItems:'center'}}><BiLogoGoogle/>Google</label>
      <label style={{display:'flex',alignItems:'center'}}><BiLogoSlack/> Slack</label>
      <label style={{display:'flex',alignItems:'center'}}> <FaAtlassian/> Atlassian</label>
      <label style={{display:'flex',alignItems:'center'}}> <FaDropbox/> Dropbox</label>
      <label style={{display:'flex',alignItems:'center'}}> <SiShopify/> shopify</label>
    </div>


    <div className="landing_page_aboutit_txtx">
      <div className="landing_page_about">
        <h1 style={{width:'600px'}}> what is GPT</h1>
        <p style={{fontSize:'19px'}}>We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.</p>
      </div>

      <div className="landing_about_gradient">
        <h1 style={{width:'600px',textAlign:'left'}}>The possibilities are beyond your imagination</h1>
        <p>Explore The Library </p>
      </div>

      <div className="landing_page_aboutit_cards_div">
        <div className="landing_page_card">
          <div className='landing_card_gradient'>.</div>
          <h1>Chat bots</h1>
          <p>We so opinion friends me message as 
            delight. Whole front do of plate heard 
            oh ought. </p>
        </div>


        <div className="landing_page_card">
          
        <div className='landing_card_gradient' >.</div>
          <h1>Knowledgebase</h1>
          <p>At jointure ladyship an insisted so 
            humanity he. Friendly bachelor entrance 
            to on by. As put impossible own 
            apartments b </p>

          </div>



          <div className="landing_page_card">
          <div className='landing_card_gradient'>.</div>
          <h1>Education</h1>
          <p>At jointure ladyship an insisted 
            so humanity he. Friendly bachelor entrance to on by.
             As put impossible own apartments b</p>
          </div>
      </div>

    </div>




    <div className="landing_page_future_data">
      <div className="landing_text">
        <h1>The Future is Now and You Just Need To Realize It. 
          Step into Future Today & Make it Happen.</h1>
        <p>Request Early Access to Get Started</p>
      </div>


      <div className="landing_data_details_div">
        <div className="landing_details_data">
          <h1>Improve end distrusts instantly</h1>
          <p>From they fine john he give of rich he. 
            They age and draw mrs like. 
            Improving end distrusts may instantly was 
            household applauded.</p>
        </div>


        <div className="landing_details_data">
          <h1>Improve end distrusts instantly</h1>
          <p>From they fine john he give of rich he. 
            They age and draw mrs like. 
            Improving end distrusts may instantly was 
            household applauded.</p>
        </div>

        <div className="landing_details_data">
          <h1>Improve end distrusts instantly</h1>
          <p>From they fine john he give of rich he. 
            They age and draw mrs like. 
            Improving end distrusts may instantly was 
            household applauded.</p>
        </div>


        <div className="landing_details_data">
          <h1>Improve end distrusts instantly</h1>
          <p>From they fine john he give of rich he. 
            They age and draw mrs like. 
            Improving end distrusts may instantly was 
            household applauded.</p>
        </div>
      
      </div>

    </div>
   



{/* ----------------------------------------------- */}


<div className="landing_page_middile_image_content">
  <div className="landing_page_frame"></div>
  <div className="landing_middle_image">
    <label className='my_apps'> <GrAppsRounded size={30} />My Apps</label>
  <img src={image4} alt="image"  style={{width:'400px',position:'relative',bottom:'-40px',left:'20px'}}/>
    
  </div>


    <div className="landing_page_image_content">
      <p className='landing_page_p'>Request Early Access to Get Started</p>
      <h1 className='landing_page_h1'>The possibilities are beyond your imagination</h1>
      <p className='landing_page_p1'>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
      <p className='landing_page_p2'>Request Early Access to Get Started</p>

    </div>
</div>


      <div className="landing_page_bar_gradient">
        <div className="landing_page_side1">
          <p>Request Early Access to Get Started</p>
          <h1 style={{color:'black'}}>Register today & start exploring the endless possiblities.</h1>
        </div>
        <div>
        <button className='landing_page_buuttoon'>Get Started</button>
        </div>
      </div>





<footer className='landing_page_footer'>
  <div className="footer_part1">
        <h1>  Do you want to step in to the future before others
</h1>  
</div>

<div className="footer_part3">
  <button className='footer_button_part'>Request Early Access</button>
</div>
  <div className="footer_part2">

    <div className="footer_gpt ">
      <h1>Chat GPT</h1>
      <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
    </div>
    <div className="footer_link footer_cards">
      <h2 >Links</h2>
      <label >Overons</label>
      <label >Social Media</label>
      <label >Counters</label>
      <label >Contact</label>
    </div>
    <div className="footer_company footer_cards">
      <h2>Company</h2>
      <label>Terms & Conditions</label>
      <label>Privacy Policy</label>
      <label>Contact</label>
    </div>
    <div className="footer_get_in_touch footer_cards">
      <h2>Get in touch</h2>
      <label >Crechterwoord K12</label>
      <label >085-12345</label>
      <label >Gpt@gpt.gpt</label>
    </div>
  </div>

</footer>
















    </div>
    </>
  )
}

export default Landing