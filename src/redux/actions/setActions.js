export const add_item =(item)=>{
    return {
        type: "ADD_ITEM",
        nm: item.nm,
        mess: item.mess,
        txt: item.txt
    }
}