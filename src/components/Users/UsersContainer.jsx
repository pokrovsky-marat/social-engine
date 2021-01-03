import React from "react";
import {connect} from "react-redux";
import {
    changeStart,
    goToPage,
    requestUsers,
    toggleFollowButton,
} from "../../redux/usersPageReducer";
import PresentUsers from "./PresentUsers";
import Preloader from "../common/Preloader";
import {
    getIdButton,
    getIsFetching,
    getIsRequestGoing, getNumberSheet, getPages,
    getTotalCount,
    getUsers
} from "../../redux/selectors/usersSelector";


class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.requestUsers(this.props.numberSheet, this.props.pages);
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
                    start={this.props.start}
                    changeStart={this.props.changeStart}
                />
            </>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        totalCount: getTotalCount(state),
        pages: getPages(state),
        numberSheet: getNumberSheet(state),
        isFetching: getIsFetching(state),
        isRequestGoing: getIsRequestGoing(state),
        idButton: getIdButton(state),
        start: state.usersPage.start
    };
};

export default connect(mapStateToProps, {
    requestUsers,
    goToPage,
    toggleFollowButton,
    changeStart
})(UsersContainer);
