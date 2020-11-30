import style from "./../Users.module.css"
import React from "react";

const User = ({id, name, status, location, isFollow, urlPhoto, changeFollow, setState}) => {


    function followBtnClick() {
        changeFollow(id);
    }

    return (
        <div className={style.user}>
            <div><img src={urlPhoto} alt="ava"/></div>
            <div>
                <button onClick={followBtnClick}>{isFollow ? "Don't follow" : "Follow"}</button>
            </div>
            <div>{name}</div>
            <div>{status}</div>
            <div>{location.city}</div>
            <div>{location.country}</div>
        </div>


    );
}

export default User;