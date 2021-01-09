import React from "react";
import styled from "styled-components";
import Image from "next/image";

export const Hero = () => (
  <HeroComponent id="hero">
    {/* <Image src="/img/hero.jpg" width={1920} height={1080} layout="fill" /> */}
    <Image
      src="/img/hero.jpg"
      layout="fill"
      objectFit="cover"
      objectPosition="bottom"
    />
  </HeroComponent>
);

const HeroComponent = styled.div`
  height: 100vh;
  background-image: url("../img/hero.jpg");
  background-position: center bottom;
  background-size: cover;
  overflow: hidden;

  @media screen and (max-width: 767px) {
    background-position: center;
  }
`;
