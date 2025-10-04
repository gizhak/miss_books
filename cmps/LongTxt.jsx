
const { useState } = React

export function LongTxt({ txt, length = 100 }) {

    const [isExpanded, setIsExpanded] = useState(false)

    const isLongText = txt.length > length

    const textToShow = isExpanded ? txt : txt.substring(0, length)

    return (
        <p>
            {textToShow}
            {isLongText && (
                <button onClick={() => setIsExpanded(!isExpanded)} >{isExpanded ? 'Less' : 'More'}</button>
            )}
        </p>
    )
}