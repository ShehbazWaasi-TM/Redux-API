const initialData = {
    list : []
}

const Todoreducer = (state=initialData, action) =>{
    switch(action.type){
        case "ADDTODO" : 
               const {id, data} = action.payload;
               return {
                    ...state,
                    data : [
                        ...state.list,
                        {
                            id : id,
                            data: data
                        }
                    ]
               }
               default : return state;
    }
}

export default Todoreducer;