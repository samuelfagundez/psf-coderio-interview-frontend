import React from 'react'
import '../../css/Timezones/BoxStyles.css'
import { Timezone } from '../../../shared/models/Timezone'

const Box = (props: { timezone: Timezone, removeTimezone: (name: string) => void }) => {

    return (
        <div className="flex4theBox">
            <div className="boxContainer">
                <i className="fa fa-times icon" onClick={(e: React.MouseEvent<HTMLElement>) => props.removeTimezone(props.timezone.name)}></i>
                <div className="boxDataContainer">
                    <h3 className="boxH3">
                        {props.timezone.name}
                    </h3>
                    <h4 className="boxH4">
                        {props.timezone.timezone.date}
                    </h4>
                    <h4 className="boxH4">
                        {props.timezone.timezone.time}
                    </h4>
                </div>
            </div>
        </div>
    )
}

export default Box