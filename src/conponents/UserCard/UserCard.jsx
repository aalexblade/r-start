
import PropTypes from 'prop-types';
import { Fragment } from 'react';
// import { Container } from "../Container/Container";
// import { UserAvatar } from "../UserAvatar/UserAvatar";

export const UserCard = ({ users }) => {
    return users.map((user) => {
        return (
            <Fragment key={user.id}>
                <p>{user.name }</p>
            </Fragment>
        );
    });
    };

UserCard.propTypse = {
    users: PropTypes.arrayOf(
        PropTypes.shape({
        id: PropTypes.number.isRequired,
       name: PropTypes.string.isRequired, 
    })).isRequired,
};
