"use client";
import styled from "@emotion/styled";

import Container from "@mui/material/Container";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import Typography from "@mui/material/Typography";
import dynamic from "next/dynamic";
import Image from "next/image";
import WebsiteInquiryLongForm from "@/components/UI/Forms/WebsiteInquiryLongForm";
import Video from "@/components/UI/Video/Video";

const WebsiteEnquiryForm = dynamic(() =>
  import("@/components/UI/Forms/WebsiteEnquiryForm")
);

export default function WebsiteInquiryPage() {
  return (
    <Section>
      <Container maxWidth="lg" className="container">
        <div className="content-container">
          <Typography variant="h4" component="h1" className="title">
            Get a Free Quote for Your Tree Care Needs
          </Typography>
          <Typography variant="body1" component="p" className="description">
            At Tree Scene, we understand the importance of maintaining healthy
            and safe trees. Our team of experts provides top-notch tree care
            services, including tree removal, trimming, stump grinding, and
            more. Whether you are a homeowner, property manager, or landscaper,
            we are here to help.
          </Typography>
          <div className="image-wrapper">
            <Video
              placeholderImage={{ url: "/video-thumbnail.jpg" }}
              videoID="RrLRWKFMonc"
            />
          </div>
        </div>
        <div className="form-container">
          <WebsiteInquiryLongForm className="row-max form-component" />
        </div>
      </Container>
    </Section>
  );
}
const Section = styled.section`
  background: var(--light-surface-container-low);
  padding: 120px 0 160px 0;
  @media (max-width: 600px) {
    padding: 80px 0 24px 0;
  }
  .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    background: var(--light-surface-container-low);
    gap: 16px;
    align-items: start;
    @media (max-width: 1000px) {
      grid-template-columns: 1fr;
    }
    @media (max-width: 600px) {
      padding: 0;
    }
    .form-container {
      background: var(--light-surface-container);
      min-height: 536px;
      //remove the top border radius
      border-radius: 12px;
    }
    .content-container {
      position: sticky;
      top: 80px;
      padding: 16px 24px;
      background: var(--light-surface-container);
      border-radius: 12px;
      .description {
        margin-top: 8px;
      }
      @media (max-width: 1000px) {
        position: static;
      }
      @media (max-width: 600px) {
        padding: 16px 16px;
      }

      .image-wrapper {
        position: relative;
        width: 100%;
        margin-top: 24px;
      }
    }
  }
`;
