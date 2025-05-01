import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Import all page components
import ComingSoon from './components/ComingSoon';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsAndConditions from './components/TermsAndConditions';
import Cancellation from './components/Cancellation';
import ShippingDelivery from './components/ShippingDelivery';
import ContactUs from './components/ContactUs';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <Routes>
        {/* Home page route */}
        <Route path="/" element={<Home />} />
        {/* Coming Soon page route */}
        <Route path="/coming-soon" element={<ComingSoon />} />
        
        {/* Policy pages routes */}
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/cancellation" element={<Cancellation />} />
        <Route path="/shipping-delivery" element={<ShippingDelivery />} />
        <Route path="/contact-us" element={<ContactUs />} />
        
        {/* Handle 404 - redirect to home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;