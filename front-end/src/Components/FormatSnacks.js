import { Link } from "react-router-dom";
// import HeartHealth from "./HeartHealth";


const FormatSnacks = ({ snack , id }) => {
  return (
    <h4 className="Snack">
      <Link to={`/snacks/${id}`}>{snack.name}</Link>
      {/* <HeartHealth /> */}
    </h4>
  );
}

export default FormatSnacks;
