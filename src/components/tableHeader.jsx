import React from "react";
import PropTypes from "prop-types";

const TableHeader = ({ onSort, selectedSort, columns }) => {
    const handleSort = (item) => {
        if (selectedSort.path === item) {
            onSort({
                ...selectedSort,
                order: selectedSort.order === "asc" ? "desc" : "asc"
            });
        } else {
            onSort({ path: item, order: "asc" });
        };
    };

    const iconsSort = (item, sort) => {
        if (selectedSort.path === item && sort === "asc") {
            return (
                <i className={"bi bi-caret-up-fill"}></i>
            );
        } else if (selectedSort.path === item && sort === "desc") {
            return (
                <i className={"bi bi-caret-down-fill"}></i>
            );
        }
    };

    return (
        <thead>
            <tr>
                {Object.keys(columns).map((column) => (
                    <th
                        key={column}
                        onClick={ // Может лучше вынеси эту проверку в функцию handleSort
                            columns[column].path
                                ? () => handleSort(columns[column].path)
                                : undefined
                        }
                        {...{ role: columns[column].path && "button" }}
                        scope="col"
                    >
                        {columns[column].name}
                        {selectedSort.order === "asc"
                            ? iconsSort(columns[column].path, "asc")
                            : iconsSort(columns[column].path, "desc")
                        }
                    </th>
                ))}
            </tr>
        </thead>
    );
};

TableHeader.propTypes = {
    onSort: PropTypes.func.isRequired,
    selectedSort: PropTypes.object.isRequired,
    columns: PropTypes.object.isRequired
};

export default TableHeader;
