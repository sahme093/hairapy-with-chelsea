import { useState } from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Gallery from './components/Gallery.jsx';
import Services from './components/Services.jsx';
import Reviews from './components/Reviews.jsx';
import Booking from './components/Booking.jsx';
import Footer from './components/Footer.jsx';
import MobileBar from './components/MobileBar.jsx';
import { useBookingRequest } from './useBookingRequest.js';

export default function App() {
  const [form, setForm] = useState({
    name: '',
    service: 'Not sure yet',
    date: '',
    time: 'Morning',
    notes: '',
  });
  const request = useBookingRequest(form);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Gallery />
        <Services />
        <Reviews />
        <Booking form={form} setForm={setForm} request={request} />
      </main>
      <Footer />
      <MobileBar smsHref={request.smsHref} />
    </>
  );
}
