import React from 'react'
import { addDialogMessage} from "../../redux/dialogsPageReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import WithAuthRedirect from "../../hoc/WithAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    }
}

export default compose(connect(mapStateToProps, {addDialogMessage}),
    WithAuthRedirect
)(Dialogs)