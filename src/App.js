import IntroVideo from './components/IntroVideo';
import Section from './components/Section';
import Footer from './components/Footer';
import data from "./data/data.json";
import './styles/App.scss';
import './styles/Intro.scss';
import './styles/Section.scss';
import './styles/Footer.scss';
import './styles/Misc.scss';
import './styles/MediaQuery.scss';
import freshTopicImg from './assets/academy.png';
import mapImg from './assets/locations.png';
import freshTopic2Img from './assets/story.png';
import coursesImg from './assets/image2.png';
import baratImg from './assets/image1.png';
import chaiWalaImg from './assets/image3.png';
import tedTalksImg from './assets/in-the-news.gif';
import franchiseImg from './assets/franchise.gif';
import albumImg from './assets/mba-cares.gif';
import Misc from './components/Misc';
import { useEffect } from 'react';


const yellow = "#fff100", pink = "#ed1e79", white="#fff", brown="#6d3d0f";

function App() {
  const {freshTopic, freshTopic2, tedTalks, franchise, map, courses, album, barat, chaiwala } = data;

  const dotCursor = (e) =>{
     const cursor = document.querySelector(".cursor");
     cursor.style.top=`${e.pageY-14}px`;
     cursor.style.left=`${e.pageX-14}px`;

     const element = e.target;

     if(element.getAttribute("data-cursorpointer")){
      cursor.classList.add("cursorHover");
    }
     else if(element.getAttribute("data-cursorpointermini")){
      cursor.classList.add("cursorHoverMini");
    }
    else{
      cursor.classList.remove("cursorHover");
      cursor.classList.remove("cursorHoverMini");

     }
  }

  useEffect(() =>{
    window.addEventListener("mousemove", dotCursor)
    return () =>{
      window.removeEventListener("mousemove", dotCursor)

    }
  },[])
  return (
      <>
      <IntroVideo/>  
      {/* freshTopic */}
      <Section h3={freshTopic.heading} 
      text={freshTopic.text} 
      btnTxt={freshTopic.btn} 
      imgsrc={freshTopicImg}
      backgroundColor={pink}    
      headingColor={yellow}
      textColor={yellow}
      btnBgColor={yellow}
      btnColor={pink} />
      
      {/* freshTopic2 */}
      <Section h3={freshTopic2.heading} 
      text={freshTopic2.text} 
      btnTxt={freshTopic2.btn} 
      imgsrc={freshTopic2Img}
      imgSize={"58%"}
      backgroundColor={pink}    
      headingColor={yellow}
      textColor={yellow}
      btnBgColor={yellow}
      btnColor={pink} />

      {/* ted Talks */}
      <Section h3={tedTalks.heading} 
      text={tedTalks.text} 
      btnTxt={tedTalks.btn} 
      imgsrc={tedTalksImg}
      imgSize={"62%"}
      backgroundColor={yellow}    
      headingColor={pink}
      textColor={pink}
      btnBgColor={pink}
      btnColor={yellow} />
      
      {/* Franchise */}
      <Section h3={franchise.heading} 
      text={franchise.text} 
      btnTxt={franchise.btn} 
      imgsrc={franchiseImg}
      backgroundColor={white}    
      headingColor={pink}
      textColor={brown}
      btnBgColor={brown}
      btnColor={yellow} />

      {/* Map */}
      <Section h3={map.heading} 
      text={map.text} 
      imgsrc={mapImg}
      backgroundColor={pink}    
      headingColor={yellow}
      textColor={yellow}
      hasBtn={false}
      btnBgColor={white}
      btnColor={yellow} />

      {/* courses */}
      <Section h3={courses.heading} 
      text={courses.text} 
      btnTxt={courses.btn}
      imgsrc={coursesImg}
      imgSize={"33.5%"}
      backgroundColor={yellow}    
      headingColor={pink}
      textColor={pink}
      btnBgColor={pink}
      btnColor={yellow} />

      {/* album */}
      <Section h3={album.heading} 
      text={album.text} 
      btnTxt={album.btn}
      imgsrc={albumImg}
      backgroundColor={white}    
      headingColor={pink}
      textColor={brown}
      btnBgColor={brown}
      btnColor={yellow} />

      {/* barat */}
      <Section h3={barat.heading} 
      text={barat.text} 
      btnTxt={barat.btn}
      imgsrc={baratImg}
      imgSize={"50%"}
      backgroundColor={pink}    
      headingColor={yellow}
      textColor={yellow}
      btnBgColor={yellow}
      btnColor={pink} />

      {/* chaiwala */}
      <Section h3={chaiwala.heading} 
      text={chaiwala.text} 
      btnTxt={chaiwala.btn}
      imgsrc={chaiWalaImg}
      backgroundColor={white}    
      headingColor={pink}
      textColor={brown}
      btnBgColor={brown}
      btnColor={yellow} />

      <Footer />
      <Misc />
      </>
  );
}

export default App;
