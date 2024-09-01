import {
  SectionContainer,
  SectionDescription,
  SectionTitle,
} from "@/app/genericComponents/General";
import { socials_data } from "@data/socials_data";
import styled from "styled-components";
import {
  Secondary100,
  Secondary500,
  SpacingM,
  SpacingS,
  SpacingXS,
  TitleM,
} from "@/app/genericComponents/tokens";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

const HeaderSocials = styled.a`
  font-size: ${TitleM};
  font-weight: bold;
  text-decoration: none;
  color: ${Secondary100};
  margin-top: ${SpacingM};
  margin-bottom: ${SpacingXS};
  display: flex;
  justify-content: center;
  cursor: pointer;

  &:hover {
    color: ${Secondary500};
  }
`;

const SocialsDescription = styled(SectionDescription)`
  text-align: center;
  margin-bottom: ${SpacingM};
`;

const SocialsList = styled.div`
  align-content: center;
  display: flex;
  flex-wrap: wrap;
  gap: ${SpacingM};
  justify-content: center;
  padding: ${SpacingS};
`;

const SocialItem = styled.div`
  text-align: center;

  &:hover {
    transform: scale(1.5);
  }
`;

export default function Socials() {
  return (
    <SectionContainer>
      <SectionTitle>{socials_data.title}</SectionTitle>
      <SocialsDescription>{socials_data.description}</SocialsDescription>
      <HeaderSocials href={"https://hackupc.com/"} target={"_blank"}>
        HackUPC
        <FontAwesomeIcon
          icon={faUpRightFromSquare}
          size={"2xs"}
          style={{ marginLeft: "8px" }}
        />
      </HeaderSocials>
      <SocialsList>
        {socials_data.socialsHackUPC.map((social) => (
          <SocialItem key={social.label}>
            <a
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
            >
              <FontAwesomeIcon icon={social.icon} size="3x" />
            </a>
          </SocialItem>
        ))}
      </SocialsList>
      <HeaderSocials href={"https://hackersatupc.org/"} target={"_blank"}>
        Hackers@UPC{" "}
        <FontAwesomeIcon
          icon={faUpRightFromSquare}
          size={"2xs"}
          style={{ marginLeft: "8px" }}
        />
      </HeaderSocials>
      <SocialsList>
        {socials_data.socialsHackersUPC.map((social) => (
          <SocialItem key={social.label}>
            <a
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
            >
              <FontAwesomeIcon icon={social.icon} size="3x" />
            </a>
          </SocialItem>
        ))}
      </SocialsList>
    </SectionContainer>
  );
}
