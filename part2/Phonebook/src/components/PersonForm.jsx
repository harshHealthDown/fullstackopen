export const PersonForm = ({newName,newNumber,handleNameChange,handleNumberChange,onSubmit}) => {
  return (<form onSubmit={onSubmit}>
    <div>
      name: <input type='text' value={newName} onChange={handleNameChange}/>
    </div>
    <div>number: <input type='text' value={newNumber} onChange={handleNumberChange}/></div>
    <div>
      <button type="submit">add</button>
    </div>
  </form>)
}