import React from "react";

import {
  Box,
  IconButton,
  Link,
  Paper,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";

import { useScreenSize } from "../../../hooks/useScreenSize";
import yamlData from "../../../../content/_config.yaml";

import Copyright from "./Copyright";
//import KofiButton from "../KofiButton";

export const FOOTER_HEIGHT_MOBILE = 56;
export const FOOTER_HEIGHT_DESKTOP = 78;

function Footer() {
  const theme = useTheme();
  const { isMobileView } = useScreenSize();

  return (
    <Box sx={{ height: 240 }}>
      <Paper
        square
        {...(theme.palette.mode !== "dark" && {
          variant: "outlined",
          backgroundColor: theme.palette.primary.light,
        })}
        {...(theme.palette.mode === "dark" && { elevation: 6 })}
        sx={{ padding: 3, mb: 1 }}
      >
        <Stack direction={isMobileView ? "column" : "row"} spacing={4}>
          <Stack direction="column" flex={2}>
            <Typography sx={{ textTransform: "uppercase" }} variant="h5">
              About this Site
            </Typography>
            <Box mb={1}>
              <Typography>
                {" "}
                Personal website for Siena Guerrero. Digital designer, tinkerer,
                and lover of coding.
              </Typography>
            </Box>
            <Box>
              <Typography>
                Hosted on{" "}
                <Link href="https://pages.github.com">Github Pages,</Link>{" "}
                maintained on Github.
                {/* <Link href="https://github.com/sienaguerrero/website">
                  Github.{" "}
                </Link>
                If you find an error on this site, let me know by{" "}
                <Link href="https://github.com/sienaguerrero/website/issues/new">
                  submitting an issue.
                </Link> */}
              </Typography>
            </Box>
          </Stack>
          <Box flex={1}>
            <Typography sx={{ textTransform: "uppercase" }} variant="h5">
              Many Thanks
            </Typography>
            {yamlData.manyThanks.map((data, i) => {
              const text = data.item[0].text;
              const url = data.item[1].url;
              return (
                <Box key={`item_${i}`}>
                  <Typography>
                    <Link href={url}>{text}</Link>
                  </Typography>
                </Box>
              );
            })}
            <Typography></Typography>
          </Box>
        </Stack>
      </Paper>

      <Paper square variant="outlined">
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          p={1}
        >
          <Typography>
            Created with &hearts; by{" "}
            <Link href="https://github.com/sienaguerrero">sienaguerrero</Link>{" "}
            with{" "}
            <Link href="https://nextjs.org/" target="_blank">
              Next.js
            </Link>{" "}
            using <Link href="https://mui.com/">MUI React components</Link>.
          </Typography>

          <Stack direction="row" spacing={2}>
            <IconButton
              href={`https://www.linkedin.com/in/${yamlData.socialMedia.linkedin}`}
            >
              <LinkedInIcon />
            </IconButton>
            <IconButton
              href={`https://www.github.com/${yamlData.socialMedia.github}`}
            >
              <GitHubIcon />
            </IconButton>
            <IconButton href={`mailto:hello@sienaguerrero.com`}>
              <EmailIcon />
            </IconButton>
          </Stack>

          {/* <KofiButton
            title={"Support Me on Ko-fi"}
            color={theme.palette.primary.main}
            kofiID={"S6S8WFPN"}
            textColor={theme.palette.primary.contrastText}
          /> */}
        </Box>
      </Paper>
      <Copyright />
    </Box>
  );
}

export default Footer;
