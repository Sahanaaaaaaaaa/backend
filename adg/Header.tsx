import React from 'react';
import Header from '@/components/Header.tsx';

const HomePage = () => {
  return (
    <div style={{ backgroundColor: 'black', color: 'white', textAlign: 'left',font:'ClashDisplay' }}>
      <Header />
      <h1 style={{ position: 'absolute', top: '40%', left: '20%', transform: 'translate(-50%, -50%)', fontSize: '150px', fontWeight: 'bold' }}>Title</h1>    
      <h2 style={{ position: 'absolute', top: '50%', left: '19%', transform: 'translate(-50%, -50%)', fontSize: '48px', fontWeight: 'bold' }}>Sub-title</h2>  
      <h1 style={{ position: 'absolute', top: '65%', left: '25%', transform: 'translate(-50%, -50%)', fontSize: '30px', textAlign: 'left', maxWidth: '500px' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et</h1>  
      <img src="/your-image.png" alt="Your Image" width={200} height={200} style={{ marginLeft: 'auto', marginRight: '20px' }} /> 
      </div>
  );
};

export default HomePage;
