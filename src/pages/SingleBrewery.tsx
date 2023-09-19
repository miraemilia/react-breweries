import { useEffect, useState } from "react"
import { Brewery } from "../types"
import { useNavigate, useParams } from "react-router-dom"
import { Button, Container, Link, Typography } from "@mui/material"
import { BreweryCard } from "../styles/styledComponents"
import { ErrorPage } from "./ErrorPage"

export const SingleBrewery = () => {

    const breweryId = useParams().id
    const navigate = useNavigate();
    const handleReturn = () => navigate('/breweries');

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
        <Button onClick={handleReturn}>Back to list</Button>
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