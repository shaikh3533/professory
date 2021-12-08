import React from "react"
import Mic from "../../../Assets/img/Mic.png"
import PlayButton from "../../../Assets/img/PlayButton.png"
import icon from "../../../Assets/img/icon.png"

const VoiceClips = (props) => {
    return (
        <>
            <div className="col-12 py-1 px-0">
                <div className="row" style={{borderBottom:"1px solid #E0EEFF"}}>
                    <div className="col-2 pr-0 position-realitive">
                        <img src={Mic} alt="Mic" style={{ top: "50%", transform: "translate(30%, -50%)" }} className="position-absolute d-block mx-auto" />
                    </div>
                    <div className="col-7 py-1 pr-0">
                        <p className="Poppins Bold mb-1" >{props.Name}</p>
                        <p className="FS_10 mb-1" >{props.Date} | {props.Time}</p>
                    </div>
                    <div className="col-3 px-0 d-inline-flex">
                        <div className="d-block my-auto w-50">
                            <img src={PlayButton} alt="PlayButton" style={{ top: "50%" }} className="d-block mx-auto" />
                        </div>
                        <div className="d-block my-auto w-50">
                            <img src={icon} alt="icon" style={{ top: "50%" }} className="d-block mx-auto" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default VoiceClips
