import React, {Component} from 'react';
import {connect} from "react-redux";
import BookManagement from "./BookManagement/BookManagement"
import {Route} from 'react-router-dom';
import {booksFetchData} from "../Actions/bookActions";
import SideBar from './SideBar/SideBar';
import ChapterManagement from './ChapterManagement/ChapterManagement';
import AddBook from './BookManagement/AddBook';
import AddChapter from './ChapterManagement/AddChapter';




class App extends Component{

  componentWillMount()
  {
    this.props.fetchData("/api/books");
  
  }

 render() {
  return (
    <div className ="App">
      <SideBar></SideBar>
      <Route  path = "/BookM" exact render ={()=><BookManagement/>}/>
      <Route  path = "/ChapterM" exact render ={()=><ChapterManagement/>}/>
      <Route path = "/AddBook" exact render ={()=><AddBook/>}/>
      <Route path = "/AddChapter" exact render ={()=><AddChapter/>}/>
      </div>
  );
}
}
const mapStateToProps = state=>{
  return {
    books:state.books
  };
}

const mapDispatchToProps=dispatch=>{
  return {
    fetchData: url=>dispatch(booksFetchData(url))
  };
}



export default connect(mapStateToProps,mapDispatchToProps)(App);



