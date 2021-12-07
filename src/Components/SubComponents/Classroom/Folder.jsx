import React from "react"

const Folder = (props) => {
    return (

        <div className="col-4 col-sm-2 col-md-4 col-lg-2 px-0">
            <img src={props.img} className="mx-auto d-block" width="50px" alt="Folder" />
            <p className="FS_8 text-center mb-0 Bold Poppins" >{props.Day}</p>
            <p className="FS_8 text-center Poppins" >{props.Date}</p>
        </div>
    )
}

export default Folder