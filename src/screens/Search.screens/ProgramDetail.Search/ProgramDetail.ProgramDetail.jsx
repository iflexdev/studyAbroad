import Banner from "./Banner.ProgramDetail";
import PriceCard from "./PriceCard.ProgramDetail";

export default function ProgramDetail() {
  return (
    <>
      {/*---------------------------- program detail Banner ----------------------------*/}
      <Banner />
      {/*---------------------------- program detail Details ----------------------------*/}
      <div className="px-[148px] py-[34px]">
        <div className="flex gap-x-[72px]">
          <div className="flex-1 border">1</div>
          <div className="w-[477px]">
            <PriceCard />
          </div>
        </div>
      </div>
    </>
  );
}
