interface ISpinner {
  isLoading: boolean;
}

const Spinner = ({ isLoading }: ISpinner) => (isLoading ? <div className="loader" /> : <></>);
// const Spinner = ({ isLoading }: ISpinner) => ( <div className="loader" />);

export default Spinner;
