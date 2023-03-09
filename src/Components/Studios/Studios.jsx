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
          <AccordionHeader className='accHeader'targetId="1"><strong> Full Stack Web Developer</strong> / EDUCAMÁS - PROGRÁMATE ACADEMY</AccordionHeader>
          <AccordionBody accordionId="1">
            <strong>SEPT 2022 - JANUARY 2023</strong><br/>
            Bootcamp training in front-end and back-end technologies handling HTML, CSS, JS, REACT, GIT, GITHUB among others and with learning methodology through individual and collaborative projects
          </AccordionBody>
        </AccordionItem>
        <AccordionItem className='accItem'>
          <AccordionHeader className='accHeader' targetId="2"><strong>Web development </strong> / CODERHOUSE</AccordionHeader>
          <AccordionBody accordionId="2">
          <strong>JUNE 2022 - SEPTEMBER 2023</strong><br/>
          Web development course focused on front-end where technologies such as HTML, CSS, SASS, BOOTSTRAP, GIT and GITHUB were used.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem className='accItem'>
          <AccordionHeader className='accHeader' targetId="3"><strong>Law degree</strong>/ SAN BUENAVENTURA UNIVERSITY</AccordionHeader>
          <AccordionBody accordionId="3">
          <strong>FEBRUARY 2015 - DECEMBER 2019</strong><br/>
          Professional university education in which I obtained the law degree.
          </AccordionBody>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default Studios;