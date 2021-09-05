import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import {AboutSection, Avatar, Title, Text, SubTitle} from './style';
import {SectionIntro, ContainerLayout, ResumeButton} from "../common";

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "avatar.JPEG" }) {
        childImageSharp {
          fluid(maxWidth: 550) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <>
      <SectionIntro>
        <ContainerLayout>
          <AboutSection>
            <div>
              <Avatar fluid={data.placeholderImage.childImageSharp.fluid} alt="user photo" />
              <SubTitle> Front End Developer</SubTitle>
            </div> 
            <div>
              <Title> Hello, I’m Hieu Nguyen </Title>
              <Text> I'm a Front End Developer hailing from <b className="text-primary lined-link">Viet Nam</b> living in Ho Chi Minh city. </Text>
              <Text> I love working with modern technologies, building and working with awesome projects. I like all the thing about ecommerce. I prefer minimalistic & clean code base. My aiming is to delivery good quality code, and easy to maintain</Text>
              <Text> I graduated from FTP University, bachelor of computer engineering in 2012, I have been a developer of few companies in Vietnam and UK before working as a fulltime freelancer in 2018</Text>            
              <Text> My skill set is: NextJS, ,GatsbyJS, tailwindcss, Strapi, Graphql</Text>            
              
            </div>
          </AboutSection>
        </ContainerLayout>
      </SectionIntro>
    </>
  )
}


export default About
