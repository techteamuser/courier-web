import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col relative h-screen text-center justify-evenly mx-auto items-center bg-cyan-600">
      <img
        className="w-[880px] h-[500px]"
        src="/background_under_construction.png"
      />
    </div>
  );
}
