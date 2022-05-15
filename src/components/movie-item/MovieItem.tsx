
interface IMovieItem {
  item: any;
}

const MovieItem = ({ item }: IMovieItem) => {
  return (
    <div className="card">
      <span key={item.id}>{item.title}</span>
    </div>
  );
};

export default MovieItem;
