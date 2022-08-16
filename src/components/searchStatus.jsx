import React from "react";

const SearchStatus = (props) => {
    const renderPhrase = (number) => {
        if (number.length > 0) {
        let word = ``;
        number.length >= 2 && number.length <= 4 ? word = 'человека' : word = 'человек'
        let phrase = `${number.length} ${word} тусанет с тобой сегодня`;
        return phrase } else if (number.length === 0) {
          return 'Никто с тобой не тусанет'
        }
      };
  
      const reverseColorPhrase = () => {
        let reverseColor = '';
        props.status.length > 0 ? reverseColor = 'primary' : reverseColor = 'danger'
        return reverseColor;
      };
    return (
        <>
        <h1 className={`badge fs-3 bg-${reverseColorPhrase()}`}>{renderPhrase(props.status)}</h1>
        </>
    )
};

export default SearchStatus;