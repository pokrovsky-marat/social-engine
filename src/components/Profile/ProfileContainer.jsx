import React from "react";
import Profile from "./Profile";
import * as axios from "axios";
import {connect} from "react-redux";
import {setProfileInfo} from "../../redux/profilePageReducer";


class ProfileContainer extends React.Component {
    componentDidMount() {
        debugger
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then((response) => {
                debugger
                this.props.setProfileInfo(response.data)
            });
    }

    render() {
        return (
            <Profile {...this.props} profileInfo={this.props.profileInfo}/>
        )
    }


}

function mapStateToProps(state) {
    return {
        profileInfo: state.profilePage.profileInfo
    }
}

export default connect(mapStateToProps, {
    setProfileInfo
})(ProfileContainer);
