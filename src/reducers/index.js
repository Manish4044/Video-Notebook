const initialState = { 
    email:'',
    name:'',
    note:[],
    youtubeRef:null,
}

const userReducer = (state = initialState, action) => {
  switch(action.type){
    case "GET_ALL_USERS":
        return {...state, users:action.payload};
    case "ADD_YOUTUBE_REF":
        return {...state, youtubeRef:action.payload};
    default:
        return state;
  }
}

export default userReducer;