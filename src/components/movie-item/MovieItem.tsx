interface IMovieItem {
  item: any;
  onlyDetail?: boolean;
  onDetails?: (arg0: number) => void;
}

const MovieItem = ({ item, onDetails, onlyDetail }: IMovieItem) => {
  function onDetailHandler() {
    if (onDetails) {
      onDetails(item.id);
    }
  }

  return (
    <div className="card" onClick={onDetailHandler}>
      <div>
        <h4>{item.title}</h4>
      </div>
      <div>
        <span>{item.overview}</span>
      </div>
      <div>
        <h5>{item.itemCategories}</h5>
      </div>
      <div>{/* <span>categories: {item.categories}</span> */}</div>
    </div>
  );
};

export default MovieItem;
