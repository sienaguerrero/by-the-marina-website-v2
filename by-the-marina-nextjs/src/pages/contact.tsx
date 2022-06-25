import React from "react";
import Image from "next/image";

import {
  Box,
  Container,
  IconButton,
  Link,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";

import ImageHeader from "../by-the-marina-theme/components/layout/header/ImageHeader";
import headerImage from "../by-the-marina-theme/assets/jpg/banners/headers/header_ca-coast-ocean.jpg";

import sienaDigitalPortrait from "../images/img-siena-digital-portrait.jpg";

import YAMLData from "../content/_config.yaml";
// https://intuitiveexplanations.com/
// https://www.taniarascia.com/
// https://carolchen.me

export default function AboutPage() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const imageCaption =
    "Shot along the CA coast, during my roadtrip in Summer 2018.";

  return (
    <>
      <ImageHeader
        imageSrc={headerImage}
        imageAltTitle=""
        imageCaption={imageCaption}
        imageOverlayText={YAMLData.name}
      />
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
                sx={{
                  backgroundColor: theme.palette.background.paper,
                  p: 3,
                  flex: 2,
                  border: `1px solid ${theme.palette.primary.main}`,
                }}
              >
                <Box display="flex">
                  <Box mr={1}>
                    <Box
                      display="flex"
                      flexDirection="column"
                      alignItems="center"
                      sx={{
                        minWidth: "220px",
                      }}
                      m="auto"
                    >
                      <Box
                        p={1}
                        sx={{
                          border: `1px solid ${theme.palette.primary.main}`,
                        }}
                      >
                        <Image
                          src={sienaDigitalPortrait}
                          alt="Picture of the author"
                          width={220}
                          height={220}
                        />
                      </Box>

                      <Box
                        mt={1}
                        sx={{
                          width: "100%",
                          backgroundColor: theme.palette.background.paper,
                          p: 1,
                          flex: 2,
                          border: `1px solid ${theme.palette.primary.main}`,
                        }}
                      >
                        <Box display="flex" justifyContent="space-between">
                          <IconButton
                            color="primary"
                            href={`https://www.linkedin.com/${YAMLData.socialMedia.github}`}
                          >
                            <LinkedInIcon />
                          </IconButton>
                          <IconButton
                            color="primary"
                            href={`https://www.linkedin.com/${YAMLData.socialMedia.linkedin}`}
                          >
                            <GitHubIcon />
                          </IconButton>
                          <IconButton
                            color="primary"
                            href={`mailto:${YAMLData.email}`}
                          >
                            <EmailIcon />
                          </IconButton>
                        </Box>
                      </Box>

                      <Box
                        mt={1}
                        sx={{
                          width: "100%",
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
                  </Box>

                  <Box p={2} display="flex" flexDirection="column">
                    <Box mb={4}>
                      <Typography
                        display="inline"
                        variant="h4"
                        sx={{ fontFamily: "Pacifico", mr: 1 }}
                      >
                        Hi,
                      </Typography>
                      <Typography display="inline">
                        my name is Siena!
                      </Typography>
                    </Box>

                    <Box mb={4}>
                      <Box mb={1}>
                        <Typography variant="h5" sx={{ mb: 1 }}>
                          Linkedin:{" "}
                          <Link href="https://www.linkedin.com/in/sienaguerrero/">
                            sienaguerrero
                          </Link>
                        </Typography>
                      </Box>

                      <Box mb={1}>
                        <Typography variant="h5" sx={{ mb: 1 }}>
                          Github:{" "}
                          <Link href="https://github.com/sienaguerrero">
                            sienaguerrero
                          </Link>{" "}
                          for inquiries.
                        </Typography>
                      </Box>

                      <Box>
                        <Typography variant="h5" sx={{ mb: 1 }}>
                          Email:{" "}
                          <Link
                            href="mailto:
                  hello@sienaguerrero.com"
                          >
                            hello@sienaguerrero.com
                          </Link>{" "}
                        </Typography>
                      </Box>
                    </Box>
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
                </Box>
              </Box>
            </Stack>
          </Container>
        </Box>
      </Container>
    </>
  );
}
