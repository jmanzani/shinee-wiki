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
  const sql = 'SELECT * FROM albums WHERE artist_id = ? order by release_date desc';
  const albumsSQL = await query(sql, [artistId]);

  // Convertir la fecha de cada álbum a un formato de cadena
  const albums = albumsSQL.map(album => ({
    ...album,
    release_date: album.release_date ? album.release_date.toISOString() : null
  }));
  return albums;
}