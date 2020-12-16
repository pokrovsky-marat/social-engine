import React from "react";
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {authLogin, authLogOut} from "../../redux/authReducer";

function LoginContainer(props) {
    const toLogIn = (data) => {
        console.log(data);
    }
    return (
        <div>
            <h1>Login</h1>
            {props.isAuth ? <LogOut authLogOut={props.authLogOut}/> : <ReduxLoginForm onSubmit={props.authLogin}/>}
        </div>
    )
}

const LogOut = (props) => {
    return (
        <div>
            <button onClick={props.authLogOut}>Log out</button>
        </div>
    )
}

function LoginForm(props) {
    return <form onSubmit={props.handleSubmit}>
        <div><Field component={"input"} name={"email"} placeholder={"Input your email"}/></div>
        <div><Field component={"input"} name={"password"} placeholder={"Input your password"}/></div>
        <div><Field component={"input"} name={"rememberMe"} type={"checkbox"}/></div>
        <div>
            <button>Login</button>
        </div>
    </form>
}

function mapStateToProps(state) {
    return {
        isAuth: state.auth.isAuth
    }
}

const ReduxLoginForm = reduxForm({form: 'login'})(LoginForm)
export default connect(mapStateToProps, {authLogin, authLogOut})(LoginContainer)