import { query } from "../../../data/db";


export async function getArtistById(artistId) {
  const sql = 'SELECT * FROM artists WHERE artist_id = ?';
  const artist = await query(sql, [artistId]);

  return artist;
}