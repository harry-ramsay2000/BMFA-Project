import React from 'react';
import Layout from '@theme/Layout';

function Hello() {
  return (
    <Layout title="Hello">
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <img src='/img/flight_club.png' alt='flight club logo'/>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: '40px',
        }}>
        <p>
          Hello! Welcome to <b>Flight Club</b>.{'\n'}
        </p>
      </div>
      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <p style={{fontSize: '25px'}}>Navigate to our project documentation and project blog at the top of this page.</p>
      </div>
    </Layout>
  );
}

export default Hello;