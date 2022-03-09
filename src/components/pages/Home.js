import React from "react";
import {useDispatch} from "react-redux";
import {add_item} from "../../redux/actions/setActions";

function Home(){
    const dispatch =useDispatch();
    const [form, setForm]=React.useState({
        nm: "",
        sh: "",
        txt: ""
    })
    const [mess, setMess]=React.useState("");

    const handleChange = prop => event =>{
        setForm({
            ...form,
            [prop]:event.target.value
        })
    }

    const handleSubmit =()=>{

        if(form.message.length>2&&form.nm.length>2&&!isNaN(Number(form.num))){
            dispatch(add_item(form));
            setForm({
                nm: "",
                sh: "",
                txt: "",
            })
            setMess("submitted");
        }else{
            setMess("error in submission");
        }

        dispatch(add_item(form));
        setForm({
            nm: "",
            sh: "",
            txt: "",
        })
        setMess("submitted");
    }

    return(
        <div>
            <input type="text" placeholder={"name"} value={form.nm} onChange={handleChange("nm")}/>
            <input type="text" placeholder={"sub header"} value={form.mess} onChange={handleChange("sh")}/>
            <input type="text" placeholder={"text"} value={form.txt} onChange={handleChange("txt")}/>
            <button onClick={handleSubmit}>Submit</button>
            <h3>{mess}</h3>
        </div>
    )
}

export default Home;