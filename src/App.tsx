import { useEffect, useState } from "react"

import { Header } from "./components/Header"
import { Main } from "./components/Main"
import { Footer } from "./components/Footer"
import { Brewery } from "./types"

const App = () => {

  const [breweries, setBreweries] = useState<Brewery[]>([])
  const [singleBreweryId, setSingleBreweryId] = useState<string | undefined>('5128df48-79fc-4f0f-8b52-d06be54d0cec')
  const [singleBrewery, setSingleBrewery] = useState<Brewery | undefined>(undefined)
  const [messageAll, setMessageAll] = useState<string>('')
  const [messageOne, setMessageOne] = useState<string>('')

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

  const getOneBrewery = async () => {
    try {
      setMessageOne('Fetching record...')
      const response = await fetch(`https://api.openbrewerydb.org/v1/breweries/${singleBreweryId}`)
      console.log(response)
      if (response.status === 200) {
        const breweryJson = await response.json()
        setSingleBrewery(breweryJson)
        setMessageOne('')
      } else {
        setMessageOne('No record')
      }
    } catch {
      setMessageOne('Unable to fetch record')
    }
  }

  useEffect(() => {
    getBreweries()
    getOneBrewery()
  }, [])

  return (
    <>
      <Header />
      <Main breweries={breweries} singleBrewery={singleBrewery} messageAll={messageAll} messageOne={messageOne}/>
      <Footer />
    </>
  )
}

export default App