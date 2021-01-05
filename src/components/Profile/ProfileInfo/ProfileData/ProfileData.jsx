import React, {useEffect, useState} from "react";
import styles from "./../ProfileInfo.module.css"

const ProfileData = (props) => {
    let profileData = {
        aboutMe: props.profileInfo.aboutMe,
        userId: props.profileInfo.userId,
        lookingForAJob: props.profileInfo.lookingForAJob,
        lookingForAJobDescription: props.profileInfo.lookingForAJobDescription,
        fullName: props.profileInfo.fullName,
        contacts: {
            github: props.profileInfo.contacts.github,
            vk: props.profileInfo.contacts.vk,
            facebook: props.profileInfo.contacts.facebook,
            instagram: props.profileInfo.contacts.instagram,
            twitter: props.profileInfo.contacts.twitter,
            website: props.profileInfo.contacts.website,
            youtube: props.profileInfo.contacts.youtube,
            mainLink: props.profileInfo.contacts.mainLink,
        },
    };
    return (
        <div className={styles.profileData}>
            <div><b>aboutMe:</b>{props.profileInfo.aboutMe}</div>
            <div><b>userId: </b>{props.profileInfo.userId}</div>
            <div><b>lookingForAJob:</b> {props.profileInfo.lookingForAJob?"yes":"no"}</div>
            <div><b>lookingForAJobDescription:</b> {props.profileInfo.lookingForAJobDescription}</div>
            <div><b>fullName:</b> {props.profileInfo.fullName}</div>
            <div><b>contacts:</b></div>
            <div className={styles.contacts}>
                <div><b>github:</b> {props.profileInfo.contacts.github}</div>
                <div><b>vk: </b>{props.profileInfo.contacts.vk}</div>
                <div><b>facebook:</b> {props.profileInfo.contacts.facebook}</div>
                <div><b>instagram:</b> {props.profileInfo.contacts.instagram}</div>
                <div><b>twitter:</b> {props.profileInfo.contacts.twitter}</div>
                <div><b>website:</b> {props.profileInfo.contacts.website}</div>
                <div><b>youtube:</b> {props.profileInfo.contacts.youtube}</div>
                <div><b>mainLink:</b> {props.profileInfo.contacts.mainLink}</div>
            </div>

        </div>
    )
}

export default ProfileData;
