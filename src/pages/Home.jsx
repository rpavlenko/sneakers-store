/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-unused-vars */
import Card from '../components/Card';

export default function Home({
  items,
  searchValue,
  setSearchValue,
  onChangeSearchInput,
  onAddToCart,
  onAddToFavorite,
  filterItems,
}) {
  return (
    <div className="content p-40">
      <div className="d-flex justify-between align-center mb-40">
        <h1>{searchValue ? `Search by "${searchValue}"` : 'All Sneakers'}</h1>
        <div className="search-block d-flex">
          <img src="./img/search.svg" alt="Search" />
          {searchValue && (
            <img className="clear cu-p" src="/img/btn-remove.svg" alt="Close" onClick={() => setSearchValue('')} />
          )}
          <input type="text" placeholder="Search..." onChange={onChangeSearchInput} value={searchValue} />
        </div>
      </div>

      <div className="d-flex flex-wrap">
        {filterItems(items).map((item, index) => (
          <Card key={index} onFavorite={obj => onAddToFavorite(obj)} onPlus={obj => onAddToCart(obj)} {...item} />
        ))}
      </div>
    </div>
  );
}
