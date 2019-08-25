import React, {useState} from 'react'
import {connect} from "react-redux";

import {StrongButton} from "../../styles/base_components";
import {SearchInput} from "../../styles/home_layout";
import {withRouter} from "react-router-dom";

import {search} from "../../store/reducers/searchReducer/actions";

const SearchBar = ({history, dispatch}) => {

    const [searchContent, searchContentHandler] = useState('');

    const searchHandler = (e) => {
        e.preventDefault();
        dispatch(search({search: searchContent}));
        history.push('/search');
    };

    return <div>
        <form onSubmit={searchHandler}>
            <SearchInput
            type='text'
            placeholder='Search...'
            value={searchContent}
            onChange={(e) => searchContentHandler(e.currentTarget.value)}/>
            <StrongButton>Search</StrongButton>
        </form>
    </div>
};

const mapStateToProps = (state) => {    // lastProps also available here
    return {}
};

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch: dispatch,
    }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchBar));
