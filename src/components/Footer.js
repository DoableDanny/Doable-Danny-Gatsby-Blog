import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import {
  FooterWrapper,
  FooterSocialWrapper,
  FooterSocialIcons,
  P,
} from "../elements"

export const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      facebook: file(relativePath: { eq: "fb.JPG" }) {
        publicURL
      }
      instagram: file(relativePath: { eq: "insta.jpg" }) {
        publicURL
      }
      linkedin: file(relativePath: { eq: "li.jpg" }) {
        publicURL
      }
      twitter: file(relativePath: { eq: "twitter.jpg" }) {
        publicURL
      }
    }
  `)

  return (
    <FooterWrapper>
      <FooterSocialWrapper>
        <FooterSocialIcons>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={data.facebook.publicURL} alt="Facebook logo" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={data.twitter.publicURL} alt="twitter logo" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={data.linkedin.publicURL} alt="linkedin logo" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={data.instagram.publicURL} alt="instagram logo" />
          </a>
        </FooterSocialIcons>
        <P size="xSmall" color="dark3">
          © 2020 Company. All rights reserved.
        </P>
      </FooterSocialWrapper>
    </FooterWrapper>
  )
}
