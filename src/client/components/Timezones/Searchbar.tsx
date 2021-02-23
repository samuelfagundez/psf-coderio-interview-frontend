import React, { Dispatch, SetStateAction } from 'react'
import '../../css/Timezones/SearchbarStyles.css'
import { Timezone } from '../../../shared/models/Timezone'

const Searchbar = (props: { timezones: Timezone[], setSelectedTimezones: Dispatch<SetStateAction<Timezone[]>> }) => {

    const [searchTextfield, setSearchTextfield] = React.useState('')

    return (
        <div className="searchBarContainer">
            <i className="fa fa-search icon"></i> 
            <input placeholder="Insert a timezone..." className="inputTimezone" value={searchTextfield} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchTextfield(e.target.value)} />
        </div>
    )
}

export default Searchbar