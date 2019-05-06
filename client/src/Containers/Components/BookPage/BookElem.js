import React from 'react'
import { ChapterElement } from './ChapterElem';

export default class BookElement extends React.Component
{
    render()
    {
        return(
            <React.Fragment>
                    <div  >
                         <img src="../img/1.png" alt="booktitle"  ></img>
                    </div>
                <div className ="bookDiscription">
                    <div className="discrPoint">id: {this.props.book._id} </div>
                    <div className="discrPoint">Name: {this.props.book.name} </div>
                    <div className="discrPoint">Author: {this.props.book.author} </div>
                    <div className="discrPoint">Discription: {this.props.book.discription}</div>
                </div>
                <div>
                    {
                        this.props.chapters.map((chapter)=>{
                            return <ChapterElement key={chapter._id} chapter ={chapter}/>
                        })
                    }
                </div>
            </React.Fragment>
        )
    }
}