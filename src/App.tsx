import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// components
import TopBar from "components/TopBar";

// pages
import NewsFeed from "pages/NewsFeed";

function App() {
  return (
    <div className='flex flex-col h-screen'>
      <TopBar />
      <Router>
        <Routes>
          <Route path='/' element={<NewsFeed />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
