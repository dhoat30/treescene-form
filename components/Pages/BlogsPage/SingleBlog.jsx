"use client";
import React from "react";
import styled from "@emotion/styled";
import Container from "@mui/material/Container";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import Video from "@/components/UI/Video/Video";
import BottomSocialShare from "@/components/UI/SocialShare/BottomSocialShare";
export default function SingleBlog({ content }) {
  // Ensure data is an array and has at least one item

  return (
    <>
      <ContentSection>
        <div
          className="content-wrapper"
          dangerouslySetInnerHTML={{ __html: content }}
        ></div>
      </ContentSection>
    </>
  );
}

const ContentSection = styled.section`
  .title-wrapper {
    .title {
      margin-bottom: 24px;
      font-weight: 700;
      @media (max-width: 600px) {
        font-size: 2rem;
      }
    }
  }
  .meta-info-wrapper {
    display: flex;
    align-items: center;
    gap: 16px;
    padding-bottom: 16px;

    border-bottom: 1px solid var(--light-outline-variant);
    .profile-pic-wrapper {
      position: relative;
      width: 32px;
      height: 32px;
      img {
        border-radius: 50%;
        object-fit: cover;
      }
    }
    .text-wrapper {
      display: flex;
      align-items: center;
      gap: 4px;
      position: relative;
      flex-wrap: wrap;

      .meta-author-name {
      }
      .divider {
        @media (max-width: 370px) {
          display: none;
        }
      }
    }
  }
  .video-wrapper {
    margin-top: 24px;
  }
  .featured-image-wrapper {
    position: relative;
    width: 100%;
    margin-top: 24px;
    img {
      object-fit: cover;
    }
  }
  .content-wrapper {
    margin-top: 40px;
    figure {
      margin: 16px 0 0 0 !important;
    }
    a {
      text-decoration: underline;
    }
    img {
      width: 100% !important ;
      height: auto !important;
      object-fit: cover !important;
    }
    figcaption {
      text-align: center;
    }
    strong {
      font-weight: 900 !important;
    }
    h2 {
      strong {
        font-weight: 700 !important;
      }
      font-weight: 700 !important;
      border-top: 1px solid var(--light-outline-variant);
      letter-spacing: 0.05rem !important;
      color: var(--light-on-surface) !important;
      font-size: 2.7rem;
      padding-top: 60px;
      margin-top: 60px;
      margin-bottom: 8px;
      line-height: 3.5rem;
      @media (max-width: 600px) {
        font-size: 2rem;
        line-height: 2.5rem;
        padding-top: 40px;
        margin-top: 40px;
      }
    }
    h3 {
      scroll-margin-top: 80px;
      strong {
        font-weight: 600 !important;
      }
      font-weight: 600 !important;

      letter-spacing: 0.05rem !important;
      color: var(--white) !important;
      font-size: 1.8rem;
      margin-top: 40px;
      margin-bottom: 8px;
      @media (max-width: 600px) {
        font-size: 1.8rem;
      }
    }
    h4 {
      strong {
        font-weight: 500;
      }
      font-weight: 500;

      letter-spacing: 0.05rem !important;
      color: var(--white) !important;
      font-size: 1.6rem;
      margin-top: 8px;
      margin-bottom: 8px;
      @media (max-width: 600px) {
        font-size: 1.3rem;
      }
    }
    p,
    li {
      color: var(--light-on-surface-variant);
      font-size: 1.1rem;
      line-height: 2rem;
      font-weight: 350 !important;
      margin-bottom: 16px;
      margin-top: 16px;
      letter-spacing: -0.02rem !important;
      strong {
        font-weight: 600 !important;
      }
    }
    blockquote {
      background: var(--light-surface-container) !important;
      padding: 4px 16px !important;
      border-left: 4px solid var(--light-primary);
      margin: 16px 0;
    }
    ul {
      color: var(--gray-light);
      list-style: disc !important;
      li {
        margin-bottom: 8px;
        font-weight: 350 !important;
        color: var(--light-on-surface);

        strong {
          font-weight: 600 !important;
        }
      }
    }
    ol {
      color: var(--gray-light);
      list-style: decimal !important;
      li {
        margin-bottom: 8px;
        font-weight: 400 !important;
      }
    }
    .cta {
      margin-top: 24px;
      display: block;
    }
  }
`;
