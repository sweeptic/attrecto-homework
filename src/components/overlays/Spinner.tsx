interface ISpinner {
  isLoading: boolean;
}

const Spinner = ({ isLoading }: ISpinner) => (isLoading ? <div className="loader" /> : <></>);

export default Spinner;
