import { useEffect, useState } from "react"

import { Header } from "./components/Header"
import { Main } from "./components/Main"
import { Footer } from "./components/Footer"
import { Brewery } from "./types"

const App = () => {

  const [breweries, setBreweries] = useState<Brewery[]>([])

  useEffect(() => {
    const getBreweries = async () => {
      const response = await fetch('https://api.openbrewerydb.org/v1/breweries')
      const breweriesJson = await response.json()
      setBreweries(breweriesJson)
    }
    getBreweries()
  }, [])

  return (
    <>
      <Header />
      <Main breweries={breweries} />
      <Footer />
    </>
  )
}

export default App