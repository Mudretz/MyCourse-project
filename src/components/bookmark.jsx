import React, { useState }  from "react";
const BookMark = () => {
    надеюсь ты и сам понимаешь, что это плохо
    let styleBookmark = "M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z";
    let [style, setStyle] = useState(styleBookmark);
    let [status, setStatus] = useState(true);
    function reverseIcons() {
            if (status === true) {
                setStatus(status = false);
                setStyle(style = "M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z");
            } else if (status === false){
                setStatus(status = true);
                setStyle(style = "M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z");      
            };
        };
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bookmark" viewBox="0 0 16 16" onClick={() => reverseIcons()}>
            <path d={`${style}`}/>
        </svg>  
    );
};
export default BookMark;
