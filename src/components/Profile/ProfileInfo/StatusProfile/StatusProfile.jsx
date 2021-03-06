import styles from "./../ProfileInfo.module.css"
import React from "react";

class StatusProfileClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editMode: false,
            statusText: this.props.statusProfile
        };
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.statusProfile !== prevProps.statusProfile) {
            this.setState({statusText: this.props.statusProfile})
        }

    }

    editStatus = () => {
        this.setState({editMode: true})
    }
    changeText = (e) => {
        debugger
        this.setState({statusText: e.target.value})
    }
    finishEdit = (e) => {
        this.setState({editMode: false})
        this.props.updateStatusProfile(this.state.statusText);
    }

    render() {
        return <div className={styles.status}>

            {!this.state.editMode && <span
                onDoubleClick={this.editStatus}>{this.props.statusProfile || 'Double click and input your status'}</span>}
            {this.state.editMode &&
            <input onChange={this.changeText} autoFocus={true} onBlur={this.finishEdit} value={this.state.statusText}
                   type="text"/>}
        </div>
    }
}

export default StatusProfileClass


