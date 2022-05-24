interface IMovieItem {
  item: any;
  Details?: boolean;
  onDetails?: (arg0: number) => void;
}

const MovieItem = ({ item, onDetails, Details }: IMovieItem) => {
  function onDetailHandler() {
    if (onDetails) {
      onDetails(item.id);
    }
  }

  return (
    <div className="card" onClick={onDetailHandler}>
      <div className="card__description-container">
        <div>{item.title}</div>
        <div>
          <span>{item.overview}</span>
        </div>
        <div>
          <span>{item.itemCategories}</span>
        </div>
      </div>
      <div className="picture-container">{/* <img src={`${item.}`} alt="Italian Trulli"></img> */}</div>
    </div>
  );
};

export default MovieItem;
