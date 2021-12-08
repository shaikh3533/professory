import React from 'react';

const File = (props) => {
    return ( 
        <div className="col-6 px-1">
            <img className="d-block mx-auto" src={props.thumbNail}  alt=""/>
            <p className="d-block text-center mb-0 mt-2 FS_13">{props.fileName}</p>
        </div>
         );
}
 
export default File;