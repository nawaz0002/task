import { GET_STATE_DATA , SEARCH_STATE_DATA, FILTER_STATE_DATA} from './types.js';
import Papa from 'papaparse'

export const getStateData =  () => async dispatch => {
// async function getData() {
    try {
        const response = await fetch('/state_wise_data.csv')
        const reader = response.body.getReader()
        const result = await reader.read() // raw array
        const decoder = new TextDecoder('utf-8')
        const csv = decoder.decode(result.value) // the csv text
        const results = Papa.parse(csv, { header: true }) // object with { data, errors, meta }
        const rows = results.data // array of objects
        // console.log(rows)
        dispatch({
            type: GET_STATE_DATA,
            payload: rows
        })
    } catch (err) {
        console.log(err)
    }

    // setRows(rows)
//   }  

}

export const searchStateData = data => async dispatch => {
    // console.log(data)
    try {
        dispatch({
            type: SEARCH_STATE_DATA,
            payload: data
        })
    } catch (err) {
        console.log(err)
    }
}
export const filterStateData = query => async dispatch => {
    // console.log(data)
    try {
        dispatch({
            type: FILTER_STATE_DATA,
            payload: query
        })
    } catch (err) {
        console.log(err)
    }
}