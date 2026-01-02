import React from 'react';

export default function WordLimit({ text, limit,classes }) {
  const words = text.split(' ');
  const truncatedText = words.slice(0, limit).join(' ');

  return(
    <p className={`card-text fw-medium ${classes}`}>{truncatedText}</p>
  )
}

