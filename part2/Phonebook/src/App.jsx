import { useState, useEffect } from 'react'
import { getAll, create, delPerson, update } from './services/services'
import { Filter } from './components/Filter'
import { PersonForm } from './components/PersonForm'
import { Persons } from './components/Persons'
import AddNotification from './components/AddNotification'
import ErrorNotification from './components/ErrorNotification'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter,setFilter] = useState('')
  const [addMessage, setAddMessage] = useState(null)
  const [ErrorMessage, setErrorMessage] = useState(null)

  useEffect(()=>{
    getAll()
      .then(data=>setPersons(data))
  },[])

  const addPerson = (event)=>{
    event.preventDefault()
    if (newName=='' || newNumber==''){
      alert((newName==''?'name is not provided ':'')+(newNumber==''?'number is not provided':''))
    }else{
      let index = -1
      for (let i=0; i<persons.length; i++) {
        if (persons[i].name==newName) {
          index = i
        }
      }
      const newObject = {
        name:newName,
        number:newNumber
      }
      if (index===-1) {
        create(newObject)
          .then((data)=>{
            setPersons([...persons,data])
            setNewName('')
            setNewNumber('')
            setAddMessage(data.name)
            setTimeout(()=>setAddMessage(null),5000)
          })
      }else{
        if (window.confirm(`${persons[index].name} is already added to phonebook, replace the old number with a new one?`)){
          update(persons[index].id,newObject)
            .then(data=>{
              setPersons(persons.map(person=>{
                if (person.name===data.name){
                  return data
                }else{
                  return person
                }
              }))
              setNewNumber('')
              setNewName('')
            }
            )
            .catch(()=>{
              setPersons(persons.filter(person=>person.name!=newObject.name))
              setErrorMessage(newObject.name)
              setTimeout(()=>setErrorMessage(null),5000)
            })
        }
      }
    }
  }

  const handleChange = (stateFunction) => (event) => stateFunction(event.target.value)

  const del = (id) => delPerson(id).then(data=>setPersons(persons.filter(person=>person.id!=data.id)))

  return (
    <div>
      <h2>Phonebook</h2>
      <AddNotification message={addMessage}/>
      <ErrorNotification message={ErrorMessage}/>
      <Filter filter={filter} setFilter={setFilter}/>

      <h2>add a new</h2>
      <PersonForm newName={newName} newNumber={newNumber} handleNameChange={handleChange(setNewName)} handleNumberChange={handleChange(setNewNumber)} onSubmit={addPerson}/>

      <h2>Numbers</h2>
      <Persons persons={persons} filter={filter} del={del}/>
    </div>
  )
}

export default App