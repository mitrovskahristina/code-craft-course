import { useState } from "react";

import Button from "../../UI/Button/index";
import Modal from "../../UI/Modal";
import "./index.css";
import ApplicationForm from "../ApplicationForm";

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
  instructorPicture,
}) => {
  const [detailsModalOpen, setDetailsModalOpen] = useState(false);
  const [applyModalOpen, setApplyModalOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const openDetailsModal = () => {
    setDetailsModalOpen(true);
  };

  const closeDetailsModal = () => {
    setDetailsModalOpen(false);
  };

  const openApplyModal = () => {
    setApplyModalOpen(true);
    setDetailsModalOpen(false);
  };

  const closeApplyModal = () => {
    setApplyModalOpen(false);
  };

  const willLearn = whatYouWillLearn.map((item) => <li key={item}>{item}</li>);

  const handleApplyCallback = () => {
    // setApplyModalOpen(false);
    setIsSuccess(true);
  };

  return (
    <div key={id} className={`course_item ${className}`}>
      <img src={picture} alt={name} />
      <h3>{name}</h3>
      <p>{description}</p>
      <p>Price: {price}</p>
      <p>Starting Date: {startingDate}</p>
      <Button onClick={openDetailsModal}>View Details</Button>

      {/* First Modal (Details) */}
      {detailsModalOpen && (
        <Modal
          isOpen={detailsModalOpen}
          onClose={closeDetailsModal}
          heading={name}
        >
          <div className="course_description">
            <div className="course_banner">
              <img src={picture} alt={name} />
              <div className="course_details">
                <div className="course_info">
                  <p className="price_tag">{price}</p>
                  <p>
                    <span className="info_bold">Start:</span> {startingDate}
                  </p>
                  <p>
                    <span className="info_bold">Duration:</span> {duration}
                  </p>
                  <p>
                    <span className="info_bold">Skill Level:</span> {skillLevel}
                  </p>
                </div>
              </div>
            </div>
            <div className="course_section">
              <h4>Description</h4>
              <p>{longDescription}</p>
            </div>
            <div className="course_section">
              <h4>Required Knowledge</h4>
              <p>{requiredKnowledge}</p>
            </div>
            <div className="course_section">
              <h4>What you will learn</h4>
              <ul>{willLearn}</ul>
            </div>
            <div className="course_section">
              <h4>Your Instructor</h4>
              <div className="instructor_details">
                <img src={instructorPicture} alt={instructor} />
                <div className="instructor_info">
                  <h5>{instructor}</h5>
                  <p>{instructorRole}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="apply_button">
            <Button className="modal_button" onClick={openApplyModal}>
              Apply
            </Button>
          </div>
        </Modal>
      )}

      {/* Second Modal (Apply) */}
      {applyModalOpen && (
        <Modal isOpen={applyModalOpen} onClose={closeApplyModal} heading={name}>
          <ApplicationForm
            successMessage={isSuccess}
            callback={handleApplyCallback}
          />
        </Modal>
      )}
    </div>
  );
};

export default CourseItem;
