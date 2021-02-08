import React from 'react';

export default function Card(props){
  return(
    <div className="col m-4 h5" style={{background:props.userData.bgBack}}>
      <div className="shadow-sm">
        <p className="text-white font-weight-bold text-center m-5">
          {props.userData.courseName}
          <hr class="mx-2" style={{border: "1px solid white"}} />
        </p>
      </div>
    </div>
  )
}
