import React, { useContext, useState } from 'react'
import Searchbar from '../../components/Timezones/Searchbar'
import TimezoneBox from '../../components/Timezones/Box'
import { Timezone } from '../../../shared/models/Timezone'
import { AxiosInstanceContext } from '../../../shared/context/AxiosInstanceProvider';
import '../../css/Timezones/PageStyles.css'

const Timezones = () => {

    const timezonesService = useContext(AxiosInstanceContext)
    const [timezones, setTimezones] = useState<Timezone[]>([])
    const [selectedTimezones, setSelectedTimezones] = useState<Timezone[]>([])

    return (
        <>
            <div className="TimezonesContainer">
                <Searchbar timezones={timezones} setSelectedTimezones={setSelectedTimezones} />
                <div className="timezoneBoxesContainer">
                    {selectedTimezones.map((e: Timezone, i: number) => <TimezoneBox timezone={e} key={i} /> )}
                </div>
            </div>
        </>
    )
}

export default Timezones