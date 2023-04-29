import Accounts from "./components/Accounts";
import Header from "./components/Header";
import StatsOverview from "./components/StatsOverview";

function App() {
  return (
    <div>
      <Header />
      <main>
        <Accounts />
        <StatsOverview />
      </main>
    </div>
  );
}

export default App;
