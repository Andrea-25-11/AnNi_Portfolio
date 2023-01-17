import React from 'react';
import './Projects.css';


export function Project() {
    return (
    <>
      <div className='mainProjects'>
        <h1 className="titleTechBookshelf">SOME OF MY PROJECTS</h1>
        <div class="flip-card">
          <div class="flip-card-inner">
              <div class="flip-card-front">
                  <p class="title">FLIP CARD</p>
                  <p>HTML,CSS,REACT</p>
                  <img src="https://drive.google.com/uc?export=view&id=1muMyUP_wJ-K3EAiaivGTZ-7-Zz3ZOAIk" alt="" />
              </div>
              <div class="flip-card-back">
                  <p class="title">Creación de página web para cliente real</p>
                  <button class="cta">
                      <span class="hover-underline-animation"> Visit site</span>
                      <svg viewBox="0 0 46 16" height="10" width="30" xmlns="http://www.w3.org/2000/svg" id="arrow-horizontal">
                          <path transform="translate(30)" d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z" data-name="Path 10" id="Path_10"></path>
                      </svg>
                  </button>
              </div>
          </div>
        </div>
      </div>
    </>
    )
}

// const Projects = (props) => {
//   return (
//         <>
//         {/* --CARDS */}
//         <div class="flip-card">
//           <div class="flip-card-inner">
//               <div class="flip-card-front">
//                   <p class="title">{props.title}</p>
//                   <img src={props.img} alt="" />
//               </div>
//               <div class="flip-card-back">
//                   <p class="title">{props.description}</p>
//                   <button class="cta">
//                       <span class="hover-underline-animation"><a href={props.url}> Visit site </a></span>
//                       <svg viewBox="0 0 46 16" height="10" width="30" xmlns="http://www.w3.org/2000/svg" id="arrow-horizontal">
//                           <path transform="translate(30)" d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z" data-name="Path 10" id="Path_10"></path>
//                       </svg>
//                   </button>
//               </div>
//           </div>
//         </div>
//           </>
// );

// }

// export default Projects;

