import React from 'react';
import Block from "../../../Assets/img/block.png"
import { Tabs } from 'antd';


const Students = [
    {
        name: "Student 1",
        id: 1
    },
    {
        name: "Student 2",
        id: 2
    },
    {
        name: "Student 3",
        id: 3
    },
    {
        name: "Student 4",
        id: 4
    }
]

const RenderStudentList = Students.map(Student => {
    return <div key={Student.id} className="row Student">
        <p className="col-9 mb-0 FS_16 Montserrat" >{Student.name}</p>
        <div className="col-3">
            <img src={Block} alt="" className="ml-auto d-block" />
        </div>
    </div>
})


const { TabPane } = Tabs;

function callback(key) {
    console.log(key);
}

const TeacherTab = () => (
    <>
        <nav>
            <div className="nav nav-tabs" id="nav-tab" role="tablist">
                <a className="nav-link active bootstrap-btn text-center FS_16 Montserrat" id="nav-Student-List-tab " data-toggle="tab" href="#nav-Student-List" role="tab" aria-controls="nav-Student-List" aria-selected="true">Student List</a>
                <a className="nav-link bootstrap-btn text-center FS_16 Montserrat" id="nav-Chat-room-tab " data-toggle="tab" href="#nav-Chat-room" role="tab" aria-controls="nav-Chat-room" aria-selected="false">Chat Room</a>
            </div>
        </nav>
        <div className="tab-content ScrollBar" id="nav-tabContent" style={{ maxHeight: "350px", backgroundColor: "white" }} >
            <div className="tab-pane fade show active mb-4" id="nav-Student-List" role="tabpanel" aria-labelledby="nav-Student-List-tab">{RenderStudentList}</div>
            <div className="tab-pane fade" id="nav-Chat-room" role="tabpanel" aria-labelledby="nav-Chat-room-tab">...</div>
        </div>
    </>
);
export default TeacherTab