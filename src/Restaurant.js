// import React, { useState } from "react";
// import './Restaurant.css';
// import Foodimages from './AllData.js';

// function SimpleImageGallery(value) {
//   const [images,setImage]= useState(Foodimages);
//   const allItem=()=>{
//     const finalData = Foodimages.filter((value)=>{
//         return value;
//     })
//     setImage(finalData);
//   }

//   const breakfast=(foodcatagory)=>{
//     const finalData = Foodimages.filter((value)=>{
//         return value.category===foodcatagory;
//     })
//     setImage(finalData);
//   }
//   const lunch=(foodcatagory)=>{
//     const finalData = Foodimages.filter((value)=>{
//         return value.category===foodcatagory;
//     })
//     setImage(finalData);
//   }
//   const Diner = (foodcatagory)=>{
//     const finalData = Foodimages.filter((value)=>{
//         return value.category===foodcatagory;
//     })
//     setImage(finalData);
//   }

//   return (
//     <div className="xy">
//         <h2>Our Menu</h2>
//         <button onClick={allItem} > All Items</button>
//         <button onClick={()=>breakfast('Breakfast')} > Break Fast</button>
//         <button onClick={()=>lunch('Lunch')} > Lunch</button>
//         <button onClick={()=>Diner('Diner')} > Diner</button>

//         <div className="xyz">

//         {images.map((value) => {
//             return (

//             <div className="a">

//                 <img src={value.images} className="abc" alt="logo" />
//                 <h3>{value.name}</h3>
//                 <h3>{value.price}</h3>
//             </div>)
// })}
//         </div>
//     </div>
//   );
// }
// export default SimpleImageGallery;