import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, CircularProgress } from '@mui/material';
import { styled } from '@mui/material/styles';
import axios from 'axios';

// Styled components for custom styling
const PostContainer = styled(Container)(({ theme }) => ({
  padding: theme.spacing(4), // Set padding for larger screens
  textAlign: 'center',
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(2), // Adjust padding for smaller screens
  },
}));

const PostTitle = styled(Typography)(({ theme }) => ({
  fontSize: '2rem', // Larger font size for title
  fontWeight: 'bold',
  marginBottom: theme.spacing(2), // Add space below title
  '&:hover': {
    color: theme.palette.primary.main, // Change color on hover
    transition: 'color 0.3s ease-in-out', // Smooth transition effect
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.5rem', // Adjust font size for smaller screens
  },
}));

const PostBody = styled(Typography)(({ theme }) => ({
  fontSize: '1.2rem', // Larger font size for body text
  lineHeight: 1.6, // Increase line height for better readability
  animation: 'fadeIn 0.5s ease-in-out', // Add fade-in animation
  '@keyframes fadeIn': {
    '0%': {
      opacity: 0,
    },
    '100%': {
      opacity: 1,
    },
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '1rem', // Adjust font size for smaller screens
  },
}));

const PostDetail = () => {
  const { id } = useParams(); // Get the post ID from the URL
  const [post, setPost] = useState(null); // State to store the post data
  const [loading, setLoading] = useState(true); // State to track loading state
  const [error, setError] = useState(null); // State to track error state

  useEffect(() => {
    const fetchPost = async () => {
      try {
        // Fetch post data from the API using the post ID
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
        setPost(response.data); // Update state with the fetched post data
      } catch (err) {
        setError('Failed to fetch post data'); // Set error message if fetching fails
      } finally {
        setLoading(false); // Update loading state when fetching completes
      }
    };
    fetchPost(); // Call the fetchPost function when the component mounts or post ID changes
  }, [id]); // Depend on post ID for re-fetching data when ID changes

  return (
    <PostContainer>
      {/* Display loading spinner while fetching data */}
      {loading ? (
        <CircularProgress />
      ) : error ? ( // Display error message if fetching fails
        <Typography variant="h6" color="error">
          {error}
        </Typography>
      ) : (
        // Display post details if data is fetched successfully
        post && (
          <>
            {/* Post title */}
            <PostTitle variant="h4">Post Title</PostTitle>
            {/* Display post title */}
            <PostBody variant="body1">{post.title}</PostBody>
            {/* Description heading */}
            <Typography variant="h6" style={{ marginTop: '20px', marginBottom: '10px' }}>Description</Typography>
            {/* Display post body */}
            <PostBody variant="body1">{post.body}</PostBody>
          </>
        )
      )}
    </PostContainer>
  );
};

export default PostDetail;
