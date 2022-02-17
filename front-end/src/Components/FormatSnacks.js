import { Link } from "react-router-dom";
import heartSolid from "../assets/heart-solid.png";
import heartOutline from "../assets/heart-regular.png";

const FormatSnacks = ({ snack }) => {
  return (
    <div className="Snack">
      <Link to={`/snacks/${snack.id}`}>
        <h4>
          {snack.name}
        </h4>
        <h4>
          {snack.is_healthy ? <img src={heartSolid} alt="healthy food"/> : <img src={heartOutline} alt="unhealthy food"/>}
        </h4>
      </Link>
    </div>
    
  );
}

export default FormatSnacks;
