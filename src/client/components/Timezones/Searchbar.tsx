import React from 'react'
import '../../css/Timezones/SearchbarStyles.css'
import { Timezone } from '../../../shared/models/Timezone'

const Searchbar = (props: { timezones: Timezone[] }) => {

    return (
        <div className="searchBarContainer">
            <input placeholder="Insert a timezone..." className="inputTimezone" />
        </div>
    )
}

export default Searchbar