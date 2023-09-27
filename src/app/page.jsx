import HomeHeader from "@/components/HomeHeader";
import HomeSearch from "@/components/HomeSearch";
import Image from "next/image";

export const metadata = {
  title: "google Clone",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function home() {
  return (
    <>
      {/* Header */}
      <HomeHeader />

      {/* body */}
      <div className="flex flex-col items-center mt-24">
        <Image
          alt="Google"
          width="300"
          height="100"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png"
        />
        <HomeSearch />
      </div>
    </>
  );
}
