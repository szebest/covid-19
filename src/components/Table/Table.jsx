import { Redirect } from 'react-router'
import { useState }from 'react'
import classes from './Table.module.css'

function Table( { rows, columns, sortingFunction } ) {

    const [clickedCountry, setClickedCountry] = useState("")

    if (clickedCountry !== "")
        return <Redirect push to={`/${clickedCountry}`} />

    if (rows.length === 0)
        rows = Array.from({length: 50}, (_, index) => index + 1);

    return (
        <table className={`${classes.contentTable} ${classes.noselect}`}>
            <thead>
                <tr key="Top">
                    {columns.map(column => <th key={column} className={classes.clickable}>{column}</th>)}
                </tr>
            </thead>
            <tbody>
                {rows.map((countryData, index) =>
                <tr key={index}>
                    {!!countryData.country && <td className={classes.clickable} onClick={() => setClickedCountry(countryData.country)}>{countryData.country}</td>}
                    {!!countryData.date && <td>{countryData.date}</td>}
                    {!countryData.country && !countryData.date && <td></td>}
                    <td>{countryData.confirmed}</td>
                    <td>{countryData.deaths}</td>
                    <td>{countryData.recovered}</td>
                    <td>{countryData.current}</td>
                </tr>
                )}
            </tbody>
        </table>
    )
}

export default Table