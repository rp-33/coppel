const AddToComment = ({user,text}) =>{
    console.log(user)
    console.log(text)
    return{
        type : 'ADD_TO_COMMENTS',
        comment : {
            text,
            user
            
        }
    }
}

export {AddToComment};