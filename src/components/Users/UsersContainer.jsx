import React from "react";
import {connect} from "react-redux";
import {
    changeFollow,
    changeNumberSheet,
    setState, togglePreloader,
} from "../../redux/usersPageReducer";
import PresentUsers from "./PresentUsers";
import Preloader from "../common/Preloader";
import {api} from "../../api/api";


class UsersContainer extends React.Component {
    constructor(props) {
        super(props);
        this.followBtnClick = this.followBtnClick.bind(this);
    }

    componentDidMount() {
        this.props.togglePreloader(true);
        api.getUsers(this.props.numberSheet, this.props.pages)
            .then((response) => {
                this.props.togglePreloader(false);
                this.props.setState(response);
            });
    }

    followBtnClick(value) {
        this.props.changeFollow(value);
    }

    /*    followBtnClick(value) {
          this.props.changeFollow(value);
          //TypeError: Cannot read property 'changeFollow' of undefined
        }
        followBtnClick = (value) => {
          this.props.changeFollow(value);
        };*/

    goToPage = (pageNumber) => {
        this.props.togglePreloader(true);
        api.getUsers(pageNumber, this.props.pages)
            .then((response) => {
                this.props.togglePreloader(false);
                this.props.changeNumberSheet(pageNumber, response);
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

export default connect(mapStateToProps, {
    changeFollow,
    setState,
    changeNumberSheet,
    togglePreloader
})(UsersContainer);
