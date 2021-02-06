import React from 'react'
import './Sidebar.css'
import TwitterIcon from "@material-ui/icons/Twitter"
import SidebarOption from "./SidebarOption"
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/Notifications';
import EmailIcon from '@material-ui/icons/Email';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import PersonIcon from '@material-ui/icons/Person';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import {Button} from "@material-ui/core";

function Sidebar(){
    return (
        <div className="sidebar">
            <TwitterIcon className="sidebar_TwitterIcon"/>
            <SidebarOption active text="Home" Icon={HomeIcon}/>
            <SidebarOption text="Explore" Icon={SearchIcon}/>
            <SidebarOption text="Notifications" Icon={NotificationsIcon}/>
            <SidebarOption text="Messages" Icon={EmailIcon}/>
            <SidebarOption text="Bookmarks" Icon={BookmarkIcon}/>
            <SidebarOption text="Lists" Icon={FormatListBulletedIcon}/>
            <SidebarOption text="Profile" Icon={PersonIcon}/>
            <SidebarOption text="More" Icon={MoreHorizIcon}/>
            
            <Button variant="outlined" className="sidebar_tweet" >Tweet</Button>
        </div>        
        //We're using material UI's button so that we get that cool ripple effect animation ^
    )

}
export default Sidebar;