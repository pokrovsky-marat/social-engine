import styles from "./../ProfileInfo.module.css"
import React from "react";
import {updateStatusProfile} from "../../../../redux/profilePageReducer";

class StatusProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editMode: false,
            statusText: this.props.statusProfile
        };
    }


    editStatus = () => {
        this.setState({editMode: true})
    }
    finishEdit = (e) => {
        this.setState({editMode: false, statusText: e.target.value})
        this.props.updateStatusProfile(e.target.value);
    }
    changeState = () => {
        this.setState({statusText: this.props.statusProfile})
    }

    render() {
        if (this.state.statusText !== this.props.statusProfile) {
            console.log('***************');
            this.changeState()

        }
        return <div className={styles.status}>

            {!this.state.editMode && <span
                onDoubleClick={this.editStatus}>{this.props.statusProfile || 'Double click and input your status'}</span>}
            {this.state.editMode &&
            <input autoFocus={true} onBlur={this.finishEdit} defaultValue={this.state.statusText} type="text"/>}
        </div>
    }
}


export default StatusProfile;
