import Header from '../Header/Header';
import React from 'react';
import './Home.css'

function Home (){
    return (
        <>
        <Header/>
        <div className='mainPpal'>
            <div>
                <h1>Hi! I'm Andrea</h1>
                <p>I’m a full stack web developer focused on the front-end, I’m also a lawyer and a lover of everything that looks girly, cute  and pretty. <br/><br/>Enjoy seeing my profile to know my skills, projects, resume and if you are interested contact me!</p>
                <a href="">See more about me<img src="https://drive.google.com/uc?export=view&id=1QTb11Xj2Bf0Y6SvQTr3XHjKxGSfePXh6" alt="" style={{width:120}}/></a>
            </div>
            <img className="imgAndrea"src="https://drive.google.com/uc?export=view&id=1C20SJRxPzMj4W0NPfTjT9cTlm5QBHRrg" alt="" />
        </div>
        </>
    );

}

export default Home;