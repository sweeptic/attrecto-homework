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
      <div>
        <h4>
          {item.title}, {item.id}
        </h4>
      </div>
      <div>
        <span>{item.overview}</span>
      </div>
      <div>
        <h5>{item.itemCategories}</h5>
      </div>
    </div>
  );
};

export default MovieItem;
