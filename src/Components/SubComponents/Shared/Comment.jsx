import React from 'react';

const Comment = (props) => {
    return (
        <>
            <div className="btm_bordr row mx-0 mb-3 pb-2">
                <div className="col text-center text-md-left p-0 order-1">
                    <p className="mb-1 Bold">{props.professorName}</p>
                </div>
                <div className="col text-center text-md-right p-0 order-3 order-md-2">
                    <p className="mb-1">{props.date}</p>
                </div>
                <div className="col-12 text-center text-md-left p-0 order-2 order-md-3">
                    <p class="card-text">{props.Comment}</p>
                </div>
            </div>
        </>
    );
}

export default Comment;