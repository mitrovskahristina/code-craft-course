import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './index.css'

const AboutUsMission = () => {

    return (
        <div className="about_us_mission">
            <div className="header_section">
                <div className="threed_circles" >
                    <div className="tree_d_circle big_circle"></div>
                    <div className="tree_d_circle small_circle"></div>
                </div>
                <h1 className="big_text">Unleashing the art and craft of coding</h1>
            </div>
            <div className="text_section">
                <h2 className="mission_header">Our Mission</h2>
                <p className="starting_paragraph">
                    At CodeCraft, we are passionate about empowering individuals like you to thrive in the
                    digital age by providing comprehensive online IT courses designed to expand your knowledge,
                    enhance your skills, and propel your career to new heights.
                </p>
                <p className="light_paragraph">
                    What sets CodeCraft apart is our commitment to delivering high-quality educational experiences that
                    blend theoretical knowledge with practical application. We have assembled a team of industry experts
                    and experienced instructors who are not only well-versed in the latest technological advancements but
                    are also skilled in imparting that knowledge effectively. Our courses are meticulously crafted to ensure
                    an immersive learning experience, offering hands-on exercises, real-world projects, and interactive
                    assessments that allow you to apply what you've learned in a practical setting.
                </p>
            </div>
        </div>
    )
}

export default AboutUsMission