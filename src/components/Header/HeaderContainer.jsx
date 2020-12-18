import Header from "./Header";
import React from "react";
import {connect} from "react-redux";
import {authLogOut, authMe} from "../../redux/authReducer";

class HeaderContainer extends React.Component {
    componentDidMount = () => {
        this.props.authMe();
    }

    render() {
        return (
            <Header data={this.props.data} isAuth={this.props.isAuth} authLogOut={this.props.authLogOut}/>
        );
    }
}

function mapStateToProps(state) {
    return {
        data: state.auth.data,
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, {authMe, authLogOut})(HeaderContainer);
