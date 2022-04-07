import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { TheHeader } from '../components/layout/TheHeader';
import { CoachDetail } from '../pages/coaches/CoachDetail';
import { CoachesList } from '../pages/coaches/CoachesList';
import { CoachRegistration } from '../pages/coaches/CoachRegistration';
import { NotFound } from '../pages/NotFound';
import { ContactCoach } from '../pages/requests/ContactCoach';
import { RequestsReceived } from '../pages/requests/RequestsReceived';

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<CoachesList />} />
      <Route path="/coaches" element={<CoachesList />} />
      <Route path="/coaches/:coachId" element={<CoachDetail />}>
        <Route path="contact" element={<ContactCoach />} />
      </Route>
      <Route path="/register" element={<CoachRegistration />} />
      <Route path="/requests" element={<RequestsReceived />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  )
}
