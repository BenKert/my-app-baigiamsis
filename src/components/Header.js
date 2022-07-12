import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDownUpAcrossLine } from "@fortawesome/free-solid-svg-icons";

const StyledHeader = styled.header`
  background-color: #323d38;
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.2);
  display: grid;
  grid-template-columns: 200px 1fr 200px;
  grid-column-gap: 20px;
`;

const LogoLink = styled.a`
  color: #fff;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px 10px;
  span {
    padding-left: 5px;
  }
  b {
    font-weight: bold;
  }
`;

const SearchInput = styled.input`
  display: inline-block;
  box-sizing: border-box;
  width: 100%;
  border-radius: 5px;
  border: 1px solid #777;
  background: rgba(0, 0, 0, 0.1);
  padding: 6px 6px;
  margin-top: 12px;
`;

const ProfileLink = styled.a`
  color: #fff;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function Header() {
  return (
    <StyledHeader>
      <LogoLink href="" className="logo">
        <FontAwesomeIcon icon={faArrowDownUpAcrossLine} size="xl" />
        <span>
          Stuck <b>withoutFlow</b>
        </span>
      </LogoLink>
      <form action="" className="serach">
        <SearchInput type="text" placeholder="Search..." />
      </form>
      <ProfileLink href="" className="profile">
        Benediktas
      </ProfileLink>
    </StyledHeader>
  );
}
