import Image from "next/image";
import Logo from "@/app/assets/quiiz.png"
import { TopicsChoice } from "./components/TopicsChoice";

export default function Home() {
  return (
    <>    
      <Image width={200} height={140} src={Logo} alt="Logo Quiiz" />
      <div className="flex flex-col items-center gap-[30px]">
        <h2 className="text-[20px] font-medium text-neutral-black w-[261px]">Escolha um Assunto para Iniciar.</h2>
        <TopicsChoice/>
      </div>
    </>
  );
}
