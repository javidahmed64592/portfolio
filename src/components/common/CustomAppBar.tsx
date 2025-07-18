import ComputerIcon from "@mui/icons-material/Computer";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Pages } from "../../data";
import { useAppDispatch } from "../../store/hooks";
import { setCurrentPage } from "../../store/slices/pageSlice";
import { useTheme } from "../../theme";

interface CustomAppBarProps {
  appHeaderText: string;
  pages: Pages[];
}

interface AppBarHeaderProps {
  appHeaderText: string;
}

interface AppBarPagesProps {
  pages: Pages[];
}

export default function CustomAppBar({
  appHeaderText,
  pages,
}: CustomAppBarProps) {
  const { theme } = useTheme();

  const appBarStyles = {
    backgroundColor: theme.colors.primary,
  };

  return (
    <AppBar position="fixed" sx={appBarStyles}>
      <Toolbar>
        <AppBarHeader appHeaderText={appHeaderText} />
        <AppBarPages pages={pages} />
      </Toolbar>
    </AppBar>
  );
}

function AppBarHeader({ appHeaderText }: AppBarHeaderProps) {
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
  );
}

function AppBarPages({ pages }: AppBarPagesProps) {
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
      {pages.map((page: Pages) => (
        <Button
          key={page}
          sx={buttonStyles}
          onClick={() => handlePageClick(page)}
        >
          {page}
        </Button>
      ))}
    </>
  );
}
