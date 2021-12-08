import React, { useEffect, useState } from "react";
import VoiceClips from "./VoiceClips"


const LecVoiceNotesTab = () => {

    const VoiceClipsData = [
        {
            Name: "Lecture Notes 1",
            Date: "02 Jan, 2019",
            Time: "02:40 Min",
        },
        {
            Name: "Lecture Notes 1",
            Date: "02 Jan, 2019",
            Time: "02:40 Min",
        },
        {
            Name: "Lecture Notes 1",
            Date: "02 Jan, 2019",
            Time: "02:40 Min",
        },
        {
            Name: "Lecture Notes 1",
            Date: "02 Jan, 2019",
            Time: "02:40 Min",
        },
        {
            Name: "Lecture Notes 1",
            Date: "02 Jan, 2019",
            Time: "02:40 Min",
        },
        {
            Name: "Lecture Notes 1",
            Date: "02 Jan, 2019",
            Time: "02:40 Min",
        },
        {
            Name: "Lecture Notes 1",
            Date: "02 Jan, 2019",
            Time: "02:40 Min",
        },
        {
            Name: "Lecture Notes 1",
            Date: "02 Jan, 2019",
            Time: "02:40 Min",
        }
    ]


    const RenderVoiceClips = VoiceClipsData.map(Clip => {
        return <VoiceClips Name={Clip.Name} Date={Clip.Date} Time={Clip.Time} />
    })

    return (
        <>
            <div className="col-12">
                <p className="Bold Montserrat" >Lecture Voice Notes</p>
            </div>
            <div className="ScrollBar" style={{height:"265px"}} >
                <div className="row">
                    {RenderVoiceClips}
                </div>
            </div>
            <div className="col-12 pt-3">
                <button className="button Round_edge filled_btn mx-auto d-block px-4" type="button">Add Audio</button>
            </div>

        </>
    )


}

export default LecVoiceNotesTab