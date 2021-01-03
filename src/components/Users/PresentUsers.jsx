import s from "./Users.module.css";
import React from "react";
import img from "./../../assets/pics/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png";
import {NavLink} from "react-router-dom";

let PresentUsers = (props) => {

    let end = props.start + 10;
    let countPagesArray = [];
    let countPages = Math.ceil(props.totalCount / props.pages);
    for (let i = 1; i <= countPages; i++) {
        countPagesArray.push(i);
    }
    let portion = countPagesArray.slice(props.start, end)

    return (
        <div className={s.users}>

            <div>
                {portion.map((item, index) => (
                    <button
                        className={item === props.numberSheet ? s.btn : ""}
                        onClick={() => {
                            props.goToPage(item);
                        }}
                        key={index}
                    >
                        {item}
                    </button>
                ))}
                <button onClick={() => {
                    props.changeStart(props.start - 10);
                    props.goToPage(props.start-9);
                }} disabled={props.start === 0 && "true"}>back
                </button>
                <button onClick={() => {
                    props.changeStart(props.start + 10)
                    props.goToPage(props.start+11);
                }} disabled={props.start + 10 > countPages && "true"}>forward
                </button>
            </div>
            {props.users.map((item) => (
                <div key={item.id} className={s.user}>
                    <div>id: {item.id}</div>
                    <div>
                        <NavLink to={`/profile/${item.id}`}><img src={item.photos.small || img} alt="ava"/></NavLink>
                    </div>
                    <div>
                        <button disabled={props.isRequestGoing && props.idButton == item.id}
                                onClick={() => {
                                    props.toggleFollowButton(item.id, item.followed);
                                }}
                        >
                            {item.followed ? "Don't follow" : "Follow"}
                        </button>
                    </div>
                    <div>{item.name}</div>
                    <div>{status}</div>
                </div>
            ))}
        </div>
    );
};

export default PresentUsers;
