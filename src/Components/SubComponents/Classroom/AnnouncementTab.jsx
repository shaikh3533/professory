import React from "react"
import { Comment, Avatar } from 'antd';
import Profile from "../../../Assets/img/user.png"
import AttachPin from "../../../Assets/img/AttachPin.png"

const Announcments = [
    {
        username: "Username",
        dp: Profile,
        headline: "Headline Announcement 1",
        date: "10 July, 2020",
        time: "2020",
        details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
        username: "Username",
        dp: Profile,
        headline: "Headline Announcement 2",
        date: "10 July, 2020",
        time: "2020",
        details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
        username: "Username",
        dp: Profile,
        headline: "Headline Announcement 1",
        date: "10 July, 2020",
        time: "2020",
        details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    }
]

// Converting to map function

const RenderAnnouncments = Announcments.map(Anouncement => {
    return <Comment
        author={<div className="combineButton p-2 mb-2" style={{ width: "180px" }} ><p className="mb-0 Black Poppins" >{Anouncement.username}</p></div>}
        avatar={
            <Avatar
                src={Anouncement.dp}
                alt={Anouncement.dp}
            />
        }
        content={
            <div >
                <p className="Black Poppins FS_18" >{Anouncement.headline}</p>
                <p className="Poppins LightGray FS_12 mb-3" >{Anouncement.date} | {Anouncement.time}</p>
                <p className="Poppins mb-3 FS_12">{Anouncement.details}</p>
                <div className="d-inline-flex button Round_edge p-2" style={{ width: "180px" }} >
                    <img style={{ width: "20px" }} src={AttachPin} alt="attachment" />
                    <p className="px-2" >Attached File</p>
                </div>
            </div>
        }
    />
})


const AnnouncmentTab = () => {
    return (
        <>
            <div className="ScrollBar">
                {RenderAnnouncments}
            </div>
            <div className="col-12 pt-3">
                <button className="button Round_edge filled_btn mx-auto d-block px-4" type="button">Add Audio</button>
            </div>
        </>
    )
}

export default AnnouncmentTab