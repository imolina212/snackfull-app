import { Link } from "react-router-dom";
import heartSolid from "../assets/heart-solid.png";
import heartOutline from "../assets/heart-regular.png";

const FormatSnacks = ({ snack , id }) => {
  return (
    <div className="Snack">
      <Link to={`/snacks/${id}`}>
        <h4>
          {snack.is_healthy ? <img src={heartSolid} alt="healthy food"/> : <img src={heartOutline} alt="unhealthy food"/>}
          {snack.name}
        </h4>
      </Link>
    </div>
    
  );
}

export default FormatSnacks;
