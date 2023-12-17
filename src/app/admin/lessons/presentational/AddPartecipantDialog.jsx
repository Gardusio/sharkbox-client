import * as React from 'react';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';

const filter = createFilterOptions();

export default function AddPartecipantDialog({ users, addPartecipant }) {

    const [value, setValue] = React.useState(null);
    const [open, toggleOpen] = React.useState(false);

    const handleClose = () => {
        setDialogValue({
            name: '',
            id: ""
        });
        toggleOpen(false);
    };

    const [dialogValue, setDialogValue] = React.useState({
        name: '',
        id: ""
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        setValue({
            name: dialogValue.name,
            id: dialogValue.id
        });

        addPartecipant(dialogValue)
        handleClose();
    };

    return (
        <React.Fragment>
            <Autocomplete
                size='small'
                value={value}
                onChange={(event, newValue) => {
                    if (typeof newValue === 'string') {
                        // timeout to avoid instant validation of the dialog's form.
                        setTimeout(() => {
                            toggleOpen(true);

                            setDialogValue({
                                name: newValue,
                            });

                        });
                    } else if (newValue && newValue.inputValue) {
                        toggleOpen(true);
                        setDialogValue({
                            name: newValue.inputValue,
                        });

                    } else {
                        setValue(newValue);
                        addPartecipant(newValue)
                    }
                }}
                filterOptions={(options, params) => {
                    const filtered = filter(options, params);

                    if (params.inputValue !== '') {
                        filtered.push({
                            inputValue: params.inputValue,
                            name: `Aggiungi "${params.inputValue}"`,
                        });
                    }

                    return filtered;
                }}
                id="free-solo-dialog"
                options={users.map(u => ({ name: u.name, id: u.id }))}
                getOptionLabel={(option) => {
                    // e.g. value selected with enter, right from the input
                    if (typeof option === 'string') {
                        return option;
                    }
                    if (option.inputValue) {
                        return option.inputValue;
                    }
                    return option.name;
                }}
                selectOnFocus
                clearOnBlur
                handleHomeEndKeys
                renderOption={(props, option) => <li {...props}>{option.name}</li>}
                freeSolo
                renderInput={(params) => <TextField {...params} label="Cerca o aggiungi" />}
            />
            <Dialog open={open} onClose={handleClose}>
                <form onSubmit={handleSubmit}>
                    <DialogTitle>Aggiungi qualcuno senza account</DialogTitle>
                    <DialogContent>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="username"
                            value={dialogValue.name}
                            onChange={(event) =>
                                setDialogValue({
                                    ...dialogValue,
                                    name: event.target.value,
                                })
                            }
                            label="Nome"
                            type="text"
                            variant="standard"
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Indietro</Button>
                        <Button type="submit">Aggiungi</Button>
                    </DialogActions>
                </form>
            </Dialog>
        </React.Fragment>
    );
}
