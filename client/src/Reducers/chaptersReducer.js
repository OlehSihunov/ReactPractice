export function chapters(state=[],action){
    switch(action.type)
    {
        case "CHAPTERS_FETCH_DATA_SUCCESS":
            {
               
             return action.chapters;
            }
        default:
            return state;

    }
}