import React, {useState} from 'react'
import {connect} from "react-redux";

import {SearchInputLight} from "../../styles/searchPage";
import {withRouter} from "react-router-dom";

import {search} from "../../store/reducers/searchReducer/actions";

const SearchBarLight = ({history, dispatch, searchText}) => {

    const [searchContent, searchContentHandler] = useState(searchText);

    const searchHandler = (e) => {
        e.preventDefault();
        dispatch(search({search: searchContent}));
        history.push('/search');
    };

    return <div>
        <form onSubmit={searchHandler}>
            <SearchInputLight
            type='text'
            placeholder='Search...'
            value={searchContent}
            onChange={(e) => searchContentHandler(e.currentTarget.value)}/>
        </form>
    </div>
};

const mapStateToProps = (state) => {    // lastProps also available here
    return {
        searchText: state.searchData.search,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch: dispatch,
    }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchBarLight));
