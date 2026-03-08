import { useState } from 'react'

const StatisticLine = ({text,val}) => {
  return(
    <tbody>
      <tr>
        <td>{text}</td>
        <td>{val}</td>
      </tr>
    </tbody>
  )
}
const Statistics = ({good,bad,neutral}) => {
  if (!good && !neutral && !bad) {
    return (
      <p>
        No feedback given
      </p>
    )
  }
  return (
    <>
      <table>
        <StatisticLine text="good" val={good}/>
        <StatisticLine text="neutral" val={neutral}/>
        <StatisticLine text="bad" val={bad}/>
        <StatisticLine text="all" val={good+neutral+bad}/>
        <StatisticLine text="average" val={(good-bad)/(good+bad+neutral)}/>
        <StatisticLine text="positive" val={good*100/(good+bad+neutral)}/>
      </table>
    </>
  )
}
const Button = ({onClick,text}) => {
  return (
    <button onClick={onClick}>
      {text}
    </button>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={()=>setGood(good+1)} text="good"/>
      <Button onClick={()=>setNeutral(neutral+1)} text="neutral"/>
      <Button onClick={()=>setBad(bad+1)} text="bad"/>
      <h1>statistics</h1>
      <Statistics good={good} bad={bad} neutral={neutral}/>
    </div>
  )
}

export default App