import React from 'react';

export function Video(props) {
  return (
    <li>
      <h1>{props.title}</h1>
      <h2>{props.video}</h2>
      <iframe title={props.title} key={props.i} width="560" height="315" src={`https://www.youtube.com/embed/${props.video}`} frameBorder="0" allowFullScreen>
      </iframe>
    </li>
  )
}