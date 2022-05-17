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
      <span key={item.id}>{item.title}</span>
    </div>
  );
};

export default MovieItem;
