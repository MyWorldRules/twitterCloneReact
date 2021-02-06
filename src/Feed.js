import React, {useState, useEffect} from 'react'
import './Feed.css'
import Tweetbox from './Tweetbox'
import Post from './Post'
import db from "./firebase"
function Feed(){
    const [posts, setPosts] = useState([]);
    
    //Whenever the firebase database changes, it runs this method
    useEffect(() => {
        db.collection("posts").onSnapshot((snapshot) =>
            //Loops through all the posts and adds the data into an array
          setPosts(snapshot.docs.map((doc) => doc.data()))
        );
      }, []);

    return(
        <div className="feed">
            {/*Home header*/}
            <div className="feed_header">
                <h2>Home</h2>
            </div>
            {/*Tweet Box*/}
            <Tweetbox></Tweetbox>

            {/*Feed*/}
            
            {posts.map(post => (
                <Post 
                    displayName={post.displayName} 
                    userName={post.userName}
                    verified={post.verified}
                    text={post.text}
                    image={post.image}
                    avatar={post.avatar}/>
                
            ))}
            {/*Feed...*/}



        </div>
    )
}

export default Feed;