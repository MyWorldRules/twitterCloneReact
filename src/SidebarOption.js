import React from 'react'
import "./SidebarOption.css"

//Icon is capital because it is a component. Good naming scheme 
function SidebarOption({active, text, Icon}){
    //More explanation on string interpolation: https://stackoverflow.com/questions/66037375/react-jsx-styling
    return(
        <div className={`sidebarOption ${active ? 'sidebarOption--active' : '' }`}>
            <Icon />
            <h2 className="SidebarOptionText">{text}</h2>
        </div>
    )
}
export default SidebarOption;