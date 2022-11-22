import React from "react";

const Footer = () => {
  const footerLink = (element) =>{
    const allFooterLinks = document.querySelectorAll(".footerLinks");
    switch (element) {
      case 0:
        allFooterLinks.forEach((item, index)=> index ===0 ? (item.style.opacity = 1) :(item.style.opacity = 0.2) 
        );
        
        break;
      case 1:
        allFooterLinks.forEach((item, index)=> index ===1 ? (item.style.opacity = 1) :(item.style.opacity = 0.2) 
        );
        
        break;
      case 2:
        allFooterLinks.forEach((item, index)=> index ===2 ? (item.style.opacity = 1) :(item.style.opacity = 0.2) 
        );
        
        break;
      case 3:
        allFooterLinks.forEach((item, index)=> index ===3 ? (item.style.opacity = 1) :(item.style.opacity = 0.2) 
        );
        
        break;
      case 4:
        allFooterLinks.forEach((item, index)=> index ===4 ? (item.style.opacity = 1) :(item.style.opacity = 0.2) 
        );
        
        break;
      case 5:
        allFooterLinks.forEach((item, index)=> index ===5 ? (item.style.opacity = 1) :(item.style.opacity = 0.2) 
        );
        
        break;
    
        default: allFooterLinks.forEach((item)=> (item.style.opacity = 1) );
       
        break;
    }
  }
  const linksBackToNormal = () =>{
    const allFooterLinks = document.querySelectorAll(".footerLinks");
    allFooterLinks.forEach((item)=> (item.style.opacity = 1) );

  }
  return (
    <>
      <footer>
        <h1>
          Let's
          <br />
          #ConnectOnCutting?
        </h1>
        <aside data-cursorpointermini="true" onMouseLeave={linksBackToNormal}>
          <a href="/" className="footerLinks" data-cursorpointermini="true" onMouseOver={()=>footerLink(0)}>
            Home
          </a>
          <a href="/story" className="footerLinks" data-cursorpointermini="true" onMouseOver={()=>footerLink(1)}>
            Story
          </a>
          <a href="/media" className="footerLinks" data-cursorpointermini="true" onMouseOver={()=>footerLink(2)}>
            Media
          </a>
          <a href="/franchise" className="footerLinks" data-cursorpointermini="true" onMouseOver={()=>footerLink(3)}>
            Franchise
          </a>
          <a href="/events" className="footerLinks" data-cursorpointermini="true" onMouseOver={()=>footerLink(4)}>
            Events
          </a>
          <a href="/chaiwalacares" className="footerLinks" data-cursorpointermini="true" onMouseOver={()=>footerLink(5)}>
            Chai Wala Cares
          </a>
        </aside>
        <div>
          <h5>Email</h5>
          <a href="mailto: info@mbachaiwala.com">info@mbachaiwala.com</a>
          <a href="mailto: franchise@mbachaiwala.com">
            franchise@mbachaiwala.com
          </a>
        </div>
        <div>
          <h5>Phone</h5>
          <a href="tel: +917229075222">+917229075222</a>
        </div>
      
       <p> &#169; COPYRIGHT 2022 MBA CHAIWALA. MADE BY</p>
       <div></div>
     
      </footer>
    </>
  );
};

export default Footer;
