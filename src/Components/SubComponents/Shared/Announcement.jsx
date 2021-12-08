import React from 'react';
import BlueIcon from "../../../Assets/img/icon_with_background.svg"

const Announcement = (props) => {
    return (
        <div class="p-2 mb-3" style={{border:"1px solid #E0EEFF"}}>
            <div class="card-header mb-1 pb-2">
                <span className="mb-0 ThemeColor">
                    <p className="mb-0 mt-2 FS-18 Bold">{props.ClassroomName}</p>
                </span>
            </div>
            <div class="py-2 px-0">
                <div className="row">
                    <div className="col px-0">
                        <p className="text-left mb-1">{props.AnnouncementsLine}</p>
                    </div>
                    <div className="col px-0">
                        <p className="text-right mb-1">{props.Date}</p>
                    </div>
                </div>
                    <p className="text-left FS_14 mb-0 d-block">{props.Description} <span style={{ float: "right" }}><img src={BlueIcon}  alt=""/></span></p>
            </div>
        </div>
    );
}

export default Announcement;