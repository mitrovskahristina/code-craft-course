import { useState } from 'react'

import Button from '../../UI/Button/index'
import Modal from '../../UI/Modal';
import './index.css'
import ApplicationForm from '../ApplicationForm';

const CourseItem = ({
    id,
    name,
    description,
    longDescription,
    price,
    picture,
    instructor,
    startingDate,
    duration,
    requiredKnowledge,
    skillLevel,
    whatYouWillLearn,
    className,
    instructorRole,
    instructorPicture
}) => {

    const [modalOpen, setModalOpen] = useState(false);
    const [applyForCourse, setApplyForCourse] = useState(false);
    const [propValue, setPropValue] = useState('');

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    const willLearn = whatYouWillLearn.map(item => {
        return (
            <li>{item}</li>

        )
    })

    const handleCallback = () => {
        setApplyForCourse(false);
    }

    return (
        <div key={id} className={`course_item ${className}`}>
            <img src={picture} alt={name} />
            <h3>{name}</h3>
            <p>{description}</p>
            <p>Price: {price}</p>
            <p>Starting Date: {startingDate}</p>
            <Button onClick={openModal}>View Details</Button>
            {!applyForCourse &&
                <Modal isOpen={modalOpen} onClose={closeModal}>
                    <div className='course_description'>
                        <div className='course_banner'>
                            <img src={picture} alt={name} />
                            <div className='course_details'>
                                <h2>{name}</h2>
                                <div className='course_info'>
                                    <p className='price_tag'>{price}</p>
                                    <p><span className='info_bold'>Start:</span> {startingDate}</p>
                                    <p><span className='info_bold'>Duration:</span> {duration}</p>
                                    <p><span className='info_bold'>Skill Level:</span> {skillLevel}</p>
                                </div>
                            </div>
                        </div>
                        <div className='course_section'>
                            <h4>Description</h4>
                            <p>{longDescription}</p>
                        </div>
                        <div className='course_section'>
                            <h4>Required Knowledge</h4>
                            <p>{requiredKnowledge}</p>
                        </div>
                        <div className='course_section'>
                            <h4>What you will learn</h4>
                            <ul>{willLearn}</ul>
                        </div>
                        <div className='course_section'>
                            <h4>Your Instructor</h4>
                            <div className='instructor_details'>
                                <img src={instructorPicture} alt={instructor} />
                                <div className='instructor_info'>
                                    <h5>{instructor}</h5>
                                    <p>{instructorRole}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='apply_button'>
                        <Button className="modal_button" onClick={() => setApplyForCourse(true)}>Apply</Button>
                    </div>
                </Modal>
            }
            {applyForCourse &&
                <Modal isOpen={modalOpen} onClose={closeModal}>
                    <ApplicationForm name={name} callback={handleCallback}/>
                    {/* <Button className="modal_button" onClick={() => {
                        closeModal();
                        setApplyForCourse(false)
                    }}>Cancel</Button>
                    <Button className="modal_button" onClick={() => setApplyForCourse(false)}>Apply</Button> */}
                </Modal>
            }
        </div>
    )
}

export default CourseItem;