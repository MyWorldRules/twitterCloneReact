import React from 'react'
import "./Widgets.css"
import SearchIcon from "@material-ui/icons/Search"
import {
    TwitterTimelineEmbed,
    TwitterShareButton,
    TwitterTweetEmbed,
  } from "react-twitter-embed";
function Widgets() {
    return (
        <div className="widgets">
            <div className="outsideInput">
                <div className="widgets_input">
                    <SearchIcon className="widgets_searchIcon"/>
                    <input placeholder="Search Twitter" type="text"/>
                </div>
            </div>
            <div className="widgets_widgetContainer">
                <h2>What's Happening?</h2>
                <TwitterTweetEmbed tweetId={"871518451172618242"} />
                <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName="My_World_Rules"
                    options={{ height: 400 }}
                />
                <TwitterShareButton
                    url={"https://facebook.com/cleverprogrammer"}
                    options={{ text: "#reactjs is awesome", via: "cleverqazi" }}
                />
            </div>
        </div>
    )
}

export default Widgets
