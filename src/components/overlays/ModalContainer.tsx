import ModalItem from "components/detail-item/ModalItem";
import ErrorItem from "components/error-item/ErrorItem";
import MovieItem from "components/movie-item/MovieItem";
import { forwardedRefHelper } from "helpers/tsHelpers";
import { getScrollPosition, usePageLastPosition } from "hooks/usePageLastPosition";
import { ForwardedRef, forwardRef, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { cleanDetail } from "store/actions/detail";
import { removeNotification } from "store/actions/notification";
import { IDetailState } from "store/reducers/detailReducer";
import { getMessageRawData, INotificationState } from "store/reducers/notificationReducer";
import { getDetailObject } from "store/selectors/feature_selectors";
import { useAppDispatch } from "store/store";

const ModalContainer = forwardRef((_, inputRef: ForwardedRef<HTMLInputElement>) => {
  usePageLastPosition();
  const dispatch = useAppDispatch();
  const detail = useSelector((state: IDetailState) => getDetailObject(state));
  const messages = useSelector((state: INotificationState) => getMessageRawData(state));
  const [detailIsShown, setDetailIsShown] = useState(false);
  const [messageIsShown, setMessageIsShown] = useState(false);
  const errorMessage = "Something went wrong. Please try again later.";

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

  function setLastPosition() {
    window.scrollTo({
      top: getScrollPosition(),
      behavior: "auto",
    });
  }

  function clearDetails() {
    console.log("click");

    //   document.querySelector("movie-finder")?.scrollTo({top: 5000 });
    //   window.scrollTo(2000, 0);
    //   console.log('document.getElementById("movie-finder")', document.getElementById("movie-finder"));

    dispatch(cleanDetail());
    forwardedRefHelper(inputRef)?.focus();
    setLastPosition();
  }

  function clearMessage() {
    dispatch(removeNotification());
    forwardedRefHelper(inputRef)?.focus();
    setLastPosition();
  }

  return (
    <div>
      {detailIsShown && <ModalItem onClose={clearDetails} content={<MovieItem item={detail} details={true} />} />}
      {messageIsShown && <ModalItem onClose={clearMessage} content={<ErrorItem message={errorMessage} />} />}
    </div>
  );
});

export default ModalContainer;
