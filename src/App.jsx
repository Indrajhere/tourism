import React, { useState, useEffect } from "react";
import data from './data'
import Tours from "./Tours";
import Loading from "./Loading";

const url = "https://course-api.com/react-tours-project";

const App = () => {
  const [tours, setTours] = useState([]);

  useEffect(() => {
  
const fetchData = async() => {
    await new Promise ((resolve)=>{
      setTimeout(resolve,2000)
    });
    setTours(data)
  };
  fetchData();
  }, []);

  const removeTour =(id) =>{

    const newTours = tours.filter(tour=>tour.id!==id);
    setTours(newTours)
}


  return <div className="w-[100vw] flex flex-col justify-between items-center">
    <div className='flex flex-col items-center'>

    <h3 className='text-xl my-2'>Our Tours</h3>
    <hr className='text-green w-2/4 mb-2 border-[1.25px] border-green-500'/>

    </div>
    
    {
      tours.length ? (
     <Tours removeTour={removeTour} data={tours}/>
      ):
<Loading/>    }
    </div>
};

export default App;
