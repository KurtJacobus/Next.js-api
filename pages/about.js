import Head from "next/head";

export default function about() {
  return (
    <div className="container">
       <Head>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
        ></link>
        <title>About</title>
        <meta name="keywords" content="Kurt Jacobus"/>
      </Head>
          <h1>About</h1>
          <br/>
          <div>
        <p>
          I'm a facilitator who introduces students to the theoretical and
          practical sides of mechanical engineering and software development
          with motorized lego.
        </p>
        <p>
          I spend most of my free time with my wife, kids, taking walks, coding, and podcasts. 
        </p>
        <p>
          I completed a certified Full Stack Web Developer Bootcamp in which I
          worked extensively with JavaScript (and related frameworks and
          libraries such as React, Next.js and Express), database technologies
          (like MongoDB) and more.
        </p>
        <p>
          Check out my repo{" "}
          <a href="https://github.com/KurtJacobus?tab=repositories">here</a>.
        </p>
        </div>
     
      {/* Styling Next.js with Styled JSX */}
      <style jsx>
        {`
          
          h1 {
            text-align: center;
          }
        `}
      </style>
    </div>
  );
}
