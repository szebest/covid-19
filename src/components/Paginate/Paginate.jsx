import classes from './Paginate.module.css'
import { useState } from 'react'

function Paginate( { maxPages, pagination } ) {
    const [currentPageNumber, setCurrentPageNumber] = useState(maxPages)

    const pageNumbers = []

    let miniIndex = currentPageNumber - 1 > 0 ? currentPageNumber - 1 : 1

    let maxiIndex = miniIndex + 2

    if (maxPages < maxiIndex) {
        miniIndex -= maxiIndex - maxPages
        maxiIndex = maxPages
    }

    if (miniIndex !== 1)
        pageNumbers.push(1)

    for(let i = miniIndex; i <= maxiIndex; i++) {
        pageNumbers.push(i)
    }

    if (maxiIndex !== maxPages)
        pageNumbers.push(maxPages)

    const middleware = (e, page) => {
        e.stopPropagation()
        pagination(page)
        setCurrentPageNumber(page)
    }

    return (
        <div className={`${classes.styledPagination} ${classes.noselect}`}>
            <ul>
                {pageNumbers.map(page => 
                    <li 
                        className={currentPageNumber === page ? classes.activePage : ''} 
                        onClick={(e) => middleware(e, page)} 
                        key={page}
                    >
                        {page}
                    </li>
                )}
            </ul>
        </div>
    )
}

export default Paginate