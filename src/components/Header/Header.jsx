import Calculator from "../../assets/calculator";
import "./Header.css";

function Header() {
  return (
    <div className="header">
        <Calculator  />
        <span className="logo">BMR CALC</span> 
    </div>
  );
}

export default Header;
