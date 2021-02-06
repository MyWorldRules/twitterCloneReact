import React, {useState} from 'react'
import './Tweetbox.css'
import {Avatar, Button} from "@material-ui/core"
import db from "./firebase.js"
import firebase from "firebase";

function Tweetbox(){
    const [tweetMessage, setTweetMessage] = useState("");
    const [tweetImage, setTweetImage] = useState("");

    const sendTweet = (e) => {
        //Whenever you submit a form, it auto reloads the page. We want to stop that
        e.preventDefault();
        db.collection("posts").add({
            displayName: "Tarun Ravi",
            userName: "@My_World_Rules",
            verified: false,
            text: tweetMessage,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            image: tweetImage,
            avatar: "https://lh3.googleusercontent.com/ogw/ADGmqu_OmKZkvhI0lsrcZJhwo3f5DsXqgHnf9on7xS3IWPE=s64-c-mo"
        })

        setTweetMessage("");
        setTweetImage("");
    }

    return(
        <div className="tweetBox">
            <form className="tweetBox_form">
                <div className="tweetBox_input">
                    <Avatar src="https://lh3.googleusercontent.com/ogw/ADGmqu_OmKZkvhI0lsrcZJhwo3f5DsXqgHnf9on7xS3IWPE=s64-c-mo"></Avatar>
                    
                    <input 
                    onChange={e => setTweetMessage(e.target.value)}
                    value={tweetMessage}
                    placeholder="What's happening?" 
                    type="text"
                    ></input>
                </div>
                <input 
                onChange={e => setTweetImage(e.target.value)}
                value={tweetImage}
                className="tweetbox_inputImage"
                placeholder="Enter Image URL" type="text"></input>
                
                <Button onClick={sendTweet} className="tweetBox_button">Tweet</Button>
            </form>
        </div>
    )
}
export default Tweetbox;