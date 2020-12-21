import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatusProfile, getUser, updateStatusProfile} from "../../redux/profilePageReducer";
import {Redirect, withRouter} from "react-router-dom";
import WithAuthRedirect from "../../hoc/WithAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {
    componentDidMount() {

        if (this.props.match.params.userId) {
            this.props.getUser(this.props.match.params.userId);
            this.props.getStatusProfile(this.props.match.params.userId);
        } else if (this.props.isAuth) {
            this.props.getUser(this.props.id);
            this.props.getStatusProfile(this.props.id);
        }

    }

    render() {

         if (!this.props.isAuth && !this.props.match.params.userId) return <Redirect to="/login"/>
        return (
            <Profile {...this.props} /*profileInfo={this.props.profileInfo}*//>
        )
    }
}

function mapStateToProps(state) {
    return {
        profileInfo: state.profilePage.profileInfo,
        statusProfile: state.profilePage.statusProfile,
        isAuth: state.auth.isAuth,
        id: state.auth.id
    }
}

export default compose(connect(mapStateToProps, {getUser, getStatusProfile, updateStatusProfile}),
    withRouter,
    /*WithAuthRedirect*/)(ProfileContainer);


/*
let ProfileContainerWithAuth = WithAuthRedirect(ProfileContainer);//Оборачиваем профайл контейнер

let WithRouterContainer = withRouter(ProfileContainerWithAuth)

export default connect(mapStateToProps, {getUser})(WithRouterContainer);
*/
