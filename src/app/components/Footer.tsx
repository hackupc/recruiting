import { SectionContainer } from "@/app/genericComponents/General";
import styled from "styled-components";
import {
  BodyTextMedium,
  Primary100,
  Primary300,
  Primary500,
  SpacingM,
  SpacingS,
  SpacingXS,
} from "@/app/genericComponents/tokens";

const FooterContainer = styled(SectionContainer)`
  margin: 0 auto;
  padding: ${SpacingM};
  text-align: center;
`;

const LinkText = styled.a`
  color: ${Primary100};
  text-decoration: none;
  font-size: ${BodyTextMedium};
  margin: 0 ${SpacingXS};

  &:hover {
    color: ${Primary500};
    cursor: pointer;
  }
`;

const SecondLine = styled.div`
  margin-top: ${SpacingS};
`;

export default function Footer() {
  return (
    <FooterContainer>
      <div>
        <LinkText
          href={"https://legal.hackersatupc.org/hackupc/legal_notice"}
          target={"_blank"}
        >
          Legal notice
        </LinkText>{" "}
        |{" "}
        <LinkText
          href={"https://legal.hackersatupc.org/hackupc/privacy_and_cookies"}
          target={"_blank"}
        >
          Privacy and cookies
        </LinkText>
      </div>
      <SecondLine>
        <b>Made</b> with ❤ by{" "}
        <LinkText href={"https://hackersatupc.org/"} target={"_blank"}>
          Hackers@UPC
        </LinkText>
      </SecondLine>
    </FooterContainer>
  );
}
