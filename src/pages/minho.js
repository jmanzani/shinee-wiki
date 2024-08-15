import Layout from "@/components/layout";
import Image from "next/image";
import taeminPicture from '../../public/images/minho.jpeg';

export default function Minho() {
  return (
    <Layout
      title="SHINee Wiki - Choi Min Ho"
      description="SHINee Wiki - Choi Min Ho"
    >
      <main classNameName="px-4">
        <div className="grid grid-cols-2 p-20 gap-5">
          <Image src={taeminPicture} alt="Lee Tae Min" width={350}/>
          <span>
            <b className="text-xl">Choi Min Ho</b>
            <p>
            Choi Min-ho (hangul: 최민호, hanja: 崔珉豪?; Incheon, 9 de diciembre de 1991) también conocido artísticamente como Minho, es un rapero, cantante y actor surcoreano. 
            <br/><br/>
            Es miembro de la boyband SHINee desde 2008, siendo el rapero principal. Fue descubierto por un agente de SM entertainment en la calle en el 2006. Antes de debutar, participó en los desfiles de Andre Kim y Lee Sang Bong y en el desfile “Seoul Collection F/W 08-09″ de Ha Sang Baek en marzo de 2008.
            </p>
          </span>
        </div>
      </main>
    </Layout>
  );
}
