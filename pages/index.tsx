import { Button } from "antd";
import Head from "next/head";

export default () => (
  <div>
    <Head>
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.1.1/antd.min.css"
      />
    </Head>
    Welcome to next.js!
    <Button>Antd</Button>
  </div>
);
