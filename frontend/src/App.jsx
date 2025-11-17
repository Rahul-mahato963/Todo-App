import { useState } from 'react'

import Received from './shared/Received'


function App() {
  const [count, setCount] = useState(0)

  return (
  <div>
    <Received/>
  </div>
   
  )
}

export default App
