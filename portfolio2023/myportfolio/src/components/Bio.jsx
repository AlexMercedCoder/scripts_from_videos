import about from "../json/about.json";
import { BioContainer, BioImage } from "../styledcomponents/Bio";

export default function Bio(props) {
  return (
    <BioContainer>
      <h1>{about.name}</h1>
      <BioImage src={about.image} />
      <h3>{about.email}</h3>
      <p>{about.bio}</p>
    </BioContainer>
  );
}
