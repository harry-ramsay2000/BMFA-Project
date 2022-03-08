import React from 'react';
import Layout from '@theme/Layout';

function Hello() {
  return (
    <Layout title="Hello">
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: '2%'}}>
        <img alt='flight club logo' className='logo'/>
      </div>
      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <p style={{fontSize: '25px', paddingTop: '3%', justifyContent: 'center', textAlign: 'center'}}><b>Hello!</b> Navigate to our project documentation and project blog at the top of this page.</p>
      </div>
    </Layout>
  );
}

export default Hello;