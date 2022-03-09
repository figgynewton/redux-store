const initState = {
    list: [
        {
            nm: "Newt",
            mess: "Tree Trunks",
            txt: "Trees are Cool"
        }
    ]
}


const rootReducer =(state = initState, action)=>{

    if(action.type === 'ADD_ITEM') {
        let newList = state.list;
        newList.push(action.item)

        return {
            ...state,
            list: newList
        }

        return state;
    }
};

export default rootReducer;