import "../styles/sections/contact.css"
import { Icon } from "@iconify/react";


function Contact() {
    return (
    <section id="contact">
        <div className="top-area">
            <h3>Contact Us</h3>
            <div>If you have any questions,please feel free to get in touch with us!</div>
        </div>

        <div className="content-area">

            <div className="form">
                <h4>Get In Touch</h4>
                <div className="separator"></div>
                <div className="textfield">
                    <label htmlFor="name">Name</label>
                    <input type="text" placeholder="Enter your name" name="name" id="name" />
                </div>
                <div className="textfield">
                    <label htmlFor="contact">Contact No</label>
                    <input type="text" placeholder="Enter your phone number" name="contact" id="contact" />
                </div>
                <div className="textfield">
                    <label htmlFor="email">Email</label>
                    <input type="email" placeholder="Enter your email" name="email" id="email" />
                </div>
                <div className="textfield">
                    <label htmlFor="msg">Type Your Message Here</label>
                    <textarea name="msg" id="msg"></textarea>
                </div>
                <button>Send Message</button>
            </div>
            <div className="socials">
                <a target="_blank" href="mailto:alishazin1029@gmail.com">
                    <Icon icon={"material-symbols:mail-outline"} className="icon" />
                </a>
                <a target="_blank" href="https://x.com/AliShazin6">
                    <Icon icon={"ri:twitter-x-fill"} className="icon" />
                </a>
                <a target="_blank" href="https://www.github.com/alishazin/">
                    <Icon icon={"mdi:github"} className="icon" />
                </a>
                <a target="_blank" href="https://www.linkedin.com/in/ali-shazin-6157b5251/">
                    <Icon icon={"mdi:linkedin"} className="icon" />
                </a>
            </div>
        </div>
        
        
    </section>
    )
}

export default Contact;