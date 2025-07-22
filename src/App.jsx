// src/App.jsx

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Pages/Home.jsx';
import Pricing from './Pages/Pricing.jsx';
import Products from './Pages/Products.jsx';
import Resources from './Pages/Resources.jsx';
import Solutions from './Pages/Solutions.jsx';
import Header from './Pages/Header.jsx';
// App.css is not used here, and createRoot should be removed.

// The App component should just return the JSX for your application.
const App = () => {
   return (
     <BrowserRouter>
       <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Pricing" element={<Pricing />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/Solutions" element={<Solutions />} />
          <Route path="/Resources" element={<Resources />} />
        </Routes>
      </BrowserRouter>
   );
}

export default App;