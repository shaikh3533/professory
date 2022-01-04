import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import 'react-phone-number-input/style.css'
import PhoneInput from "react-phone-input-2";

const MessageForm = () => {
    const [userInput, setUserInput] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        subject: "",
        message: "",
        reCaptcha: false
    })
    const [value, setValue] = useState('')
    const submitMessage = event => {
        event.preventDefault();
    }
    const handleChange = (event) => {
        setUserInput(event.target.value)
    }
    const onChangeRecaptcha = (value) => {
        console.log("Captcha value:", value);
    }

    return (
        <>
            <form onSubmit={submitMessage}>
                <div className="row form">
                    {console.log(userInput)}
                    <div className="col-lg-6 col-md-6 col-12">
                        <div className="form-group my-2">
                            <input
                                type="text"
                                required
                                autoComplete={false}
                                className='form-control'
                                value={userInput.firstName}
                                id="firstName"
                                onChange={handleChange}
                                placeholder="First Name"
                            />
                            <label htmlFor="phone" >First Name</label>
                        </div>
                        <div class="form-group my-2">
                            <PhoneInput
                                placeholder="Enter phone number"
                                required
                                inputProps={{
                                    name: "phone",
                                    required: true,
                                }}
                                containerClass="mb-3"
                                country={"kw"}
                                className='phoneInputInput phoneInput'
                                value={value}
                                onChange={setValue} />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12">
                        <div class="form-group my-2">
                            <input
                                type="text"
                                required
                                autoComplete={false}
                                className='form-control'
                                value={userInput.lastName}
                                id="lastName"
                                onChange={handleChange}
                                placeholder="Last Name"
                            />
                            <label htmlFor="phone" >Last Name</label>
                        </div>
                        <div class="form-group my-2">
                            <input
                                type="email"
                                required
                                autoComplete={false}
                                className='form-control'
                                value={userInput.email}
                                id="email"
                                onChange={handleChange}
                                placeholder="Email address"
                            />
                            <label htmlFor="phone" >Email address</label>
                        </div>
                    </div>
                    <div className="col-12">
                        <div class="form-group my-2">
                            <input
                                type="text"
                                required
                                className='form-control'
                                value={userInput.subject}
                                id="subject"
                                onChange={handleChange}
                                placeholder="Subject" />
                            <label htmlFor="phone" >Subject</label>
                        </div>
                    </div>
                    <div className="col-12">
                        <div class="form-group my-2">
                            <textarea
                                type="text"
                                required
                                className='form-control'
                                rows={4}
                                value={userInput.message}
                                id="message"
                                onChange={handleChange}
                                placeholder="Message" />
                            <label htmlFor="phone" >Message</label>
                        </div>
                    </div>
                    <div className="row w-100">
                        <div className="col-lg-9 col-md-9 col-12">
                            <h6 className="mb-0 FS_14">Please check the box below to complete</h6>
                            <div className="pl-0">
                                <ReCAPTCHA
                                    sitekey="6LdlkHUdAAAAAMp28lUJMQixeXECX2BU4VkJvUYl"
                                    id="reCaptcha"
                                    style={{ transform: 'scale(0.7)', transformOrigin: 'left' }}
                                    onChange={onChangeRecaptcha}
                                    name="reCaptcha"
                                    value={userInput}
                                />
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-2 col-12'>
                            <button type="submit" className='btn FS_15 buttonSubmit'>Send</button>
                        </div>
                    </div>
                </div>
            </form>
            <form className=" loginForm" onSubmit={submitMessage}>
                {/* <div className="row form">
                    {console.log(userInput)}
                    <div className="col-lg-6 col-md-6 col-12">
                        <div class="form-group my-2">
                            <input
                                type="text"
                                autoFocus
                                className='form-control'
                                value={userInput.firstName}
                                id="firstName"
                                onChange={handleChange}
                                placeholder="First Name">
                            </input>
                        </div>
                        <div class="form-group my-2">
                            <PhoneInput
                                placeholder="Enter phone number"
                                inputProps={{
                                    name: "phone",
                                    required: true,
                                }}
                                containerClass="mb-3"
                                country={"kw"}
                                className='phoneInputInput phoneInput'
                                value={value}
                                onChange={setValue} />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12">
                        <div class="form-group my-2">
                            <input
                                type="text" className='form-control' value={userInput.lastName} id="lastName" onChange={handleChange} placeholder="Last Name">
                            </input>
                        </div>
                        <div class="form-group my-2">
                            <input
                                type="email" className='form-control' value={userInput.email} id="email" onChange={handleChange} placeholder="Email address">
                            </input>
                        </div>
                    </div>
                    <div className="col-12">
                        <div class="form-group my-2">
                            <input
                                type="text" className='form-control' value={userInput.subject} id="subject" onChange={handleChange} placeholder="Subject">
                            </input>
                        </div>
                    </div>
                    <div className="col-12">
                        <div class="form-group my-2">
                            <textarea
                                type="text" className='form-control' cols={10} rows={6} value={userInput.message} id="message" onChange={handleChange} placeholder="Message">
                            </textarea>
                        </div>
                    </div>
                    <div className="d-inline-flex col-12">
                        <div>
                            <h6 className="mb-0 FS_14">Please check the box below to complete</h6>
                            <br />
                            <ReCAPTCHA
                                sitekey="6LdlkHUdAAAAAMp28lUJMQixeXECX2BU4VkJvUYl"
                                id="reCaptcha"
                                className='ReCAPTCHA'
                                onChange={onChangeRecaptcha}
                                name="reCaptcha"
                                value={userInput}
                            />,
                        </div>
                        <div className='ml-auto'>
                            <button type="submit" className='btn FS_15 buttonSubmit'>Send</button>
                        </div>
                    </div>
                </div> */}
            </form>
        </>
    )
}
export default MessageForm;