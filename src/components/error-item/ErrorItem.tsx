interface IErrorItem {
  message: string;
}

const ErrorItem = ({ message }: IErrorItem) => {
  return <div className="proba">{message}</div>;
};

export default ErrorItem;
