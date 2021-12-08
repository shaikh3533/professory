import React from 'react';
import { Tabs } from 'antd';
import LectureNotes from "../../../Assets/img/LectureNotes.png"
import LecVoiceNotes from "../../../Assets/img/LecVoiceNotes.png"
import Announcments from "../../../Assets/img/Announcments.png"
import LiveStreaming from "../../../Assets/img/LiveStreaming.png"
import LectureNotesTab from './LectureNotesTab';
import LecVoiceNotesTab from './LecVoiceNotesTab';
import AnnouncmentTab from './AnnouncementTab';
import { NavLink } from 'react-router-dom';



const ClassroomTabs = (props) => {

    const { TabPane } = Tabs;

    function callback(key) {
        console.log(key);
    }

    return (
        <>
            <div className="row">
                <Tabs onChange={callback} type="card" className="pr-2 pb-5 pl-3 cvb">
                    <TabPane tab={<div className="col-12 px-0 py-2 mx-auto"><img src={LectureNotes} className="d-block mx-auto" alt="" /><p className="text-center FS_8 pt-2 mb-0">Lecture Notes</p></div>} key="1">
                        <LectureNotesTab />
                    </TabPane>
                    <TabPane tab={<div className="col-12 px-0 py-2 mx-auto"><img src={LecVoiceNotes} className="d-block mx-auto" alt="" /><p className="text-center FS_8 pt-2 mb-0">Lec Voice Notes</p></div>} key="2">
                        <LecVoiceNotesTab />
                    </TabPane>
                    <TabPane tab={<div className="col-12 px-0 py-2 mx-auto"><img src={Announcments} className="d-block mx-auto" alt="" /><p className="text-center FS_8 pt-2 mb-0">Announcments</p></div>} key="3">
                        <AnnouncmentTab />
                    </TabPane>
                    <TabPane  tab={<NavLink  to="/MyBackpack"><div className="col-12 px-0 py-2 mx-auto"><img src={LiveStreaming} className="d-block mx-auto" alt="" /><p className="text-center FS_8 pt-2 mb-0 Black">Live Streaming</p></div></NavLink>} key="4">
                            Content of Tab Pane 4
                    </TabPane>
                </Tabs>
            </div>
        </>
    );
}

export default ClassroomTabs;