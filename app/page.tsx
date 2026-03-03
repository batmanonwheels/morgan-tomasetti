import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen font-sans bg-zinc-50 dark:bg-black">
      <main className="flex items-center justify-center">
        <Image
          alt={"Heashot of Morgan Tomasetti"}
          src={
            "https://res.cloudinary.com/dmmn0gqaf/image/upload/v1772565495/morgan-tomasetti/headshots/MT-233_qwymaw.jpg"
          }
          width={1920}
          height={1080}
          className="w-full h-[calc(100dvh-6rem)] object-cover object-top"
        />
      </main>
    </div>
  );
}
