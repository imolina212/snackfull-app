import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios"

import HeartHealth from "./HeartHealth";

const SnackDetails = () => {
    const navigate = useNavigate();
    const [snack, setSnack] = useState([]);
    const { id } = useParams();
    const URL = process.env.REACT_APP_API_URL;

    useEffect(() => {
        axios.get(URL+"/snacks/"+id)
        .then((response) => {console.log(response.data); return setSnack(response.data)})
        .catch(() => { navigate("/not-found")})
    }, [URL, id, navigate])

    const deletesnack = () => {
        axios.delete(`${URL}/snacks/${id}`)
        .then(() => navigate("/snacks"))
        .catch((e) => console.error(e));
    };

    const handleDelete = () => {
        deletesnack()
    };

    
    return (
        <article className="">
            <aside className="">
                {<HeartHealth snackHealth={snack.payload?.is_healthy} />}
            </aside>
            <div><img src={snack.payload?.image} alt={snack.payload?.name}/></div>
            <div>Protein: {snack.payload?.protein}</div>
            <div>Fiber: {snack.payload?.fiber}</div>
            <div>Added Sugar: {snack.payload?.added_sugar}</div>
            <div> 
                <Link to={`/snacks`}>
                    <button className="btn btn-success">Back</button>
                </Link>
                <button 
                    className="btn btn-danger" 
                    onClick={handleDelete}>Delete
                </button>
            </div>
        </article>
    );
}

export default SnackDetails;
  
