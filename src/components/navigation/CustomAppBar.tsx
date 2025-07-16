import ComputerIcon from "@mui/icons-material/Computer";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { pages, Pages, appHeaderText } from "../../data/appData";
import { useAppDispatch } from "../../store/hooks";
import { setCurrentPage } from "../../store/slices/pageSlice";
import { useTheme } from "../../theme";

export default function CustomAppBar() {
  const { theme } = useTheme();

  const appBarStyles = {
    backgroundColor: theme.colors.primary,
  };

  return (
      <AppBar position="static" sx={appBarStyles}>
        <Toolbar>
          <AppBarHeader />
          <AppBarPages />
        </Toolbar>
      </AppBar>
  );
}

function AppBarHeader() {
  const { theme } = useTheme();
  const textVariant = "h6";

  const iconStyles = {
    mr: 2,
    color: theme.colors.text.onPrimary,
  };

  const textStyles = {
    flexGrow: 1,
    color: theme.colors.text.onPrimary,
  };

  return (
    <>
      <ComputerIcon sx={iconStyles} />
      <Typography variant={textVariant} component="div" sx={textStyles}>
        {appHeaderText}
      </Typography>
    </>
  )
}

function AppBarPages() {
  const { theme } = useTheme();
  const dispatch = useAppDispatch();

  const handlePageClick = (page: Pages) => {
    dispatch(setCurrentPage(page));
  };

  const buttonStyles = {
    ml: 2,
    color: theme.colors.text.onPrimary,
    "&:hover": {
      backgroundColor: "rgba(255, 255, 255, 0.1)",
    },
  };

  return (
    <>
      {pages.map((page) => (
        <Button
          key={page}
          sx={buttonStyles}
          onClick={() => handlePageClick(page as Pages)}
        >
          {page}
        </Button>
      ))}
    </>
  );
}
