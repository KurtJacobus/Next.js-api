import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Head from "next/head";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
        ></link>
        <title>Home</title>
        <meta name="keywords" content="Kurt Jacobus"/>
      </Head>
      <div className="row">
        <div className="col">
          <h1 classname="text-center">
          <br/><br/>
            Hello, I'm <span className="pink-font">Kurt</span> and I'm a full
            stack developer.
          </h1>
          <br/><br/><br/><br/><br/>
        </div>
      </div>
    </div>
  );
}
