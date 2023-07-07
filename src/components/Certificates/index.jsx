import CertificateContainer from "./CertificateContainer"
import './index.css'

const Certificates = () => {
    return (
        <div className="get_certificates">
            <div className="left_section">
                <CertificateContainer />
            </div>
            <div className="right_section">
                <h2>Get Certificates</h2>
                <p className="starting_paragraph">
                    Our IT courses are designed to provide you with the skills and
                    knowledge you need to succeed in the rapidly evolving technology
                    industry. But it's not just about learning new skills - it's also
                    about demonstrating your expertise to potential employers.
                </p>
                <p>
                    That's why we offer a range of certification options for our courses.
                    Whether you're interested in earning a certificate in a specific technology
                    or want to showcase your mastery of a particular skillset, we have the
                    certification program to help you achieve your goals. Our certification programs
                    are recognized by industry leaders and are a great way to demonstrate your
                    commitment to continuous learning and professional development. Plus, they can
                    help you stand out from the competition when applying for jobs and advancing your career.
                    Ready to take your skills to the next level and earn a valuable certification?
                    Enroll in one of our courses today and start working towards your professional goals.
                </p>
            </div>
        </div>
    )
}

export default Certificates