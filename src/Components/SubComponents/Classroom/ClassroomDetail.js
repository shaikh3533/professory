import React from 'react';
import SecondNavbar from "../SecondNavbar"
import AnnouncmentTab from './AnnouncementTab';
import ClassroomTabs from "./ClassroomTabs"
import { Comment, Avatar } from 'antd';
import Profile from "../../../Assets/img/user.png"
import { NavLink } from 'react-router-dom';

const ClassroomDetail = () => {
    const Messeges = [
        {
            dp: Profile,
            username: "Username",
            message: "Lorem Ipsum is simply dummy the printing and typesetting."
        },
        {
            dp: Profile,
            username: "Username",
            message: "Lorem Ipsum is simply dummy the printing and typesetting."
        },
        {
            dp: Profile,
            username: "Username",
            message: "Lorem Ipsum is simply dummy the printing and typesetting."
        }
    ]
    const RenderMesseges = Messeges.map(msg => {
        return <Comment
            avatar={
                <Avatar
                    src={msg.dp}
                    alt="Profile"
                />
            }
            author={<p className="mb-0 Black Poppins" >{msg.username}</p>}
            content={
                <p className="Poppins FS_18" >{msg.message}</p>
            }
        />
    })
    return (
        <>
            <SecondNavbar />
            <div className="container-fluid mb-md-5">
                <div className="row">
                    <div className="row col-11 col-md-10 mx-auto px-0 px-md-2 mb-md-5">
                        <div className="col-12 col-md-6 mt-3 px-0 Details ">
                            <ClassroomTabs />
                        </div>
                        <div className="col-12 col-md-6 mt-3 p-3 Chat">
                            <p className="Poppins FS_13 pl-4" ><strong>Chat </strong>| Members</p>
                            <div className="DottedBorder">
                                <div className="ScrollBar" style={{ minHeight: "300px", maxHeight: "350px", height: "auto" }}>
                                    {RenderMesseges}
                                </div>
                                <div className="boottom">
                                    <p className="text-center mb-0">Only Admin can send messages.</p>
                                </div>
                            </div>

                            <div className="col-12 pt-3">
                                <NavLink to="/Classroom/Join">
                                    <button className="button Round_edge filled_btn mx-auto d-block px-5" type="button">Join</button>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ClassroomDetail;