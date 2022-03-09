import {useSelector} from "react-redux";

function Blogs(){
    const list = useSelector(state => state.list);
    const items = list.map((obj, index) =>
        <div key={index}>
            <h2>{obj.nm}</h2>
            <h2>{obj.sh}</h2>
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

export default Blogs;