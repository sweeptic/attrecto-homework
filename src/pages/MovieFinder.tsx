import ModalItem from "components/detail-item/ModalItem";
import ErrorItem from "components/error-item/ErrorItem";
import InputFilter from "components/input-items/InputFilter";
import MovieItem from "components/movie-item/MovieItem";
import MovieList from "components/movie-list/MovieList";
import Spinner from "components/overlays/Spinner";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cleanDetail } from "store/actions/detail";
import { fetchGenres } from "store/actions/genre";
import { removeNotification } from "store/actions/message";
import { getDetailRawData } from "store/reducers/detailReducer";
import { getMessageRawData } from "store/reducers/notificationReducer";
import { getLoadingState } from "store/reducers/uiReducer";

// customize the InputFilter
const inputFilterSetup = {
  waitForKey: 3,
  waitForMsec: 1000,
  clearWhenDelete: true,
};

const errorMessage = "Something went wrong. Please try again later.";

const MovieFinder = () => {
  const spinner = useSelector((state) => getLoadingState(state));
  const detail = useSelector((state) => getDetailRawData(state));
  const messages = useSelector((state) => getMessageRawData(state));
  const dispatch = useDispatch();

  const [detailIsShown, setDetailIsShown] = useState(false);
  const [messageIsShown, setMessageIsShown] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    getStaticCollections();
  }, []);

  useEffect(() => {
    if (Object.keys(detail).length) {
      setDetailIsShown(true);
    } else {
      setDetailIsShown(false);
    }
  }, [detail]);

  useEffect(() => {
    if (messages.length) {
      setMessageIsShown(true);
    } else {
      setMessageIsShown(false);
    }
  }, [messages]);

  function clearDetails() {
    dispatch(cleanDetail());
    inputRef.current?.focus();
  }

  function clearMessage() {
    dispatch(removeNotification());
    inputRef.current?.focus();
  }

  // Fetch categories, languages, countryes, other static datas.
  function getStaticCollections() {
    dispatch(fetchGenres({ query: "" }));
  }

  return (
    <section>
      <Spinner isLoading={spinner.loading} />
      {detailIsShown && <ModalItem onClose={clearDetails} content={<MovieItem item={detail} onlyDetail={true} />} />}
      {messageIsShown && <ModalItem onClose={clearMessage} content={<ErrorItem message={errorMessage} />} />}
      <div>
        <InputFilter {...inputFilterSetup} ref={inputRef} />
      </div>
      <article className="result">
        <MovieList waitForKey={inputFilterSetup.waitForKey} ref={inputRef} />
      </article>
    </section>
  );
};

export default MovieFinder;
