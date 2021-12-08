import React from 'react';

const BookDescription = (props) => {
    return (
        <>
            <div className="bordr p-1">
                <img src={props.Img} className="w-100" alt="" />
                <div className="row mt-3 mx-0 px-1 px-sm-3">
                    <div className="col d-inline-flex px-0 px-md-2 widthMaxContent">
                        <div>
                            <h5>{props.Name}</h5>
                            <p className="mb-1">{props.Date}</p>
                        </div>
                        <div className="d-flex px-2">
                            <img src={props.icon} alt="" className=" my-auto" />
                        </div>
                    </div>
                    <div className="col d-flex px-0">
                        <h3 className="my-auto ml-auto">{props.Price}</h3>
                    </div>
                </div>
            </div>
            <div className="mt-3 mt-md-5 pl-2 pl-md-4">
                <h5 className="pl-1">Description</h5>
                <p className="wSpace pl-1">{props.Description}</p>
            </div>
        </>
    );
}

export default BookDescription;