import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { runActionCreator } from './redux/gymTrackData/action'
import { useDispatch, useSelector } from 'react-redux'
import { profileAction } from './redux/gymTrackData/profileData/paction'

function App() {
  const [count, setCount] = useState(0)

//   const reduxData=useSelector(state=>state)
//   const dispatch=useDispatch()
// console.log(reduxData);
// const runHandler=()=>{
//   dispatch(runActionCreator())
// }
const profileData=useSelector(state=>state)
const dispatchP=useDispatch()
const profileHandler=()=>{
dispatchP(profileAction())
}

  return (
    <>
      <h1>Hello</h1>
     <h2>MY NAME ID "{profileData.USERNAME}"</h2>
     <button onClick={profileHandler}>Name change</button>
     {/* <h2>Rub Distance {reduxData.runningDistance}</h2>
     <h2> TimeInSeconds {reduxData.timeInSeconds}</h2>
<button onClick={runHandler}>Run for Hour</button> */}
    </>
  )
}

export default App
