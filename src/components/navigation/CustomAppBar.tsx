import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ComputerIcon from "@mui/icons-material/Computer";

const pages = ["Home", "Experience", "Projects", "Contact"];

export default function CustomAppBar() {
  return (
      <AppBar position="static">
        <Toolbar>
          <AppBarHeader />
          <AppBarPages />
        </Toolbar>
      </AppBar>
  );
}

function AppBarHeader() {
  const headerText = "Javid Ahmed - Portfolio";
  const textVariant = "h6";

  return (
    <>
      <ComputerIcon sx={{ mr: 2 }} />
      <Typography variant={textVariant} component="div" sx={{ flexGrow: 1 }}>
        {headerText}
      </Typography>
    </>
  )
}

function AppBarPages() {
  return (
    <>
      {pages.map((page) => (
        <Button
          key={page}
          color="inherit"
          sx={{ ml: 2 }}
        >
          {page}
        </Button>
      ))}
    </>
  );
}
