const initState = {
    list: [
        {
            nm: "Newt",
            sh: "Tree Trunks",
            txt: "Trees are Cool"
        }
    ]
}


const rootReducer =(state = initState, action)=>{

    if(action.type === 'ADD_ITEM') {
        let newList = state.list;
        newList.push({
            nm: action.nm,
            sh: action.sh,
            txt: action.txt
        })
        return {
            ...state,
            list: newList
        }
    }

        return state;
    }

export default rootReducer;