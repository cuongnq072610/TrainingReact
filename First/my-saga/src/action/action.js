import { FETCHING_DATA } from './constrants'

// loading
export function fetchData() { 
    console.log('x')
    return {
        type: FETCHING_DATA
    }
}
