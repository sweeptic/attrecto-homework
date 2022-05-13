import InputFilter from "components/input-items/InputFilter";

const MovieFinder = () => {
  return (
    <section>
      <div>
        <InputFilter waitForKey={3} waitForMsec={1000} />
      </div>
      <article className="result">searcResult</article>
    </section>
  );
};

export default MovieFinder;
