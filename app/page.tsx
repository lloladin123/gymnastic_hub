import Image from "next/image";
import PlanningChecklist from "./PlanningChecklist";
import Events from "./Events";

export default function Home() {
  return (
    <>
      <PlanningChecklist></PlanningChecklist>
      <Events></Events>
    </>
  );
}
