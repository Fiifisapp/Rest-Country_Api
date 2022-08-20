//imports below
import styled from "styled-components";
import { MdOutlineDarkMode } from "react-icons/md";
import { device } from "../../devices.js";

// styles for navigation bar
const Navbar = styled.div`
  @media ${device.mobileS} {
    max-width: 100%;
    height: 12vh;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  }

  @media ${device.mobileM} {
    max-width: 100%;
    height: 15vh;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  }

  @media ${device.tablet} {
    max-width: 100%;
    height: 15vh;
  }
`;

//styles for navigation content
const NavContainer = styled.div`
  @media ${device.mobileS} {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

//styles for navigation text
const NavbarText = styled.div`
  @media ${device.mobileS} {
    font-weight: bold;
    margin: 0.5em;
    color: ${(props) => props.theme.fontColor};
  }

  @media ${device.mobileM} {
    font-size: 1.2em;
    font-weight: bold;
    margin: 1em;
  }

  @media ${device.tablet} {
    font-size: 2em;
    font-weight: bold;
    margin: 2em;
  }

  @media ${device.laptop} {
    font-size: 1.5em;
    font-weight: 900;
    margin: 2em;
  }
`;

//styles for navigation button
const NavButton = styled.button`
  @media ${device.mobileS} {
    border: none;
    width: 7em;
    height: 2.5em;
    border-radius: 0.25em;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    background-color: ${(props) => props.theme.body};
    color: ${(props) => props.theme.fontColor};
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    margin-right: 0.5em;
  }

  @media ${device.mobileM} {
    width: 8em;
    height: 3em;
    border-radius: 0.5em;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    color: ${(props) => props.theme.fontColor};
    align-items: center;
    margin-right: 1em;
    font-weight: 700;
  }

  @media ${device.tablet} {
    width: 8em;
    height: 3em;
    border-radius: 0.5em;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    color: ${(props) => props.theme.fontColor};
    align-items: center;
    margin-right: 2em;
    font-size: 1.8em;
    font-weight: 700;
  }

  @media ${device.laptop} {
    width: 8em;
    height: 3em;
    border-radius: 0.5em;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    color: ${(props) => props.theme.fontColor};
    align-items: center;
    margin-right: 2em;
    font-size: 1em;
    font-weight: 700;
  }
`;

const Navigation = (props) => {
  return (
    <>
      <Navbar className="navbar">
        <NavContainer className="container">
          <NavbarText className="navbar-text">Where in the world?</NavbarText>
          <NavButton onClick={props.toggleMode}>
            <MdOutlineDarkMode />
            Dark Mode
          </NavButton>
        </NavContainer>
      </Navbar>
    </>
  );
};

export default Navigation;
