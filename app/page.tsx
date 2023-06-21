import Card from "@/components/home/card";
import Balancer from "react-wrap-balancer";
import { Calculator } from "@/components/shared/icons";

export default async function Home() {
  return (
    <>
      <div className="z-10 w-full max-w-xl px-5 xl:px-0">
        <a
          href="https://www.facebook.com/gjocajshkolla/?locale=sq_AL"
          target="_blank"
          rel="noreferrer"
          className="mx-auto mb-5 flex max-w-fit animate-fade-up items-center justify-center space-x-2 overflow-hidden rounded-full bg-blue-100 px-7 py-2 transition-colors hover:bg-blue-200"
        >
          <Calculator className="h-5 w-5 text-[#1d9bf0]" />
          <p className="text-sm font-semibold text-[#1d9bf0]">
            Shkolla 9-vjeçare Gjocaj
          </p>
        </a>
        <h1
          className="animate-fade-up bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center font-display text-4xl font-bold tracking-[-0.02em] text-transparent opacity-0 drop-shadow-sm md:text-7xl md:leading-[5rem]"
          style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
        >
          <Balancer>Mesatarja e përgjithshme në mënyrë të thjeshtë</Balancer>
        </h1>
        <p
          className="mt-6 animate-fade-up text-center text-gray-500 opacity-0 md:text-xl"
          style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
        >
          <Balancer>
            Llogarit mesataren e notave në mënyrëtë shpejtë për çdo nxënës të shkollës 9-vjeçare. Plotëso të dhënat dhe shtyp butonin {"\"Llogarit\""}.
          </Balancer>
        </p>
      
      </div>
      <div className="my-10 grid w-full max-w-screen-xl animate-fade-up grid-cols-1 gap-5 px-5 md:grid-cols-3 xl:px-0">
      <div className="hidden md:block"></div>
          <Card
            key={"mesatrja"}
            title={"Makina llogaritëse"}
            description={"Viti shkollor 2022/2023"}
          />
      </div>
      <div className="hidden md:block"></div>
    </>
  );
}

