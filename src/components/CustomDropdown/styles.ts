import { Dropdown } from "react-bootstrap";
import styled from "styled-components";

export const MyDropdown = styled(Dropdown)`
  .dropdown-toggle::after {
    display: none !important;
    :hover {
      text-decoration: none;
    }
  }

  a:hover,
  a:focus {
    text-decoration: none;
  }

  span {
    font-size: medium;
    font-family: "Raleway", sans-serif;
    font-weight: 400;
    color: white;
    display: flex;
    flex-direction: row;
    gap: 10px;
  }
`;
