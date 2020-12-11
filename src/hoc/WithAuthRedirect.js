import React from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

function mapStateToProps(state) {
    return {
        isAuth: state.auth.isAuth
    }
}

const WithAuthRedirect = (Comp) => {

    function Container(props) {
        if (!props.isAuth) return <Redirect to="/login"/>
        return <Comp {...props}/>
    }
   return  connect(mapStateToProps,{})(Container)
}
export default WithAuthRedirect