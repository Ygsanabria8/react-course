import { Box, Toolbar } from "@mui/material";
import { Navbar, SideBar } from "../components";

const draweWidth = 220;

export const JournalLayout = ({ children }) => {
  return (
    <Box
        className="animate__animated animate__fadeIn animate__faster"
        sx={{ display: 'flex' }}
    >   
        <Navbar draweWidth={draweWidth} />
        <SideBar draweWidth={draweWidth}/>
        <Box 
            component='main'
            sx={{
                flexGrow: 1,
                p: 3
            }}
        >
            <Toolbar />
            { children }
        </Box>
    </Box>
  );
};
