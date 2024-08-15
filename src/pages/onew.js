import Layout from "@/components/layout";
import Image from "next/image";
import taeminPicture from '../../public/images/taemin.webp';

export default function Onew() {
  return (
    <Layout
      title="SHINee Wiki - Lee Tae Min"
      description="SHINee Wiki - Lee Tae Min"
    >
      <main classNameName="px-4">
        <div className="grid grid-cols-2 p-20 gap-5">
          <Image src={taeminPicture} alt="Lee Tae Min" width={350}/>
          <span>
            <b className="text-xl">Lee Tae Min</b>
            <p>
              Lee Tae-min (en hangul, 이태민; en hanja, 李泰民; Seúl, Corea del Sur, 18 de julio de 1993), conocido simplemente como Taemin (en hangul, 태민), es un cantante, bailarín , compositor, coreógrafo y productor surcoreano. En 2005 fue descubierto por S.M. Entertainment después de una audición exitosa en el S.M. Open Weekend Audition Casting. Se convirtió en miembro de SHINee el 25 de mayo de 2008 (con 14 años). Inició su carrera como actor en marzo de 2009 en la serie de MBC Tae Hee, Hye Kyo, Ji Hyun como Junsu. Desde 2019 también forma parte del grupo masculino de SM, SuperM.
              <br/><br/>
              Taemin hizo su debut como artista en solitario el 18 de agosto de 2014 con el lanzamiento de su miniálbum, titulado Ace, el álbum se posicionó en el primer lugar de Gaon Album Chart. El 23 de febrero de 2016, lanzó su primer álbum de estudio, Press It, con el sencillo titulado «Press Your Number». El álbum debutó en la primera posición de Gaon Album Chart, además de vender más de 76 000 copias en menos de un mes de lanzamiento. Su debut en Japón se fue el 27 de julio de 2016, con el lanzamiento del EP Solitary Goodbye, vendiendo más de 38 000 copias en su primer día de lanzamiento, y debutó en el tercer lugar de Oricon Daily Chart.
            </p>
          </span>
        </div>
      </main>
    </Layout>
  );
}
