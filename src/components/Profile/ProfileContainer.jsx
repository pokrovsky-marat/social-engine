import React from "react";
import Profile from "./Profile";
import * as axios from "axios";
import {connect} from "react-redux";
import {setProfileInfo} from "../../redux/profilePageReducer";
import {withRouter} from "react-router-dom";


class ProfileContainer extends React.Component {
    componentDidMount() {
        let id = this.props.match.params.userId || 13067;
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/profile/`+id)
            .then((response) => {
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
let WithRouterContainer = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setProfileInfo})(WithRouterContainer);
