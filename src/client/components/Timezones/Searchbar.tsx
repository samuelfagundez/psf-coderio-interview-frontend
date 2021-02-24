import React, { Dispatch, SetStateAction, useState, useEffect } from 'react'
import '../../css/Timezones/SearchbarStyles.css'
import { Timezone } from '../../../shared/models/Timezone'
import Suggestion from './Suggestion'

const Searchbar = (props: { timezones: Timezone[], setSelectedTimezones: Dispatch<SetStateAction<Timezone[]>> }) => {

    const [searchTextfield, setSearchTextfield] = useState<string>('')
    const [filteredTimezones, setFilteredTimezones] = useState<Timezone[]>([])
    const [timezones, setTimezones] = useState<Timezone[]>([])

    useEffect(() => {
        setTimezones(props.timezones)
        if(searchTextfield) setFilteredTimezones(props.timezones.filter((timezone: Timezone) => timezone.name.toLowerCase().includes(searchTextfield.toLowerCase())))
    }, [props.timezones])

    return (
        <div className="searchBarContainer">
            <div className="searchBar">
                <i className="fa fa-search icon"></i> 
                <input placeholder="Insert a timezone..." 
                    className="inputTimezone"
                    value={searchTextfield}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        if(e.target.value) setFilteredTimezones(timezones.filter((timezone: Timezone) => timezone.name.toLowerCase().includes(e.target.value.toLowerCase())))
                        else setFilteredTimezones([])
                        setSearchTextfield(e.target.value)
                    }} 
                />
                <div className="suggestionsContainer">
                    {filteredTimezones.map((e: Timezone, i: number) => <Suggestion key={i} name={e.name} />)}
                </div>
            </div>
        </div>
    )
}

export default Searchbar