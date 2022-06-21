import React from "react";
import { navigate } from "gatsby";

import {
  AppBar,
  Box,
  ButtonBase,
  IconButton,
  Menu,
  MenuItem,
  Slide,
  Stack,
  Toolbar,
  Tooltip,
  Typography,
  useScrollTrigger,
  useTheme,
} from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import MenuIcon from "@mui/icons-material/Menu";

import TurquoiseNMHeart from "../../../assets/svg/TurquoiseNMHeart";
import YAMLData from "../../../../content/_config.yaml";

import { useScreenSize } from "../../../hooks/useScreenSize";

import { ColorModeContext } from "../../../../../plugins/gatsby-plugin-top-layout/useAppTheme";
import NavigationBarLink from "../navigation/NavigationBarLink";
import { white } from "../../../../theme";

export const TOP_BAR_HEIGHT_MOBILE = 56;
export const TOP_BAR_HEIGHT_DESKTOP = 78;

function HideOnScroll(props: { children: any }) {
  const { children } = props;

  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

function TopNavigationBar() {
  const colorMode = React.useContext(ColorModeContext);

  // state
  const { isMobileView } = useScreenSize();
  const theme = useTheme();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  // event handlers
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const resumeLink = YAMLData.resumeLink;

  const isDarkMode = theme.palette.mode === "dark";

  return (
    <>
      {isMobileView ? (
        <>
          <HideOnScroll>
            <AppBar>
              <Toolbar
                disableGutters
                sx={[
                  {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    ...(!isDarkMode && { backgroundColor: white }),
                  },
                ]}
              >
                <Box
                  p={1}
                  sx={[
                    {
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    },
                  ]}
                >
                  <Stack
                    direction="row"
                    spacing={{ xs: 0.5, sm: 1, md: 2 }}
                    sx={{ alignItems: "center" }}
                  >
                    <ButtonBase onClick={() => navigate("/")}>
                      <Box mr={1}>
                        <TurquoiseNMHeart
                          color={theme.palette.primary.main}
                          height={40}
                          width={40}
                        />
                      </Box>
                      <Typography
                        variant="h5"
                        sx={{ fontFamily: "Pacifico" }}
                        color="primary"
                      >
                        {YAMLData.title}
                      </Typography>
                    </ButtonBase>
                  </Stack>
                </Box>
                <Box p={0.5} display="flex" alignItems="center">
                  <Typography color="primary">NAV</Typography>
                  <IconButton
                    onClick={handleClick}
                    size="small"
                    color="primary"
                  >
                    <MenuIcon />
                  </IconButton>
                  <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                      "aria-labelledby": "basic-button",
                    }}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "left",
                    }}
                  >
                    <MenuItem onClick={handleClose}>
                      <NavigationBarLink
                        linkTo={resumeLink}
                        linkText="My Resume"
                        download
                      />
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <NavigationBarLink
                        linkTo="/my-projects"
                        linkText="My Projects"
                      />
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <NavigationBarLink
                        linkTo="/my-story"
                        linkText="My Story"
                      />
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <NavigationBarLink linkTo="/contact" linkText="Contact" />
                    </MenuItem>
                  </Menu>
                </Box>
              </Toolbar>
            </AppBar>
          </HideOnScroll>
        </>
      ) : (
        <>
          <HideOnScroll>
            <AppBar sx={{ minHeight: "80px" }}>
              <Toolbar
                disableGutters
                sx={{
                  minHeight: "104px",
                  display: "flex",
                  justifyContent: "space-between",
                  ...(!isDarkMode && { backgroundColor: white }),
                }}
              >
                <Box pl={1} sx={{ display: "flex", alignItems: "center" }}>
                  <Box p={0.5}>
                    <Tooltip
                      title={`${
                        colorMode.mode === "light" ? "Enable" : "Disable"
                      } Dark Mode`}
                    >
                      <IconButton
                        color="primary"
                        aria-label="toggle dark code"
                        onClick={() => colorMode.toggleColorMode()}
                      >
                        {colorMode.mode === "light" ? (
                          <DarkModeIcon />
                        ) : (
                          <LightModeIcon />
                        )}
                      </IconButton>
                    </Tooltip>
                  </Box>
                  <ButtonBase onClick={() => navigate("/")}>
                    <Typography
                      sx={{ fontFamily: "Pacifico", fontSize: 24 }}
                      color="primary"
                    >
                      {YAMLData.title}
                    </Typography>
                  </ButtonBase>
                </Box>
                <Stack
                  direction="row"
                  spacing={{ xs: 0.5, sm: 1, md: 2 }}
                  sx={{ alignItems: "center" }}
                >
                  <NavigationBarLink
                    linkTo={resumeLink}
                    linkText="My Resume"
                    download
                  />
                  <NavigationBarLink
                    linkTo="/my-projects"
                    linkText="My Projects"
                  />

                  <NavigationBarLink linkTo="/my-story" linkText="My Story" />
                  <NavigationBarLink linkTo="/contact" linkText="Contact" />

                  <Box p={1} mr={1}>
                    <ButtonBase onClick={() => navigate("/")}>
                      <TurquoiseNMHeart
                        color={theme.palette.primary.main}
                        height={60}
                        width={60}
                      />
                    </ButtonBase>
                  </Box>
                </Stack>
              </Toolbar>
            </AppBar>
          </HideOnScroll>
        </>
      )}
      <Toolbar {...(!isMobileView && { sx: { height: "80px" } })} />
    </>
  );
}

export default TopNavigationBar;
