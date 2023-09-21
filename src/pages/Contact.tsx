import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';


import { ContactForm } from "../types";
import { Box, Button, FormControl, Input, InputLabel, TextField, Typography } from "@mui/material"
import SendIcon from '@mui/icons-material/Send';

export const Contact = () => {

    const contactSchema = yup.object({
        email: yup.string().email().required(),
        message: yup.string().min(10).max(200).required()
    }).required()

    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm<ContactForm>({
        defaultValues: {
            email: '',
            message: ''
        },
        resolver: yupResolver(contactSchema)
    })

    const onFormSubmit: SubmitHandler<ContactForm> = (data) => {
        console.log(data)
        reset()
    }

    return (
        <main>
            <Typography variant="h2">Contact us</Typography>
            <Box sx={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                <form onSubmit={handleSubmit(onFormSubmit)}>
                    <FormControl sx={{width: "30em"}}>
                        <TextField 
                            error={errors.email !== undefined}
                            placeholder="Your email"
                            {...register("email")}
                            helperText={errors.email && (<p>{errors.email.message}</p>)}
                            variant="standard"
                            sx={{margin: "0.5em", textAlign: "center", width: "20em"}}
                        />
                        <TextField
                            error={errors.message !== undefined}
                            placeholder="Type your message here"
                            {...register("message")}
                            helperText={errors.message && (<p>{errors.message.message}</p>)}
                            variant="outlined"
                            multiline
                            minRows={2}
                            maxRows={4}
                            sx={{margin: "0.5em", textAlign: "center"}}
                        />
                        <Button type="submit"><SendIcon/> Send</Button>
                    </FormControl>
                </form>
            </ Box>
        </main>
    )
}
