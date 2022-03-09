export const add_item =(item)=>{
    return {
        type: "ADD_ITEM",
        nm: item.nm,
        sh: item.sh,
        txt: item.txt
    }
}