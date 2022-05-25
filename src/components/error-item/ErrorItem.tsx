interface IErrorItem {
  message: string;
}

const ErrorItem = ({ message }: IErrorItem) => <div className="error-item">{message}</div>;

export default ErrorItem;
