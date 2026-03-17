import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen font-sans bg-zinc-50">
      <main className="flex items-center justify-center max-h-[calc(100dvh-6rem)]">
        <Image
          alt={"Heashot of Morgan Tomasetti"}
          src={
            "https://cdn.sanity.io/images/0a7f8a0o/production/4fe819901fcecc07e25908684ceb2149a941a04d-1920x1536.webp?w=2000&fit=max&auto=format&dpr=2"
          }
          width={1920}
          height={1080}
          className="w-full h-screen object-cover"
          // style={{ objectPosition: "25%" }}
        />
      </main>
    </div>
  );
}
