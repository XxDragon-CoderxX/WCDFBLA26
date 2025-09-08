import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Terms from './Terms';


const App = () => {

  return (
      <div>
            <BrowserRouter>

              <Routes>
                <Route index element={<Home />} />
                <Route path="/terms" element={<Terms />} />
              </Routes>
            </BrowserRouter>
      </div>
  );
};

export default App;