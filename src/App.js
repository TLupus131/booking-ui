import './App.css';
import { useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import PropertyManager from './screens/PropertyManager';
import AdminTemplate from './template/AdminTemplate';
import RegionManager from './screens/RegionManager';
import PropertyTypeManager from './screens/PropertyTypeManager';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/admin/*" element={<AdminTemplate />}>
            <Route path="property-manager" element={<PropertyManager />} />
            <Route path="region-manager" element={<RegionManager />} />
            <Route path="property-type-manager" element={<PropertyTypeManager />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
