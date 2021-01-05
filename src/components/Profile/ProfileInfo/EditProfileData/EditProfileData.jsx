import React, {useEffect, useState} from "react";
import styles from "./../ProfileInfo.module.css"
import {Field, reduxForm} from "redux-form";
import {requiredField} from "../../../../utils/validators/validator";
import {Input, TextArea} from "../../../common/formControls/formControls";

class EditProfileDataForm extends React.Component {
    componentDidMount() {
        this.props.initialize({
            aboutMe: this.props.profileInfo.aboutMe,
            userId: this.props.profileInfo.userId,
            lookingForAJob: this.props.profileInfo.lookingForAJob,
            lookingForAJobDescription: this.props.profileInfo.lookingForAJobDescription,
            fullName: this.props.profileInfo.fullName,
            contacts: {
                github: this.props.profileInfo.contacts.github,
                vk: this.props.profileInfo.contacts.vk,
                facebook: this.props.profileInfo.contacts.facebook,
                instagram: this.props.profileInfo.contacts.instagram,
                twitter: this.props.profileInfo.contacts.twitter,
                website: this.props.profileInfo.contacts.website,
                youtube: this.props.profileInfo.contacts.youtube,
                mainLink: this.props.profileInfo.contacts.mainLink,
            }
        });
    }

    render() {
        return (
            <form onSubmit={this.props.handleSubmit}>
                <div className={styles.profileData}>

                    <Field component={'input'} name={'userId'} hidden={'true'}/>
                    aboutMe: <Field component={'input'} name={'aboutMe'} placeholder={'aboutMe'}/><br/>
                    lookingForAJob: <Field component={'input'} type={'checkbox'} name={'lookingForAJob'}/><br/>
                    lookingForAJobDescription: <Field component={'input'} name={'lookingForAJobDescription'}
                                                      placeholder={'lookingForAJobDescription'}/><br/>
                    fullName: <Field component={'input'} name={'fullName'} placeholder={'fullName'}/><br/>
                    github: <Field component={'input'} name={'contacts.github'} placeholder={'github'}/><br/>
                    vk: <Field component={'input'} name={'contacts.vk'} placeholder={'vk'}/><br/>
                    facebook: <Field component={'input'} name={'contacts.facebook'} placeholder={'facebook'}/><br/>
                    instagram: <Field component={'input'} name={'contacts.instagram'} placeholder={'instagram'}/><br/>
                    twitter: <Field component={'input'} name={'contacts.twitter'} placeholder={'twitter'}/><br/>
                    website: <Field component={'input'} name={'contacts.website'} placeholder={'website'}/><br/>
                    youtube: <Field component={'input'} name={'contacts.youtube'} placeholder={'youtube'}/><br/>
                    mainLink: <Field component={'input'} name={'contacts.mainLink'} placeholder={'mainLink'}/><br/>

                </div>
                <div>
                    <button>Save</button>
                </div>
            </form>
        )
    }
}

let ReduxForm = reduxForm({form: 'EditProfileDataForm'})(EditProfileDataForm)

const EditProfileData = (props) => {
    const handleSubmit = (data) => {
        props.toggleEditProfileData();
        props.updateProfileData(data, data.userId)
    }
    return (
        <ReduxForm {...props} onSubmit={handleSubmit}/>

    )
}

export default EditProfileData;
