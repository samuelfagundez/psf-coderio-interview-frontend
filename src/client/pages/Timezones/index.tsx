import React, { useState } from 'react'
import Searchbar from '../../components/Timezones/Searchbar'
import TimezoneBox from '../../components/Timezones/Box'
import { Timezone } from '../../../shared/models/Timezone'
import '../../css/Timezones/PageStyles.css'

const Timezones = () => {

    const [timezones, setTimezones] = useState<Timezone[]>([])
    const [selectedTimezones, setSelectedTimezones] = useState<Timezone[]>([])

    return (
        <>
            <div className="TimezonesContainer">
                <Searchbar timezones={timezones} />
                {selectedTimezones.map((e: Timezone, i: number) => <TimezoneBox timezone={e} key={i} /> )}
            </div>
        </>
    )
}

export default Timezones