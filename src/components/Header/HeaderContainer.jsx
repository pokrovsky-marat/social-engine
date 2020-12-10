import Header from "./Header";
import React from "react";
import {connect} from "react-redux";
import {authMe} from "../../redux/authReducer";

class HeaderContainer extends React.Component {
    componentDidMount = () => {
        this.props.authMe();
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

export default connect(mapStateToProps, {authMe})(HeaderContainer);
