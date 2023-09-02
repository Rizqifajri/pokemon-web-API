import { useState } from 'react'
import './App.css'
import CardList from './components/CardList'
import Header from './components/Header'
import Pikachu from './components/Pikachu'
import Deskripsi from './components/Deskripsi'




function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-yellow-100 min-h-screen '>
      <Header/>
      <div className='flex w-full justify-between'>
      <CardList/>
      <div className='flex gap-10'>
      <Deskripsi/>
      <Pikachu/>
      </div>
      
      
      </div>
      
      
    </div>
  )
}

export default App
