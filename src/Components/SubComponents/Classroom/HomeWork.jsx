import React from "react"

const HomeWork = (props) => {
    return (

        <div className="col-4 col-sm-2 col-md-4 col-lg-2 px-0">
            <img src={props.img} className="mx-auto d-block" width="50px" alt="HomeWork" />
            <p className="FS_8 text-center mt-2 Bold Poppins" >{props.name}</p>
        </div>
    )
}

export default HomeWork