import Dashboard from "../components/Icon/Dashboard";
import Customers from "../components/Icon/Customers";
import Reports from "../components/Icon/Reports";
import Geography from "../components/Icon/Geography";
import Conversations from "../components/Icon/Conversations";

export const NAVIGATION = [
  {
    label: "Dashboard",
    icon: <Dashboard />,
    href: "/",
  },
  {
    label: "Customers",
    icon: <Customers />,
    href: "/customers",
  },
  {
    label: "all reports",
    icon: <Reports />,
    href: "/reports",
  },
  {
    label: "Geography",
    icon: <Geography />,
    href: "/geography",
  },
  {
    label: "Conversations",
    icon: <Conversations />,
    href: "/conversations",
  },
];
