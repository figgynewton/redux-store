import {Link} from "react-router-dom";

function Nav(){
    return(
        <nav>
            <Link to ={"/"}>Home </Link>
            <Link to ={"/Blogs"}>Blogs </Link>
            <Link to ={"/Products"}>Products </Link>
        </nav>
    )
}

export default Nav;