import React, { useState } from 'react';
import "./Studios.css"
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from 'reactstrap';

function Studios(props) {
  const [open, setOpen] = useState('1');
  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };

  return (
    <div className='divStudios'>
      <h1 className='titleStudios'>- - - My studios - - - </h1>
      <Accordion className='acc'open={open} toggle={toggle}>
        <AccordionItem className='accItem'>
          <AccordionHeader className='accHeader'targetId="1"><strong>Desarrolladora FullStack Developer</strong> / EDUCAMÁS - PROGRÁMATE ACADEMY</AccordionHeader>
          <AccordionBody accordionId="1">
            <strong>SEPT 2022 - ENERO 2023</strong><br/>
            Formación en bootcamp tanto en fron-end como back-end manejando HTML, CSS, JS, REACT, GIT, GITHUB participando en proyectos tanto individuales como colaborativos.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem className='accItem'>
          <AccordionHeader className='accHeader' targetId="2"><strong>Desarrollo web </strong> / CODERHOUSE</AccordionHeader>
          <AccordionBody accordionId="2">
          <strong>JUNIO 2022 - SEPTIEMBRE 2023</strong><br/>
            Curso de desarrollo web enfocado a front-end donde se utilizaron tecnologías como HTML, CSS, SASS, BOOTSTRAP, GIT y GITHUB.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem className='accItem'>
          <AccordionHeader className='accHeader' targetId="3"><strong>Pregrado en Derecho</strong>/ UNIVERSIDAD DE SAN BUENAVENTURA</AccordionHeader>
          <AccordionBody accordionId="3">
          <strong>FEBRERO 2015 - DICIEMBRE 2019</strong><br/>
            Pregrado en Derecho, título obtenido abogada.
          </AccordionBody>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default Studios;