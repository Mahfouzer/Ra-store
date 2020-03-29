import React, { Component, Fragment } from "react";

export default class Navigation extends Component {
  //this navigation was made for a showcase website
  //that you can scroll to a place in the page NOT navigate to others urls

  state = { w: document.documentElement.clientWidth };

  componentDidMount() {
    window.addEventListener(
      "resize",
      () => {
        this.setState({ w: document.documentElement.clientWidth });
      },
      { passive: true }
    );
  }

  componentWillUnmount() {
    window.removeEventListener("resize");
  }

  static Logo = ({ logoSrc }) => (
    <li>
      <h1>
        <img
          src={logoSrc}
          className="Navigation__Menu__logo"
          alt="the logo here"
        />
      </h1>
    </li>
  );

  //we can optmize this for colors and widths using the props of The Navigation [optional feature]
  static MenuToggler = () => (
    <svg
      viewBox="0 0 100 80"
      width="30"
      height="40"
      style={{ cursor: "pointer", marginRight: "50px" }}
    >
      <rect width="100%" height="8" rx="8" fill="#22aea5"></rect>
      <rect y="25" width="100%" height="8" rx="8" fill="#22aea5"></rect>
      <rect y="50" width="100%" height="8" rx="8" fill="#22aea5"></rect>
    </svg>
  );

  static Cart = ({ CartSrc, NotificationNum }) => (
    <li className="Navigation__Menu__Cart">
      <a href="#app">
        <img
          className="Navigation__Menu__Cart__logo"
          src={CartSrc}
          alt="the logo here"
        />
        {NotificationNum && (
          <p className="Navigation__Menu__Cart__Notification">
            {NotificationNum}
          </p>
        )}
      </a>
    </li>
  );

  static RegestrationButton = ({ isLogedIn }) => (
    <>
      {isLogedIn ? (
        <li className="Navigation__Menu__Reg-button">
          <a href="#app">Login</a>
        </li>
      ) : null}
    </>
  );

  renderLeftMenu(menuItems, isLogedIn) {
    return (
      <>
        {" "}
        {menuItems.map(menuItem => (
          <li key={menuItem}>
            <a href="#app">{menuItem}</a>
          </li>
        ))}
        <Navigation.RegestrationButton isLogedIn />
      </>
    );
  }

  render() {
    const { menuItems, Logo, hasCart, cartOptions, isLogedIn } = this.props;
    return (
      <Fragment>
        <nav className="Navigation">
          {this.state.w < 1100 && <Navigation.MenuToggler />}
          <ul className="Navigation__Menu">
            <Navigation.Logo logoSrc={Logo} />
            {hasCart && (
              <Navigation.Cart
                CartSrc={cartOptions.src}
                NotificationNum={cartOptions.holding}
              />
            )}
            {this.state.w > 1100 && this.renderLeftMenu(menuItems, isLogedIn)}
          </ul>
        </nav>
      </Fragment>
    );
  }
}
