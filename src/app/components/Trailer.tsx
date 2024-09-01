import {
  CardBody,
  CardContainer,
  CardTitle,
  CardWithBorder,
  VideoContainer,
} from "@/app/genericComponents/General";
import { trailer_data_card } from "@data/cards_data";

export default function Trailer() {
  return (
    <CardContainer>
      <CardWithBorder>
        <CardTitle>{trailer_data_card.title}</CardTitle>
        <CardBody>{trailer_data_card.description}</CardBody>
        <VideoContainer>
          <video width="100%" controls>
            <source src={trailer_data_card.video} type="video/mp4" />
          </video>
        </VideoContainer>
      </CardWithBorder>
    </CardContainer>
  );
}
