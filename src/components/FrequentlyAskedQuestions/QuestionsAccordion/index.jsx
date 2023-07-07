import { Accordion } from 'react-bootstrap'
import AccordionBody from 'react-bootstrap/esm/AccordionBody'
import AccordionHeader from 'react-bootstrap/esm/AccordionHeader'
import AccordionItem from 'react-bootstrap/esm/AccordionItem'

import './index.css'


const QuestionsAccordion = ({className}) => {
    return (
        <Accordion className={className}>

            <AccordionItem eventKey='0' className='question' >
                <AccordionHeader className='question_header' >What kind of IT courses do you offer?</AccordionHeader>
                <AccordionBody className='question_body'>
                    We offer a wide range of IT courses, including programming languages, web development, 
                    cybersecurity, cloud computing, data science, and more.
                </AccordionBody>
            </AccordionItem>

            <AccordionItem eventKey='1' className='question'>
                <AccordionHeader className='question_header'>Who can take these courses?</AccordionHeader>
                <AccordionBody className='question_body'>
                    Our courses are open to anyone who is interested in learning more about IT. Whether you are a 
                    beginner or an experienced professional, we have courses that will suit your needs.
                </AccordionBody>
            </AccordionItem>

            <AccordionItem eventKey='2' className='question'>
                <AccordionHeader className='question_header'>Do I need any previous experience to take these courses?</AccordionHeader>
                <AccordionBody className='question_body'>
                    It depends on the course. Some courses are designed for beginners with no prior experience, while 
                    others require some level of experience or knowledge. Please check the course description for more 
                    information.
                </AccordionBody>
            </AccordionItem>

            <AccordionItem eventKey='3' className='question'>
                <AccordionHeader className='question_header'>Can I get a refund if I am not satisfied with the course?</AccordionHeader>
                <AccordionBody className='question_body'>
                    Yes, we offer a 30-day money-back guarantee for all of our courses. If you are not satisfied with 
                    the course, please contact us within 30 days of your purchase for a full refund.
                </AccordionBody>
            </AccordionItem>

            <AccordionItem eventKey='4' className='question'>
                <AccordionHeader className='question_header'>Do you offer any certification or accreditation for these courses?</AccordionHeader>
                <AccordionBody className='question_body'>
                    Yes, we offer certification for many of our courses. Please check the course description for more 
                    information. However, please note that our courses are not accredited by any external organizations.
                </AccordionBody>
            </AccordionItem>

            <AccordionItem eventKey='5' className='question'>
                <AccordionHeader className='question_header'>How can I contact customer support if I have any questions or issues?</AccordionHeader>
                <AccordionBody className='question_body'>
                    You can contact our customer support team by email or through our online chat system. We are available 
                    24/7 to assist you with any questions or issues you may have.
                </AccordionBody>
            </AccordionItem>
        </Accordion>
    )
}

export default QuestionsAccordion