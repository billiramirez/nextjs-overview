import React from 'react';

export default class extends React.Component{
  render(){
    return (
      <div>
        <h1 className="text-h1">
          Hola About
        </h1>
        <p>
          Bienvenido a About
        </p>

        <img 
          src="/static/cat.jpeg"
          alt="Cat"
        />

        <style jsx>
        {`
          .text-h1{
            color: green;
          }

          img{
            max-width: 50%;
            display: block;
            margin: 0 auto;
          }

          div :global(p) {
            color: blue;
          }

        `}
        </style>
      </div>
    );
  }
}

