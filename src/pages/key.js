import Layout from "@/components/layout";
import Image from "next/image";
import taeminPicture from '../../public/images/taemin.webp';
import { getAlbumsByArtistId } from "./api/albums";
import AlbumList from "@/components/AlbumList";

export default function Key({ albums }) {
  return (
    <Layout
      title="SHINee Wiki - Lee Tae Min"
      description="SHINee Wiki - Lee Tae Min"
    >
      <main classNameName="px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 p-5 md:p-20 gap-5">
          <div>
            <div className="flex flex-col md:flex-row justify-center items-center">
              <h1 className="text-2xl md:text-4xl font-bold m-5 text-center">Taemin</h1>
              <Image src={taeminPicture} alt="Lee Tae Min" width={350} className="" />
            </div>
          </div>
          <ol className="mt-5 text-center text-base md:text-xl font-semibold">
            <li>Nombre: 태민 / Taemin</li>
            <li>Nombre Romaji: Lee Tae Min / Taemin</li>
            <li>Nombre Completo: 이태민 / Lee Tae Min</li>
            <li>Nombre Japonés: イ・テミン / I Taemin</li>
            <li>Profesión: Cantante, Bailarín, Actor, Compositor y Modelo</li>
            <li>Fecha de nacimiento: 18-Julio-1993 (31 Años)</li>
            <li>Lugar de nacimiento: Dongbong-gu, Seúl, Corea del Sur</li>
            <li>Estatura: 175 cm</li>
            <li>Familia: Padres y hermano mayor</li>
            <li>Agencia: Big Planet Made (Corea del Sur)</li>
          </ol>
        </div>


        <p className="p-5 text-justify font-medium">
          Lee Tae-min (en hangul, 이태민; en hanja, 李泰民; Seúl, Corea del Sur, 18 de julio de 1993), conocido simplemente como Taemin (en hangul, 태민), es un cantante, bailarín , compositor, coreógrafo y productor surcoreano. En 2005 fue descubierto por S.M. Entertainment después de una audición exitosa en el S.M. Open Weekend Audition Casting. Se convirtió en miembro de SHINee el 25 de mayo de 2008 (con 14 años). Inició su carrera como actor en marzo de 2009 en la serie de MBC Tae Hee, Hye Kyo, Ji Hyun como Junsu. Desde 2019 también forma parte del grupo masculino de SM, SuperM.
          <br /><br />
          Taemin hizo su debut como artista en solitario el 18 de agosto de 2014 con el lanzamiento de su miniálbum, titulado Ace, el álbum se posicionó en el primer lugar de Gaon Album Chart. El 23 de febrero de 2016, lanzó su primer álbum de estudio, Press It, con el sencillo titulado «Press Your Number». El álbum debutó en la primera posición de Gaon Album Chart, además de vender más de 76 000 copias en menos de un mes de lanzamiento. Su debut en Japón se fue el 27 de julio de 2016, con el lanzamiento del EP Solitary Goodbye, vendiendo más de 38 000 copias en su primer día de lanzamiento, y debutó en el tercer lugar de Oricon Daily Chart.
        </p>
        <div>
          <h2 className="text-3xl font-bold m-5">Albums</h2>
          <div>
            <AlbumList albums={albums} />
          </div>
        </div>
      </main>
    </Layout>
  );
}

export async function getServerSideProps({ params }) {
  const artistId = 1;
  const albums = await getAlbumsByArtistId(artistId);
  console.log(albums);
  return {
    props: {
      albums
    }
  };
}
