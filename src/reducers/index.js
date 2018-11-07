export function reducers(state, action) {

    switch(action.type){
        case 'hotels.sortByRating':
            const newState = JSON.parse(JSON.stringify(state));
            newState.ratingSort = -newState.ratingSort;
            newState.hotels.sort((a, b) => (a.starRating > b.starRating) ? newState.ratingSort : ((b.starRating > a.starRating) ? -newState.ratingSort : 0));
            return newState;

        default:
            return state;
    }
}
