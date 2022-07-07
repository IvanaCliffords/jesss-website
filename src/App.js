import React from 'react';
import Layout from "./layout/Layout";

import Home from './sections/home/Home';
import About from './sections/about/About';
import Reviews from './sections/reviews/Reviews';
import Contact from './sections/contact/Contact';
import Services from './sections/services/Services';
const App = () => {
  return (
    <Layout>
      <Home />
      <About />
      <Services />
      <Reviews />
      <Contact />
    </Layout>
  );
}

export default App;