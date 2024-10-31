import Freind from "../Freind/Freind";
import Special from "../Special/Special";

const Cousin = ({name,asset}) => {
  return (
    <div>
      <h2>Cousin</h2>
      <p>{name}</p>
      <section>
            { asset && <Special asset={asset}></Special>}
            {name === 'Rubana' && <Freind></Freind>}
      </section>
    </div>
  );
};

export default Cousin;