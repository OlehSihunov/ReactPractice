export function chapter(state=[],action){
    switch(action.type)
    {
        case "CHAPTER_FETCH_SUCCESS":
             return action.chapter;
     
        default:
            return state;

    }
}
