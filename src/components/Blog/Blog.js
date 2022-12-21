import React from "react";
import useTitle from "./../../hooks/useTitle";

const Blog = () => {
  useTitle("Blog");

  return (
    <div
      className="dark:bg-gray-800 dark:text-gray-100"
      data-aos="fade-right"
      data-aos-duration="2000"
    >
      <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm dark:bg-gray-900 mt-10">
        <div className="mt-3">
          <a
            rel="noopener noreferrer"
            href="#"
            className="text-2xl font-bold hover:underline"
          >
            Question: Difference between SQL and NoSQL.
          </a>
          <p className="mt-2">
            SQL- Structured Query Language(SQL). SQL database are primarily
            called RDBMS or Relational Database. SQL database are table based
            databases. SQL databases have a predefined selena. Example: Oracle,
            Postgres, MySql and MsSql. <br /> NoSql- No declarative query
            language. NoSql databases are primarily called as Non-relational or
            distributed databases. NoSql databases can be document based
            key-value pairs, graph databases. NoSql databases use dynamic.
            Example : MongoDB, Redis, Neo4J etc.
          </p>
        </div>
      </div>
      <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm dark:bg-gray-900">
        <div className="mt-3">
          <a
            rel="noopener noreferrer"
            href="#"
            className="text-2xl font-bold hover:underline"
          >
            Question: What is JWT, and how does it work?
          </a>
          <p className="mt-2">
            JWT, or JSON Web Token, is an open standard used to share security
            information between two parties — a client and a server. Each JWT
            contains encoded JSON objects, including a set of claims. JWTs are
            signed using a cryptographic algorithm to ensure that the claims
            cannot be altered after the token is issued.
            <br /> <br /> JWTs differ from other web tokens in that they contain
            a set of claims. Claims are used to transmit information between two
            parties. What these claims are depends on the use case at hand. For
            example, a claim may assert who issued the token, how long it is
            valid for, or what permissions the client has been granted. <br />{" "}
            <br /> A JWT is a string made up of three parts, separated by dots
            (.), and serialized using base64. In the most common serialization
            format, compact serialization, the JWT looks something like this:
            xxxxx.yyyyy.zzzzz
          </p>
        </div>
      </div>
      <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm dark:bg-gray-900">
        <div className="mt-3">
          <a
            rel="noopener noreferrer"
            href="#"
            className="text-2xl font-bold hover:underline"
          >
            Question: Difference between Node.JS and Javascript.
          </a>
          <p className="mt-2">
            JavaScript: Javascript is a programming language that is used for
            writing scripts on the website. Javascript can only be run in the
            browsers. It is basically used on the client-side. Javascript is
            capable enough to add HTML and play with the DOM. Javascript can run
            in any browser engine as like JS core in safari and Spidermonkey in
            Firefox. <br />
            <br />
            Node.js: NodeJS is a Javascript runtime environment. We can run
            Javascript outside the browser with the help of NodeJS. It is mostly
            used on the server-side. Nodejs does not have capability to add HTML
            tags. V8 is the Javascript engine inside of node.js that parses and
            runs Javascript.
          </p>
        </div>
      </div>
      <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm dark:bg-gray-900">
        <div className="mt-3">
          <a
            rel="noopener noreferrer"
            href="#"
            className="text-2xl font-bold hover:underline"
          >
            Question: How NodeJS handle multiple client requests?
          </a>
          <p className="mt-2">
            NodeJS receives multiple client requests and places them into
            EventQueue. NodeJS is built with the concept of event-driven
            architecture. NodeJS has its own EventLoop which is an infinite loop
            that receives requests and processes them.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
