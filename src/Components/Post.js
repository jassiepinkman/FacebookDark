import { Avatar } from '@material-ui/core';
import React from 'react'
import "./Post.css";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ChatBubbleOutline from "@material-ui/icons/ChatBubbleOutline";
import NearMeIcon from "@material-ui/icons/NearMe";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { ExpandMoreOutlined, ModeComment } from "@material-ui/icons";
import moment from "moment/moment.js";

function Post({profilePic, image, userName, timeStamp, message}) {
    return (
        <div className="post">
            <div className="post-top">
                <Avatar src={profilePic} className="post-avatar"/>
                <div className="post-top-info">
                <h3>{userName}</h3>
                <p>{new Date(timeStamp?.toDate()).toDateString()}</p>
                </div>
            </div>
            <div className="post-bottom">
                <p>{message}</p>
            </div>
            <div className="post-image">
                <img src={image} alt="" />
            </div>
            <div className="post-options">
                <div className="post-option">
                 <ThumbUpIcon />
                 <p>Like</p>   
                </div>
                <div className="post-option">
                 <ChatBubbleOutline />
                 <p>Comment</p>   
                </div>
                <div className="post-option">
                 <NearMeIcon />
                 <p>Share</p>   
                </div>
                <div className="post-option">
                 <AccountCircleIcon />
                 <ExpandMoreOutlined />   
                </div>
            </div>
        </div>
    )
}

export default Post