import React from "react";

const SearchStatus = ( {length} ) => {
    const renderPhrase = (number) => {
        if (number > 0) {
        let word = ``;
        number >= 2 && number <= 4 ? word = 'человека' : word = 'человек'
        let phrase = `${number} ${word} тусанет с тобой сегодня`;
        return phrase } else if (number === 0) {
          return 'Никто с тобой не тусанет'
        }
      };
  
      const reverseColorPhrase = () => {
        let reverseColor = '';
        length > 0 ? reverseColor = 'primary' : reverseColor = 'danger'
        return reverseColor;
      };
    return (
        <>
        <h1 className={`badge fs-3 bg-${reverseColorPhrase()}`}>{renderPhrase(length)}</h1>
        </>
    )
};

export default SearchStatus;