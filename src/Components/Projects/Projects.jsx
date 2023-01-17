import React from 'react';
import './Projects.css';
import data from "./Project.json";


export const Projects = (props) => {
  return (
        <>
        {/* --CARDS */}
        <div class="flip-card">
          <div class="flip-card-inner">
              <div class="flip-card-front">
                  <p class="title">{props.title}</p>
                  <img src={props.img} alt="" />
              </div>
              <div class="flip-card-back">
                  <p class="title">{props.description}</p>
                  <button class="cta">
                      <span class="hover-underline-animation"><a href={props.url}> Visit site </a></span>
                      <svg viewBox="0 0 46 16" height="10" width="30" xmlns="http://www.w3.org/2000/svg" id="arrow-horizontal">
                          <path transform="translate(30)" d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z" data-name="Path 10" id="Path_10"></path>
                      </svg>
                  </button>
              </div>
          </div>
        </div>
          </>
);

}

export default Projects;

export const Services1 = (props) => {
  return (
  <>
      <div className="card">
          <img src={props.img} className="imgServices"alt="Imagen de la tarjeta"/>
          <h2>{props.text}</h2>
      </div>
  </>
  )

}