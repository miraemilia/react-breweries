import { BottomNavigation, Link, Typography } from "@mui/material"

export const Footer = () => {
  return (
    <BottomNavigation>
        <Typography>Sourced from <Link href='https://www.openbrewerydb.org/documentation'>Open Brewery DB</Link></Typography>
    </BottomNavigation>
  )
}
