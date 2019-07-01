import { DATA_TYPES } from '../types'

export const handleInit = () => dispatch => {
    fetch('http://tdamdemo-env.6aki9pmnmk.us-west-2.elasticbeanstalk.com/graphql', {
        method: 'post',
        body: JSON.stringify({ "query": "{corporations{ticker, name, description}}" }),
        headers: { 'Content-Type': 'application/json' }
    }).then(res => res.json())
    .then(json => {
            dispatch({
                type: DATA_TYPES.SET_CORP,
                payload: json.data.corporations
            })
            fetch('http://tdamdemo-env.6aki9pmnmk.us-west-2.elasticbeanstalk.com/graphql', {
                method: 'post',
                body: JSON.stringify({ "query": "{trades{price, time, corporation{ticker}}}" }),
                headers: { 'Content-Type': 'application/json' }
            })
            .then(res => res.json())
            .then(json => {
                dispatch({
                    type: DATA_TYPES.SET_TRADES,
                    payload: json.data.trades
            })
        })
    })
}

export const handleActive = (activeCorp) => dispatch => {
    dispatch({
        type: DATA_TYPES.SET_ACTIVE,
        payload: activeCorp
    })
}