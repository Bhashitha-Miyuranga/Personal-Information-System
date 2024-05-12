import { Grid, Typography, Button, TextField } from "@mui/material";
import { useEffect, useState } from "react";

const UserForm = ({ addUser, updateUser, submitted, data, isEdit }) => {
    const [id, setId] = useState(0);
    const [name, setName] = useState('');
    const [Identity, setIdentity] = useState('');

    useEffect(() => {
        if (!submitted) {
            setId(0);
            setName('');
            setIdentity('');
        }
    }, [submitted]);

    useEffect(() => {
        if (data?.id && data.id !== 0) {
            setId(data.id);
            setName(data.name);
            setIdentity(data.Identity);
        }
    }, [data]);

    return (
        <Grid
            container
            spacing={2}
            sx={{
                backgroundColor: '#ffffff',
                marginBottom: '30px',
                display: 'block',
            }}
        >
            <Grid item xs={12}>
                <Typography component={'h1'} sx={{ color: '#000000' }}>User Form</Typography>
            </Grid>

            <Grid item xs={12} sm={6}>
                <Typography
                    component={'label'}
                    htmlFor="id"
                    sx={{
                        color: '#000000',
                        marginRight: '20px',
                        fontSize: '16px',
                        width: '100px',
                        display: 'block',
                    }}
                >
                    ID
                </Typography>
                <TextField
                    type="number"
                    id="id"
                    name="id"
                    fullWidth
                    value={id}
                    onChange={e => setId(e.target.value)}
                />
            </Grid>

            <Grid item xs={12} sm={6}>
                <Typography
                    component={'label'}
                    htmlFor="name"
                    sx={{
                        color: '#000000',
                        marginRight: '20px',
                        fontSize: '16px',
                        width: '100px',
                        display: 'block',
                    }}
                >
                    Name
                </Typography>
                <TextField
                    type="text"
                    id="name"
                    name="name"
                    fullWidth
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
            </Grid>

            <Grid item xs={12} sm={6}>
                <Typography
                    component={'label'}
                    htmlFor="Identity"
                    sx={{
                        color: '#000000',
                        marginRight: '20px',
                        fontSize: '16px',
                        width: '100px',
                        display: 'block',
                    }}
                >
                    Identity Card Number
                </Typography>
                <TextField
                    type="text"
                    id="Identity"
                    name="Identity"
                    fullWidth
                    value={Identity}
                    onChange={e => setIdentity(e.target.value)}
                />
            </Grid>

            <Button
                sx={{
                    margin: 'auto',
                    marginBottom: '20px',
                    backgroundColor: '#00c6e6',
                    color: '#000000',
                    marginLeft: '15px',
                    marginTop: '20px',
                    '&:hover': {
                        opacity: '0.7',
                        backgroundColor: '#00c6e6',
                    }
                }}
                onClick={() => isEdit ? updateUser({ id, name, Identity }) : addUser({ id, name, Identity })}
            >
                {isEdit ? 'Update' : 'Add'}
            </Button>
        </Grid>
    );
}

export default UserForm;
