import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col gap-4 justify-center items-center px-8">
      <Image
        className="animate-bounce"
        src={"/logo/logo-white-1.svg"}
        alt="Logo"
        width={"500"}
        height={"100"}
      />
      <div className="text-white text-xl md:text-3xl max-w-2xl text-center">
        <h1 className="font-semibold">Collect, Connect, Conquer!</h1>
        <p className="text-xl">
          <br />
          Elevate your experience with our curated token bundles - your key to a
          universe of possibilities, all in one seamless package.
        </p>
      </div>
      <div className="mt-8">
        <Link
          target="_blank"
          href="https://twitter.com/CoinCraftfi"
          className="bg-primary/30 relative hover:bg-secondary/20 hover:text-white font-medium text-lg flex flex-row gap-3 justify-center items-center px-6 py-2.5 rounded-xl"
        >
          <Image src={"/icons/X.svg"} alt="X Icon" width={"15"} height={"15"} />
          <span className="pt-1">Follow Us & Stay Tuned</span>
          <div className="h-3 w-3 bg-primary rounded-full absolute top-0 right-0 animate-ping"></div>
        </Link>
      </div>
    </div>
  );
}
