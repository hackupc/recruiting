import {
  SectionContainer,
  SectionDescription,
  SectionTitle,
} from "@/app/genericComponents/General";
import { socials_data } from "@data/socials_data";
import styled from "styled-components";
import {
  BodyTextMedium,
  Secondary100,
  Secondary500,
  MobileBreakpoint,
  SpacingM,
  SpacingS,
  SpacingXS,
  Primary300,
} from "@/app/genericComponents/tokens";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

const BorderedSection = styled(SectionContainer)`
  border: 1px solid ${Primary300};
  border-radius: ${SpacingS};
  padding: ${SpacingM};
  background: rgba(47, 67, 114, 0.18);

  @media (max-width: ${MobileBreakpoint}) {
    padding: ${SpacingS};
  }
`;

const SocialGroup = styled.div`
  padding-top: ${SpacingM};

  & + & {
    margin-top: ${SpacingM};
    border-top: 1px solid rgba(255, 255, 255, 0.18);
  }

  @media (max-width: ${MobileBreakpoint}) {
    padding-top: ${SpacingS};

    & + & {
      margin-top: ${SpacingS};
    }
  }
`;

const HeaderSocials = styled.a`
  font-size: ${BodyTextMedium};
  font-weight: bold;
  text-decoration: none;
  color: ${Secondary100};
  display: flex;
  align-items: center;
  gap: ${SpacingXS};
  cursor: pointer;

  svg {
    width: 0.625rem;
    height: 0.625rem;
  }

  &:hover {
    color: ${Secondary500};
  }
`;

const SocialsDescription = styled(SectionDescription)`
  text-align: left;
  margin-bottom: ${SpacingM};
`;

const SocialsList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(4.5rem, 1fr));
  gap: ${SpacingXS};
  margin-top: ${SpacingS};

  @media (max-width: ${MobileBreakpoint}) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const SocialItem = styled.a`
  display: flex;
  min-height: 4.25rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${SpacingXS};
  border: 1px solid rgba(255, 255, 255, 0.16);
  border-radius: ${SpacingXS};
  color: white;
  text-decoration: none;
  transition:
    background-color 0.2s ease,
    border-color 0.2s ease,
    transform 0.2s ease;

  svg {
    width: 1.25rem;
    height: 1.25rem;
  }

  span {
    font-size: 0.68rem;
    opacity: 0.75;
  }

  &:hover {
    background: ${Primary300};
    border-color: ${Secondary100};
    transform: translateY(-0.15rem);
  }
`;

export default function Socials() {
  return (
    <BorderedSection>
      <SectionTitle>{socials_data.title}</SectionTitle>
      <SocialsDescription>{socials_data.description}</SocialsDescription>

      <SocialGroup>
        <HeaderSocials href={"https://hackupc.com/"} target={"_blank"}>
          HackUPC
          <FontAwesomeIcon icon={faUpRightFromSquare} size={"2xs"} />
        </HeaderSocials>
        <SocialsList>
          {socials_data.socialsHackUPC.map((social) => (
            <SocialItem
              key={social.label}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
            >
              <FontAwesomeIcon icon={social.icon} size="3x" />
              <span>{social.label}</span>
            </SocialItem>
          ))}
        </SocialsList>
      </SocialGroup>

      <SocialGroup>
        <HeaderSocials href={"https://hackersatupc.org/"} target={"_blank"}>
          Hackers@UPC
          <FontAwesomeIcon icon={faUpRightFromSquare} size={"2xs"} />
        </HeaderSocials>
        <SocialsList>
          {socials_data.socialsHackersUPC.map((social) => (
            <SocialItem
              key={social.label}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
            >
              <FontAwesomeIcon icon={social.icon} size="3x" />
              <span>{social.label}</span>
            </SocialItem>
          ))}
        </SocialsList>
      </SocialGroup>
    </BorderedSection>
  );
}
