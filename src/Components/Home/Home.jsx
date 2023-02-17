import Header from '../Header/Header';
import React from 'react';
import './Home.css';
import Studios from "../Studios/Studios";
import {Footer} from '../Footer/Footer';
import {Projects} from '../Projects/Projects';
import data from "../Projects/Project.json";
import 'animate.css';
import potion from "./assets/pocimas2.png";
import Contact from '../Contact/Contact';

function Home (){
    return (
        <>
            <Header/>
            {/* INTRO */}
            <div className='mainPpal'>
                <div className="textoMain">
                    <h1 className='animate__animated animate__jackInTheBox'>Hi! I'm Andrea Niño</h1>
                    <img className="imgAndreaCel animate__animated animate__zoomIn"src="https://drive.google.com/uc?export=view&id=1V6FeyNu2Saiwb5VR_mKyRDXBrllyXUEK" alt="" />
                    <p className='animate__animated animate__zoomIn'>I’m a full stack web developer focused on the front-end, I’m also a lawyer and a lover of everything that looks girly, cute  and pretty. <br/><br/>Enjoy seeing my profile to know my skills, projects, resume and if you are interested contact me!</p>
                    <a className="aSeeMore" href="
                    #aboutMeSection">See more about me<img className="potion animate__animated animate__swing "src={potion} alt=""/></a>
                </div>
                <img className="imgAndrea animate__animated animate__zoomIn"src="https://drive.google.com/uc?export=view&id=1V6FeyNu2Saiwb5VR_mKyRDXBrllyXUEK" alt="" />
            </div>

            
            {/* ABOUT ME */}
            <div className="aboutMe" id='aboutMeSection'>
                <h1 className="titleAboutMe">- - - About me - - - </h1>
                <div className="mainAbout">
                    <div>
                        <div className='contImgsAbout'>
                            <img className="imgAbout animate__animated animate__shakeX"src="https://drive.google.com/uc?export=view&id=1oC3Kma-bNqc2kFUidwvEaiJnyWVa9JMM" alt="imagen Andrea y arte" />
                            <img className="imgAboutCat animate__animated animate__shakeX"src="https://drive.google.com/uc?export=view&id=1wnbyNORMCyA0P6EL4Ir_Uo5evT9m6QDC" alt="imagen Andrea y gato Simon" /> 
                            <img className="imgAboutDance animate__animated animate__shakeX"src="https://drive.google.com/uc?export=view&id=1H3Aeb_EHMcL0o5fQaKwTYMTuAzC6MwIu" alt="imagen Andrea bailando" />                             
                        </div>
                                                
                        <a className="aResume"href="https://drive.google.com/file/d/1zibl_mK_JOIghvL7_8woa3Lr14iDUeBc/view?usp=share_link" target="_blank">See resume<img src={potion} alt="" className="potion"/></a>
                    </div>
                    <p className='pAboutMe'>Exploiting my creativity by illustrating and developing digital content of everything I had in mind was what brought me to the world of programming. What I like the most is being able to create authentic things and customize them to my liking. What I like the least is spending time looking for an error that in the end can be only a semicolon! In my free time you will surely find me dancing, admiring a sunset or pampering my cat Simón. Fun fact about me I’m also a lawyer, a slightly different profile but one to which I hope to apply my programming knowledge.</p>
                </div>
                
            </div>


            {/* BOOKSHELF */}
            <div className="divTechBookshelf">
                <h1 className="titleTechBookshelf">- - - My tech bookshelf - - -</h1>
                <img src="https://drive.google.com/uc?export=view&id=1DHSCdAh7AR1LomXZVXmM822-eNd4BvD6" alt="" className="techBookshelf" /><br/>
                <a href="#projectsSection" className='aProjects'>Take a look of my projects<img className="potion"src={potion} alt="" /></a>
            </div>
            {/* WHERE I LEARNED */}
            <Studios/>
            {/* Projects */}
            <h1 className="titleTechBookshelf" id='projectsSection'>- - - Some of my projects - - - </h1>
            <div className="containerCards">
            {data.map (project =>(
                <Projects key={project.id} project={project}/>
            ))
            }
            </div>
            
            <Contact id='contactSection'/>
            {/* Footer */}
            <Footer/>

        </>
    );
}

export default Home;