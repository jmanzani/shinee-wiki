import React from 'react';
import AlbumCard from './AlbumCard';

export default function AlbumList({ albums }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {albums.map((album) => (
        <AlbumCard 
          key={album.id} // Clave única por álbum
          titulo={album.title} 
          caratula={album.cover_image_url} 
          enlaceSpotify={album.spotify_url} 
          fechaLanzamiento={album.release_date} 
        />
      ))}
    </div>
  );
}
