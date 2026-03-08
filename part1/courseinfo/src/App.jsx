const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Part = ({part}) => {
  return (
    <p>
      {part.name} {part.exercises}
    </p>
  )
}

const Content = ({parts}) => {
  return (
    <div>
      {parts.map((part,i)=><Part key={i} part={part}/>)}
    </div>
  )
}

const Total = ({total}) => {
  let sum = 0
  for (let i = 0; i<total.length;i++) {
    sum+=total[i].exercises
  }
  return (
    <p>
      Number of exercises {sum}
    </p>
  )
}

const App = () => {
  const course = {
    name : 'Half Stack application development',
    parts : [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },{
        name: 'Using props to pass data',
        exercises: 7
      },{
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  return (
    <div>
      <Header course={course.name}/>
      <Content parts={course.parts}/>
      <Total total={course.parts}/>
    </div>
  )
}

export default App