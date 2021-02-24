import React, { useContext, useState, useEffect} from 'react'
import Searchbar from '../../components/Timezones/Searchbar'
import TimezoneBox from '../../components/Timezones/Box'
import { Timezone } from '../../../shared/models/Timezone'
import { AxiosInstanceContext } from '../../../shared/context/AxiosInstanceProvider';
import '../../css/Timezones/PageStyles.css'

const Timezones = () => {

    const timezonesService = useContext(AxiosInstanceContext)
    const [timezones, setTimezones] = useState<Timezone[]>([])
    const [selectedTimezones, setSelectedTimezones] = useState<Timezone[]>([])

    useEffect(() => {
        timezonesService.get('/timezones')
        .then((res) => setTimezones(res.data))
        .catch((err) => console.log('Not possible to retrieve the Timezones now, error: ', err))

        timezonesService.get('/stored/timezones')
        .then((res) => setSelectedTimezones(res.data))
        .catch((err) => console.log('Not possible to retrieve the Stored Timezones now, error: ', err))
        // eslint-disable-next-line
    }, [])

    const removeTimezoneHandler = (name: string) => {

        timezonesService.delete(`/timezones/${name}`)
        .then((res) => setSelectedTimezones(res.data))
        .catch((err) => console.log(`Not possible to delete the Timezone ${name} now, error: `, err))

    }

    const addTimezoneHandler = (name: string) => {

        timezonesService.put(`/timezones/${name}`)
        .then((res) => setSelectedTimezones(res.data))
        .catch((err) => console.log(`Not possible to delete the Timezone ${name} now, error: `, err))

    }

    return (
        <>
            <div className="TimezonesContainer">
                <Searchbar timezones={timezones} addTimezone={addTimezoneHandler}  />
                <div className="timezoneBoxesContainer">
                    {selectedTimezones.map((e: Timezone, i: number) => <TimezoneBox timezone={e} key={i} removeTimezone={removeTimezoneHandler} /> )}
                </div>
            </div>
        </>
    )
}

export default Timezones