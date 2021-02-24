import React, { Dispatch, SetStateAction } from 'react'
import '../../css/Timezones/SuggestionStyles.css'

const Suggestion = (props: { name: string, addTimezone: (name: string) => void }) => {
    return (
        <>
            <div className="suggestionContainer" onClick={(e: React.MouseEvent<HTMLElement>) => props.addTimezone(props.name)}>
                <h5 className="suggestionH5">
                    {props.name}
                </h5>
            </div>
        </>
    )
}

export default Suggestion