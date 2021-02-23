import React, { useState } from 'react'
import Searchbar from '../../components/Timezones/Searchbar'
import TimezoneBox from '../../components/Timezones/Box'
import { Timezone } from '../../../shared/models/Timezone'
import '../../css/Timezones/PageStyles.css'

const Timezones = () => {

    const [timezones, setTimezones] = useState<Timezone[]>([])
    const [selectedTimezones, setSelectedTimezones] = useState<Timezone[]>([{name: 'micasa', timezone: { date: '15/02/2021', time: '12:32 PM'}}, {name: 'micasa', timezone: { date: '15/02/2021', time: '12:32 PM'}}, {name: 'micasa', timezone: { date: '15/02/2021', time: '12:32 PM'}}, {name: 'micasa', timezone: { date: '15/02/2021', time: '12:32 PM'}}, {name: 'micasa', timezone: { date: '15/02/2021', time: '12:32 PM'}}])

    return (
        <>
            <div className="TimezonesContainer">
                <Searchbar timezones={timezones} />
                <div className="timezoneBoxesContainer">
                    {selectedTimezones.map((e: Timezone, i: number) => <TimezoneBox timezone={e} key={i} /> )}
                </div>
            </div>
        </>
    )
}

export default Timezones