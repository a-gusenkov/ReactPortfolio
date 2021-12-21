import './portfolio_style.css';
import gitImg from "./git.png";
import linkedImg from "./link.png";
import emailImg from "./email.png";
import projectImg from "./Project.png";

import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import logoB from './MYLOGO.png';
import HoverImage from "react-hover-image";
import yourFile from "./origi.png";
import yourFileHover from "./change.png";
import school from "./school.png"

import ctp from './ctp.jpg';
import rf from './rf.png';
import cs from './CSCLogo.png';
import dnd from './DDLogo.png';
import Accordion from 'react-bootstrap/Accordion'
import line from './line.png';
import proj1 from './proj1.png';
import proj2 from './proj2.png';
import dog from "./dogWiz.svg";
import logoC from "./logograph.png";
import ReactPlayer from "react-player"

function DemoPortfolio (){
    const [open, setOpen] = useState(false);
    const [style, setStyle] = useState({display: 'none'});

    return (
        
       
                
        <div className="App body-demo">   

<nav class="navbar sticky-top navbar-expand-lg navbar-dark ">
    <div class="container-fluid">


        <div class="collapse navbar-collapse" id="navbarColor03">
            
             <a class="navbar-brand" >
                 <img class="myLogo" src={logoB} width="50" height="50" class="d-inline-block align-top" alt=""/> 
 
            </a>
            
            <ul class="navbar-nav ml-auto">


                <li class="nav-item float-right">
                <a class="nav-link" href="#intro">About Me
            
                </a>
                </li>
                <li class="nav-item float-right">
                <a class="nav-link" href="#expEdu">Education/Experience</a>
                </li>
                <li class="nav-item float-right">
                <a class="nav-link" href="#projects">Projects</a>
                </li>
                <li class="nav-item float-right">
                <a class="nav-link" href="#gameproj">Game</a>
                </li>
                <li class="nav-item float-right">
                <a class="nav-link" href="#graphDesign">Graphic Design</a>
                </li>
                <li class="nav-item float-right">
                <a class="nav-link" href="#anim">Animations</a>
                </li>
                <li class="nav-item f">
                    <a class="nav-link" href="#contact">Contact Me</a>
                </li>

            </ul>

        </div>
    </div>
    </nav>
    
        <div class="intro" id="intro">
            <br/>
            <div class="container about"> 
                <div class="row">

                <div class="textAbout col-lg">
                        <h2 class="yellow">Hello There!</h2>
                        
                        <p class="lead " id="contact">
                        I’m Anastasia Gusenkov and I’m a senior at the CUNY Macaulay Honors College at Brooklyn College majoring in Computer Science and Multimedia Computing. I’m the proud President of the largest CS Club in CUNY and the President and Co-Founder of the Macaulay D&D Guild. 
                        Currently I'm a full-stack web development fellow at CUNY Tech Prep, a selective JavaScript program for CUNY students, where I’m working on a portfolio building tool called WeBuilder. My goal for this project is to allow people to feel confident in their skills as they start their journey in the tech industry.
                        </p>
                        <div class="contact" >
                            <h4>Contact Me:</h4>
                            <a href="https://github.com/a-gusenkov" target="_blank"><img src={gitImg} class="img-fluid gitImg"/></a>
                            <a href="https://www.linkedin.com/in/anastasia-gusenkov/" target="_blank"><img src={linkedImg} class="img-fluid lnkImg"/></a>
                            <p class="lead email">anastasiagusenkov1@gmail.com</p>
                        </div>

                </div>

                    
                    <div className="imageAbout col-lg">
                    <HoverImage className="imageAbout" src={yourFile} hoverSrc={yourFileHover} />
                    </div>
                    {/* <img src={avatar} class="img-fluid" alt="My Photo"  /> */}
                    

                </div>

                <img src={line} class="img-fluid lineImg"/>
             
        </div>
        </div>
        <div class="exp" id="expEdu">
        <h1 class="titl yellow">Education and Experience</h1>
        
        <div class="container"> 
            <div class="row expPad">
                <h3>Education</h3>
            </div>
            <div class="row">
                <div class="col-lg-1">
                    <img src={school} class="img-fluid "/>
                </div>
                <div class="col-lg-11">
                    
                    <p class="schoolT">Macaulay Honors College at Brooklyn College</p>
                    <span class="rightSide"> May 2022</span>
                    <p class="schoolD">Bachelor of Science, Computer Science and Multimedia Computing, GPA:3.7</p>
                    
                    <p class="edu">Relevant Coursework:</p>
                    <p class="edu">JAVA Programming, Multimedia Computing, Modern Programming Techniques, Discrete Structures, Data Structures, Computer Architecture, Introduction to Digital Art, Analysis of Algorithms, Operating Systems, Design & Implementation of Large-Scale Applications, Programming Paradigms in C++</p>
                    <span class="thumb">Java</span>
                    <span class="thumb">C++</span>
                    <span class="thumb">OS</span>
                    <span class="thumb">Data Structures</span>
                    <span class="thumb">Algorithms</span>
                    <span class="thumb">Digital Design</span>
                    
                </div>
            </div>
        </div>




        <div class="container"> 
            <div class="row expPad">
                <h3>Experience</h3>
            </div>
         <div >  
        <Accordion  >
        <Accordion.Item eventKey="0" >
            <Accordion.Header  >CUNY Tech Prep</Accordion.Header>
            <Accordion.Body className="bg">
            <div class="row accorBG">
                <div id="example-collapse-text">
                <div class="col-lg-1">
                    <img src={ctp} class="img-fluid "/>
                </div>
                <div class="col-lg-11">
                    <p class="schoolT">Software Development Fellow</p>
                    <span class="rightSide"> Jul 2021 - Present</span>
                    <p class="schoolD">CUNY Tech Prep</p>
                    
                    <ul class="edu">
                        <li>Selected for a technical training program, as one of 183 students out of 400+ applicants.</li>
                        <li>Learn in-demand technologies like React, Node + Express, and PostgreSQL as well as industry best practices for design, implementation, and deployment such as MVC, version control with Git/GitHub, agile & Scrum with Trello and Slack, test-driven development, and CI/CD.</li>
                    </ul>
                    <span class="thumb">HTML/CSS</span>
                    <span class="thumb">JavaScript</span>
                    <span class="thumb">React</span>
                    <span class="thumb">Node.js</span>
                    <span class="thumb">Express.js</span>
                    <span class="thumb">PostgreSQL</span>
                    <span class="thumb">Git/GitHub</span>
                </div>
                </div>
            </div>
            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
            <Accordion.Header> Research Foundation of CUNY </Accordion.Header>
            <Accordion.Body className="bg">
            <div class="row accorBG">
                    <div class="col-lg-1">
                        <img src={rf} class="img-fluid "/>
                    </div>
                    <div class="col-lg-11">
                        
                        <p class="schoolT">Assistant of Instructional Service Manager</p>
                        <span class="rightSide"> Jun 2021 - Present</span>
                        <p class="schoolD">Research Foundation of CUNY</p>
                        
                        <ul class="edu">
                            <li>Assist in preparing and onboarding 100+ tutors with NYC DOE schools for CUNY Tutor Corps over the Summer 2021 and Fall 2021 semesters.</li>
                            <li>Collected, organized, and analyzed tutor data to identify the effectiveness of schedule and school placement to maximize the number of students receiving tutoring.</li>
                            <li>Evaluate 40+ tutor applications for the Fall 2021 semester.</li>
                        </ul>
                        <span class="thumb">Excel</span>
                        <span class="thumb">Data Visialization</span>
                        <span class="thumb">Administration</span>
                        <span class="thumb">Organization</span>
                        <span class="thumb">Communication</span>
                    </div>
            </div>
        </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
            <Accordion.Header> Brooklyn College Computer Science Club </Accordion.Header>
            <Accordion.Body className="bg">
            <div class="row accorBG">
                        <div class="col-lg-1">
                            <img src={cs} class="img-fluid "/>
                        </div>
                        <div class="col-lg-11">
                            
                            <p class="schoolT">President and Executive Board Member</p>
                            <span class="rightSide"> Jul 2021 - Present</span>
                            <p class="schoolD">Brooklyn College Computer Science Club</p>
                            
                            <ul class="edu">
                                <li>Leading a team of 4 to strengthen the student body's faculty-student relationship, career-readiness skills, and love of tech.</li>
                                <li>Organizing and hosting bi-weekly workshops and events with industry professionals to improve technical and professional skills in a variety of Computer Science Fields.</li>
                            </ul>
                            <span class="thumb">Leadership</span>
                            <span class="thumb">Collaboration</span>
                            <span class="thumb">Decision Making</span>
                            <span class="thumb">Attention to Details</span>
                        </div>
                    </div>
            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
            <Accordion.Header className="bgA"> Macaulay Honors D&D Guild </Accordion.Header>
            <Accordion.Body className="bg">
            <div class="row accorBG">
                        <div class="col-lg-1">
                            <img src={dnd} class="img-fluid "/>
                        </div>
                        <div class="col-lg-11">
                            
                            <p class="schoolT">President and Co-Founder</p>
                            <span class="rightSide"> Jan 2021 - Present</span>
                            <p class="schoolD">Macaulay Honors D&D Guild</p>
                            
                            <ul class="edu">
                                <li>Leading a team of 7 to encourage meaningful interactions in the student body.</li>
                                <li>Organize and direct workshops and games for beginner, intermediate, and expert players.</li>
                            </ul>
                            <span class="thumb">Leadership</span>
                            <span class="thumb">Creativity</span>
                            <span class="thumb">Public Speaking</span>
                            <span class="thumb">Resource Management</span>
                        </div>
                    </div>
            </Accordion.Body>
        </Accordion.Item>
        </Accordion>
        </div> 

                

           
            
               


        </div>
        <img src={line} class="img-fluid lineImg"/>
      </div>






      <div class="projects" id="projects">
            <h1 class="titl yellow" >Projects</h1>
            <br/>
            <div class="container"> 
                <div class="row">
                    <div class="col-5 hopMath">
                        <img src={proj1} class="img-fluid projImg"/>
                        <a href="https://devpost.com/software/hopmath" target="_blank" class="noDecor">
                            <div class="overlay1">
                                <div class="text">Learn More</div>
                            </div>
                        </a>

                    </div>
                    <div class="col-7">
                        <h3>hopMath</h3>
                        <p class="projDes">Collaborated with a partner to build an 
                            application that implemented games to help 
                            students learn algebra disciplines.  Developed 
                            the user interface using Java and Java AWT API 
                            to create the welcome page and interactive game 
                            components such as changing graphics, in-game messages,
                            and enterable answer boxes. Created in-game graphics using
                            Adobe Illustrator. </p>
                        <b> Awards : </b>
                        <p>Hack Brooklyn 2021 : First Place in the Education Track </p>

                    </div>
                </div>
                <div class="row">
                    <div class="col-7 projs ">
                        <h3>SOMNUM - Landing Page</h3>
                        <p class="projDes">Created a product and built a landing page for it to explore effective UI design.
                            Used Adobe Illustrator and Photoshop to create logo and product image.
                            Used HTML/CSS and the Bootstap Framework to create the website.
                        </p>
                    </div>
                    <br/>

                    <div className="col-5 projs somnum">
                        <img src={proj2} className="img-fluid  projImg "/>
                        <a href="https://github.com/a-gusenkov/CISC3141_FirstProject" className="noDecor" target="_blank" >
                            <div className="overlay2">
                                <div className="text">View SOMNUM</div>
                            </div>
                        </a>
                    </div>

                </div>
                <div class="row">
                <h1 class="titl yellow gameProj" id="gameproj">Game Project</h1>
                <p class="projDes text-center">Created a 3-level Unity game to practice game design and development. Play it below!</p>
                <iframe frameborder="0" src="https://itch.io/embed-upload/4900770?color=333333" allowfullscreen="" width="963" height="620"><a href="https://agusenkov.itch.io/witchs-night">Play Anastasia Gusenkov Witch's Night on itch.io</a></iframe>
                </div>
                
                <img src={line} className="img-fluid lineImg"/>
            </div>
            

        
        </div>


        <div class="graphDesign" id="graphDesign">
            <h1 class="titl yellow"> Graphic Designs</h1>
            <h3 class="text-center">Logos</h3>
            <div class="container text-center"> 
                <div class="row">
                    <div class="col-lg-4 somnum">
                        <img src={cs} class="img-fluid graphImage" width="300" height="300" />
                        <div className="overlay3">
                                <div className="text"><h5>BC CS Club Logo</h5>
                        <p>Winning Logo from the BC CS 2020 Logo Contest</p></div>
                            </div>
                        
                    </div>
                    <div class="col-4 somnum">
                        <img src={dog} class="img-fluid graphImage" width="300" height="300"/>
                        
                        <div className="overlay4">
                                <div className="text"><h5>Hack Brooklyn 2021 Logo</h5>
                        <p>Conceptualized and created for the Hack Brooklyn 2021 Hackathon.</p></div>
                            </div>
                    </div>
                    <div class="col-4 somnum">
                        <img src={logoC} class="img-fluid graphImage " width="300" height="300"/>
                        <div className="overlay5">
                                <div className="text"><h5>Personal Logo</h5>
                        <p>Created for personal use. You can see it used in this website.</p></div>
                            </div>
                        
                    </div>
                </div> 

                <div class="row animationVideo">
                <h3 id="anim">Animations</h3>
                <h5>A 2D lyric animation created by me with Adobe After Effects.</h5>
                    <div class="col-4">
                    
                    
                    </div>
                    <div class="col-8">
                        <ReactPlayer 
                            url="https://vimeo.com/528722829"
                        />
                    </div>
                </div>
                </div> 
                <img src={line} class="img-fluid lineImg"/>
            </div>

           
        </div>
           
       
       
        
            

        );
    
    }
    
export default DemoPortfolio;