import * as styles from "./CardStyles";
import { Icons } from "../../elements/icons/icons";
const Card = () => {
  return (
    <div>
      <styles.EcomCard data-testid="container">
        <styles.CardSection className="cardsection">
          <picture>
            <img
              src="https://images.unsplash.com/photo-1601392740426-907c7b028119?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
              alt="chair"
            />
          </picture>
          <styles.FloatingSection data-testid="floatingsection">
            <div className="cart">
              <Icons.Cart size="18" />
            </div>
            <div className="zoom">
              <Icons.ZoomIn size="18" />
            </div>
            <div className="heart">
              <Icons.Heart size="18" />
            </div>
          </styles.FloatingSection>
        </styles.CardSection>
        <styles.CardContent>
          <h2 className="titlecard">Vel elit euismod</h2>
          <styles.Dot>
            <styles.Boxes></styles.Boxes>
            <styles.Boxes1></styles.Boxes1>
            <styles.Boxes2></styles.Boxes2>
          </styles.Dot>
          <styles.Prices>
            <div className="prices1">
              <p>$26.00</p>
            </div>
            <div className="prices2">
              <span>$42.00</span>
            </div>
          </styles.Prices>
        </styles.CardContent>
      </styles.EcomCard>
    </div>
  );
};

export default Card;
