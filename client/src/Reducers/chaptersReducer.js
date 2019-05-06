export function chapters(state=[],action){
    switch(action.type)
    {
        case "CHAPTERS_FETCH_DATA_SUCCESS":
            {
               
             return action.chapters;
            }
        case "CHAPTERS_LAST_GET_SUCCES":
            {
                return action.last
            }
        default:
            return state;

    }
}