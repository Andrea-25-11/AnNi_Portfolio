import React from "react";
import "./Contact.css";
import "remixicon/fonts/remixicon.css";

function Contact() {
  return (
    <div className="divContact">
      <h1 className="titleContact">- - - My Contact - - - </h1>
      <div className="contactMain">
        {/* <img
          className="imgContact animate__animated animate__zoomIn"
          src="https://drive.google.com/uc?export=view&id=1Be3lrsrI0_AVNSwTs3n1J5RDU2E1WZv8"
          alt=""
        /> */}


        <div class="card">
          <div class="icon">
            <i class="ri-github-line"></i>
          </div>
          <strong> GitHub</strong>
          <div class="card__body">Andrea-25-11</div>
          <span>
            <a href="https://github.com/Andrea-25-11" target="_blank">
              Follow me
            </a>
          </span>
        </div>

        <div class="card">
          <div class="icon">
            <i class="ri-linkedin-fill"></i>
          </div>
          <strong>LinkedIn</strong>
          <div class="card__body">Karen Andrea Niño Angulo</div>
          <span>
            <a
              href="https://www.linkedin.com/in/karen-andrea-ni%C3%B1o-angulo-262152201/"
              target="_blank"
            >
              Conect with me
            </a>
          </span>
        </div>

        <div class="card">
          <div class="icon">
          <i class="ri-cellphone-line"></i>
          </div>
          <strong>Cellphone</strong>
          <div class="card__body">+57 313 532 7189</div>
          <span>
              Call me
          </span>
        </div>

        <div class="card">
          <div class="icon">
          <i class="ri-mail-line"></i>
          </div>
          <strong>Email</strong>
          <div class="card__body">karenandrea091110@gmail.com</div>
          <span>
              Text me
          </span>
        </div>




      </div>
    </div>
  );
}

export default Contact;
