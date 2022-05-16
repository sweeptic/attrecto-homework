interface IMovieItem {
  item: any;
  onDetails: (arg0: number) => void;
}

const MovieItem = ({ item, onDetails }: IMovieItem) => {
  function onDetailHandler() {
    onDetails(item.id);
  }

  return (
    <div className="card" onClick={onDetailHandler}>
      <span key={item.id}>{item.title}</span>
    </div>
  );
};

export default MovieItem;
