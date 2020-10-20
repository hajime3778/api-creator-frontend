import { Button } from 'antd';
import { NextPage } from 'next';
import Head from 'next/head';
import { Layout } from 'src/components/layout';
import { Api } from 'src/types/api';

import { ApiRepository } from '../repository/apis';

interface Props {
  apis?: Api[];
}

const Home: NextPage<Props> = ({ apis }) => {
  return (
    <Layout apis={apis}>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Home</h1>
      <Button type="primary" onClick={() => window.alert('This is Home!')}>
        Button
      </Button>
      {apis?.map((api) => {
        return <div key={api.id}>{`${api.id} ${api.name} ${api.url} ${api.description}`}</div>;
      })}
    </Layout>
  );
};

Home.getInitialProps = async () => {
  const repository = new ApiRepository();
  const apis = await repository.getAll();
  return { apis };
};

export default Home;
