import {
  SectionContainer,
  SectionDescription,
  SectionTitle,
} from "@/app/genericComponents/General";
import { socials_data } from "@data/socials_data";
import styled from "styled-components";
import {
  Secondary300,
  SpacingM,
  SpacingS,
  TitleM,
} from "@/app/genericComponents/tokens";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HeaderSocials = styled.p`
  font-size: ${TitleM};
  font-weight: bold;
  text-align: center;
  text-transform: uppercase;
  color: ${Secondary300};
  margin-top: ${SpacingM};
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
      <HeaderSocials>HackUPC</HeaderSocials>
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
      <HeaderSocials>HackersatUPC</HeaderSocials>
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
