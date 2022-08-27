import React from "react";
import Users from "./users";
import RouteUser from "./routeUser";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";

const RoutingUsers = () => {
    const params = useParams();
    const { userId } = params;
    return (
        <>
            {userId
                ? <RouteUser id={userId} history={history} />
                : <Users />
            }
        </>
    );
};

RoutingUsers.propTypes = {
    id: PropTypes.any
};

export default RoutingUsers;
