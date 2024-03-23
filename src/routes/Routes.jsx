import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import LayoutGral from "../components/templates/LayoutGral";
import { Home, DetailProductScreen } from "../screens";

const ProductsListScreen = () => <div>ProductsListScreen</div>;


const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route element={<LayoutGral />}>
          <Route path="/" element={<Home />} />
          <Route path="/productos" element={<ProductsListScreen />} />
          <Route path="/productos/:id" element={<DetailProductScreen />} />

        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
