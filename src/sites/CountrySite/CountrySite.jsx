import { useSelector } from 'react-redux'
import { useParams } from "react-router-dom"
import PaginationTable from '../../components/Table/PaginationTable'
import { Redirect } from 'react-router'

function CountrySite() {

    const { countryName } = useParams() // get the country name from the URL

    const data = useSelector(state => state.fetchedData) // data fetched from the redux store, if there is any

    if ((Object.keys(data).length === 0)) // if we don't have the data, we redirect back to the main site
        return <Redirect push to="/" />

    const countryData = data[countryName]

    const modifiedCountryData = countryData.map(item => {
        const current = item.confirmed - item.deaths - item.recovered

        return {date: item.date, confirmed: item.confirmed, deaths: item.deaths, recovered: item.recovered, current}
    })

    const columns = [
        "Date",
        "Confirmed",
        "Deaths",
        "Recovered",
        "Current"
    ]

    return (
        <div className="wrapper">
            <PaginationTable rows={modifiedCountryData} columns={columns} />
        </div>
    )
}

export default CountrySite;