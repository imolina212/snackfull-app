import axios from "axios"
import { useEffect, useState } from "react"
import FormatSnacks from "./FormatSnacks";

const Snacks = () => {
  const [snacks, setSnacks] = useState([]);
  const URL = process.env.REACT_APP_API_URL

  useEffect(()=> {
    axios.get(`${URL}/snacks`)
      .then((res) => {
        console.log(res.data.payload)
        setSnacks(res.data.payload)
      })
      .catch((error) => {
        throw error
      })
  },[URL])

    return (
      <main>
        {snacks.map((snack, index) => {
          return <FormatSnacks key={index} snack={snack} id={index}/>
        })}
      </main>
    );
  }
  
export default Snacks;