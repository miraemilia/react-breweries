import { useEffect, useState } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"

import { Brewery } from "./types"
import { Header } from "./components/Header"
import { Footer } from "./components/Footer"
import { BreweryList } from "./components/BreweryList"
import { SingleBrewery } from "./components/SingleBrewery"
import { About } from "./components/About"

const App = () => {

  const [breweries, setBreweries] = useState<Brewery[]>([])
  const [messageAll, setMessageAll] = useState<string>('')

  const getBreweries = async () => {
    try {
      setMessageAll('Fetching all records...')
      const response = await fetch('https://api.openbrewerydb.org/v1/breweries')
      if (response.status === 200) {
        const breweriesJson = await response.json()
        setBreweries(breweriesJson)
        setMessageAll('') 
      } else {
        setMessageAll('No records')
      }
    } catch {
      setMessageAll('Unable to fetch brewery data')
    }
  }

  useEffect(() => {
    getBreweries()
  }, [])

  return (
    <>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<BreweryList breweries={breweries} messageAll={messageAll}/>} />
          <Route path="/:id" element={<SingleBrewery />} />
          <Route path="/about" element={<About />} />
        </Routes>
      <Footer />
      </BrowserRouter>
    </>
  )
}

export default App