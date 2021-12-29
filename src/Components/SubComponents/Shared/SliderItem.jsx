import React from "react"
import { NavLink } from "react-router-dom"

const SliderItem = (props) => {
    return (
        <>
            <div className="item news-grid position-relative p-4">
                    <NavLink to={props.link}>
                        <div className="half position-relative">
                            <img className="position-absolute" src={props.img} alt={props.title} />
                        </div>
                        <div className="news-grid-txt ">
                            <h4>{props.title}</h4>
                            <p className="FS_15">{props.text}</p>
                        </div>
                    </NavLink>
            </div>
        </>
    )
}


export default SliderItem