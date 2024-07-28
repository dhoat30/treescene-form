"use client";
import React from "react";

import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import Image from "next/image";
import Link from "next/link";

export default function HeroContent({
  title,
  subtitle,
  description,
  ctaLabel,
  ctaLink,
  className,
}) {
  return (
    <Div className={className}>
      <Typography
        className="subtitle"
        component="h2"
        variant="h4"
        color="secondary.main"
      >
        {subtitle}
      </Typography>
      <Typography component="h1" variant="h2" color="white" className="title">
        {title}
      </Typography>
      <Typography component="p" variant="h6" color=" var(--dark-on-surface)">
        {description}
      </Typography>
      <div className="button-wrapper">
        <Link href={ctaLink}>
          <Button variant="contained" size="large">
            {ctaLabel}
          </Button>
        </Link>
      </div>
    </Div>
  );
}

const Div = styled.div`
  .subtitle {
    @media (max-width: 600px) {
      font-size: 1.5rem;
    }
  }
  .title {
    margin: 8px 0;
  }
  .button-wrapper {
    margin-top: 16px;
  }
`;
