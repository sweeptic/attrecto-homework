import InputFilter from "components/input-items/InputFilter";

// customize the InputFilter
const inputFilterSetup = {
  waitForKey: 3,
  waitForMsec: 1000,
  clearWhenDelete: true,
};

const MovieFinder = () => {
  return (
    <section>
      <div>
        <InputFilter {...inputFilterSetup} />
      </div>
      <article className="result">searcResult</article>
    </section>
  );
};

export default MovieFinder;
