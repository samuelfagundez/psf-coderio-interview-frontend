import React from 'react'
import Searchbar from '../../components/Timezones/Searchbar'
import TimezoneBox from '../../components/Timezones/Box'
import '../../css/Timezones/PageStyles.css'

const Timezones = () => {

    return (
        <>
            <div className="TimezonesContainer">
                <Searchbar />
                <TimezoneBox />
            </div>
        </>
    )
}

export default Timezones