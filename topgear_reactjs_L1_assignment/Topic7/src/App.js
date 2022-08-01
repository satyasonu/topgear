import Main from "./components/Main";

const App = (props) => {
  return (
    <>
      <div>
        <Main
          name="ABC"
          cities={["Delhi",", ", "MUMBAI ",", ", "PUNE"]}
          age={Number(60)}
        />
        <Main />
      </div>
    </>
  );
};

export default App;
