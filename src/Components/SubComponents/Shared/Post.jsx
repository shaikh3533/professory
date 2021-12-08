import React from 'react';
import BlueIcon from "../../../Assets/img/icon_with_background.svg"

const Post = (props) => {
    return (
        <div className="bordr p-3 mb-3">
            <div className="row">
                <div className="col px-0">
                    <p className="text-left Fs-18 mb-1">{props.PostTitle}</p>
                </div>
                <div className="col px-0">
                    <p className="text-right mb-1">{props.Date}</p>
                </div>
            </div>
            <p className="text-left FS_14 mb-0 d-block">{props.Description} <span style={{ float: "right" }}><img src={BlueIcon} alt="" /></span></p>
        </div>);
}

export default Post;