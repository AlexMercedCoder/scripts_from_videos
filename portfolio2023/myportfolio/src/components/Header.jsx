import about from "../json/about.json";
import { HeaderContainer, NavContainer, NavLinkWrapper } from "../styledcomponents/Header";


export default function Header(props) {
  return (
    <HeaderContainer>
      <h1>My Portfolio</h1>
      <NavContainer>
        <NavLinkWrapper href="">
          <div>Github</div>
        </NavLinkWrapper>
        <NavLinkWrapper href="">
          <div>LinkedIn</div>
        </NavLinkWrapper>
        <NavLinkWrapper href="">
          <div>CodeWars</div>
        </NavLinkWrapper>
        <NavLinkWrapper href="">
          <div>StackOverflow</div>
        </NavLinkWrapper>
      </NavContainer>
    </HeaderContainer>
  );
}
