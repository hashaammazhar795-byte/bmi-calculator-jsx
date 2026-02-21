import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [height, setHeight] = useState(0)
  const [weight, setWeight] = useState(0)
  const [bmiValue, setBmiValue] = useState(0)


  function calculateBMI(e) {
    e.preventDefault()
    const bmi = weight / height ** 2
    setBmiValue(bmi)


  }

  return (
    <>
      <div>
        <h1>BMI Calculator</h1>
        <form on onSubmit={calculateBMI}>
          <input type="text" placeholder='Enter Your Weight' on onChange={(e) => setWeight(e.target.value)} />
          <input type="text" placeholder='Enter Your Height' on onChange={(e) => setHeight(e.target.value)} />
          <button>Calculate BMI</button>
        </form>
        <h1>
          Your BMI is: {bmiValue}
        </h1>
      </div>
    </>
  )
}

export default App
