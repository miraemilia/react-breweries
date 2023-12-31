export interface Brewery {
    id: string
    name: string
    brewery_type: string
    city: string
    state_province: string
    country: string
    website_url: string | null
}

export interface ContactForm {
    email: string
    message: string
}