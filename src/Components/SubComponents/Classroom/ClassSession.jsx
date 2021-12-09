import React from "react"
import SecondNavbar from "../SecondNavbar"
import { NavLink } from 'react-router-dom';
import Clock from "../../../Assets/img/Clock.png"
import Send from "../../../Assets/img/Send.png"
import TextBoard from "../../../Assets/img/TextBoard.png"
import Sample_video_session from "../../../Assets/img/Sample_video_session.png"
import Block from "../../../Assets/img/block.png"
import { Tabs } from 'antd';
import TeacherTab from "./TeacherTabs";

// const Students = [
//     { name: "Student 1" },
//     { name: "Student 2" },
//     { name: "Student 3" },
//     { name: "Student 4" }
// ]

// const RenderStudentList = Students.map(Student => {
//     return <div className="row">
//         <p className="col-9 mb-0 FS_16 Montserrat" >{Student.name}</p>
//         <div className="col-3">
//             <img src={Block} alt="" className="w-auto" />
//         </div>
//     </div>
// })


const { TabPane } = Tabs;

const ClassSession = () => {


    return (
        <>
            <SecondNavbar />
            <div className="container-fluid Background mb-5">
                <div className="row">
                    <div className="col-12">
                        <div className="row" style={{ height: "25px", backgroundColor: "#F8FAFF" }} >
                            <div className="col-9">
                                <p className="text-center mb-0">ClassroomName</p>
                            </div>
                            <div className="col-3 d-inline-flex" style={{ height: "inherit" }}>
                                <img src={Clock} alt="Clock" className="py-1" />
                                <p className="mb-0 px-2" >00:00</p>
                                <img src={Send} alt="Send" className="px-3 py-1" />

                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="row">
                            <div className="col-12 col-md-8 pr-0">
                                <img src={TextBoard} alt="Canvas" className="w-100" />
                            </div>
                            <div className="col-12 col-md-4 pl-0">
                                <img src={Sample_video_session} alt="Sample_video_session" className="w-100" />
                                <div className="LiveSession" >

                                    <TeacherTab />
                                    {/* <Tabs defaultActivekey="1" className="qwertyuioooooooooiuyt">
                                        <TabPane tab={<p className="w-100 text-center mb-0 Bold FS_16">Student List</p>} key="1">
                                            {RenderStudentList}</TabPane>

                                        <TabPane tab={<p className="w-100 text-center mb-0 Bold FS_16">Chat Room</p>} key="2">
                                            Content of Tab Pane 2</TabPane>
                                    </Tabs> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default ClassSession