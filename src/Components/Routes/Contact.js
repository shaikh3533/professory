import React from "react"
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

class Contact extends React.Component {
    constructor() {
        super();
        this.state = {
            fullName: "",
            email: "",
            phone: "",
            message: ""
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        const { name, value } = event.target
        this.setState({
            [name]: value
        }
        )
    }


    render() {
        return (
            <div className="row Contact">
                <div className="col-11 col-md-4 mx-auto my-5">
                    <form className="loginForm Round25 form m-4 p-4">
                        <div class="form-group text-center">
                            <h3 className="p-4" style={{ color: "rgb(38, 38, 38)" }}>Contact Now</h3>
                            <input
                                type="text"
                                class="form-control mx-auto"
                                name="fullName"
                                value={this.state.fullName}
                                placeholder="Full Name"
                                onChange={this.handleChange}
                            />
                        </div>
                        <div class="form-group">
                            <input
                                type="email"
                                class="form-control mx-auto"
                                name="email"
                                value={this.state.email}
                                onChange={this.handleChange}
                                placeholder="Email"
                            />
                        </div>
                        <PhoneInput
                            country={'us'}
                            value={this.state.phone}
                            name="phone"
                            // onChange={phone => this.setState({ phone })}
                            // onChange={updatePhone}
                        />
                        {/* <div class="form-group">
                            <input
                                type="tel"
                                class="form-control mx-auto"
                                name="phone"
                                value={this.state.phone}
                                onChange={this.handleChange}
                                placeholder="+964"
                            />
                        </div> */}
                        <div class="form-group">
                            <textarea
                                class="form-control"
                                name="message"
                                value={this.state.message}
                                onChange={this.handleChange}
                                rows="4"
                                placeholder="Your message"
                            ></textarea>
                        </div>
                        <div class="form-group">
                            <button
                                type="button"
                                class="form-control mx-auto button filled_btn">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Contact