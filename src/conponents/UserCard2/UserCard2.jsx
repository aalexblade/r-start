
import { Fragment } from 'react';
import PropTypes from 'prop-types';



import styles from './UserCard2.module.css';
console.log(styles);

// import { Container } from "../Container/Container";
// import { UserAvatar } from "../UserAvatar/UserAvatar";

const randomColor = () => {
    return Math.random() > 0.5 ? 'yellow' : 'tomatto';
};

export const UserCard2 = ({ users }) => {
    return users.map((user) => {
        return (
            <Fragment key={user.id}>
                <p>{user.name}</p>
                <p
                    className={styles.text}
                    style={{
                    // backgroundColor: randomColor(),
                    
                }}>{user.skills}</p>
            </Fragment>
        );
    });
    };

UserCard2.propTypse = {
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
  