import React from "react";
import { connect } from "react-redux";
import { ReactComponent as Logo } from "../../assets/crown.svg";

import {
  HeaderContaainer,
  LogoContainer,
  OptionsContainer,
  OptionsLink
} from "./header.styles";

import { signOutStart } from "../../redux/user/user.actions";

import { selectCurrentUser } from "../../redux/user/user.selectors";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { createStructuredSelector } from "reselect";

const Header = ({ currentUser, hidden, signOutStart }) => (
  <HeaderContaainer>
    <LogoContainer to="/">
      <Logo className="logo" />
    </LogoContainer>
    <OptionsContainer>
      <OptionsLink to="/shop">SHOP</OptionsLink>
      <OptionsLink to="/contact">CONTACT</OptionsLink>
      {currentUser ? (
        <OptionsLink as="div" onClick={signOutStart} to="/">
          SIGN OUT
        </OptionsLink>
      ) : (
        <OptionsLink to="/signin">SIGN IN</OptionsLink>
      )}
      <CartIcon />
    </OptionsContainer>
    {hidden ? null : <CartDropdown />}
  </HeaderContaainer>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

const mapDispatchToProps = dispatch => ({
  signOutStart: () => dispatch(signOutStart())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
