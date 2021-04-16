import React from "react";
import me from "../images/me.jpg";

const About = (props) => {
  return (
    <div className='pagecomponent' ref={props.refProp}>
      <div className='about-bg'>
        <div className='about-text'>
          <h4 className='about-h4'>
            I've been studying as a MERN stack developer since 2019. Lorem ipsum
            dolor sit, amet consectetur adipisicing elit. Temporibus nihil aut,
            veniam corporis laudantium tempore id cupiditate omnis quia
            voluptate!
          </h4>
          <h5 className='about-h5'>
            Constantly practicing my javascript and learning more everyday, i
            hope to expand my skillset and knowledge of web development and AI.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim, quis
            dolorem asperiores sequi natus a labore veniam sed nihil? Atque
            neque ea commodi vel et! Labore magni at quia illum explicabo quod,
            eos minus, fugiat pariatur corrupti illo, voluptatum deserunt?
          </h5>
        </div>
        <div className='about-dp'></div>
      </div>
    </div>
  );
};

export default About;
