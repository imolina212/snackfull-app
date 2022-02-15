<<<<<<< HEAD
import React from 'react'

const Show = () => {
  return (
    <div>Show</div>
  )
}

export default Show
=======
// import './Show.css';

import SnackDetails from "../Components/SnackDetails";

const Show = () => {
  return (
    <div className="Show">
      <div className='container pt-3'>
        <h2 className='pt-3 pb-3' >Snack Details</h2>
        <SnackDetails />
      </div>
    </div>
  );
}

export default Show;
>>>>>>> b637286912c09d48903d410bad80bba20d82fc9b
