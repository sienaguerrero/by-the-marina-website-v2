import React, { ReactNode } from "react";
import { StaticImageData } from "next/image";

import { Container } from "@mui/material/";
import ImageHeader from "./header/ImageHeader";

type ImageHeaderLayoutProps = {
  headerImage: string | StaticImageData;
  imageCaption: string;
  children: ReactNode;
};

export default function ImageHeaderLayout(props: ImageHeaderLayoutProps) {
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
