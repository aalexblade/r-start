
import { Fragment } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


import styles from './UserCard.module.css';
console.log(styles);

// import { Container } from "../Container/Container";
// import { UserAvatar } from "../UserAvatar/UserAvatar";

const randomColor = () => {
    return Math.random() > 0.5 ? 'yellow' : 'red';
};

const isOnline = false;
export const UserCard = ({ users }) => {
    // const classNames = [styles.text, styles.item].join(' ');
    return users.map((user) => {
        return (
            <Fragment key={user.id}>
                <p>{user.name}</p>
                <p
                    className={classNames(styles.text, isOnline && styles.item)}
                    style={{
                    backgroundColor: randomColor(),
                    
                }}>{user.skills}</p>
            </Fragment>
        );
    });
    };

UserCard.propTypse = {
    users: PropTypes.arrayOf(
        //shape - для опису декількох полів з об'єкта
        // exact - для опису всіх полів об'єкта
        PropTypes.exact ({
        id: PropTypes.number.isRequired,
        name: PropTypes.string,
        email: PropTypes.string,
        bio: PropTypes.string,
        skills: PropTypes.string,
       isOpenToWork: PropTypes.bool,
       
    })).isRequired,
};
  