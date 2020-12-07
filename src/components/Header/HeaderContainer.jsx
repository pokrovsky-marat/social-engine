import Header from "./Header";
import React from "react";
import {connect} from "react-redux";
import {setAuthData} from "../../redux/authReducer";
import * as axios from "axios";

class HeaderContainer extends React.Component {
    componentDidMount = () => {
        axios
            .get(
                `https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true}
            )
            .then((response) => {
                if (response.data.resultCode === 0){
                    this.props.setAuthData(response.data.data)}

            });
    }

    render() {

        return (
            <Header data={this.props.data} isAuth={this.props.isAuth}/>
        );
    }
}

function mapStateToProps(state) {
    return {
        data: state.auth.data,
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, {setAuthData})(HeaderContainer);
