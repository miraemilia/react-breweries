import { Typography } from "@mui/material"

interface ErrorProps {
    message : string
}

export const ErrorPage = ({ message } : ErrorProps ) => {
  return (
    <Typography variant="h2">{message}</Typography>
  )
}
