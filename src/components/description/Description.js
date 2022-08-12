import { Text } from "UI/text/Text";

import DescriptionStyle, {
  propertyDescriptionTitle,
  propertyDescriptionParagraph,
} from "./DescriptionStyle";

export const Description = ({ descriptionStyles }) => {
  return (
    <>
      <div className={`description ${descriptionStyles}`}>
        <Text variant="body2" sx={propertyDescriptionTitle}>
          Description
        </Text>

        <Text variant="body2" sx={propertyDescriptionParagraph}>
          Lörem ipsum infraling nyr platoren preska platin. Okun vugt serat,
          tetrangen. Farat heterovis husanar ifall resade. Satsig mitulåd gyn.
          Faranat fehugon pneumaskop respektive spökgarn tonöning. Teger donök.
          Termopod Dylanman i tevänas om teras prehepp. Förpappring. Anöde
          kvasiskade sogisk, donedat att terravision. Kare mida. Ilogi löhung på
          samude. Skimma wiki att demynar. Detehuvis nemykaligen i rutkod i
          regen alltså nyhet. Bebel pos ultral ing osovis. Dinade pede, lagon
          respektive homopangen, i predast. Bek saktiga gohåssa. Epil kasam väck
          ses seling. Väsat beng, trisk, juholtare.
        </Text>
      </div>

      <style jsx>{DescriptionStyle}</style>
    </>
  );
};
