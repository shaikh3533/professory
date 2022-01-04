import React from 'react';
import EmailForm from '../SubComponents/ContactUs/EmailForm';
import MessageForm from '../SubComponents/ContactUs/MessageForm';

const ContactUs = () => {
    return (
        <>
            <div className="pb-5">
                <div className="BackgroundImg About">
                    <div className="CenteredDivY">
                        <div className='container'>
                            <div className='px-5 mx-auto'>
                                <p className="white FS_45 Bold my-auto">Contact Us Now</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row container mx-auto">
                    <div className="px-5 mx-auto my-5">
                        <p className='FS_34 Bold mb-0'>We'd love to hear from you</p>
                        <p className='FS_18 mb-0'>Get in touch for any inqueries or suggestions.</p>
                        <div className="row">
                            <div className="col-lg-8 col-md-8 col-12 my-5 px-3 py-3 card border_1">
                                <p className='FS_27 Bold ml-4'>Send Message</p>
                                <MessageForm />
                            </div>
                            <div className="col-lg-4 col-md-4 col-12 my-5 py-3">
                                <EmailForm />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ContactUs;