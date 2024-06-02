import React, { useMemo } from 'react';
import './home.css';
import Layout from '../../components/Layout';

type HomeProps = {
  title?: string;
};

function Home({ title }: HomeProps) {
  return (
    <Layout>
      <div>hola</div>
    </Layout>
  );
}

export default Home;
