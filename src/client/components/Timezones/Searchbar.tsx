import React, { Dispatch, SetStateAction, useState } from 'react'
import '../../css/Timezones/SearchbarStyles.css'
import { Timezone } from '../../../shared/models/Timezone'

const Searchbar = (props: { timezones: Timezone[], setSelectedTimezones: Dispatch<SetStateAction<Timezone[]>> }) => {

    const [searchTextfield, setSearchTextfield] = useState<string>('')
    const [filteredTimezones, setFilteredTimezones] = useState<Timezone[]>([])

    console.log('filterd timezones', filteredTimezones)

    console.log('timezones', props.timezones)


    return (
        <div className="searchBarContainer">
            <i className="fa fa-search icon"></i> 
            <input placeholder="Insert a timezone..." 
                className="inputTimezone"
                value={searchTextfield}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    if(e.target.value) setFilteredTimezones(props.timezones.filter((timezone: Timezone) => timezone.name.toLowerCase().includes(e.target.value.toLowerCase())))
                    else setFilteredTimezones([])
                    setSearchTextfield(e.target.value)
                }} 
            />
        </div>
    )
}

export default Searchbar