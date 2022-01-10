import * as styles from "./styles";
import {Icons} from "../../elements/icons/icons";

export default function HeadingBar() {
  return (
    <>
      <styles.Wrapper>
        <styles.Contact>
          <a href="mailto:sky@gmail.com">
            <Icons.Email size="18" /> sky@gmail.com
          </a>
          <a href="tel:+254743665574">
            <Icons.Phone size="18" /> +254 743 665 574
          </a>
        </styles.Contact>
        <styles.Menu>
          <select name="lang" id="lang">
            <option>English</option>
            <option>Swahili</option>
            <option>French</option>
          </select>
          <select name="currency" id="currency">
            <option>KES</option>
            <option>GBP</option>
            <option>USD</option>
          </select>
          <select name="login" id="login">
            <option>Login</option>
            <option>Join</option>
          </select>
          <a href="/">
            Wishlist <Icons.Heart size="18" />
          </a>
          <a href="/">
            <Icons.Cart size="20" />
          </a>
        </styles.Menu>
      </styles.Wrapper>
    </>
  );
}
