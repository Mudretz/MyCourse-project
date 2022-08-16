import React from "react";

const BookMark = ({ status, ...rest }) => {
    return (
        <button {...rest}>
            <i className={"bi bi-bookmark-heart" + (status ? "-fill" : "")}></i>
        </button>
    );
};

export default BookMark;
