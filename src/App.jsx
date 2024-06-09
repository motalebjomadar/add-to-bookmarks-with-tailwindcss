
import { useState } from 'react'
import './App.css'
import LeftContents from './components/body/leftContents/LeftContents'
import RightContents from './components/body/rightContents/RightContents'

function App() {
  const [bookMarks, setBookMarks] = useState([]);

  const handleAddToBookmarks = book => {
    const newBookMark = [...bookMarks, book];
    setBookMarks(newBookMark);
    
}

  return (
    <>
      
      <h1 className='text-3xl font-bold'>Apply flex with tailwind css on react project</h1>
      <div className='flex max-w-5xl mx-auto'>
        <LeftContents handleAddToBookmarks={handleAddToBookmarks}></LeftContents>
        <RightContents bookMarks={bookMarks}></RightContents>
      </div>
      
    </>
  )
}

export default App
