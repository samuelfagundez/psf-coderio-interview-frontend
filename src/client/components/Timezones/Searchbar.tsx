import React from 'react'
import '../../css/Timezones/SearchbarStyles.css'

const Searchbar = () => {

    return (
        <div className="searchBarContainer">
            <input placeholder="Insert a timezone..." className="inputTimezone" />
        </div>
    )
}

export default Searchbar