export const Display = ({countries}) => {
    if (countries.length>10) {
        return <p>Too many matches, specify another filter</p>
    }
    return (
        <ul>
            {countries.map(country=><li>
                {country.name}
            </li>)}
        </ul>
    )
}