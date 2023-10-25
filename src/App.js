import CarFrom from "./components/CarForm";
import CarList from "./components/CarList";
import CarSearch from "./components/CarSearch";
import CarValue from "./components/CarValue";

function App() {
  return (
    <div className="container is-fluid">
      <CarFrom />
      <CarSearch />
      <CarList />
      <CarValue />
    </div>
  );
}

export default App;
