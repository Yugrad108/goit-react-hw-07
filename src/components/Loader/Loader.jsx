import RingLoader from "react-spinners/RingLoader";

// Оверайд стилю для відображення лоадера по центру
const override = {
  display: "block",
  margin: "0 auto",
};

// Компонент лоадера
const Loader = ({ loading }) => {
  return (
    <div>
      {/* Лоадер-ring, який обертається, поки дані не завантажаться */}
      <RingLoader
        color="#5a4630"
        loading={loading}
        cssOverride={override}
        size={40}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default Loader;
