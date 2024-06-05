import React from 'react';
import { List, ListItem, ListItemText,Typography } from '@mui/material';

const ItemList = ({ items, searchQuery }) => {
  if (!items || items.length === 0) {
    return <Typography variant="body1">No items found.</Typography>;
  }

  return (
    <List>
      {items.map((item) => (
        <ListItem key={item.id} alignItems="flex-start">
          <ListItemText
            primary={highlightText(item.title, searchQuery)}
            secondary={highlightText(item.body, searchQuery)}
          />
        </ListItem>
      ))}
    </List>
  );
};

// Helper function to highlight search query
const highlightText = (text, query) => {
  if (!query) return text;
  const parts = text.split(new RegExp(`(${query})`, 'gi'));
  return (
    <span>
      {parts.map((part, index) =>
        part.toLowerCase() === query.toLowerCase() ? (
          <span key={index} style={{ backgroundColor: 'yellow' }}>{part}</span>
        ) : (
          part
        )
      )}
    </span>
  );
};

export default ItemList;
