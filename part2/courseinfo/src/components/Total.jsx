const Total = ({parts}) => {
  const total = parts.reduce((s,p)=>p.exercises,0)
  return (
    <b>
      Number of exercises {total}
    </b>
  )
}
export default Total