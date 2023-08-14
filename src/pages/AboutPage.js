import React from 'react';
import styled from 'styled-components';
import PageHero from '../Components/PageHero';
import aboutImg from '../assets/about.jpg'

const AboutPage = () => {
  return <main>
    <PageHero title="about"></PageHero>
    <Wrapper className='page section section-center'>
      <img src={aboutImg} alt="about" />
      <article>
        <div className="title">
          <h2>My story</h2>
          <div className='underline'></div>
        </div>
        <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, at sed omnis corporis doloremque possimus velit! Repudiandae nisi odit, aperiam odio ducimus, obcaecati libero et quia tempora excepturi quis alias?
        </p>
      </article>
    </Wrapper>
  </main>
}

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`

export default AboutPage
