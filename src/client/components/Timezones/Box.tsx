import React from 'react'
import '../../css/Timezones/BoxStyles.css'
import { Timezone } from '../../../shared/models/Timezone'

const Box = (props: { timezone: Timezone}) => {

    return (
        <div className="boxContainer">
            <i className="fa fa-times icon"></i>
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
    )
}

export default Box