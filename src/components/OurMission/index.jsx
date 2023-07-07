import { Link } from "react-router-dom"
import CirclePicturesContainer from "../CirclePicturesContainer/index"
import Button from '../UI/Button/index'

import './index.css'


const OurMission = () => {
    return (
        <div className="our_mission">
            <div className="left_section">
                <h2>Learn from the best</h2>
                <p className="starting_paragraph">
                    Our mission is to provide accessible and affordable IT courses
                    that empower individuals and businesses to stay ahead in today's
                    rapidly changing technological landscape. We believe that everyone
                    should have the opportunity to learn and grow, regardless of their
                    background or prior experience.
                </p>
                <p>
                    Our courses are designed to be hands-on and interactive, with a focus
                    on practical skills and real-world applications. Whether you're a
                    complete beginner or an experienced IT professional looking to expand
                    your skillset, we have courses that will challenge and inspire you.
                    We pride ourselves on providing personalized mentorship and support to
                    our students, with small class sizes and one-on-one coaching available.
                    Our instructors are passionate about teaching and are committed to helping
                    each student succeed.
                </p>
                <Link to='/about'>
                    <Button>Read More About Us</Button>
                </Link>
            </div>
            <div>
                <CirclePicturesContainer />
            </div>
        </div>
    )
}

export default OurMission