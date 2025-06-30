"use client";
import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <div className="w-screen min-h-screen bg-[url('/bg.jpg')] bg-cover bg-center flex justify-center ">
      <div className="flex flex-col lg:flex-row gap-10 rounded-xl mx-10 my-15 w-full">
        <div className="flex flex-col flex-1 mt-30">
          <Image 
            src="/logo-change.PNG"
            width={100}
            height={100} 
            alt="Logo Image"
          />
          <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-black">Fusion Walker Multifunction</h1>
          <h2 className="text-xl lg:text-3xl xl:text-3xl font-bold  text-black">รถเข็นอเนกประสงค์</h2>
          <p className="text-md md:text-xl text-black mt-4">
            นวัตกรรม walker รุ่นใหม่ มาพร้อมฟังก์ชั่นการใช้งานที่หลากหลายที่เป็นได้ทั้งอุปกรณ์ช่วยเดินเเละรถเข็นสำหรับนั่ง เพื่อเพิ่มความสะดวกสบายและความปลอดภัยให้กับผู้ใช้งาน
          </p>
          <div className="flex flex-row gap-2 xl:gap-4 mt-8">
            <Link href="https://youtu.be/kf5i1qR2jU8?feature=shared" className="bg-accent rounded-lg text-sm px-4 py-2 xl:px-8 xl:py-4 xl:text-xl text-white">FUNCTION</Link>
            <Link href="https://drive.google.com/file/d/1LHOjH-jHAt8gtK2jsav6PVMMf5pJaTR8/view?usp=sharing" className="bg-accent rounded-lg text-sm px-4 py-2 xl:px-8 xl:py-4 xl:text-xl text-white">POWERPOINT</Link>
            <Link href="https://youtu.be/p6An17RwxmY" className="bg-accent rounded-lg text-sm px-4 py-2 xl:px-8 xl:py-4 xl:text-xl text-white">EXERCISE</Link>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-center items-center flex-2 gap-3 xl:gap-15 ">
     <div className="w-40 sm:w-52 md:w-64">
    <Image
      src="/wheelchair.png"
      alt="Wheelchair"
      layout="responsive"
      width={1}
      height={1}
      className="object-contain"
    />
  </div>

  <div className="w-40 sm:w-52 md:w-64">
    <Image
      src="/walker.png"
      alt="Walker"
      layout="responsive"
      width={1}
      height={1}
      className="object-contain"
    />
  </div>

  <div className="w-32 sm:w-40 md:w-48">
    <Image
      src="/fold.png"
      alt="Fold"
      layout="responsive"
      width={1}
      height={1}
      className="object-contain"
    />
  </div>
        </div>
      </div>
    </div>
  );
}
