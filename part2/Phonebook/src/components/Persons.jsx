export const Persons = ({persons,filter,del}) => {
    return(
        <ol>
            {persons.filter((p)=>p.name.toLowerCase().indexOf(filter.toLowerCase())!==-1).map((p)=>{
                return(
                    <li key={p.name}>
                        {p.name} {p.number}
                        <button onClick={() => {
                            if (window.confirm(`Delete ${p.name} ?`)) {
                                del(p.id)
                            }
                        }}>
                            delete
                        </button>
                    </li>
                )
                }
                )
            }
        </ol>
    )
}