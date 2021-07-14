/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-unused-vars */
import Card from '../components/Card';

export default function Favorites({ items, onAddToFavorite }) {
  return (
    <div className="content p-40">
      <div className="d-flex justify-between align-center mb-40">
        <h1>Bookmarks</h1>
      </div>
      <div className="d-flex flex-wrap">
        {items.map((item, index) => (
          <Card key={index} favorited onFavorite={onAddToFavorite} {...item} />
        ))}
      </div>
    </div>
  );
}
