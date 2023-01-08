
import PropTypes from 'prop-types';
import { exact } from 'prop-types';
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
        //shape - для опису декількох полів з об'єкта
        // exact - для опису всіх полів об'єкта
        PropTypes.exact({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        email: PropTypes.string,
        bio: PropTypes.string,
        skills: PropTypes.string,
       isOpenToWork: PropTypes.bool,
       
    })).isRequired,
};
  