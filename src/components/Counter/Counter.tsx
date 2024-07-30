import { useState } from 'react'
import s from './Counter.module.scss'

const Counter = () => {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(prev => prev + 1)
  }

  return (
      <div>
        <h1>{count}</h1>
        <button onClick={increment} className={s.btn}>Increment</button>
      </div>
  )
}

export default Counter