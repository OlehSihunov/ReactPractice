import React from 'react'
import { ChapterElement } from './ChapterElem';

export default class BookElement extends React.Component
{
    render()
    {
        //тут треа буде дописати функцію ходьби до наступного елементу
        return(
            <React.Fragment>
                    <div  className="book">
                         <img src={'../img/'+this.props.book.ImageName} alt="booktitle"  ></img>
                    </div>
                <div className ="bookDiscription book-addition-info">
                    {/* <div className="discrPoint">id: {this.props.book._id} </div> */}
                    <div className="discrPoint">Name: {this.props.book.name} </div>
                    <div className="discrPoint">Author: {this.props.book.author} </div>
                </div>
                <div className="book_bootom">
                    
                    <h2>Description</h2>
                    <p className="discrPoint">{this.props.book.discription}</p>

                    
            <       div className="chapters_wrapper">
                    {
                        this.props.chapters.map((chapter)=>{
                            return <ChapterElement key={chapter._id} chapter ={chapter}  lastIndex = {this.props.chapters[this.props.chapters.length-1].ChapterNumber}/>
                        })
                    }
                    </div>
                </div>
            </React.Fragment>
        )
    }
}