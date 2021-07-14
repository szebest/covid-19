import { useSelector, useDispatch } from 'react-redux'
import { setFetchedData } from '../../actions'
import { useEffect, useState } from 'react'
import axios from 'axios'
import SearchTable from '../../components/Table/SearchTable'
import './MainSite.css'
import Graph from '../../components/Graph/Graph'

function MainSite() {
    const data = useSelector(state => state.fetchedData) // data fetched from the redux store, if there is any
    const dispatch = useDispatch() // dispatch to change the redux store state

    const [countriesData, setCountriesData] = useState([])

    useEffect(() => {
        axios.get('https://pomber.github.io/covid19/timeseries.json').then(res => {
            if (res.status === 200) // Everything went good with the request
                return res.data // We return the data to the next block of code, when everything is OK

            throw res.status // Else we throw an error to the catch block
        }).then(res => { // received data
            dispatch(setFetchedData(res))
        }).catch(err => { // some error ocurred
            console.log(err)
        })
    }, [dispatch])

    // Whenever the data variable changes, we want to update our information about the data of every country
    useEffect(() => {
        let maxLength = 0
        setCountriesData([])
        for (const key in data) {
            // Get the last day for a unique country
            const lastDay = data[key][Object.keys(data[key])[Object.keys(data[key]).length - 1]] 

            // Calculate the amount of currently infected people in a unique country
            const current = lastDay.confirmed - lastDay.deaths - lastDay.recovered

            // Append the data to the end of the array
            setCountriesData(prevState => 
                [...prevState, 
                    {country: key, confirmed: lastDay.confirmed, deaths: lastDay.deaths, recovered: lastDay.recovered, current}
                ]
            )

            maxLength = Math.max(maxLength, Object.keys(data[key]).length)
        }
    }, [data])

    const columns = [
        "Country",
        "Confirmed",
        "Deaths",
        "Recovered",
        "Current"
    ]

    return (
        <div className="wrapper">
            <Graph data={data} />
            <SearchTable rows={countriesData} columns={columns} />
        </div>
    )
}

export default MainSite;