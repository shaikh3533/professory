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
            <p className="text-nowrap mb-0 FS_18" subHeading>You can also contact us at:</p>
            <div className="d-inline-flex">
                <div className=" d-flex">
                    <img src={Email} alt="" className="mr-3 my-auto" />
                </div>
                <div>
                    <p className="FS_17 mb-0 Bold greyBlack">Email</p>
                    <p className="FS_19 mb-0 greyBlack">info@reilitics.com</p>
                </div>
            </div>
            <p className=' FS_20 Boldest greyBlack'>Get in contact on social media</p>
            <div className="d-flex linksDiv mt-0">
                <img className="icon links" src={Facebook} alt="" />
                <img className="icon links" src={Twitter} alt="" />
                <img className="icon links" src={Instagram} alt="" />
                <img className="icon links" src={Pinterest} alt="" />
            </div>
        </>
    )
}
export default EmailForm