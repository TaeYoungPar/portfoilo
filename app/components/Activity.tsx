import Image from "next/image";

const ActivityImg = () => {
  return (
    <div className="hidden xl:flex xl:max-w-none">
      <Image
        src={"/images/activity.png"}
        width={400}
        height={400}
        alt=""
        className=""
      />
    </div>
  );
};

export default ActivityImg;
