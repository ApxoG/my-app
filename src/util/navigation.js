import Dashboard from "../components/Icon/Dashboard";
import Customers from "../components/Icon/Customers";
import Reports from "../components/Icon/Reports";
import Geography from "../components/Icon/Geography";
import Conversations from "../components/Icon/Conversations";

export const NAVIGATION = [
  {
    label: "Dashboard",
    icon: <Dashboard />,
  },
  {
    label: "Customers",
    icon: <Customers />,
    subMenu: [
      {
        label: "All Customers",
        icon: "PeopleIcon",
      },
      {
        label: "Add Customer",
        icon: "AddIcon",
      },
    ],
  },
  {
    label: "all reports",
    icon: <Reports />,
  },
  {
    label: "Geography",
    icon: <Geography />,
  },
  {
    label: "Conversations",
    icon: <Conversations />,
  },
];
