import { useState } from 'react'
import RouterNav from './Components/RouterNav'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=''>
      <RouterNav />
    </div>
  )
}

export default App
