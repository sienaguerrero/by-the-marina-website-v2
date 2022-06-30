import React from "react";

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Container,
  Paper,
  Typography,
  useTheme,
} from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import YAMLData from "../src/content/_config.yaml";
import headerImage from "../src/by-the-marina-theme/assets/jpg/banners/headers/header_ecuador.jpg";
import ImageHeaderLayout from "../src/by-the-marina-theme/components/layout/ImageHeaderLayout";

// https://intuitiveexplanations.com/
// https://www.taniarascia.com/
// https://carolchen.me

export default function AboutPage() {
  const theme = useTheme();
  const imageCaption =
    "On the road to Alausí, Ecuador, where my abuela was born.";

  return (
    <ImageHeaderLayout headerImage={headerImage} imageCaption={imageCaption}>
      <Container maxWidth="lg">
        <Paper variant="outlined" sx={{ my: 1, p: 1 }}>
          <Typography variant="h3" sx={{ mb: 1 }}>
            Passions
          </Typography>
          <Box
            sx={{
              p: 1,
              minWidth: "220px",
              border: `1px solid ${theme.palette.primary.light}`,
            }}
          >
            {YAMLData["academic-interests"].map((data, i) => {
              if (i !== YAMLData["academic-interests"].length - 1)
                return <Typography display="inline">{data.item} * </Typography>;
              else return <Typography display="inline">{data.item}</Typography>;
            })}
          </Box>
          <Box mt={1}>
            <Accordion square elevation={0}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                sx={{ paddingX: 0 }}
              >
                <Typography variant="subtitle2">
                  A bit more about me...
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={{ mb: 1 }}>
                  My academic passions center around Human-Computer Interactions
                  and Brain-Computer Interfaces. Some of my mini-passions
                  include web development, open-source technology, and
                  empowering women in tech.
                </Typography>

                <Typography sx={{ mb: 1 }}>
                  I am particularly interested in improving human interactions
                  with technology in our digital world by bringing together new
                  concepts and research from the fields of psychology, data
                  science, and computing. I strongly believe in the need for
                  experimental and creative ideas to drive innovation.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Box>
        </Paper>

        <Paper variant="outlined" sx={{ my: 1, p: 1 }}>
          <Typography variant="h3" sx={{ mb: 1 }}>
            Personal Facts
          </Typography>
          <Box
            sx={{
              p: 1,
              minWidth: "220px",
              border: `1px solid ${theme.palette.primary.light}`,
            }}
          >
            {YAMLData["personal-facts"].map((data, i) => {
              return <Typography key={i}>* {data.item}</Typography>;
            })}
          </Box>
        </Paper>

        <Paper variant="outlined" sx={{ my: 1, p: 1 }}>
          <Typography variant="h3" sx={{ mb: 1 }}>
            My Timeline
          </Typography>
          <Box
            sx={{
              p: 1,
              minWidth: "220px",
              border: `1px solid ${theme.palette.primary.light}`,
            }}
          >
            {YAMLData["my-timeline"].map((data, i) => {
              return (
                <Box key={i}>
                  <Typography display="inline" sx={{ fontWeight: "bold" }}>
                    {data.item[0].year}
                  </Typography>
                  {" * "}
                  <Typography display="inline">
                    {data.item[1].summary}
                  </Typography>
                </Box>
              );
            })}
          </Box>
        </Paper>
      </Container>
    </ImageHeaderLayout>
  );
}
