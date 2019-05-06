import React, {Component} from 'react';
import {connect} from "react-redux";
import BookMin from './Components/BookMin';
import BookPage from "./Components/BookPage/BookPage";
import {Route} from 'react-router-dom';
import {booksFetchData} from "../Actions/bookActions";
import Chapter from './Components/Chapter/Chapter';


class App extends Component{

  componentWillMount()
  {
    this.props.fetchData("/api/books");
  
  }

 render() {
  return (
    <div className ="AppBody">
      <div className="header"></div>
     { <Route path ="/"  exact component ={BookMin}/>}
      <Route path ="/Book/:id" exact render={(props)=><BookPage {...props}/>}/>
      <Route path = "/Book/:BookId/:ChapterNumber" exact render={(props)=><Chapter {...props}/>}/>
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



