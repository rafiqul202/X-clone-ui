import Link from "next/link";
import Feed from "./components/Feed";
import Share from "./components/Share";

const Homepage = () => {
  return (
    <div className="">
      <div className="flex justify-between text-textGray font-bold border-b-[1px] border-borderGray px-4 pt-4">
        <Link
          href={"/"}
          className="pb-3 flex items-center border-b-4 border-iconBlue"
        >
          For You
        </Link>
        <Link href={"/"} className="pb-3 flex items-center">
          Following
        </Link>
        <Link href={"/"} className=" hidden pb-3 md:flex items-center">
          ReactJs
        </Link>
        <Link href={"/"} className="hidden  pb-3 md:flex items-center">
          JavaScript
        </Link>
        <Link href={"/"} className=" hidden pb-3 md:flex items-center">
          Css
        </Link>
      </div>
      <Share />
      <Feed />
    </div>
  );
};

export default Homepage;
