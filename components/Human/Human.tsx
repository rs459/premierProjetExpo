import { ReactNode } from "react";
import { Text } from "react-native";

interface HumanProps {
  firstName: string;
  name: string;
  age: number;
  children?: ReactNode;
}

export default function Human({ firstName, name, age, children }: HumanProps) {
  return (
    <>
      <Text>
        Mon prénom est {firstName}, mon nom est {name} et j&apos;ai {age} ans.
      </Text>
      {children}
    </>
  );
}
