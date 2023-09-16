import { useEffect, useState } from "react"
import { Brewery } from "../../types"
import { useParams } from "react-router-dom"
import {Link as RouterLink} from "react-router-dom"
import { Container, Link } from "@mui/material"
import { BreweryCard } from "../../styles/styledComponents"

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
        {messageOne ? <p>{messageOne}</p> : <></>}
        { brewery && 
            <BreweryCard>
                <h2>{brewery.name}</h2>
                <p>{brewery.country} - {brewery.state_province} - {brewery.city}</p>
                <p>Brewery type: {brewery.brewery_type}</p>
                <Link href={brewery.website_url}>{brewery.name} website</Link> 
            </BreweryCard>
        }
      </Container>
    </main>
  )
}