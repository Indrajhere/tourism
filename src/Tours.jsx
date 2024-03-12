import React from "react";
import Tour from "./Tour";
export default function Tours({ data, removeTour }) {



  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 lg:gap-24 w-[80vw] items-center justify-items-center'>
      {data.map((item) => {
        return (
        <Tour data={item} removeTour={removeTour} />
        )
      })}
    </div>
  );
}
