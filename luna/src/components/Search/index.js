import React, {useState, useEffect} from 'react'
import {connect} from "react-redux";

import {getRestaurantSearchResults, getUserSearchResults} from "../../store/reducers/searchReducer/actions";
import SearchBarLight from "../SearchBarLight";
import RestaurantCard from "../Restaurants/RestaurantCard";
import UserCard from "../Users/UserCard";

import '../Restaurants/index.css';
import {SearchPageHeader, SearchPageSubHeader, SearchPageTabs} from '../../styles/searchPage';

const SearchPage = ({getRestaurantSearchResults, getUserSearchResults, search}) => {
    const [currentTab, currentTabHandler] = useState('restaurant');
    const [searchRestaurantResults, searchRestaurantResultsHandler] = useState(null);
    const [searchUserResults, searchUserResultsHandler] = useState(null);


    useEffect(() => {
        let restaurants = null;
        let users = null;

        async function fetchSearchResults() {
            restaurants = await getRestaurantSearchResults(search);
            users = await getUserSearchResults(search);
            searchRestaurantResultsHandler(restaurants);
            searchUserResultsHandler(users);
        }

        if (search !== '') {
            fetchSearchResults()
        }
    }, [getRestaurantSearchResults, getUserSearchResults, search]);

    return <div>
        <SearchPageHeader>
            <SearchBarLight/>
            <SearchPageSubHeader>
                <SearchPageTabs onClick={() => currentTabHandler('restaurant')}>Restaurants</SearchPageTabs>
                <SearchPageTabs onClick={() => currentTabHandler('users')}>Users</SearchPageTabs>
            </SearchPageSubHeader>
        </SearchPageHeader>
        <div>
            {(currentTab === 'users')
                ? <div className='users'>
                    {(searchUserResults && searchUserResults.length > 0)
                    ? searchUserResults.map((user_data) =>
                        <UserCard
                            key={user_data.id}
                            firstName={user_data.first_name}
                            lastName={user_data.last_name}
                        />)
                    : <span>No users found</span>
                    }
                </div>
                : <div className='restaurants'>
                    {(searchRestaurantResults && searchRestaurantResults.length > 0)
                    ? searchRestaurantResults.map((restaurant) =>
                    <RestaurantCard
                        key={restaurant.id}
                        restaurant={restaurant}/>)
                    : <span>No restaurants found</span>
                    }
                </div>
            }
        </div>
    </div>
};

const mapStateToProps = (state) => {    // lastProps also available here
    return {
        search: state.searchData.search,
    }
};

const mapDispatchToProps = (dispatch, getState) => {
    return {
        dispatch: dispatch,
        getRestaurantSearchResults: (searchText) =>
            dispatch(getRestaurantSearchResults(dispatch, getState, searchText)),
        getUserSearchResults: (searchText) =>
            dispatch(getUserSearchResults(dispatch, getState, searchText)),

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
