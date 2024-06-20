import { Checkbox, Container, PseudoSwitch } from "./styles";

type Props = {
  onSwitch: () => void;
  isOn: "light" | "dark";
};

const Switch = (props: Props) => {
  return (
    <Container>
      <Checkbox
        type="checkbox"
        checked={props.isOn === "dark"}
        onChange={props.onSwitch}
      />
      <PseudoSwitch checked={props.isOn === "dark"} />
    </Container>
  );
};

export default Switch;
