import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUser} from "../../redux/profilePageReducer";
import {Redirect, withRouter} from "react-router-dom";

class ProfileContainer extends React.Component {
    componentDidMount() {
        this.props.getUser(this.props.match.params.userId)
    }

    render() {
        if (!this.props.isAuth) return <Redirect to="/login"/>
        return (
            <Profile {...this.props} profileInfo={this.props.profileInfo}/>
        )
    }
}

function mapStateToProps(state) {
    return {
        profileInfo: state.profilePage.profileInfo,
        isAuth: state.auth.isAuth
    }
}

let WithRouterContainer = withRouter(ProfileContainer)

export default connect(mapStateToProps, {getUser})(WithRouterContainer);
