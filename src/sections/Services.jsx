import "../styles/sections/services.css"
import { Icon } from "@iconify/react";


function Services() {
    return (
    <section id="services">
        <h3>Our Services</h3>
        
        <div className="cards">
            <div className="card side">
                <div className="name">FREE</div>
                <div className="for">Perfect for Testing</div>
                <div className="price">₹0<span>/month</span></div>
                <div className="separator"></div>
                <div className="list">
                    <div className="item">
                        <Icon className="icon" icon="mynaui:check-circle-one" />
                        <span>Upto 100 students.</span>
                    </div>
                    <div className="item">
                        <Icon className="icon" icon="mynaui:check-circle-one" />
                        <span>Web access.</span>
                    </div>
                    <div className="item">
                        <Icon className="icon" icon="mynaui:check-circle-one" />
                        <span>Basic reports.</span>
                    </div>
                </div>
            </div>
            <div className="card middle">
                <div className="name">STARTER</div>
                <div className="for">Perfect for Small Departments</div>
                <div className="price">₹2,000<span>/month</span></div>
                <div className="separator"></div>
                <div className="list">
                    <div className="item">
                        <Icon className="icon" icon="mynaui:check-circle-one" />
                        <span>Upto 500 students.</span>
                    </div>
                    <div className="item">
                        <Icon className="icon" icon="mynaui:check-circle-one" />
                        <span>Web access.</span>
                    </div>
                    <div className="item">
                        <Icon className="icon" icon="mynaui:check-circle-one" />
                        <span>Access to API.</span>
                    </div>
                    <div className="item">
                        <Icon className="icon" icon="mynaui:check-circle-one" />
                        <span>Detailed reports.</span>
                    </div>
                </div>
            </div>
            <div className="card side">
                <div className="name">PRO</div>
                <div className="for">Perfect for Testing</div>
                <div className="price">₹10,000<span>/month</span></div>
                <div className="separator"></div>
                <div className="list">
                    <div className="item">
                        <Icon className="icon" icon="mynaui:check-circle-one" />
                        <span>Unlimited users.</span>
                    </div>
                    <div className="item">
                        <Icon className="icon" icon="mynaui:check-circle-one" />
                        <span>API integration with support.</span>
                    </div>
                    <div className="item">
                        <Icon className="icon" icon="mynaui:check-circle-one" />
                        <span>Access to webhook and sockets.</span>
                    </div>
                    <div className="item">
                        <Icon className="icon" icon="mynaui:check-circle-one" />
                        <span>Detailed reports.</span>
                    </div>
                </div>
            </div>
        </div>

    </section>
    )
}

export default Services;