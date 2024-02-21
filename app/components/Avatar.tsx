import Image from "next/image";

const Avatar = () => {
  return (
    <div className="hidden xl:flex xl:max-w-none">
      <Image
        src={"/images/avatar.png"}
        width={640}
        height={640}
        alt=""
        className="w-full h-full"
      />
    </div>
  );
};

export default Avatar;
