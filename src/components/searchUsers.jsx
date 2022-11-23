import React from "react";
import PropTypes from "prop-types";

const SearchUSers = ({ onSearch, value }) => {
    return (
        <div className="row">
            <label>
                <div>
                    <input
                        className="form-control col-lg-10"
                        aria-label="default input example"
                        type="text"
                        value={value}
                        placeholder="Поиск пользователя"
                        onChange={(event) => onSearch(event)}
                    />
                </div>
            </label>
        </div>
    );
};

SearchUSers.propTypes = {
    onSearch: PropTypes.func.isRequired,
    value: PropTypes.string
};

export default SearchUSers;
