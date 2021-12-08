import React, { useEffect, useState } from "react";
import folderimg from "../../../Assets/img/folder_icon.png"
import Slideimg from "../../../Assets/img/pdf.png"
import Folder from "./Folder";
import HomeWork from "./HomeWork";
import Slides from "./Slides";



const LectureNotesTab = () => {
    const InitialState = {
        folderShow: 6,
        SlidesShow: 6,
        WorkShow: 6
    }


    const [formData, setFormData] = useState(InitialState);

    const { folderShow, SlidesShow, WorkShow } = formData;


    const LecNotesData = [
        {
            thumbnail: folderimg,
            Day: "Day 1",
            Date: "02 Jan, 2019"
        },
        {
            thumbnail: folderimg,
            Day: "Day 1",
            Date: "02 Jan, 2019"
        },
        {
            thumbnail: folderimg,
            Day: "Day 1",
            Date: "02 Jan, 2019"
        },
        {
            thumbnail: folderimg,
            Day: "Day 1",
            Date: "02 Jan, 2019"
        },
        {
            thumbnail: folderimg,
            Day: "Day 1",
            Date: "02 Jan, 2019"
        },
        {
            thumbnail: folderimg,
            Day: "Day 1",
            Date: "02 Jan, 2019"
        },
        {
            thumbnail: folderimg,
            Day: "Day 1",
            Date: "02 Jan, 2019"
        },
        {
            thumbnail: folderimg,
            Day: "Day 1",
            Date: "02 Jan, 2019"
        }
    ]

    const SlidesData = [
        {
            thumbnail: Slideimg,
            name: "Sheets.pdf"
        },
        {
            thumbnail: Slideimg,
            name: "Sheets.pdf"
        },
        {
            thumbnail: Slideimg,
            name: "Sheets.pdf"
        },
        {
            thumbnail: Slideimg,
            name: "Sheets.pdf"
        },
        {
            thumbnail: Slideimg,
            name: "Sheets.pdf"
        },
        {
            thumbnail: Slideimg,
            name: "Sheets.pdf"
        },
        {
            thumbnail: Slideimg,
            name: "Sheets.pdf"
        },
        {
            thumbnail: Slideimg,
            name: "Sheets.pdf"
        }
    ]

    const HomeWorkData = [
        {
            thumbnail: Slideimg,
            name: "Sheets.pdf"
        },
        {
            thumbnail: Slideimg,
            name: "Sheets.pdf"
        },
        {
            thumbnail: Slideimg,
            name: "Sheets.pdf"
        },
        {
            thumbnail: Slideimg,
            name: "Sheets.pdf"
        },
        {
            thumbnail: Slideimg,
            name: "Sheets.pdf"
        },
        {
            thumbnail: Slideimg,
            name: "Sheets.pdf"
        },
        {
            thumbnail: Slideimg,
            name: "Sheets.pdf"
        },
        {
            thumbnail: Slideimg,
            name: "Sheets.pdf"
        }
    ]

    const LoadMoreFolder = () => {
        setFormData({
            ...formData,
            folderShow: LecNotesData.length
        })
    }

    const ShowLessFolder = () => {
        setFormData({
            ...formData,
            folderShow: 6
        })
    }

    const LoadMoreSlides = () => {
        setFormData({
            ...formData,
            SlidesShow: SlidesData.length
        })
    }

    const ShowLessSlides = () => {
        setFormData({
            ...formData,
            SlidesShow: 6
        })
    }

    const LoadMoreWork = () => {
        setFormData({
            ...formData,
            WorkShow: HomeWorkData.length
        })
    }

    const ShowLessWork = () => {
        setFormData({
            ...formData,
            WorkShow: 6
        })
    }


    const RenderLecNotes = LecNotesData.slice(0, folderShow).map(folder => {
        return <Folder img={folder.thumbnail} Day={folder.Day} Date={folder.Date} />
    })


    const RenderSlides = SlidesData.slice(0, SlidesShow).map(Slide => {
        return <Slides img={Slide.thumbnail} name={Slide.name} />
    })

    const RenderHomeWork = HomeWorkData.slice(0, WorkShow).map(Work => {
        return <HomeWork img={Work.thumbnail} name={Work.name} />
    })

    return (
        <>
            <div className="ScrollBar" >
                <div className="row">
                    <div className="col-10 px-0">
                        <p className="Bold Montserrat" >Lecture Notes</p>
                    </div>
                    {folderShow < LecNotesData.length ?
                        <div className="col-2 px-0" onClick={LoadMoreFolder}>
                            <p className="Bold Montserrat text-right" style={{ cursor: "pointer" }} >More</p>
                        </div> :
                        <div className="col-2 px-0" onClick={ShowLessFolder}>
                            <p className="Bold Montserrat text-right" style={{ cursor: "pointer" }}>Less</p>
                        </div>
                    }
                    {RenderLecNotes}
                </div>
                <div className="row">
                    <div className="col-10 px-0">
                        <p className="Bold Montserrat" >Slides</p>
                    </div>
                    {SlidesShow < SlidesData.length ?
                        <div className="col-2 px-0" onClick={LoadMoreSlides}>
                            <p className="Bold Montserrat text-right" style={{ cursor: "pointer" }} >More</p>
                        </div> :
                        <div className="col-2 px-0" onClick={ShowLessSlides}>
                            <p className="Bold Montserrat text-right" style={{ cursor: "pointer" }}>Less</p>
                        </div>
                    }
                    {RenderSlides}
                </div>
                <div className="row">
                    <div className="col-10 px-0">
                        <p className="Bold Montserrat" >Home Work</p>
                    </div>
                    {WorkShow < HomeWorkData.length ?
                        <div className="col-2 px-0" onClick={LoadMoreWork}>
                            <p className="Bold Montserrat text-right" style={{ cursor: "pointer" }} >More</p>
                        </div> :
                        <div className="col-2 px-0" onClick={ShowLessWork}>
                            <p className="Bold Montserrat text-right" style={{ cursor: "pointer" }}>Less</p>
                        </div>
                    }
                    {RenderHomeWork}
                </div>
            </div>
            
        </>
    )
}

export default LectureNotesTab