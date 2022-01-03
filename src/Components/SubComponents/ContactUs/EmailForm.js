import React from "react";
import Email from '../../../Assets/img/email_1.png'
import Facebook from '../../../Assets/img/facebook_1.png'
import Twitter from '../../../Assets/img/twitter_1.png'
import Instagram from '../../../Assets/img/instagram_1.png'
import Pinterest from '../../../Assets/img/pinterest_1.png'


const EmailForm = () => {
    return (
        <>
            <p className="FS_30 Bolder greyBlack">Send Email</p>
            <p className="text-nowrap FS_18 greyBlack" subHeading>You can also contact us at:</p>
            <div className="d-inline-flex my-3">
                <div>
                    <img src={Email} alt="" className="mr-3 my-3" />
                </div>
                <div>
                    <h4 className="FS_17 Bold greyBlack">Email</h4>
                    <p className="FS_19 greyBlack">info@reilitics.com</p>
                </div>
            </div>
            <h4 className='text-nowrap FS_21 Boldest greyBlack'>Get in contact on social media</h4>
            <div className="d-inline">
                <img className="icon" src={Facebook} alt="" />
                <img className="icon" src={Twitter} alt="" />
                <img className="icon" src={Instagram} alt="" />
                <img className="icon" src={Pinterest} alt="" />
            </div>
        </>
    )
}
export default EmailForm