import Paginate from '../Paginate/Paginate'
import Table from './Table'
import { useState } from 'react'
import classes from './PaginationTable.module.css'

function PaginationTable( { rows, columns } ) {
    const rowsPerPage = 10
    const maxPages = Math.ceil(rows.length / rowsPerPage)
    const [page, setPage] = useState(maxPages)
    const pagination = (number) => setPage(number)

    const endIndex = page * rowsPerPage
    const startIndex = endIndex - rowsPerPage
    const paginatedRows = rows.slice(startIndex, endIndex)

    return (
        <div className={classes.center}>
            <Table rows={paginatedRows} columns={columns} />
            <Paginate maxPages={maxPages} pagination={pagination}/>
        </div>
    )
}

export default PaginationTable