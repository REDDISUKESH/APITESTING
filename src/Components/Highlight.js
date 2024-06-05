import React from 'react';

// Function to highlight specific text within a larger string
export const Highlight = (text, highlight) => {
  // If the highlight text is empty or contains only whitespace characters, return the original text
  if (!highlight.trim()) {
    return text;
  }
  
  // Create a regular expression to match the highlight text (case-insensitive and globally)
  const regex = new RegExp(`(${highlight})`, 'gi');
  
  // Split the original text into an array of parts based on the regex match
  const parts = text.split(regex);
  
  // Map over the parts array to apply highlighting to matching text
  return parts.map((part, index) => (
    // Check if the current part matches the highlight text (case-insensitive)
    part.toLowerCase() === highlight.toLowerCase() ? (
      // If it matches, wrap it in a <span> element with yellow background color
      <span key={index} style={{ backgroundColor: 'yellow' }}>{part}</span>
    ) : (
      // If it doesn't match, return the part as is
      part
    )
  ));
};
