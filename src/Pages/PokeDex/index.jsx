import { FormHeader } from "../../Components/FormBasics/FormLayout/FormHeader";
import { Divider } from "../../Components/FormBasics/Divider"
import { TextInput } from "../../Components/FormBasics/TextInput"
import "./styles.css";

export default function Pokedex() {
  return (
    <div className="home">
      <div className="forms__general">
        <FormHeader titulo="Busca de Pokemons" />
        <Divider />
        <TextInput titulo="Nome da geração" />
      </div>
    </div>
  );
}
