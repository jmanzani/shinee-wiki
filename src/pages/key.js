import Layout from "@/components/layout";
import Image from "next/image";
import artistPicture from '../../public/images/key.webp';
import { getAlbumsByArtistId } from "./api/albums";
import AlbumList from "@/components/AlbumList";

export default function Key({ albums }) {
  return (
    <Layout
      title="SHINee Wiki - Kim Kibum"
      description="SHINee Wiki - Kim Kibum"
    >
      <main className="px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 p-5 md:p-20 gap-5">
          <div>
            <div className="flex flex-col md:flex-row justify-center items-center">
              <h1 className="text-2xl md:text-4xl font-bold m-5 text-center">Key</h1>
              <Image src={artistPicture} alt="Kim Kibum" width={350} className="" />
            </div>
          </div>
          <ol className="mt-5 text-center text-base md:text-xl font-semibold">
            <li>Nombre Artistico: 키 / Key </li>
            <li>Nombre real: 김기범 / Kim Ki Bum.</li>
            <li>Profesión: Cantante, Rapero, Modelo, Actor</li>
            <li>Fecha de nacimiento: 23-Septiembre-1991 (33 Años)</li>
            <li>Lugar de nacimiento: Daegu, Corea del Sur.</li>
            <li>Estatura: 178cm</li>
            <li>Signo zodiacal: Libra</li>
            <li>Signo zodiacal chino: Cabra</li>
            <li>Familia: Padres</li>
            <li>Agencia: SM Entertainment (Corea del Sur)</li>
          </ol>
        </div>


        <p className="p-5 text-justify font-medium">
        Key nació en Daegu, Corea del Sur. Siendo hijo único fue criado por su abuela desde su nacimiento, ya que su madre estaba enferma después de dar a luz y su padre estaba ocupado con el trabajo.          
        <br /><br />
        En 2006, se unió a SM Entertainment después de ganar el S.M. National Tour Audition Casting. Antes de debutar, Key apareció como bailarín de fondo en la película Super Junior, Attack on the Pin-Up Boys. También es conocido por su talento en varios idiomas, como inglés y japonés. Pasó seis semanas en un intercambio en Estados Unidos y habla con fluidez el inglés.        </p>
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
  const artistId = 3;
  const albums = await getAlbumsByArtistId(artistId);
  return {
    props: {
      albums
    }
  };
}
