import { useEffect, useState } from "react"
import { Brewery } from "../../types"
import { useParams } from "react-router-dom"
import {Link as RouterLink} from "react-router-dom"
import { Container, Link, Typography } from "@mui/material"
import { BreweryCard } from "../../styles/styledComponents"
import { ErrorPage } from "./ErrorPage"

export const SingleBrewery = () => {

    const breweryId = useParams().id

    const [messageOne, setMessageOne] = useState<string>('')
    const [brewery, setBrewery] = useState<Brewery | undefined>(undefined)

    const getOneBrewery = async () => {
        try {
          setMessageOne('Fetching record...')
          const response = await fetch(`https://api.openbrewerydb.org/v1/breweries/${breweryId}`)
          if (response.status === 200) {
            const breweryJson = await response.json()
            setBrewery(breweryJson)
            setMessageOne('')
          } else {
            setMessageOne('No record')
          }
        } catch {
          setMessageOne('Unable to fetch record')
        }
      }
    
    useEffect(() => {
      getOneBrewery()
    }, [])

  return (
    <main>
      <Container>
        <Link component={RouterLink} to="/">Back to list</Link>
        {messageOne && <ErrorPage message={messageOne} />}
        { brewery && 
            <BreweryCard sx={{display: "flex", flexDirection: "column", width: "94%", alignItems: "center"}}>
                <Typography variant="h3">{brewery.name}</Typography>
                <Typography>{brewery.country} - {brewery.state_province} - {brewery.city}</Typography>
                <Typography>Brewery type: {brewery.brewery_type}</Typography>
                <Link href={brewery.website_url}>{brewery.name} website</Link> 
            </BreweryCard>
        }
      </Container>
    </main>
  )
}