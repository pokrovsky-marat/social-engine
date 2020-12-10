import React from "react";
import {connect} from "react-redux";
import {
    goToPage,
    getUsers,
    toggleFollowButton,
} from "../../redux/usersPageReducer";
import PresentUsers from "./PresentUsers";
import Preloader from "../common/Preloader";


class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.numberSheet, this.props.pages);
    }

    goToPage = (pageNumber) => {
        this.props.goToPage(pageNumber, this.props.pages)
    };

    render() {
        return (
            <>
                {this.props.isFetching && <Preloader/>}
                <PresentUsers
                    totalCount={this.props.totalCount}
                    pages={this.props.pages}
                    numberSheet={this.props.numberSheet}
                    goToPage={this.goToPage}
                    users={this.props.users}
                    isRequestGoing={this.props.isRequestGoing}
                    idButton={this.props.idButton}
                    toggleFollowButton={this.props.toggleFollowButton}
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
        isRequestGoing: state.usersPage.isRequestGoing,
        idButton: state.usersPage.idButton
    };
};

export default connect(mapStateToProps, {

    getUsers,
    goToPage,
    toggleFollowButton
})(UsersContainer);
