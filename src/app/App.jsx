import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import { RoomsProvider } from '../context/RoomsContext';
import RoomList from '@/pages/RoomList/RoomList';
import RoomDetails from '@/pages/RoomDetails/RoomDetails';
import ErrorState from '@/pages/ErrorState/ErrorState';

export default function App() {
  return (
    <Router>
    
      <RoomsProvider>
        <div className="flex min-h-screen w-full flex-col bg-[#F2F2F2] shadow-sm">
          <Routes>
            <Route path="/" element={<RoomList />} />
            <Route path="/rooms/:id" element={<RoomDetails />} />
            <Route path="/rooms/:id/error" element={<ErrorState />} />
          </Routes>
        </div>
      </RoomsProvider>
    </Router>
  );
}