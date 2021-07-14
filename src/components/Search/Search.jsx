import { useRef } from 'react'
import classes from './Search.module.css'

function Search({ submitSearch }) {
    const countryRef = useRef()

    const handleSubmit = (e) => {
        e.preventDefault()
        submitSearch(countryRef.current.value)
    }

    return (
        <div className={classes.searchWrapper}>
            <form onSubmit={handleSubmit} className={classes.searchForm}>
                <input autocomplete="off" placeholder="Country" id="search" className={classes.searchInput} type="text" ref={countryRef}></input>
                <input type="submit" value="Search" className={classes.submitButton}></input>
            </form>
        </div>
    )
}

export default Search