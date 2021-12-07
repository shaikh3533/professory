import React, { useState } from 'react'
import Avatar from "react-avatar"
import { EnterOutlined } from '@ant-design/icons'

const Replies = (props) => {

    const [view, setview] = useState(1)

    return (
        <>{
            props.Replies.length>0 && (
                <>
                    {props.Replies.reverse().slice(0, view).map((x) => (
                        <div>
                            <div className="d-inline-flex">
                                <div className=''>
                                    <Avatar src={props.User} size="30" round={true} />

                                </div>
                                <div className="ml-3">
                                    <p className='my-auto Font12 ps-2'>
                                        {x.username}
                                    </p>
                                    <p className="my-auto ">{x.comment}</p>
                                    <div className='d-inline-flex  rounded col-12'>
                                        {/* <span className='ps-5 mb-2 fs-xSmall'>{dateFormat(x.date)}</span> */}
                                    </div>
                                    <hr className='mt-1' />
                                </div>
                            </div>
                        </div>
                    ))
                    }
                    <div className="d-inline-flex">
                        <EnterOutlined />
                        {view > 1 ? <p onClick={() => setview(1)}>View Less Reply</p> : <p onClick={() => setview(props.Replies.length)}>View more Replies</p>}
                    </div>
                </>)
        }
        </>
    );
}

export default Replies;