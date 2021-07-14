import Table from './Table'
import { useState, useEffect } from 'react'
import Search from '../Search/Search'

function SearchTable( { rows, columns } ) {
    const [modifiedRows, setModifiedRows] = useState([])

    useEffect(() => {
        setModifiedRows(rows)
    }, [rows])

    const submitSearch = (search) => {
        setModifiedRows(rows.filter(item => {
            return item.country.toLowerCase().includes(search.toLowerCase())
        }))
    }

    return (
        <div>
            <Search submitSearch={submitSearch} />
            <Table rows={modifiedRows} columns={columns} />
        </div>
    )
}

export default SearchTable