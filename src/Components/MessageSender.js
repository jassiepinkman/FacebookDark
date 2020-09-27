import { Avatar } from '@material-ui/core'
import React, { useState } from 'react'
import "./MessageSender.css"
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import { Button } from '@material-ui/core';
import {useStateValue} from "../ContextApi/StateProvider"
import db from "../Firebase/Firebase";
import firebase from "firebase";

function MessageSender() {
    
    const [{user}, dispatch] = useStateValue();
    const [input, setInput] = useState('');
    const [imageUrl, setImageUrl] = useState('');

const handleSubmit = e => {
    e.preventDefault();
    if(input != '')
    db.collection('posts').add({
        message : input,
        timestamp : firebase.firestore.FieldValue.serverTimestamp(),
        profilePic : user.photoURL,
        username : user.displayName,
        image : imageUrl
    });

    setInput('');
    setImageUrl('');
}    
    return (
        <div className="message-sender">
            <div className="message-sender-top">
            <Avatar src={user.photoURL}/>
            <form>
            <input
             value={input}
             onChange={e => setInput(e.target.value)}
             className="message-sender-top-input" 
             placeholder={`What's on your Mind, ${user.displayName}?`}/>    
            <input
             value={imageUrl}
             onChange={e => setImageUrl(e.target.value)}
             placeholder={`image URL (Optional)`}/>
            <Button type="submit" onClick={handleSubmit} >BOOM</Button>
            </form> 
            </div>

            <div className="message-sender-bottom">
                    <div className="message-sender-bottom-option">
                        <VideocamIcon style={{color : "red"}}/>
                        <h3>Live Video</h3>
                    </div>
                    <div className="message-sender-bottom-option">
                         <PhotoLibraryIcon style={{color : "green"}}/>
                        <h3>Photo/Video</h3>
                    </div>
                    <div className="message-sender-bottom-option">
                         <InsertEmoticonIcon style={{color : "orange"}}/>
                        <h3>Feeling/Activity</h3>
                    </div>
            </div>
        </div>
    )
}

export default MessageSender
