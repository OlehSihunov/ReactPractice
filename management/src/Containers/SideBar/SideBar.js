import React from 'react'
import {NavLink} from "react-router-dom"

export default class SideBar extends React.Component
{
    render()
    {
        return(
            <div className="SideBar">
            <NavLink to = {"/BookM"}>Управління книгами</NavLink> <br/>
            <NavLink to = {"/ChapterM"}>Управління главами</NavLink><br/>
            <NavLink to = {"/AddBook"}>Додати кингу</NavLink><br/>
            <NavLink to = {"/AddChapter"}>Додати главу</NavLink>
            </div>
        )
    }
}