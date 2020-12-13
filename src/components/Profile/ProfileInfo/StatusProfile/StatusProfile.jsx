import styles from "./../ProfileInfo.module.css"
import React from "react";

class StatusProfile extends React.Component {
    state = {editMode: false}
    editStatus = () => {
        this.setState({editMode: true})
    }
    finishEdit = () => {
        this.setState({editMode: false})
    }

    render() {
        return <div className={styles.status}>

            {!this.state.editMode && <span onDoubleClick={this.editStatus}>{this.props.myStatus}</span>}
            {this.state.editMode && <input autoFocus={true} onBlur={this.finishEdit} defaultValue={this.props.myStatus} type="text"/>}
        </div>
    }
}


export default StatusProfile;
