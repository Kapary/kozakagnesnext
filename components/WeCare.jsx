import React from "react";
import styled from "styled-components";

export const WeCare = () => {
  return (
    <WeCareSection
      id="we-care"
      className="image-with-text-section main-section"
    >
      <div className="text-wrapper">
        <h2 className="tag-line">Hello!</h2>
        <p>
          Mam na imię Agnieszka! Zajmuję się fotografią ślubną oraz rodzinną.
          Moja praca jest odzwierciedleniem tego, co najbardziej mnie inspiruje
          - minimalizm, naturalne światło, odcienie ziemi oraz oczywiście
          emocje, które staram się uchwycić na fotografiach. Jeśli chcecie, abym
          uwieczniła Wasze wspomnienia, napiszcie do mnie! Mieszkam w Gdyni, ale
          z przyjemnością dojadę w każde miejsce.
        </p>
      </div>
      <div
        className="img-wrapper"
        style={{ backgroundImage: 'url("./img/about.jpeg")' }}
      ></div>
    </WeCareSection>
  );
};

const WeCareSection = styled.section`
  height: 100vh;
  padding: 50px 0;
  position: relative;
  display: flex;

  .text-wrapper {
    width: 370px;
    position: absolute;
    top: 50%;
    left: 21%;
    transform: translateY(-50%);
  }

  .img-wrapper {
    height: 100%;
    width: 50%;
    background-size: contain;
    margin: auto 10% auto auto;
    background-position: center;
    background-repeat: no-repeat;

    @media screen and (max-width: 767px) {
      width: 100%;
      padding: 30px;
      margin: 0;
    }
  }
`;
