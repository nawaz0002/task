import { GET_STATE_DATA, SEARCH_STATE_DATA, FILTER_STATE_DATA} from '../action/types';

const initialState = {
    data: null,
    loading: true,
    isAuthenticated: null,
    filterData: null
}

export default function(state = initialState, action){
    // console.log(action)
    const { type, payload } = action;
    switch(type){
        case GET_STATE_DATA:
            return{
                ...state,
                isAuthenticated: true,
                loading: false,
                data: payload
            }
        case SEARCH_STATE_DATA:
            return{
                ...state,
                isAuthenticated: true,
                loading: false,
                data: payload
            }       
        case FILTER_STATE_DATA:
            const val = state.data.filter(single => {
                let capitalLetter
                if(payload){
                    capitalLetter = payload[0].toUpperCase() + payload.slice(1)
                }
                if(single.State === capitalLetter){
                    return single
                }
            })
            return{
                ...state,
                isAuthenticated: true,
                loading: false,
                filterData: val
            }

        default:
            return{
                ...state
            }
    }
}