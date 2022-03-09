import {useSelector} from "react-redux";

function Products(){
    const list = useSelector(state => state.list);
    const items = list.map((obj, index) =>
        <div key={index}>
            <h1>{obj.nm}</h1>
            <h3>{obj.sh}</h3>
            <p>{obj.txt}</p>
        </div>
    )

    return(
        <div>
            <header>
                {items}
            </header>
        </div>
    )
}

export default Products;