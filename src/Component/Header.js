import React from "react";

const info = [
  {
    item: "TOTAL TRAFFIC",
    number: `123,456`,
    logo: "assets/Group 17.png",
  },
  {
    item: "NEW USER",
    number: `2345`,
    logo: "assets/Group -1.png",
  },
  {
    item: "SALES",
    number: `924`,
    logo: "assets/Group -2.png",
  },
  {
    item: "PERFORMANCE",
    number: `48.65%`,
    logo: "assets/Group -3.png",
  },
];

function Header() {
  return (
    <header>
      <div className="fixed-container gadget-container">
        {info.map((i) => (
          <Gadget {...i} />
        ))}
      </div>
    </header>
  );
}

export default Header;

function Gadget({ item, number, logo }) {
  return (
    <div className="gadget">
      <div className="info">
        <p>{item}</p>
        <p>{number}</p>
      </div>
      <div className="logo">
        <img src={logo}></img>
      </div>
    </div>
  );
}
