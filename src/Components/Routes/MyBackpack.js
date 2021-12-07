import React from "react"
import SecondNavbar from "../SubComponents/SecondNavbar"
import profile from "../../Assets/img/Profile.png"
import Comment from "../SubComponents/Shared/Comment.jsx"
import ClassroomDisplay from "../SubComponents/Classroom/ClassroomDisplay"
import icon from "../../Assets/img/icon.svg"
import pdf from "../../Assets/img/pdf.png"
import folder from "../../Assets/img/folder_icon.png"
import Video from "../../Assets/img/video_icon.png"
import BlueIcon from "../../Assets/img/icon_with_background.svg"
import Book from "../../Assets/img/Book.png"
import File from "../SubComponents/Shared/Files"
import Post from "../SubComponents/Shared/Post"
import Announcement from "../SubComponents/Shared/Announcement"
import BookForSale from "../SubComponents/BookStore/BookForSale"



const MyBackpack = () => {
    return (
        <>
            <SecondNavbar />
            <div className="container-fluid MyBackapck" style={{ backgroundColor: "rgb(247, 247, 247)" }}>
                <div className="MaxWidth pb-5">
                    <div className="row pb-md-3 mx-0">
                        <div className="col-11 px-0 mx-auto">
                            <div className="row mx-0">
                                <div className="col-12 col-md-4 mt-3 mx-auto px-1">
                                    <div className="card SideCard p-4 mb-3">
                                        <img src={profile}
                                            className="rounded mx-auto d-block"
                                            width="50%" height="50%"
                                            alt="Company Name" />
                                        <div className="card-body text-center">
                                            <h5>Full Name</h5>
                                            <p className="mb-0">School Name | College Name</p>
                                            <p className="mb-0">Major Name</p>
                                        </div>
                                    </div>
                                    <div class="comments card SideCard py-4 px-5 mb-3">
                                        <div class="card-header mb-1">
                                            <h5>My Comments</h5>
                                        </div>
                                        <div class="card-body p-2 ">
                                            <Comment
                                                professorName="Professor Name"
                                                date="1st July 2020"
                                                Comment="This is your Comment"
                                            />
                                            <Comment
                                                professorName="Professor Name"
                                                date="1st July 2020"
                                                Comment="This is your Comment"
                                            />
                                            <Comment
                                                professorName="Professor Name"
                                                date="1st July 2020"
                                                Comment="This is your Comment"
                                            />
                                        </div>
                                        <div className="col-12 text-center" onClick={console.log("loaded")}>
                                            <p className="Bold mb-0" style={{ cursor: "pointer" }}>load More</p>
                                        </div>
                                    </div>
                                    <div class="card SideCard p-3">
                                        <div class="card-header mb-1">
                                            <h5>My Classroom</h5>
                                        </div>
                                        <div class="card-body py-2 pr-2 pl-0">
                                            <ClassroomDisplay
                                                ClassroomName="Classroom Name"
                                                Code="Public"
                                                UniversityName="American University of Middle East"
                                                AdminName="Admin Name"
                                            />
                                            <ClassroomDisplay
                                                ClassroomName="Classroom Name"
                                                Code="c4sd5"
                                                UniversityName="American University of Middle East"
                                                AdminName="Admin Name"
                                            />
                                            <ClassroomDisplay
                                                ClassroomName="Classroom Name"
                                                Code="Public"
                                                UniversityName="American University of Middle East"
                                                AdminName="Admin Name"
                                            />
                                        </div>
                                        <div className="col-12 text-center" onClick={console.log("loaded")}>
                                            <p className="Bold mb-0" style={{ cursor: "pointer" }}>load More</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-8 mt-3 pl-2">
                                    <div class="card p-3 mb-3">
                                        <div class="card-header mb-1 pb-3">
                                            <span className="mb-0 DarkGray d-inline-flex">
                                                <img src={icon} className="pr-3 pt-2" width="35px" height="33px" alt="" />
                                                <p className="mb-0 mt-2 FS_16">Files(3)</p>
                                            </span>
                                        </div>
                                        <div class="card-body py-2 px-0">
                                            <div className="col-12 col-sm-6 col-lg-3 d-inline-flex px-1 mb-3">
                                                <File thumbNail={pdf} fileName="Sheets .pdf" />
                                                <File thumbNail={folder} fileName="Sheet" />
                                            </div>
                                            <div className="col-12 col-sm-6 col-lg-3 d-inline-flex px-1 mb-3">
                                                <File thumbNail={Video} fileName="Lecture 1" />
                                                <File thumbNail={pdf} fileName="Sheets .pdf" />
                                            </div>
                                            <div className="col-12 col-sm-6 col-lg-3 d-inline-flex px-1 mb-3">
                                                <File thumbNail={folder} fileName="Sheet" />
                                                <File thumbNail={Video} fileName="Lecture 1" />
                                            </div>
                                            <div className="col-12 text-center" onClick={console.log("loaded")}>
                                                <p className="Bold mb-0" style={{ cursor: "pointer" }}>load More</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card p-3 mb-3">
                                        <div class="card-header mb-1 pb-3">
                                            <span className="mb-0 DarkGray d-inline-flex">
                                                <img src={icon} className="pr-3 pt-2" width="35px" height="33px" alt="" />
                                                <p className="mb-0 mt-2 FS_16">Fav 2<sup>nd</sup> handbook posts (3)</p>
                                            </span>
                                        </div>
                                        <div class="row card-body pb-2 pt-0 px-0 m-0">
                                            <BookForSale
                                                Img={Book}
                                                Price="$24"
                                                Date="01 July 2020"
                                                Name="Book Name"
                                                icon={BlueIcon}
                                            />
                                            <BookForSale
                                                Img={Book}
                                                Price="$24"
                                                Date="01 July 2020"
                                                Name="Book Name"
                                                icon={BlueIcon}
                                            />
                                            <BookForSale
                                                Img={Book}
                                                Price="$24"
                                                Date="01 July 2020"
                                                Name="Book Name"
                                                icon={BlueIcon}
                                            />
                                        </div>
                                    </div>
                                    <div class="card p-3 mb-3">
                                        <div class="card-header mb-1 pb-3">
                                            <span className="mb-0 DarkGray d-inline-flex">
                                                <img src={icon} className="pr-3 pt-2" width="35px" height="33px" alt="" />
                                                <p className="mb-0 mt-2 FS_16">Favourite Service Spot</p>
                                            </span>
                                        </div>
                                        <div class="card-body py-2 px-0">
                                            <Post PostTitle="Post title line" Date="01 July 2020" Description="Description " />
                                            <Post PostTitle="Post title line" Date="01 July 2020" Description="Description " />
                                        </div>
                                    </div>
                                    <div class="card p-3 mb-3">
                                        <div class="card-header mb-1 pb-3">
                                            <span className="mb-0 DarkGray d-inline-flex">
                                                <img src={icon} className="pr-3 pt-2" width="35px" height="33px" alt="" />
                                                <p className="mb-0 mt-2 FS_16">Classroom Announcements (2)</p>
                                            </span>
                                        </div>
                                        <div class="card-body py-2 px-0" id="anno">
                                            <Announcement
                                                ClassroomName="Classroom Name"
                                                AnnouncementsLine="Announcement Line 1"
                                                Date="01 July 2020"
                                                Description="Description"
                                            />
                                            <Announcement
                                                ClassroomName="Classroom Name"
                                                AnnouncementsLine="Announcement Line 1"
                                                Date="01 July 2020"
                                                Description="Description"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MyBackpack