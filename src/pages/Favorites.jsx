/* eslint-disable react/no-array-index-key */
import { useContext } from 'react';
import AppContext from '../context';
import Card from '../components/Card';

export default function Favorites() {
  const { favorites, onAddToFavorite } = useContext(AppContext);
  return (
    <div className="content p-40">
      <div className="d-flex justify-between align-center mb-40">
        <h1>Bookmarks</h1>
      </div>
      <div className="d-flex flex-wrap">
        {favorites.map((item, index) => (
          <Card key={index} favorited onFavorite={onAddToFavorite} {...item} />
        ))}
      </div>
    </div>
  );
}
