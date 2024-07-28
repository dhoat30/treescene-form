import styled from "@emotion/styled";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import React from "react";

export default function Copyright() {
  return (
    <PaperStyle elevation={0}>
      <Container maxWidth="lg" className="content-wrapper">
        <Typography variant="body1" component="span">
          © Treescene NZ Limited 2023, 20 Landing Drive, Pyes Pa, Tauranga Ph
          0212420305
        </Typography>
        <Link href="https://treescene.co.nz/privacy-policy/">
          <Typography variant="body1" component="span">
            Privacy Policy
          </Typography>
        </Link>
      </Container>
    </PaperStyle>
  );
}
const PaperStyle = styled(Paper)`
  padding: 8px 0;
  .content-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 40px;
    @media (max-width: 750px) {
      gap: 8px;
    }
    span {
      color: var(--light-on-surface);
      font-weight: 300;
      text-align: center;
    }
  }
`;
