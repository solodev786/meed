import Section_four from "@/Components/Homepage/Section_four";
import Section_one from "@/Components/Homepage/Section_one";
import Section_three from "@/Components/Homepage/Section_three";
import Section_two from "@/Components/Homepage/Section_two";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Section_one />
      <Section_two />
      <Section_three />
      <Section_four />
    </div>
  );
}
