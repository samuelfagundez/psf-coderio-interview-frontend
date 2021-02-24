import React from 'react'
import '../../css/Timezones/SuggestionStyles.css'

const Suggestion = (props: { name: string }) => {
    return (
        <>
            <div className="suggestionContainer">
                <h5 className="suggestionH5">
                    {props.name}
                </h5>
            </div>
        </>
    )
}

export default Suggestion