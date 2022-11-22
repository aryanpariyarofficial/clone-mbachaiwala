import React from "react";
import {motion} from "framer-motion";


const Section = ({
  h3,
  text,
  hasBtn = true,
  btnTxt,
  imgsrc,
  imgSize = "70%",
  headingColor,
  textColor,
  btnColor,
  btnBgColor,
  backgroundColor,
}) => {
  const headingOptions ={
    initial:{
      y: "-100%",
      opacity: 0,
    },
    whileInView:{
      y: 0,
      opacity: 1,
    }
  }
  const textOptions={
    ...headingOptions,
    transition:{
      delay: 0.3,
    },

  }
  const buttonOptions={
    initial:{
      y: "100%",
      opacity: 0,
    },
    whileInView:{
      y: 0,
      opacity: 1,
    },
    transition:{
      delay: 0.3,
      ease: "easeIn",
    },

  }
  const imgOptions={
    initial:{
      scale: 0.1,
      opacity: 0,
    },
    whileInView:{
     scale: 1,
      opacity: 1,
    },
    transition:{
      delay: 0.3,
      
    },

  }
  return (
    <section className="section" style={{ 
        backgroundColor, 
        }}>
      <div>
        <motion.h3 
        style={{ 
            color: headingColor, 
            }}
           {...headingOptions}
           data-cursorpointer="true"
            >
            {h3}
        </motion.h3>
        <motion.p style={{color: textColor,}} data-cursorpointer="true" {...textOptions}>{text}</motion.p>
        {hasBtn && <motion.button data-cursorpointer="true" style={{color: btnColor,backgroundColor: btnBgColor,}} {...buttonOptions}>{btnTxt}</motion.button>}
        <motion.div {...imgOptions}>
          <img src={imgsrc} alt="ImgSrc"  style={{width: imgSize, 
            }}/>
        </motion.div>
      </div>
    </section>
  );
};

export default Section;
