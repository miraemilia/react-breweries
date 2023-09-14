import { useEffect, useState } from "react"
import { Brewery } from "../types"

export const SingleBrewery = () => {

    const [messageOne, setMessageOne] = useState<string>('')
    const [breweryId, setBreweryId] = useState<string | undefined>('5128df48-79fc-4f0f-8b52-d06be54d0cec')
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