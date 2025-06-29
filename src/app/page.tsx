"use client";
import Image from "next/image";
import Link from "next/link";
import WalkerModel from "./components/walkerModel";
export default function Home() {
  return (
    <div className="w-screen h-screen bg-[url('/bg.jpg')] bg-cover bg-center flex justify-center ">
      <div className="flex flex-row gap-10 rounded-xl my-15">
        <div className="flex flex-col gap-2 max-w-2xl">
          <Image 
            src="/logo.png"
            width={200}
            height={200} 
            alt="Logo Image"
          />
          <h1 className="text-4xl font-bold font-mono text-black">CHAIR FOR WALK</h1>
          <h2 className="text-3xl font-bold font-mono text-black">Rollator SBC multifunction care</h2>
          <p className="text-xl text-black">
            นวัตกรรม walker รุ่นใหม่ มาพร้อมฟังก์ชั่นการใช้งานที่หลากหลายที่เป็นได้ทั้งอุปกรณ์ช่วยเดินเเละรถเข็นสำหรับนั่ง เพื่อเพิ่มความสะดวกสบายและความปลอดภัยให้กับผู้ใช้งานโดยมีฟังก์ชั่นที่สำคัญดังนี้
          </p>
          <div className="flex flex-row gap-4 mt-4">
            <Link href="#" className="bg-accent rounded-lg px-4 py-2 text-white">VIDEO</Link>
            <Link href="#" className="bg-accent rounded-lg px-4 py-2 text-white">POWERPOINT</Link>
          </div>
        </div>

        <div className="flex justify-center items-center">
          
         {/* <WalkerModel/> */}
        </div>
      </div>
    </div>
  );
}
