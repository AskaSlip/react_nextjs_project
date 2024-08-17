import React from 'react';
import styles from './UserInfo.module.css'

const UserInfo = () => {
    return (
        <div className={styles.wrap}>
            <span>AnkaSlip</span>
            <img className={styles.img} src="/userIcon.png" alt="user icon"/>
        </div>
    );
};

export default UserInfo;