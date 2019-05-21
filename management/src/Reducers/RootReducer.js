import {combineReducers} from "redux";
import {books} from "./bookReducer";
import{chapters} from './chaptersReducer';
import{chapter} from './chapterReducer'

const RootReducer= combineReducers({
    books,
    chapters,
    chapter
})
export default RootReducer;