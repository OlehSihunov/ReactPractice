import {combineReducers} from "redux";
import {books} from "./bookReducer";
import{chapters} from './chaptersReducer';
import{chapter} from './chapterReducer'

const rootReducer= combineReducers({
    books,
    chapters,
    chapter
});

export default rootReducer;