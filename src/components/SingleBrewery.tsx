import { useEffect, useState } from "react"
import { Brewery } from "../types"
import { useParams } from "react-router-dom"

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
        {messageOne ? <p>{messageOne}</p> : <></>}
        { brewery && 
            <div>
                <h2>{brewery.name}</h2>
                <p>{brewery.country} - {brewery.state_province} - {brewery.city}</p>
                <p>Brewery type: {brewery.brewery_type}</p>
                <a href={brewery.website_url}>{brewery.name} website</a> 
            </div>

        }
    </main>
  )
}