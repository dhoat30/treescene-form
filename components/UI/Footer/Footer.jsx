import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import NewsletterForm from "../Forms/NewsletterForm";
import { footerLinks } from "./FooterLinks";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHub from "@mui/icons-material/GitHub";
import YouTube from "@mui/icons-material/YouTube";
import Copyright from "./Copyright";
import ContactInfo from "./ContactInfo";
export default function Footer() {
  return (
    <>
      <FooterContainer
        variant="outlined"
        sx={{
          backgroundColor: "var(--light-surface-container-lowest)",
        }}
      >
        <ContainerStyled maxWidth="lg" className="row">
          {/* logo wrapper */}
          <Box className="footer-wrapper">
            <Box className="logo-wrapper">
              <Link href="/">
                <Image
                  src="/logo.png"
                  width="256"
                  height="85"
                  alt="Tree Scene Logo"
                />
              </Link>
            </Box>
          </Box>
        </ContainerStyled>
      </FooterContainer>
      {/* copyright container */}
      <Copyright />
    </>
  );
}
const FooterContainer = styled(Paper)`
  padding: 40px 0;
  @media (max-width: 900px) {
    padding: 32px 0;
  }
`;
const ContainerStyled = styled(Container)`
  .footer-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;

    .logo-wrapper {
      max-width: 300px;
    }
    .links-container {
      a {
        color: var(--dark-on-surface);
      }
    }
  }
  .footer-useful-links {
    a {
      &:hover {
        span {
          color: var(--dark-secondary);
        }
      }
    }
  }
  .contact-wrapper {
    /* @media (max-width: 900px) {
      grid-column: span 2;
    } */

    .social-wrapper {
      margin-top: 24px;
      .social-links {
        a {
          margin: 0 8px 0 0;
          &:hover {
            svg {
              path {
                fill: var(--dark-secondary);
              }
            }
          }
        }
      }
    }
  }
`;
