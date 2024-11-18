import { Audio, Key } from "../JavaScriptDrumKit/Components";

const keyArray: number[] = [65, 83, 68, 70, 71, 72, 74, 75, 76];

const typeArray: string[] = [
  "clap",
  "hihat",
  "kick",
  "openhat",
  "boom",
  "ride",
  "snare",
  "tom",
  "tink",
];

export const DrumKit = () => {
  return (
    <div className="keys">
      {keyArray.map((e: number, index: number) => (
        <Key key={e} data={e} type={typeArray[index]}>
          hola
        </Key>
      ))}
      {keyArray.map((e: number, index) => (
        <Audio key={e} data={e.toString()} source={typeArray[index]}></Audio>
      ))}
    </div>
  );
};
