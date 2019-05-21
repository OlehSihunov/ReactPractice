import React from 'react'
import {NavLink} from "react-router-dom"

export default class SideBar extends React.Component
{
    render()
    {
        return(
            <div className="SideBar">
            <NavLink to = {"/BookM"}>BookManage</NavLink> <p></p>
            <NavLink to = {"/ChapterM"}>ChapterManege</NavLink>
            </div>
        )
    }
}