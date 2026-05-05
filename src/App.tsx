import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Alerts } from './pages/Alerts';
import { Agenda } from './pages/Agenda';
import { Profile } from './pages/Profile';
import { MessageDetail } from './pages/MessageDetail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="alerts" element={<Alerts />} />
          <Route path="agenda" element={<Agenda />} />
          <Route path="profile" element={<Profile />} />
          <Route path="message/:id" element={<MessageDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
