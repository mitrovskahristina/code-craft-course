import GradientCirclesContainer from "../GradientCirclesContainer"
import './index.css'

const AboutCodeCraft = () => {
    return (
        <div className="about_code_craft">
            <div className="left_section">
                <h2>About CodeCraft</h2>
                <p className="starting_paragraph">
                    At CodeCraft, we are passionate about empowering individuals like you to
                    thrive in the digital age by providing comprehensive online IT courses designed
                    to expand your knowledge, enhance your skills, and propel your career to new heights.
                </p>
                <p>
                    What sets CodeCraft apart is our commitment to delivering high-quality educational
                    experiences that blend theoretical knowledge with practical application. We have assembled
                    a team of industry experts and experienced instructors who are not only well-versed in
                    the latest technological advancements but are also skilled in imparting that knowledge
                    effectively. Our courses are meticulously crafted to ensure an immersive learning experience,
                    offering hands-on exercises, real-world projects, and interactive assessments that allow you
                    to apply what you've learned in a practical setting. Whether you're a coding novice or an 
                    experienced professional seeking to upskill, CodeCraft
                    offers a diverse range of courses tailored to suit your needs. 
                </p>
            </div>
            <div className="right_section">
                <GradientCirclesContainer />
            </div>
        </div>
    )
}

export default AboutCodeCraft