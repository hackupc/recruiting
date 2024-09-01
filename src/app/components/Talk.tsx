import {
  CardBody,
  CardContainer,
  CardTitle,
  CardWithBorder,
  VideoContainer,
} from "@/app/genericComponents/General";
import { talk_data_card } from "@data/cards_data";

export default function Talk() {
  return (
    <CardContainer>
      <CardWithBorder>
        <CardTitle>{talk_data_card.title}</CardTitle>
        <CardBody>{talk_data_card.description}</CardBody>
        <VideoContainer>
          <video width="100%" controls>
            <source src={talk_data_card.video} type="video/mp4" />
          </video>
        </VideoContainer>
      </CardWithBorder>
    </CardContainer>
  );
}
