import React from 'react';
import MainContainer from '../components/layout/MainContainer';
import './Pages.css';

/**
 * PUBLIC_INTERFACE
 * AboutPage - Information about the Lupus Chronicles blog
 * 
 * @returns {React.ReactElement} Rendered component
 */
const AboutPage = () => {
  return (
    <MainContainer>
      <div className="page-header">
        <div className="container">
          <h1 className="page-title">About Us</h1>
          <p className="page-description">Learn about the mission behind Lupus Chronicles</p>
        </div>
      </div>

      <div className="about-content">
        <div className="container">
          <div className="about-section">
            <h2>Our Mission</h2>
            <p>
              At Lupus Chronicles, our mission is to foster a deeper understanding and appreciation of wolves 
              through science-based education, engaging storytelling, and promotion of conservation efforts. 
              We believe that by sharing knowledge about these remarkable creatures, we can inspire action 
              to ensure their survival for generations to come.
            </p>
          </div>

          <div className="about-section">
            <h2>What We Do</h2>
            <p>
              Lupus Chronicles is dedicated to exploring the fascinating world of wolves through three primary lenses:
            </p>
            <ul className="about-list">
              <li>
                <strong>Behavior</strong> - We investigate wolf social structures, communication methods, 
                hunting strategies, and other behaviors that make these animals unique.
              </li>
              <li>
                <strong>Ecology</strong> - We examine the vital ecological role wolves play in maintaining 
                healthy ecosystems and the cascading effects of their presence or absence.
              </li>
              <li>
                <strong>Conservation</strong> - We highlight the challenges wolves face worldwide and the 
                diverse conservation efforts working to protect them and their habitats.
              </li>
            </ul>
          </div>

          <div className="about-section">
            <h2>Our Team</h2>
            <p>
              Lupus Chronicles was founded by a passionate group of wildlife biologists, conservationists, 
              and science communicators united by their dedication to wolf research and protection. 
              Our contributors include field researchers, wildlife photographers, and environmental educators 
              from around the world.
            </p>
          </div>

          <div className="about-section">
            <h2>Join Us</h2>
            <p>
              We invite you to join our community of wolf enthusiasts and conservation advocates. 
              Follow our blog for the latest research findings, conservation news, and fascinating 
              insights into wolf behavior. Together, we can ensure a future where wolves continue 
              to thrive in healthy ecosystems around the world.
            </p>
          </div>
        </div>
      </div>
    </MainContainer>
  );
};

export default AboutPage;
