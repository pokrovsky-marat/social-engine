import React from "react";
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {authLogin} from "../../redux/authReducer";
import {requiredField} from "../../utils/validators/validator";
import {Input} from "../common/formControls/formControls";
import {Redirect} from "react-router-dom";
import classes from "./Login.module.css"

function LoginContainer(props) {
    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }
    return (
        <div>
            <h1>Login</h1>
            <ReduxLoginForm onSubmit={props.authLogin}/>
        </div>
    )
}


function LoginForm(props) {
    return <form onSubmit={props.handleSubmit}>
        <div className={props.error && classes.wrongInput}>
            <div>
                <Field validate={requiredField} component={Input} name={"email"} placeholder={"Input your email"}/>
            </div>
            <div>
                <Field validate={requiredField} component={Input} name={"password"}
                       placeholder={"Input your password"}/>
            </div>
            <div>
                <Field component={"input"} name={"rememberMe"} type={"checkbox"}/></div>
            <div>
                <button>Login</button>
            </div>
        </div>

    </form>
}

function mapStateToProps(state) {
    return {
        isAuth: state.auth.isAuth
    }
}

const ReduxLoginForm = reduxForm({form: 'login'})(LoginForm)
export default connect(mapStateToProps, {authLogin})(LoginContainer)