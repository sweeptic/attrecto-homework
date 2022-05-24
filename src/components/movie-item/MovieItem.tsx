import { IDetailRes, IGetMoviesArrayRes } from "store/selectors/feature_selectors";

interface IMovieItem {
  item: IDetailRes;
  details?: boolean;
  onDetails?: (arg0: number) => void;
}

const MovieItem = ({ item, onDetails, details: details }: IMovieItem) => {
  function onDetailHandler() {
    if (onDetails) {
      onDetails(item.id);
    }
  }

  function getPictureUrl(poster_path: string) {
    return poster_path ? `https://image.tmdb.org/t/p/w300_and_h450_bestv2/${item.poster_path}` : undefined;
  }

  function getImdbLink(link: string | undefined) {
    if (link) {
      return (
        <div>
          <span>Link to</span>{" "}
          <a href={`https://www.imdb.com/title/${link}/`} target="_blank" rel="noopener noreferrer">
            imdb
          </a>
          .
        </div>
      );
    }
  }

  return (
    <section className="card" onClick={onDetailHandler}>
      <div className="card__detail">
        <img className="card__picture-container" src={getPictureUrl(item.poster_path)} alt={`${item.title} picture here`}></img>
        <article className="card__description-container">
          <div>
            <div>
              <span>Title:</span> {item.title}
            </div>
            <div>
              <span>Genre:</span> {item.itemCategories}
            </div>
            <div>
              <span>Release date:</span> {item.release_date}
            </div>
            {details && (
              <div>
                <span>Length:</span> {item.runtime} min
              </div>
            )}
            {details && (
              <div>
                <span>Country:</span> {item.production_countries}
              </div>
            )}
            {details && <div>{getImdbLink(item.imdb_id)}</div>}
          </div>
        </article>
      </div>
      <div className="card__overview">
        {details && (
          <div>
            <span>Overview:</span> {item.overview}
          </div>
        )}
      </div>
    </section>
  );
};

export default MovieItem;
