import MentorContainer from "../MentorContainer/index";

import Mentor01 from "../../assets/meet-the-team01.png";
import Mentor02 from '../../assets/meet-the-team02.png';
import Mentor03 from '../../assets/meet-the-team03.png';

import './index.css'

const Mentors = () => {
    return (
        <div className="mentors">
            <h2>Meet the Team</h2>
            <MentorContainer
                src={Mentor01}
                text="Michael Thompson is a highly skilled QA professional with a deep 
                  understanding of software testing methodologies and quality assurance 
                  processes. With a meticulous eye for detail, Michael equips students 
                  with the skills and techniques required to ensure the reliability 
                  and functionality of software applications. His expertise spans manual 
                  testing, test automation, test case development, and defect tracking. Michael 
                  believes that thorough testing is crucial for delivering high-quality software, 
                  and he is dedicated to teaching students the best practices in the field. With 
                  his guidance, you will learn how to design effective test strategies, identify 
                  and report defects, and ensure the overall quality of your software projects. 
                  Michael's practical approach, combined with his industry insights, will prepare 
                  you to excel as a QA professional in today's fast-paced development environment."
                name="Michael Thompson - QA (Software Testing)"
            />
            <MentorContainer
                src={Mentor02}
                text="With a keen eye for aesthetics and a passion for user experience, Emily Anderson 
                brings her expertise in design and front-end technologies to the CodeCraft team. Emily 
                is a seasoned designer who has worked on numerous projects, crafting visually stunning and 
                intuitive user interfaces. Her wealth of knowledge encompasses HTML, CSS, JavaScript, and 
                responsive design frameworks. Emily's teaching style is focused on imparting not only the 
                technical skills required for front-end development but also the principles of effective 
                design and user-centric thinking. She believes that a great user experience is the result of 
                a well-executed combination of functionality, usability, and visual appeal."
                name="Emily Anderson - Design and Front-End Technologies"
                className="reverse"
                reverse="right_reverse"
            />
            <MentorContainer
                src={Mentor03}
                text="Meet John Ramirez, a highly experienced developer who specializes in .NET and backend 
                technologies. John's extensive knowledge of frameworks like ASP.NET, C#, and SQL allows him 
                to delve into the intricacies of server-side development. With a strong focus on best practices 
                and efficiency, John guides students through the process of building robust and scalable backend 
                systems. His teaching approach combines hands-on coding exercises, real-world examples, and 
                industry insights to ensure students gain a comprehensive understanding of .NET and backend 
                development. John's passion for teaching and his ability to break down complex concepts into 
                digestible pieces make him a trusted mentor who can empower you to become a proficient backend 
                developer."
                name="John Ramirez - .NET and Backend Technologies"
            />
        </div>
    )
}

export default Mentors;