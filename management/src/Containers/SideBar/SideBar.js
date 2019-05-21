import React from 'react'
import {NavLink} from "react-router-dom"

export default class SideBar extends React.Component
{
    render()
    {
        return(
            <div className="SideBar">
            <NavLink to = {"/BookM"}>BookManage</NavLink> <br/>
            <NavLink to = {"/ChapterM"}>ChapterManege</NavLink><br/>
            <NavLink to = {"/AddBook"}>AddBook</NavLink><br/>
            <NavLink to = {"/AddChapter"}>AddChapter</NavLink>
            </div>
        )
    }
}