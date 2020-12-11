import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUser} from "../../redux/profilePageReducer";
import {Redirect, withRouter} from "react-router-dom";
import WithAuthRedirect from "../../hoc/WithAuthRedirect";

class ProfileContainer extends React.Component {
    componentDidMount() {
        this.props.getUser(this.props.match.params.userId)
    }

    render() {
        // if (!this.props.isAuth) return <Redirect to="/login"/>
        return (
            <Profile {...this.props} profileInfo={this.props.profileInfo}/>
        )
    }
}

function mapStateToProps(state) {
    return {
        profileInfo: state.profilePage.profileInfo,
        // isAuth: state.auth.isAuth
    }
}



let ProfileContainerWithAuth = WithAuthRedirect(ProfileContainer);//Оборачиваем профайл контейнер

let WithRouterContainer = withRouter(ProfileContainerWithAuth)

export default connect(mapStateToProps, {getUser})(WithRouterContainer);
