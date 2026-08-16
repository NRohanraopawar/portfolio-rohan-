/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Intro from './components/Intro';
import Journey from './components/Journey';
import Projects from './components/Projects';
import Experience from './components/Experience';
import EducationSkills from './components/EducationSkills';
import Certifications from './components/Certifications';
import Achievements from './components/Achievements';
import BeyondCode from './components/BeyondCode';
import CreativeStatement from './components/CreativeStatement';
import Contact from './components/Contact';
import Footer from './components/Footer';
import JarvisAI from './components/JarvisAI';
import ProjectDetail from './components/ProjectDetail';

function Home() {
  return (
    <main className="bg-rohan-black min-h-screen text-rohan-white selection:bg-rohan-red selection:text-rohan-white">
      <Navbar />
      <Hero />
      <Intro />
      <Journey />
      <Projects />
      <Experience />
      <EducationSkills />
      <Certifications />
      <Achievements />
      <BeyondCode />
      <CreativeStatement />
      <Contact />
      <Footer />
      <JarvisAI />
    </main>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
      </Routes>
    </Router>
  );
}
