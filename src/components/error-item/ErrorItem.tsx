interface IErrorItem {
  message: string;
}

const ErrorItem = ({ message }: IErrorItem) => {
  return <div>{message}</div>;
};

export default ErrorItem;
