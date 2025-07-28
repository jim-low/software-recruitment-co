import { WHO_WE_WORK_WITH_LIST } from "../../constants";

export default function WhoWeWorkWith() {
  return (
    <div id='who-we-work-with' className="h-[234] flex flex-col gap-[30px] justify-center items-center px-[120px] py-[60px]">
      <p className="text-auxiliary text-center font-bold">Who we work with</p>
      <div className="flex items-center justify-evenly gap-[80px]">
        {WHO_WE_WORK_WITH_LIST.map(({ src, alt }) => {
          return (
            <img key={src} src={src} alt={alt} width={200} />
          );
        })}
      </div>
    </div>
  );
}
