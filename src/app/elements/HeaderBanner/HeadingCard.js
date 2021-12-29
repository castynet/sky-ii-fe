import React from "react";
import styled from "styled-components";

const HeadingCard = ({ title, author, heading, details }) => {
  return (
    <Banner>
      <BannerTitle>
        <Titlebox>
          <h2 className="articlehead">{title}</h2>
        </Titlebox>
        <BannerInner className="articlecard-info">
          <p className="article-title">{heading}</p>
          <p className="article-paragraph">{details}</p>
          <span className="small-detail">{author}</span>
        </BannerInner>
      </BannerTitle>
    </Banner>
  );
};

const Banner = styled.div`
  background: #f6f5ff;
  width: 1920px;
  height: 286px;
`;
const BannerTitle = styled.div`
  padding-left: 125px;
  padding-top: 125px;
`;
const Titlebox = styled.div`
  color: #101750;
  width: 314px;
  height: 36px;

  line-height: 42px;
`;
const BannerInner = styled.div`
  display: flex;
`;

export default HeadingCard;
