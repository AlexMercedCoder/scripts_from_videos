import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import {
  useQuery,
  gql
} from "@apollo/client";

function App() {
  
  const getBooks = gql`{
    books {
      title
      author
    }
  }`

  const {loading, error, data} = useQuery(getBooks)

  if (loading) return <h1>Loading</h1>

  if (error) return <h1>Error</h1>

  console.log(data)


  return (
    <div className="App">
      {data.books.map(b => <h1>{b.title}</h1>)}
    </div>
  )
}

export default App
