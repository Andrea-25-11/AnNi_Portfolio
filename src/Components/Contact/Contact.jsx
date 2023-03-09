import React from "react";
import "./Contact.css";
import "remixicon/fonts/remixicon.css";
import emoji1 from "./emoji1.png";
import qrWa from "./wa.link_vu3g4k.png"

function Contact() {
  return (
    <div className="divContact">
      <h1 className="titleContact">- - - My Contact - - - </h1>
      <div className="contactMainPpal">
        {/* <div>
        <img
          className="imgCont"
          src={emoji1}
          alt=""
        />
        </div> */}

        <div className="contactMain">
          <div class="cardContact">
            <div class="icon">
              <i class="ri-github-line"></i>
            </div>
            <strong> GitHub</strong>
            <div class="cardContact__body">Andrea-25-11</div>
            <span>
              <a href="https://github.com/Andrea-25-11" target="_blank">
                Follow me
              </a>
            </span>
          </div>

          <div class="cardContact">
            <div class="icon">
              <i class="ri-linkedin-fill"></i>
            </div>
            <strong>LinkedIn</strong>
            <div class="cardContact__body">Karen Andrea Niño Angulo</div>
            <span>
              <a
                href="https://www.linkedin.com/in/karen-andrea-ni%C3%B1o-angulo-262152201/"
                target="_blank"
              >
                Conect with me
              </a>
            </span>
          </div>

          <div class="cardContact">
            <div class="icon">
              <i class="ri-cellphone-line"></i>
            </div>
            <strong>Cellphone</strong>
            <div class="cardContact__body">+57 313 532 7189</div>
            <span className="spanWa">
              <img src={qrWa} className="qrWa" alt=""/>
            <a
                href="https://wa.link/vu3g4k"
                target="_blank"
              >
              Call me
              </a>
              </span>
          </div>

          <div class="cardContact">
            <div class="icon">
              <i class="ri-mail-line"></i>
            </div>
            <strong>Email</strong>
            <div class="cardContact__body">karenandrea091110<br/>@gmail.com</div>
            <span>Text me</span>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Contact;
