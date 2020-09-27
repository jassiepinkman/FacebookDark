import React, {useState, useEffect} from 'react'
import "./Feeds.css";
import MessageSender from './MessageSender';
import Post from './Post';
import StoryReel from './StoryReel';
import db from "../Firebase/Firebase";

function Feeds() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
       db.collection('posts').orderBy('timestamp', 'desc')
       .onSnapshot(snapshot => 
           setPosts(snapshot.docs.map((doc) => ({ id : doc.id, data : doc.data() })))
       );         
    }, [])
    return (
        <div className="feeds">
            <StoryReel />
            <MessageSender />
            {posts.map((post) => (
                <Post
                key={post.id}
                profilePic={post.data.profilePic}
                message={post.data.message}
                timeStamp={post.data.timestamp}
                userName={post.data.username}
                image={post.data.image}
                />
            ))}
        </div>
    )
}

export default Feeds
