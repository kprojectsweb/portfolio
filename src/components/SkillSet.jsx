import React from "react";
import './SkillSet.css';

const SkillSet = () => {
    return (
        <div className="skillset">
            <p>As a Web-Developer my skill are in MERN Stack and I am making this portfolio as a project with using React.</p>
            <p>I hope you will like this.</p>
            <div className="imgcontainer">
                <figure>
                    <img src="mern.png" alt="MERN Logo" />
                    <figcaption>MongoDB, ExpressJS, React, NodeJS</figcaption>
                </figure>
            </div>
            <br />
            <div className="text">
                <h1>Skill Set</h1>
                <p>As a passionate web developer, I specialize in creating dynamic, high-performance web applications using the <strong>MERN stack</strong> (MongoDB, Express.js, React.js, and Node.js). Here's a breakdown of the key technologies I work with and how I leverage them to deliver seamless and scalable solutions:</p>
                <br />
                <h3>MongoDB</h3>
                <p>I leverage <strong>MongoDB</strong>, a NoSQL database, for handling data in a highly scalable and flexible way. Whether you're building a real-time application or managing large datasets, I ensure that MongoDB handles your data with efficiency and reliability.</p>
                <strong>Key Skills:</strong>
                <li>Database schema design</li>
                <li>Aggregation framework</li>
                <li>Data modeling</li>
                <li>Indexing and performance optimization</li>
                <br />

                <h3>Express.js</h3>
                <p><strong>Express.js</strong> is a fast, unopinionated, and minimalist web framework for Node.js. It simplifies the process of building robust APIs and web applications by providing a set of powerful tools for routing, middleware, and request handling.</p>
                <li>API development</li>
                <li>Routing</li>
                <li>Middleware integration</li>
                <li>Authentication (JWT, OAuth)</li>
                <li>RESTful services</li>
                <br />

                <h3>React.js</h3>
                <p>With <strong>React.js</strong>, I create interactive and user-friendly frontend experiences. React’s component-based architecture allows me to develop dynamic, responsive, and high-performance UIs, perfect for building modern single-page applications (SPAs).</p>
                <strong>Key Skills:</strong>
                <li>Component lifecycle</li>
                <li>State management (Redux, Context API)</li>
                <li>Hooks</li>
                <li>Performance optimization</li>
                <br />

                <h3>Node.js</h3>
                <p><strong>Node.js</strong> is a JavaScript runtime built on Chrome’s V8 JavaScript engine, enabling server-side scripting. I use Node.js to build fast, scalable, and event-driven backend applications.</p>
                <strong>Key Skills:</strong>
                <li>Server-side development</li>
                <li>Asynchronous programming</li>
                <li>Event-driven architecture</li>
                <li>RESTful API development</li>
            </div>
        </div>
    )
}

export default SkillSet;