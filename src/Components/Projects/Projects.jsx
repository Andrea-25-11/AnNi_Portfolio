import React from 'react';
import './Projects.css';


export function Projects(props) {
  const {id,title, subtitle, img, text,link} = props.project  
  return (
    <>
      <div className='mainProjects'>
        <div className="flip-card">
          <div className="flip-card-inner">
              <div className="flip-card-front" key={id}>
                  <p className="title">{title}</p>
                  <p>{subtitle}</p>
                  <img src={img}  alt="" />
              </div>
              <div className="flip-card-back">
                  <p className="title">{text}</p>
                  <button className="cta">
                      <span className="hover-underline-animation"> Visit site</span>
                      <svg viewBox="0 0 46 16" height="10" width="30" xmlns={link} id="arrow-horizontal">
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
//         <div className="flip-card">
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

