import Link from "next/link";
import { RiInstagramLine, RiGithubLine, RiDiscordLine } from "react-icons/ri";
const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      <Link href={""} className="hover:text-accent transition-all duration-300">
        <RiInstagramLine className="w-6 h-6" />
      </Link>
      <Link href={""} className="hover:text-accent transition-all duration-300">
        <RiGithubLine className="w-6 h-6" />
      </Link>
      <Link href={""} className="hover:text-accent transition-all duration-300">
        <RiDiscordLine className="w-6 h-6" />
      </Link>
    </div>
  );
};

export default Socials;
