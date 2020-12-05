import React from "react";
import * as axios from "axios";
import {connect} from "react-redux";
import {
    changeFollowUserActionCreator,
    changeNumberSheetActionCreator,
    setStateActionCreator, togglePreloaderActionCreator,
} from "../../redux/usersPageReducer";
import PresentUsers from "./PresentUsers";
import Preloader from "../common/Preloader";

class UsersContainer extends React.Component {
    constructor(props) {
        super(props);
        this.followBtnClick = this.followBtnClick.bind(this);
    }

    componentDidMount() {
        this.props.togglePreloader(true);
        axios
            .get(
                `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.numberSheet}&count=${this.props.pages}`
            )
            .then((response) => {
                this.props.togglePreloader(false);
                console.log("request to server from componentDidMount");
                this.props.setState(response.data);
            });
    }

    followBtnClick(value) {
        this.props.changeFollow(value);
    }

    // followBtnClick(value) {
    //   debugger;
    //   this.props.changeFollow(value);
    //   //TypeError: Cannot read property 'changeFollow' of undefined
    // }
    // followBtnClick = (value) => {
    //   debugger;
    //   this.props.changeFollow(value);
    // };

    goToPage = (pageNumber) => {
        this.props.togglePreloader(true);
        axios
            .get(
                `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pages}`
            )
            .then((response) => {
                this.props.togglePreloader(false);
                console.log("request to server from goToPage");
                this.props.changeNumberSheet(pageNumber, response.data);
            });
    };

    render() {
        return (
            <>
                {this.props.isFetching && <Preloader/>}


                <PresentUsers
                    // props={this.props}
                    totalCount={this.props.totalCount}
                    pages={this.props.pages}
                    numberSheet={this.props.numberSheet}
                    goToPage={this.goToPage}
                    users={this.props.users}
                    followBtnClick={this.followBtnClick}
                />
            </>

        );
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        totalCount: state.usersPage.totalCount,
        pages: state.usersPage.pages,
        numberSheet: state.usersPage.numberSheet,
        isFetching: state.usersPage.isFetching,
    };
};
let mapDispatchToProps = (dispatch) => {
    return {
        changeFollow: (id) => {
            dispatch(changeFollowUserActionCreator(id));
        },
        setState: (state) => {
            dispatch(setStateActionCreator(state));
        },
        changeNumberSheet: (number, state) => {
            dispatch(changeNumberSheetActionCreator(number, state));
        },
        togglePreloader: (isFetching) => {
            dispatch(togglePreloaderActionCreator(isFetching));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
