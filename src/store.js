import  { createStore } from 'redux';

const reducer = (state,action)=>{
    if(action.type === "ADD_TO_COMMENTS"){
        
        return{
            ...state,
            comments : state.comments.concat(action.comment)
        }
        
    }

    return state;
}

export default createStore(reducer,{comments : [] })