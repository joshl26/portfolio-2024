import { useState } from "react";
import "@/app/ui/TopicRadio.css";

const TopicRadio = () => {
  const [radioValue, setRadioValue] = useState("Comment");

  const radios = [
    { name: "Comment", value: "1" },
    { name: "Recruiter", value: "2" },
    { name: "Work Request", value: "3" },
    { name: "Other", value: "4" },
  ];

  // const onButtonChange = (e: any) => {
  //   setRadioValue(e.target.value);
  //   console.log(radioValue);
  //   onTopicChanged(e);
  // };

  // return (
  // <ButtonGroup data-bs-theme="dark">
  //   <Stack gap={2}>
  //     {radios.map((radio, idx) => (
  //       <ToggleButton
  //         className="topic-button"
  //         key={idx}
  //         id={`radio-${idx}`}
  //         type="radio"
  //         variant={`outline-${colorMode}`}
  //         name="topic"
  //         value={radio.name}
  //         checked={radioValue === radio.name}
  //         onChange={(e) => onButtonChange(e)}
  //         onClick={(e) => onTopicChanged(e)}
  //         disabled={disabled}
  //       >
  //         {radio.name}
  //       </ToggleButton>
  //     ))}
  //   </Stack>
  // </ButtonGroup>
  // );
};

export default TopicRadio;
