import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import dayjs from 'dayjs'; // Biblioteca para manejar fechas

const AlbumCard = ({ titulo, caratula, enlaceSpotify, fechaLanzamiento }) => {
  const [caratulaUrl, setCaratulaUrl] = useState(null);

  // Calcular si el álbum es nuevo (menos de 3 meses desde la fecha de lanzamiento)
  const esNuevo = dayjs().diff(dayjs(fechaLanzamiento), 'month') < 3;

  useEffect(() => {
    // Convertir el Base64 a una URL válida si está presente
    if (caratula) {
      setCaratulaUrl(`data:image/jpeg;base64,${caratula}`);
    }
  }, [caratula]);

  return (
    <div className="flex flex-col md:flex-row items-center bg-white dark:bg-neutral-800 shadow-md rounded-lg p-4 max-w-xl mx-auto">
      {/* Carátula del álbum */}
      <div className="relative w-full h-64 md:w-1/3 md:h-auto overflow-hidden rounded-lg">
        {caratulaUrl && (
          <Image
            src={caratulaUrl}
            alt={`Carátula de ${titulo}`}
            width="500"
            height="500"
            className="rounded-lg"
          />
        )}
      </div>

      {/* Información del álbum */}
      <div className="flex flex-col justify-between p-4 md:w-2/3">
        <div>
          <h2 className="text-xl font-semibold text-black dark:text-white mb-2">
            {titulo}
          </h2>
          <p className="text-gray-500 dark:text-gray-300 text-sm mb-4">
            Fecha de Lanzamiento: {dayjs(fechaLanzamiento).format('DD MMM YYYY')}
          </p>

          {esNuevo && (
            <span className="inline-block bg-green-500 text-white text-xs font-bold rounded-full px-3 py-1 mb-4">
              NUEVO
            </span>
          )}
        </div>

        {/* Enlace a Spotify */}
        <Link href={enlaceSpotify} passHref target="_blank" rel="noopener noreferrer">
          <span
            className="text-white bg-green-600 hover:bg-green-700 transition-colors font-bold py-2 px-4 rounded-lg text-center inline-block"
          >
            Escuchar en Spotify
          </span>
        </Link>
      </div>
    </div>
  );
};

export default AlbumCard;
