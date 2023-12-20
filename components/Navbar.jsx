import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex justify-between bg-black text-white p-6">
      <div className="text-white font-bold">
        <Link href={"/"}>Home</Link>
      </div>
      <div>
        <Link href={"/addTopic"} className="text-black bg-white p-2 rounded-lg">
          AddTopic
        </Link>
      </div>
    </div>
  );
}
