import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ComputerIcon from "@mui/icons-material/Computer";
import { pages, Pages } from "../../data/appData";
import { useAppDispatch } from "../../store/hooks";
import { setCurrentPage } from "../../store/slices/pageSlice";

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
  const dispatch = useAppDispatch();

  const handlePageClick = (page: Pages) => {
    dispatch(setCurrentPage(page));
  };

  return (
    <>
      {pages.map((page) => (
        <Button
          key={page}
          color="inherit"
          sx={{ ml: 2 }}
          onClick={() => handlePageClick(page as Pages)}
        >
          {page}
        </Button>
      ))}
    </>
  );
}
