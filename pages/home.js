import Nav from "../components/nav";

//second code
import ChatBox from "../components/ChatBox";


export default function Home1() {
  // return (
  //   <div>
  //     <Nav />
  //     <div className="h-screen flex">
  //       <div className="w-2/3">
  //         <ChatBox />
  //       </div>
  //       <div className="w-1/3 bg-gray-200 p-4">
  //         <h2 className="text-center font-bold text-xl mb-4">Emoji Panel</h2>
  //         <EmojiPanel />
  //       </div>
  //     </div>
  //   </div>
  // );
  return(
    <div className="bg-bot1 bg-no-repeat bg-cover bg-center ">
      <Nav/>
      <ChatBox />
    </div>
  );
}








