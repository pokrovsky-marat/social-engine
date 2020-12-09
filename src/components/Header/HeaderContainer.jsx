import Header from "./Header";
import React from "react";
import {connect} from "react-redux";
import {setAuthData} from "../../redux/authReducer";
import {api} from "../../api/api";



class HeaderContainer extends React.Component {
    componentDidMount = () => {

  api.authMe().then((response) => {
                if (response.resultCode === 0){
                    this.props.setAuthData(response.data)}

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
