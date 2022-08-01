import Main from "./components/Main";

const App = (props) => {
  return (
    <>
      <div>
        <Main companyName="ABC" comapnyLocation="Odisha" />
        <Main />
      </div>
    </>
  );
};

export default App;