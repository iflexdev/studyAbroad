import ProgramCard from "./ProgramCard";

const ProgramList = () => {
  return (
    <div className="flex flex-wrap gap-4">
      <ProgramCard primary />
      <ProgramCard />
      <ProgramCard />
    </div>
  );
};
export default ProgramList;