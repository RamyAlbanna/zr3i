import logo from "../../../assets/images/logo.png";
export default function Header() {
  return (
    <header>
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="profile">
        <img
          src="https://mdbcdn.b-cdn.net/img/new/avatars/1.webp"
          className="rounded-circle shadow-4"
          style={{ width: 50 }}
          alt="Avatar"
        />
      </div>
    </header>
  );
}
