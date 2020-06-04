import React from 'react';
import styled from 'styled-components/macro';
import Ipsum from 'components/Ipsum';
import Image, { backgroundImageCss } from 'components/Image';
import TextBlock from 'components/TextBlock';
import { Section } from 'components/Layout';

const Images = styled.div`
  padding: 20%;
`;
const Wrapper = styled.div`
  position: relative;
`;

const Head = styled(Section)`
  color: #fff;
  height: 50vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
`;

const ImageSquare = styled(Image)`
  height: 400px;
  width: auto;
`;

const SectionDark = styled(Section)`
  color: #fff;
  padding: 60px 0;
`;

const Home = ({ page }) => {
  //const { state, actions } = useStore();
  const { title, image, content } = page;
  return (
    <Wrapper>
      <Head image={image}>
        <h2>{title}</h2>
      </Head>
      <Section color="#eee">
        <Ipsum />
      </Section>
      <SectionDark color="black">
        <p>this is a dark section </p>
      </SectionDark>
      <Images>
        <span>Look at me im not in the center on original image</span>
        <br />
        <ImageSquare ratio={true} src={image} />
      </Images>
      <TextBlock blocks={content} />
    </Wrapper>
  );
};

export default Home;
