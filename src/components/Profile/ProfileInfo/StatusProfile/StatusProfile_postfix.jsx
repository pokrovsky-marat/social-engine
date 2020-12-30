import styles from "./../ProfileInfo.module.css"
import React, {useEffect, useState} from "react";


const StatusProfile = (props) => {

    let [status, setStatus] = useState(props.statusProfile);
    let [editMode, setEditMode] = useState(false);
    useEffect(()=>{setStatus(props.statusProfile)},[props.statusProfile]);
    const editStatus = () => {
        setEditMode(true)
    }
    const finishEdit = () => {
        setEditMode(false)
        props.updateStatusProfile(status);
    }
    const changeText = (e) => {
        setStatus(e.target.value)
    }
    /*    constructor(props) {
            super(props);
            this.state = {
                editMode: false,
                statusText: this.props.statusProfile
            };


        componentDidUpdate(prevProps, prevState) {
            if (this.props.statusProfile !== prevProps.statusProfile) {
                this.setState({statusText: this.props.statusProfile})
            }

        }
    }

        changeText = (e) => {

            this.setState({statusText: e.target.value})
        }
        finishEdit = (e) => {
            this.setState({editMode: false})
            this.props.updateStatusProfile(this.state.statusText);
        }


    return <div className={styles.status}>

        {!this.state.editMode && <span
            onDoubleClick={this.editStatus}>{this.props.statusProfile || 'Double click and input your status'}</span>}
        {this.state.editMode &&
        <input onChange={this.changeText} autoFocus={true} onBlur={this.finishEdit} value={this.state.statusText}
               type="text"/>}
    </div>
        */
    return <div className={styles.status}>
        {!editMode &&
        <span onDoubleClick={editStatus}>{props.statusProfile || 'Double click and input your status'}</span>}
        {editMode && <input onChange={changeText} autoFocus={true} onBlur={finishEdit} value={status} type="text"/>}

    </div>
}


export default StatusProfile;
