import * as React from "react";

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";

import YAMLData from "../content/_config.yaml";
import sienaAndRubyImage from "../images/ruby-and-siena.jpg";
import { IconButton, Link, Typography } from "@mui/material";

export default function IndexPage() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <Container maxWidth="lg">
        <Box sx={{ my: 1.5 }}>
          <Container maxWidth="md">
            <Stack
              direction={isMobile ? "column" : "row"}
              justifyContent="space-between"
              sx={{
                display: "flex",
                flexDirection: isMobile ? "column" : "row",
              }}
              spacing={1}
            >
              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                sx={{
                  minWidth: "220px",
                  //border: `1px solid ${theme.palette.primary.main}`,
                }}
                m="auto"
              >
                <Box
                  mb={1}
                  sx={{
                    width: "80%",
                    backgroundColor: theme.palette.background.paper,
                    p: 1,
                    flex: 2,
                    border: `1px solid ${theme.palette.primary.main}`,
                  }}
                >
                  <Stack direction="row" spacing={2}>
                    <IconButton
                      color="primary"
                      href={`https://www.linkedin.com/${YAMLData.socialMedia.linkedin}`}
                    >
                      <LinkedInIcon />
                    </IconButton>
                    <IconButton
                      color="primary"
                      href={`https://www.github.com/${YAMLData.socialMedia.github}`}
                    >
                      <GitHubIcon />
                    </IconButton>
                    <IconButton
                      color="primary"
                      href={`mailto:${YAMLData.email}`}
                    >
                      <EmailIcon />
                    </IconButton>
                  </Stack>
                </Box>

                <Box
                  p={1}
                  component="img"
                  src={sienaAndRubyImage}
                  sx={{
                    border: `1px solid ${theme.palette.primary.main}`,
                    width: "220px",
                    height: "220px",
                  }}
                />

                <Box
                  mt={1}
                  sx={{
                    width: "80%",
                    backgroundColor: theme.palette.background.paper,
                    p: 1,
                    flex: 2,
                    border: `1px solid ${theme.palette.primary.main}`,
                  }}
                >
                  <Typography
                    sx={{
                      textAlign: "center",
                      fontFamily: "Pacifico",
                      fontSize: 24,
                    }}
                    color="primary"
                  >
                    {YAMLData.location}
                  </Typography>
                </Box>
              </Box>

              <Box
                sx={{
                  backgroundColor: theme.palette.background.paper,
                  p: 3,
                  flex: 2,
                  border: `1px solid ${theme.palette.primary.main}`,
                }}
              >
                <Box mb={1}>
                  <Typography
                    display="inline"
                    variant="h4"
                    sx={{ fontFamily: "Pacifico", mr: 1 }}
                  >
                    Hello,
                  </Typography>
                  <Typography display="inline">my name is Siena!</Typography>
                </Box>

                <Typography sx={{ mb: 1 }}>
                  I'm a Software Engineer on the Platform Services team at{" "}
                  <Link href="https://joinhandshake.com/">Handshake</Link>, an
                  organization that shares my passion for democratizing
                  opportunity.
                </Typography>

                <Typography sx={{ mb: 1 }}>
                  Before joining Handshake, I was a fullstack engineer at{" "}
                  <Link href="https://swoopapp.com/">Swoop, Inc.</Link> a really
                  neat transportation startup based in Los Angeles. Before
                  entering the world of startups, I studied Computer Science for
                  three years at{" "}
                  <Link href="https://www.hmc.edu">Harvey Mudd College.</Link>
                </Typography>

                <Typography sx={{ mb: 1 }}>
                  You can see projects illustrating some of my other passions
                  and academic pursuits <Link href="/my-projects">here.</Link>
                </Typography>

                <Typography sx={{ mb: 1 }}>
                  Check out my resume and{" "}
                  <Link
                    href="mailto:
                  hello@sienaguerrero.com"
                  >
                    send me an email
                  </Link>{" "}
                  for inquiries.
                </Typography>
              </Box>
            </Stack>
          </Container>
        </Box>
      </Container>
    </>
  );
}
