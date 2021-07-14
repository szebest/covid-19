const fetchedDataReducer = (state = {}, action) => {
    switch (action.type) {
        case 'SET_FETCHED_DATA':
            state = action.fetchedData
            return state
        default:
            return state
    }
}

export default fetchedDataReducer;