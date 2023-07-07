import { useState } from 'react';
import Modal from '../UI/Modal/index'

const TermsAndConditions = () => {
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <Modal isOpen={modalOpen} onClose={closeModal}>
            <h2>Terms and Conditions</h2>
            <p>Welcome to Code Craft, a platform that offers a wide range of courses to enhance your knowledge and skills. 
                Before using our website, please take a moment to read and understand the following Terms and Conditions. 
                By accessing or using our website, you acknowledge that you have read, understood, and agreed to be bound 
                by these Terms and Conditions. If you do not agree with any part of these terms, please refrain from using 
                our website.
            </p>
        </Modal>
    )
}

export default TermsAndConditions;