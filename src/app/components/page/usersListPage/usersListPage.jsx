import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { paginate } from "../../../utils/paginate";
import Pagination from "../../common/pagination";
import api from "../../../api";
import GroupList from "../../common/groupList";
import SearchStatus from "../../ui/searchStatus";
import UserTable from "../../ui/usersTable";
import _ from "lodash";
import SearchUSers from "./searchUsers";

const UsersListPage = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [professions, setProfession] = useState();
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedProf, setSelectedProf] = useState();
    const [sortBy, setSortBy] = useState({ path: "name", order: "asc" });
<<<<<<< HEAD:src/app/components/page/usersListPage/usersListPage.jsx
    const pageSize = 8;

    const [users, setUsers] = useState();
    useEffect(() => {
        api.users.fetchAll().then((data) => setUsers(data));
    }, []);
    const handleDelete = (userId) => {
        setUsers(users.filter((user) => user._id !== userId));
    };
    const handleToggleBookMark = (id) => {
        const newArray = users.map((user) => {
            if (user._id === id) {
                return { ...user, bookmark: !user.bookmark };
            }
            return user;
        });
        setUsers(newArray);
    };
=======
    const [users, setUsers] = useState(null);
    const [value, setValue] = useState("");
    const pageSize = 6;
>>>>>>> d0f40516d7e641a0336fa03822ae31ce9f098867:src/components/users.jsx

    useEffect(() => {
        api.professions.fetchAll().then((data) => setProfession(data));
    }, []);

    useEffect(() => {
        setCurrentPage(1);
    }, [selectedProf, searchQuery]);

    const handleProfessionSelect = (item) => {
        if (searchQuery !== "") setSearchQuery("");
        setSelectedProf(item);
    };
    const handleSearchQuery = ({ target }) => {
        setSelectedProf(undefined);
        setSearchQuery(target.value);
    };

    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex);
    };
    const handleSort = (item) => {
        setSortBy(item);
    };

    const searchValue = (item) => {
        setValue(item.target.value);
    };

    if (users) {
<<<<<<< HEAD:src/app/components/page/usersListPage/usersListPage.jsx
        const filteredUsers = searchQuery
            ? users.filter(
=======
        const resultSearch = users.filter((user) => {
            return user.name.toLowerCase().includes(value.toLowerCase());
        });

        const filteredUsers = selectedProf
            ? resultSearch.filter(
>>>>>>> d0f40516d7e641a0336fa03822ae31ce9f098867:src/components/users.jsx
                (user) =>
                    user.name
                        .toLowerCase()
                        .indexOf(searchQuery.toLowerCase()) !== -1
            )
<<<<<<< HEAD:src/app/components/page/usersListPage/usersListPage.jsx
            : selectedProf
                ? users.filter(
                    (user) =>
                        JSON.stringify(user.profession) ===
                        JSON.stringify(selectedProf)
                )
                : users;
=======
            : resultSearch;
>>>>>>> d0f40516d7e641a0336fa03822ae31ce9f098867:src/components/users.jsx

        const count = filteredUsers.length;
        const sortedUsers = _.orderBy(
            filteredUsers,
            [sortBy.path],
            [sortBy.order]
        );
        const usersCrop = paginate(sortedUsers, currentPage, pageSize);
        const clearFilter = () => {
<<<<<<< HEAD:src/app/components/page/usersListPage/usersListPage.jsx
            setSelectedProf();
=======
            setSelectedProf(null);
            setValue("");
        };

        const clearSearch = () => {
            setValue("");
>>>>>>> d0f40516d7e641a0336fa03822ae31ce9f098867:src/components/users.jsx
        };

        return (
            <div className="d-flex">
                {professions && (
                    <div className="d-flex flex-column flex-shrink-0 p-3">
                        <GroupList
                            selectedItem={selectedProf}
                            items={professions}
                            onItemSelect={handleProfessionSelect}
                            onClearSearch={clearSearch}
                            value={value}
                        />
                        <button
                            className="btn btn-secondary mt-2"
                            onClick={clearFilter}
                        >
                            {" "}
                            Очистить
                        </button>
                    </div>
                )}
                <div className="d-flex flex-column">
                    <SearchStatus length={count} />
<<<<<<< HEAD:src/app/components/page/usersListPage/usersListPage.jsx
                    <input
                        type="text"
                        name="searchQuery"
                        placeholder="Search..."
                        onChange={handleSearchQuery}
                        value={searchQuery}
                    />
=======
                    <SearchUSers onSearch={searchValue} value={value}/>
>>>>>>> d0f40516d7e641a0336fa03822ae31ce9f098867:src/components/users.jsx
                    {count > 0 && (
                        <UserTable
                            users={usersCrop}
                            onSort={handleSort}
                            selectedSort={sortBy}
                            onDelete={handleDelete}
                            onToggleBookMark={handleToggleBookMark}
                        />
                    )}
                    <div className="d-flex justify-content-center">
                        <Pagination
                            itemsCount={count}
                            pageSize={pageSize}
                            currentPage={currentPage}
                            onPageChange={handlePageChange}
                        />
                    </div>
                </div>
            </div>
        );
    }
    return "loading...";
};
UsersListPage.propTypes = {
    users: PropTypes.array
};

export default UsersListPage;
