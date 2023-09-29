// next
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

// components
import Socials from "@/app/components/Socials";

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: { type: "spring", duration: 1.5, bounce: 0 },
    },
  },
};

const Header = () => {
  return (
    <header className="absolute z-30 w-full flex justify-center px-16 xl:px-0 xl:h-[90px]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8">
          {/* logo */}
          <Link href={"/"}>
            <Image
              src={"./MyLogoPNGCodes.svg"}
              width={220}
              height={48}
              alt=""
              priority={true}
            />
          </Link>

          {/* socials */}
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
