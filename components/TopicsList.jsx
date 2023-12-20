import Link from "next/link";
import { HiPencilAlt } from "react-icons/hi";
import RemoveBtn from "./RemoveBtn";


const getTopics = async ()=>{
  try {
   const res = await fetch("http://localhost:3000/api/topics",{
      cache:"no-store"
    })
  
 if(!res.ok){
  throw new Error("failed to fetch")
 } 
 return res.json()
 
  } catch (error) {
    console.log(error);
  }
}


export default async function TopicsList() {
  const {topics} = await getTopics()

  return (
    <>
    {topics.map((t)=>(
      
    
    <div 
    key={t._id}
    className="p-4 my-3 border border-slate-300 gap-5 flex justify-between items-center">
      <div>
        <h2 className="text-2xl">{t.title}</h2>
        <h3 className="text-xl">{t.description}</h3>
      </div>
      <div className="items-start flex justify-between">
        <Link href={`/editTopic/${t._id}`}>
          <HiPencilAlt size={24} />
        </Link>
        <RemoveBtn id={t._id} />
      </div>
    </div>
    ))}
    </>
  );
}
