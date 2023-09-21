import { useEffect, useState } from "react"
import { HashRouter, Route, Routes } from "react-router-dom"
import { StyledEngineProvider, ThemeProvider } from "@mui/material/styles"

import { Brewery } from "./types"
import { Header } from "./components/Header"
import { Footer } from "./components/Footer"
import { Home } from "./pages/Home"
import { BreweryList } from "./pages/BreweryList"
import { SingleBrewery } from "./pages/SingleBrewery"
import { Contact } from "./pages/Contact"
import { About } from "./pages/About"
import { ErrorPage } from "./pages/ErrorPage"
import { brewerySiteTheme } from "./styles/theme"


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
          <HashRouter basename='/'>
          <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="breweries" element={<BreweryList breweries={breweries} messageAll={messageAll}/>} />
              <Route path="breweries/:id" element={<SingleBrewery />} />
              <Route path="contact" element={<Contact />} />
              <Route path="about" element={<About />} />
              <Route path="*" element={<ErrorPage message="Page not found"/>} />
            </Routes>
          <Footer />
          </HashRouter>
        </ThemeProvider>
      </StyledEngineProvider>
    </>
  )
}

export default App