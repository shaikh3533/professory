import React, { useState, useEffect } from "react";
import Star from "../../../Assets/img/Stars.png";
import Share from "../../../Assets/img/share.png";
import Like from "../../../Assets/img/Like.png";
import Dislike from "../../../Assets/img/dislike.png";
import Block from "../../../Assets/img/block.png";
import checkMark from "../../../Assets/img/Check.svg";
import Avatar from "react-avatar";
import PostData from '../../Api/PostData'
import { message } from "antd";
import Coment from "./Coment";
import $ from 'jquery'
import Replies from "./Replies";


const HelpfullRating = (props) => {

  const initialstate = {
    Likes: props.Like,
    Unlikes: props.Dislike,
    replies: props.Reply,
    allReplies: props.Replies,
    blocked: props.Block,
    alreadyLiked: props.LikedUser,
    alreadyDisLiked: props.DisLikedUser,
    alreadyBlock: props.BlockedUsers,
    canLike: false,
    canDisLike: false,
    canBlock: false,

  }
  const [FormData, setFormData] = useState(initialstate);
  const { Likes, Unlikes, replies, allReplies, blocked, alreadyLiked, alreadyDisLiked, alreadyBlock, canLike, canDisLike, canBlock } = FormData;



  useEffect(() => {
    const len = !!alreadyLiked.filter(

      (x) => x.userID == localStorage.getItem('UserID')
    ).length
    if (len == canLike) {
      setFormData({
        ...FormData,
        canLike: !len
      })
    }
    const lenDisLike = !!alreadyDisLiked.filter(

      (x) => x.userID == localStorage.getItem('UserID')
    ).length
    if (lenDisLike == canDisLike) {
      setFormData({
        ...FormData,
        canDisLike: !lenDisLike
      })
    }
    const lenBlock = !!alreadyBlock.filter(

      (x) => x.userID == localStorage.getItem('UserID')
    ).length
    if (lenBlock == canBlock) {
      setFormData({
        ...FormData,
        canBlock: !lenBlock
      })
    }

  }, [])


  const liked = () => {

    setFormData({
      ...FormData,
      canLike: false,
      Likes: Likes + 1,
    })

    const res = PostData.LikeComment(props.commentID)
    console.log({ res })
    res.then(value => {
      console.table('responce', value)
      if (!value.data.success) {
        setFormData({
          ...FormData,
          canLike: true,
          Likes: Likes - 1,
        })
      }
      else {
        message.success(value.data.message)
      }
    })
  }

  const Unliked = () => {

    setFormData({
      ...FormData,
      canDisLike: false,
      Unlikes: Unlikes + 1,
    })

    const res = PostData.UnLikeComment(props.commentID)
    console.log({ res })
    res.then(value => {
      console.table('responce', value)
      if (!value.data.success) {
        setFormData({
          ...FormData,
          canLike: true,
          Unlikes: Unlikes - 1,
        })
      }
      else {
        message.success(value.data.message)
      }
    })
  }


  const Blockhandle = () => {

    setFormData({
      ...FormData,
      canBlock: false,
      blocked: blocked + 1,
    })

    const res = PostData.BlockComment(props.commentID)
    console.log({ res })
    res.then(value => {
      console.table('responce', value.data.success)
      if (!value.data.success) {
        setFormData({
          ...FormData,
          canBlock: true,
          blocked: blocked - 1,
        })
      }
      else {
        message.success(value.data.message)
      }
    })
  }
  const replyed = () => {
    setFormData({
      ...FormData,
      replies: replies + 1
    })
  }


  const showCommentBox = (e) => {
    if ($('#' + e + 'comment').hasClass('d-none')) {
      $('#' + e + 'comment').addClass('d-flex')
      $('#' + e + 'comment').removeClass('d-none')
    } else {
      $('#' + e + 'comment').addClass('d-none')
      $('#' + e + 'comment').removeClass('d-flex')
    }
  }
  console.log(props.Name, FormData)
  return (
    <>
      <div className="row ShadowBordr Round25 py-3 px-3 px-md-5 my-4 ">
        <div className="col-12 col-sm-4 px-0 mb-3">
          <div className="d-inline-flex w-100 text-center text-md-right">
            <Avatar src={props.User} size="30" round={true} />
            <h5 className="mb-0 mt-2 px-3">{props.Name}</h5>
          </div>
        </div>
        <div className="col-6 col-sm-4 mx-auto mb-3 pl-0">
          {/* <div className="mr-auto mx-md-auto d-inline-flex"> */}
          <p className="mb-0 mt-2 FS_16 text-left text-sm-center">
            year Taken: {props.yearTaken}
          </p>
          {/* <p className="mb-0 mt-2 FS_16"></p> */}
          {/* </div> */}
        </div>
        <div className="col-6 col-sm-4 ml-auto mb-3 pr-0">
          {/* <div className="mr-auto d-block"> */}
          <p className="mb-0 mt-2 FS_16 Bold text-right">
            Hardness <img src={Star} alt="" className="mb-1" /> {props.rating}
          </p>
          {/* </div> */}
        </div>
        <div className="col-12 text-center btm_bordr row">
          {props.Tags.map((each) => {

            return (
              <div className="col-6 col-sm-4 col-md-3 col-lg-4 col-xl-3 px-1 d-inline-flex mb-3">
                <div className="">
                  <img
                    className="d-block my-auto mx-1"
                    src={checkMark}
                    alt=""
                  />
                </div>
                <p className="mb-0" style={{ fontSize: "66%" }}>
                  {Object.keys(each)[0]}: {Object.values(each)[0]}
                </p>
              </div>
              // <div className="col-12 col-sm-6 col-md-3 col-lg-4 col-xl-3 text-center text-sm-left px-1 mb-3">
              //     <div className="d-inline-flex">
              //         <div>
              //             <img className="d-block my-auto mx-1" src={checkMark} alt="" />
              //         </div>
              //         <p className="mb-0" style={{ fontSize: "66%" }}>{each}</p>
              //     </div>
              // </div>
            );
          })}
          {/* <p>{props.Tags.join("  |k  ")}</p> */}
        </div>
        <div className="col-12 mt-3">
          <p className="FS_14 text-left Bold">{props.Feedback}</p>
        </div>
        <div
          className="col-12 py-2"
          style={{ backgroundColor: "#F8FAFF", borderTop: "1px solid #E0EEFF" }}
        >
          <div className="d-inline-flex float-left">
            <p className="mb-0 Bold">Subject: </p>
            <p className="mb-0 Bold">{props.Subject}</p>
          </div>
          <div className="d-inline-flex float-right">
            <p className="mb-0 Bold">Grade: </p>
            <p className="mb-0 Bold">{props.Grade}</p>
          </div>
        </div>
        <div className="row col-12 mt-3">
          <div className="col mx-auto px-1 px-sm-3">
            <span>
              <img
                onClick={() => showCommentBox(props.commentID)}
                src={Share}
                alt="share"
                className="mx-2"
                height="17"
                width="22"
              />
              {replies}
            </span>
          </div>
          <div className="col mx-auto px-1 px-sm-3">
            <span>
              <img
                onClick={canLike ? liked : null}
                src={Like}
                alt="share"
                className="mx-2"
                height="17"
                width="22"
              />
              {Likes}
            </span>
          </div>
          <div className="col mx-auto px-1 px-sm-3">
            <span>
              <img
                onClick={canDisLike ? Unliked : null}
                src={Dislike}
                alt="share"
                className="mx-2"
                height="17"
                width="22"
              />
              {Unlikes}
            </span>
          </div>
          <div className="col mx-auto px-1 px-sm-3">
            <span>
              <img
                onClick={canBlock ? Blockhandle : null}
                src={Block}
                alt="share"
                className="mx-2"
                height="17"
                width="22"
              />
              {blocked}
            </span>
          </div>
        </div>
        <div className="row col-12 mt-3 p-0">
          <div
            className='comment d-none w-100'
            id={props.commentID + 'comment'}
          >
            <Coment id={props.commentID} profID={props.profID} />
          </div>
        </div>
        <div className="col-12 mt-3 p-0">
          <Replies Replies={allReplies} />
          {console.log(allReplies)}
          
        </div>

      </div>

    </>
  );
};

export default HelpfullRating;
