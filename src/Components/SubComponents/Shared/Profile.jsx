import React from 'react';
import ProfilePic from "../../../Assets/img/Profile.png"

const Profile = () => {
    return (
        <>
        <div className="col-12 col-lg-4 pl-0 mt-4">
            <div className="ShadowBordr Round25 p-3 text-center mt-3 p-4 pb-5">
                <img src={ProfilePic} className="d-block mx-auto pb-3" alt="" />
                <h5>Full Name</h5>
                <p>Book Seller</p>
                <button
                    className="Round_edge button filled_btn w-100 py-2"
                    type="button">
                    Phone/Whatsapp
            </button>
                <textarea
                    id="Description" name="Description"
                    placeholder="Your Message"
                    rows="3"
                    className="my-3 pl-3"
                ></textarea>
                <button
                    className="Round_edge button filled_btn w-100 py-2 mb-0 mb-md-3"
                    type="button">
                    Send Message
            </button>
            </div>
        </div>
        </>
    );
}

export default Profile;