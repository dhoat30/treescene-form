"use client";
import React from "react";
import styled from "@emotion/styled";
import Typography from "@mui/material/Typography";
import Image from "next/image";

export default function USP({ data, showTitle = false }) {
  const { section_title, description, cards } = data;
  console.log(data);
  return (
    <Section>
      {showTitle && (
        <div className="title-wrapper">
          <Typography variant="h5" component="h2" className="title">
            {section_title}
          </Typography>
          <Typography variant="body1" component="p" className="description">
            {description}
          </Typography>
        </div>
      )}
      <div className="cards-wrapper">
        {cards.map((card, index) => (
          <div key={index} className="card">
            <Image
              src={card.icon.url}
              alt={card.icon.alt}
              width="80"
              height="80"
              className="image"
            />
            <div className="content">
              <Typography variant="h6" component="h3" className="title">
                {card.title}
              </Typography>
              <Typography variant="body1" component="p" className="description">
                {card.description}
              </Typography>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
const Section = styled.section`
  margin-top: 24px;
  .title {
    color: var(--dark-on-surface);
  }
  .description {
    color: var(--dark-on-surface-variant);
  }
  .cards-wrapper {
    margin-top: 24px;
    display: flex;
    gap: 8px;
    flex-direction: column;
    .card {
      /* display: flex; */
      /* align-items: center; */
      gap: 16px;
      border: 1px solid var(--dark-outline-variant);
      padding: 16px;
      .title {
        margin: 0;
      }
      .image {
        background: linear-gradient(36deg, #6400ed 0%, #f000ff 100%);
        border-radius: 50%;
      }
    }
  }
`;
