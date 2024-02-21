import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import LayoutGral from "../components/templates/LayoutGral";
import { Home } from "../screens";


const ReleaseListScreen = () => <div>ReleaseListScreen</div>;
const ReleaseDetailScreen = () => <div>ReleaseDetailScreen</div>;
const RealeaseForm = () => <div>RealeaseForm</div>;

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route element={<LayoutGral />}>
          <Route path="/" element={<Home />} />
          <Route path="/releases" element={<ReleaseListScreen />} />
          <Route path="/releases/:id" element={<ReleaseDetailScreen />} />
          <Route path="/release-form" element={<RealeaseForm />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
