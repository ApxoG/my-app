import "./App.css";
import Layout from "./components/Layout/index";
import Card from "./components/Cards/Card";

function App() {
  const customersData = [
    {
      img: "https://randomuser.me/api/portraits/women/1.jpg",
      name: "Chris Friedkly",
      description: "Supermarket Villanova",
    },
    {
      img: "https://randomuser.me/api/portraits/women/4.jpg",
      name: "Maggie Johnson",
      description: "Oasis Organic Inc.",
    },
    {
      img: "https://randomuser.me/api/portraits/women/8.jpg",
      name: "Gael Harry",
      description: "New York Finest Fruits",
    },
    {
      img: "https://randomuser.me/api/portraits/women/18.jpg",
      name: "Jenna Sullivan",
      description: "Walmart",
    },
  ];
  return (
    <div className="p-4 bg-off_white flex gap-4">
      <Layout />
      <div className="w-full">
        <div className="flex gap-4 flex-wrap w-full">
          <Card
            className="w-[39%]"
            title="Revenues"
            value="15%"
            description=" Increase compared to last week"
            navLink="Revenues report"
            theme="text"
            increase={true}
          />
          <Card
            className="w-[39%]"
            title="Lost deals"
            value="4%"
            description="You closed 96 out of 100 deals"
            navLink="All deals"
            theme="text"
          />
          <Card
            className="w-[18%]"
            title="Quarter goal"
            value="84%"
            navLink="All goals"
            theme="chart"
          />
        </div>
        <div className="flex gap-4 flex-wrap mt-4 w-full">
          <Card
            className="w-[49%]"
            title="Customers"
            value="15%"
            description={customersData}
            navLink="All customers"
            theme="avatar"
            increase={true}
          />
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default App;
