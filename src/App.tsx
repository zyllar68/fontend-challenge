import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// components
import TopBar from 'components/TopBar';

// pages
import NewsFeed from 'pages/NewsFeed';

function App() {
  return (
    <>
      <TopBar />
      <Router>
        <Routes>
          <Route path="/" element={<NewsFeed />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
