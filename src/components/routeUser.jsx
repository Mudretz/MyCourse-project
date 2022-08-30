import React, { useState, useEffect } from "react";
import api from "../api";
import PropTypes from "prop-types";
import Qualitie from "./qualitie";
import { useHistory } from "react-router-dom";

const RouteUser = ({ id }) => {
    const [idUser, setIdUser] = useState(null);
    const history = useHistory();
    useEffect(() => {
        api.users
            .getById(id)
            .then((id) =>
                setIdUser(
                    id
                )
            );
    });

    const handleSave = () => {
        history.replace("/users");
    };

    if (idUser) {
        return (
            <>
                <h1>{idUser.name}</h1>
                <h2>Профессия: {idUser.profession.name}</h2>
                <h3>
                    {idUser.qualities.map((qualitie) => (
                        <Qualitie
                            key={qualitie._id}
                            {...qualitie}
                        />
                    ))}
                </h3>
                <h4>completedMeetings: {idUser.completedMeetings}</h4>
                <h5>Rate: {idUser.rate}</h5>
                <button onClick={() => {
                    handleSave();
                }}
                >
                    Все пользователи
                </button>
            </>
        );
    } else {
        return (
            <h1>...Loading</h1>
        );
    };
};

RouteUser.propTypes = {
    id: PropTypes.string.isRequired
};

export default RouteUser;
