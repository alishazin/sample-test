import "../styles/sections/about.css"
import Img1 from "../assets/about1.png"
import Img2 from "../assets/about2.png"

function About() {
    return (
    <section id="about">
        <h3>About</h3>
        <div className="content">
            <img src={Img1} alt="Sample of the service" />
            <span>FaceTrack is a smart, hardware-free attendance solution designed for modern educational institutions. Our platform uses advanced facial recognition and location technology to offer seamless, secure, and accurate attendance tracking—right from a smartphone.</span>
            </div>
        <div className="content">
            <span>Gone are the days of roll calls, manual entries, and unreliable biometric punch-ins. With FaceTrack, students simply verify their identity using facial recognition on their phones, while GPS ensures they're physically present. Faculty members can view and manage schedules, track attendance, and generate reports effortlessly from a unified interface.</span>
            <img src={Img2} alt="Sample of the service" />
        </div>
    </section>
    )
}

export default About;