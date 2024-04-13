import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Fingerprint from '@mui/icons-material/Fingerprint';
import IconButton from '@mui/material/IconButton';

export default function Btn()
{
    return (
        <>
            <Button variant="text">Text</Button> &nbsp;&nbsp;
            <Button variant="contained">Contained</Button>&nbsp;&nbsp;
            <Button variant="outlined">Outlined</Button>&nbsp;&nbsp;
            <Button disabled>Disabled</Button>&nbsp;&nbsp;
            <Button href="#text-buttons">Link</Button>&nbsp;&nbsp;
            <Button color="secondary">Secondary</Button>&nbsp;&nbsp;
            <Button variant="contained" color="success">Success</Button>&nbsp;&nbsp;
            <Button variant="outlined" color="error">Error</Button>&nbsp;&nbsp;
            <Button variant="outlined" startIcon={<DeleteIcon />}>Delete</Button>&nbsp;&nbsp;
            <Button variant="contained" endIcon={<SendIcon />}>Send</Button>&nbsp;&nbsp;
            <IconButton aria-label="fingerprint" color="success"><Fingerprint /></IconButton>
        </>
    )
}