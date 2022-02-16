import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const SnackForm = () => {
    const { id } = useParams();
    const URL = process.env.REACT_APP_API_URL;
    const navigate = useNavigate();
    const [ snack, setSnack ] = useState({
      name: "",
      fiber: "",
      protein: "",
      added_sugar: "",
      is_healthy: "",
      image: ""
    });

    const isEdit = id ? true : false;

    useEffect(() => {
      const getSnack = async () => {
        const targetSnack = await axios.get(`${URL}/snacks/${id}`);
        setSnack(targetSnack.data.payload);
      };
      isEdit && getSnack();
    }, [URL, id]);

    const handleInputChange = (event) => {
        setSnack({ ...snack, [event.target.id]: event.target.value});
    };

    const handleNew = async (event) => {
      event.preventDefault();
      await axios.post(`${URL}/snacks`, snack);
      navigate("/snacks");
    };

    const handleEdit = async (event) => {
        event.preventDefault();
        await axios.put(`${URL}/snacks/${id}`, snack);
        navigate(`/snacks`);
    };
    console.log(snack)
    return (
        <div className="Form">
          <div className="">
            <form className="" onSubmit={isEdit ? handleEdit : handleNew}>
              <label htmlFor="name">Name</label>
              <input
              className=""
              id="name"
              value={snack.name}
              type="text"
              onChange={handleInputChange}
              placeholder="snack name"
              required
              />
              <label htmlFor="image">Image</label>
              <input 
              type="text" 
              className="" 
              id="image" 
              value={snack.image} 
              onChange={handleInputChange}
              placeholder="link to snack image"
              required
              />
              <label htmlFor="fiber">Fiber</label>
              <input
              className=""
              id="fiber"
              value={snack.fiber}
              type="number"
              onChange={handleInputChange}
              placeholder="snack fiber"
              required
              />
              <label htmlFor="protein">Protein</label>
              <input
              className=""
              id="protein"
              type="number"
              value={snack.protein}
              placeholder="snack protein"
              onChange={handleInputChange}
              required
              />
              <label htmlFor="added_sugar">Added Sugar</label>
              <input
              className=""
              id="added_sugar"
              type="number"
              value={snack.added_sugar}
              placeholder="snack added sugar"
              onChange={handleInputChange}
              required
              />
              <br />
              <button className="">Submit</button>
            </form>
            <Link to={isEdit ? `/snacks/${id}` : '/snacks'}>
                <button className="">Back</button>
            </Link>
          </div>
        </div>
    );
}

export default SnackForm;
