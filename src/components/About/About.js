import React from "react";
//import { stackList } from "../../data/ProjectData";
import {
  Image,
 // Technologies,
 // Tech,
  //TechImg,
  //TechName,
  ContactWrapper,
} from "./AboutElements";
import ScrollAnimation from "react-animate-on-scroll";
import Skills from "./Skills";


function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
        <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
          <Image
            src="/man-svgrepo-com.svg"
            alt="man-svgrepo"
          />
        </ScrollAnimation>
          <div className="AboutBio">
            <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
            Hello! My name is <strong>Shreyash Hatkar</strong>. I'm originally from Nagpur and have been studying at VIT, Chennai as Computer Science Student. During my time here, I gained valuable experience through various entry-level positions, which greatly enhanced my work ethic, communication skills, and adaptability.
            </ScrollAnimation>
            
            <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
              Working collaboratively within a team towards a shared objective has been an incredibly rewarding and unique experience for me. I am eager to continue exploring exciting projects in the future, with a particular interest in web development and dat science.
              <div className="tagline2">
                I have become confident using the following technologies:
              </div>
            </ScrollAnimation>
            <br></br>
            <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
            <div className="SectionTitle">Skills</div>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
            <Skills />  
            </ScrollAnimation>

          </div>

        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
