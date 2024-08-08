import LogoutLink from "./LogoutLink";

const Header = () => {
  return (
    <div>
      <nav>
        <a href="/">AirBnB-Clone</a> | <a href="/signup">Sign Up</a> |{" "}
        <a href="/login">Login</a> | <LogoutLink />
      </nav>
    </div>
  );
};

export default Header;
