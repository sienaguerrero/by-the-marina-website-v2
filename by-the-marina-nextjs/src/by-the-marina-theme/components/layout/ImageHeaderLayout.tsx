import React, { ReactNode } from "react";

import { Container } from "@mui/material/";
import ImageHeader from "./header/ImageHeader";

type KofiButtonProps = {
  headerImage: string;
  imageCaption: string;
  children: ReactNode;
};

export default function ImageHeaderLayout(props: KofiButtonProps) {
  const { headerImage, imageCaption, children } = props;

  return (
    <>
      <ImageHeader
        imageSrc={headerImage}
        imageAltTitle=""
        imageCaption={imageCaption}
      />
      <Container maxWidth="lg">{children}</Container>
    </>
  );
}
