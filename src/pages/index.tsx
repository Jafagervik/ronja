import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [img, setImg] = useState("/cats.jpg");
  const [threat, setThreat] = useState("");
  const [isPVisible, setIsPVisible] = useState(false);

  const threats: string[]  = ["/threat.jpg", "/angy.jpg", "/angy2.jpg", "/angy2.jpg", "/angy3.jpg", "/angy4.png", "/angy5.jpg", "/angy6.jpg"];
  const threatsStrings: string[]  = ["Try again", "Du trykke feil knapp", "WHAT", "Pretty please!", "God damn it", "NOOOOO", "Pleaseeee", "Wtf"];

  const no = () => {
    setIsPVisible(false);
    let text: string = getRandomThreat(threatsStrings);
    let img: string = getRandomThreat(threats);
    console.log(img);
    setThreat(text);
    setImg(img);
  }


  const yes = (event: any) => {
    setIsPVisible(true);
    setImg("/love.jpg");
  }

  const getRandomThreat = (arr: string[]) => {
    const idx = Math.floor(Math.random() * arr.length);
    return arr.at(idx) ;
  }



  return (
    <>
      <Head>
        <title>Til Ronja</title>
        <meta name="description" content="By me :D" />
        <link rel="icon" href="/favico.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            Til <span className="text-[hsl(280,100%,70%)]">Ronja</span> aka Pookie
          </h1>


          <p className="text-3xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            Wanna be my  <span className="text-[hsl(0,100%,50%)]">V a l e n t i n e</span> ?
          </p>

          <img src={img} className="h-96 w-96"></img>
          
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">

                <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full"  onClick={yes}>
                  Ja!!
                </button>

                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full" onClick={no}>
                   Hmmm
                </button>

          </div>

          {isPVisible && (<p className="text-white text-5xl display-none">Love you! Ser frem te 18:45 den 14. februar :D</p> )};
          {!isPVisible && (<p className="text-blue-300 text-5xl display-none">{threat}</p> )};

        </div>
      </main>
    </>
  );
}
