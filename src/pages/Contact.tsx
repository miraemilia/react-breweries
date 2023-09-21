import { Box, Button, FormControl, Input, InputLabel, TextField, Typography } from "@mui/material"
import SendIcon from '@mui/icons-material/Send';
import { SubmitHandler, useForm } from "react-hook-form";
import { ContactForm } from "../types";

export const Contact = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm<ContactForm>()
    const onFormSubmit: SubmitHandler<ContactForm> = (data) => console.log(data)

    return (
        <main>
            <Typography variant="h2">Contact us</Typography>
            <Box sx={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                <form onSubmit={handleSubmit(onFormSubmit)}>
                    <FormControl>
                        <TextField type="email" placeholder="Your email" {...register("email")} variant="standard" sx={{margin: "0.5em", textAlign: "center"}}/>
                        <TextField fullWidth placeholder="Type your message here" {...register("message")} variant="outlined" sx={{margin: "0.5em", textAlign: "center"}} />
                        <Button type="submit"><SendIcon/> Send</Button>
                    </FormControl>
                </form>
            </ Box>
        </main>
    )
}
