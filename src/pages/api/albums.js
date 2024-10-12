import { query } from "../../../data/db";

export async function getAllAlbums() {
  const sql = 'SELECT * FROM albums';
  const albums = await query(sql);

  // Convertir la fecha de cada álbum a un formato de cadena
  const formattedAlbums = albums.map(album => ({
    ...album,
    release_date: album.release_date ? album.release_date.toISOString() : null
  }));

  return formattedAlbums;
}
export async function getAlbumsByArtistId(artistId) {
  const sql = 'SELECT * FROM albums WHERE artist_id = ? ORDER BY release_date DESC';
  const albumsSQL = await query(sql, [artistId]);
  // Convertir la fecha de cada álbum a un formato de cadena
  const albums = albumsSQL.map(album => ({
    ...album,
    release_date: album.release_date ? album.release_date.toISOString() : null,
    // Convertir el blob de la base de datos a base64
    cover_image: album.cover_image ? Buffer.from(album.cover_image).toString('base64') : null,
  }));
  
  return albums;
}