import * as styles from "./styles";
import { Icons } from "../../elements/icons/icons"


export default function Footer() {
  return (
    <>
      <styles.Footer>
      <styles.Footer1>
        <div>
        <styles.Title1>Hekto</styles.Title1>
        <styles.p><styles.Input placeholder="Enter Email Address" type="email" /><styles.Button>Sign Up</styles.Button></styles.p>

        <styles.p>Contact Info</styles.p>
        <styles.p>17 Princess Road, London, Greater London NW18JR,UK</styles.p>
        </div>

        <div>
            <styles.Title2>Catagories</styles.Title2>

            <styles.HyperLink href="#"><styles.p>Laptops & Computers</styles.p></styles.HyperLink>
            <styles.HyperLink href="#"><styles.p>Cameras & Photography</styles.p></styles.HyperLink>
            <styles.HyperLink href="#"><styles.p>Smart Phones & Tablets</styles.p></styles.HyperLink>
            <styles.HyperLink href="#"><styles.p>Video Games & Consoles</styles.p></styles.HyperLink>
            <styles.HyperLink href="#"><styles.p>Waterproof Headphones</styles.p></styles.HyperLink>
        </div>
        <div>
            <styles.Title2>Customer Care</styles.Title2>

            <styles.HyperLink href="#"><styles.p>My Account</styles.p></styles.HyperLink>
            <styles.HyperLink href="#"><styles.p>Discount</styles.p></styles.HyperLink>
            <styles.HyperLink href="#"><styles.p>Returns</styles.p></styles.HyperLink>
            <styles.HyperLink href="#"><styles.p>Orders History</styles.p></styles.HyperLink>
            <styles.HyperLink href="#"><styles.p>Order Tracking</styles.p></styles.HyperLink>
        </div>
        <div>
            <styles.Title2>Pages</styles.Title2>
            <styles.HyperLink href="#"><styles.p>Blog</styles.p></styles.HyperLink>
            <styles.HyperLink href="#"><styles.p>Browse the Shop</styles.p></styles.HyperLink>
            <styles.HyperLink href="#"><styles.p>Catergory</styles.p></styles.HyperLink>
            <styles.HyperLink href="#"><styles.p>Pre-Built Pages</styles.p></styles.HyperLink>
            <styles.HyperLink href="#"><styles.p>Visual Composer Elements</styles.p></styles.HyperLink>
            <styles.HyperLink href="#"><styles.p>WooCommerce</styles.p></styles.HyperLink>
        </div>
        </styles.Footer1>
        <styles.Footer2>
            <styles.p>
            <i class="fa fa-copyright" aria-hidden="true">&copy;</i>
                Webecy - All rights Reserved
            </styles.p>
        <div>
          <styles.Link href="#"><Icons.Facebook size="18" /></styles.Link>
          <styles.Link href="#"><Icons.Instagram size="18" /></styles.Link>
          <styles.Link href="#"><Icons.Twitter size="18" /></styles.Link>
        </div>
        </styles.Footer2>
      </styles.Footer>
    </>
  );
}
