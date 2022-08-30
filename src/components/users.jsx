import React from "react";
import User from "./user";

const Users = (props) => {
    return (    
    <tbody>
            <tr>
                <User {...props}/>
                <td><button 
                        type="button" 
                        className="btn btn-danger"
                        onClick={() => props.onDelete(props)}
                        >
                          delete
                    </button>
                </td>
            </tr>   
    </tbody>
  );
};

export default Users;