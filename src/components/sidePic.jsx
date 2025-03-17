import React from 'react';
import './sidePic.css';

const sidePic = () => {
    return (
        <div className="myimgcontainer">
            <img src="myimg.png" alt="My Image" className='side-pic' />
            <div className="pdiv">
                <p>Hey viewer,</p>
                <p>I'm Kunal, a passionate Web-Developer.</p>
                <p>My journey into web development started at a very young age, back when resources were scarce for such a 10 year old boy. Despite the challenges, I was determined to learn and grow on my own. The turning point came when I finally got my own laptop, which was a game-changer and opened up a world of possibilities.</p>
                <p>Today, Web-Development isn't just a career for me rather, it's a passion, its a dream to be completed that's been shaping my path since those early days of self-learning.</p>
                <br className='info'/>
                <p className='info'>Below there is a <strong>Navbar</strong> and below it there are the information about myself on the selected section as a topic use it to know more about myself.</p>
            </div>
        </div>
    );
};

export default sidePic;
