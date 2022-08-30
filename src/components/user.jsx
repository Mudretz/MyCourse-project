import React from "react";
import Qualitie from "./qualitie";
import BookMark from "./bookmark";
const User = (props) => {
   return (
    <>
   <td>{props.name}</td>
   <td>{props.qualities.map((quality) => (
   <Qualitie key={quality._id} {...quality}/>
   ))}</td>
   <td>{props.profession.name}</td>
   <td>{props.completedMeetings}</td>
   <td>{`${props.rate}/5`}</td>
   <td>
    <BookMark />
   </td>
   </>
    );
};
 export default User;
