import { useState } from 'react';
import {getPostcodeDetails, getPostcodes} from './Constants/api'

export default function Search() {
  const [postcode, setPostcode] = useState('');
  const [postcodes, setPostcodes] = useState([]);
  const [postcodeDetails, setPostcodeDetails] = useState();


  const handleChange = (event) => {
    setPostcode(event.target.value);
  };

  const handleClick =async () => {
    // 👇 "postcode" stores input field value
    let result=await getPostcodes(0,postcode)
    setPostcodes(result);
  };

  const showDetails =async (item) => {
    // 👇 "postcode" stores input field value
    setPostcode(item);
    let result=await getPostcodeDetails(item)
    setPostcodeDetails(result);
  };

  return (
    <div>
      <input
        type="text"
        id="postcode"
        name="postcode"
        onChange={handleChange}
        value={postcode}
      />

      <h2>postcode: {postcode}</h2>

      <button onClick={handleClick}>Search</button>

      {postcodes.length > 0 &&
        <ul>
        {postcodes.map(item => (
          <div key={item} onClick={() => showDetails(item)}>
            {item}
          </div>
        ))}
      </ul>
      }

<div>
  {postcodeDetails ==undefined ? "" : 
   <div className = "card col-md-6 offset-md-3">
   <h3 className = "text-center"> View Postcode Details</h3>
   <div className = "card-body">
       <div className = "row">
           <label> Region :  
            { postcodeDetails.region }</label>
       </div>
       <div className = "row">
           <label> Country : { postcodeDetails.country }
           </label>
       </div>
       <div className = "row">
           <label> Admin District : 
           { postcodeDetails.admin_District } </label>
       </div>
       <div className = "row">
           <label> Parliamentary Constituency : 
           { postcodeDetails.parliamentary_Constituency }</label>
       </div>
       <div className = "row">
           <label> Area : 
            { postcodeDetails.area }</label>
       </div>
   </div>

</div>
  
  }
</div>
      
    </div>
  );
}