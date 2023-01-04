import { Link } from "react-router-dom";
import { NameAndLogo } from "./NameAndLogo";
import { SignUp } from "./NavigationList/SignUpForm";
import "./Header.css";
import Button from "../Components/Buttons/Buton";

export function Header() {
  return (
    <div className="header">
      <Link to="/">
        <NameAndLogo />
      </Link>
      <nav className="nav">
        <Link className="link" to="/signIn">
          <Button variant="signIn">Sign In</Button>
        </Link>
        <Link className="link" to="/signUp">
          <Button variant="signUp">Sign Up</Button>
        </Link>
      </nav>
    </div>
  );
}
