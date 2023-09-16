import { useEffect, useState } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { StyledEngineProvider, ThemeProvider } from "@mui/material/styles"

import { Brewery } from "./types"
import { Header } from "./components/Header"
import { Footer } from "./components/Footer"
import { BreweryList } from "./components/pages/BreweryList"
import { SingleBrewery } from "./components/pages/SingleBrewery"
import { About } from "./components/pages/About"
import { brewerySiteTheme } from "./styles/theme"
import { ErrorPage } from "./components/pages/ErrorPage"

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
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={brewerySiteTheme}>
          <BrowserRouter>
          <Header />
            <Routes>
              <Route path="/" element={<BreweryList breweries={breweries} messageAll={messageAll}/>} />
              <Route path="/breweries/:id" element={<SingleBrewery />} />
              <Route path="about" element={<About />} />
              <Route path="*" element={<ErrorPage message="Page not found"/>} />
            </Routes>
          <Footer />
          </BrowserRouter>
        </ThemeProvider>
      </StyledEngineProvider>
    </>
  )
}

export default App