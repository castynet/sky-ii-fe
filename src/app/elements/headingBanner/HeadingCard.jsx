import * as styles from "./HeaderStyle";
const HeadingCard = ({ title, author, heading, details }) => {
  return (
    <styles.Banner data-testid="banner">
      <styles.BannerTitle>
        <styles.TitleBox data-testid="titlebox">
          <h2 className="articlehead">{title}</h2>
        </styles.TitleBox>
        <styles.BannerInner
          data-testid="bannerinner"
          className="articlecard-info"
        >
          <p className="article-title" data-testid="paragraph">
            {heading}
          </p>
          <p className="article-paragraph">{details}</p>
          <span className="small-detail">{author}</span>
        </styles.BannerInner>
      </styles.BannerTitle>
    </styles.Banner>
  );
};

export default HeadingCard;
