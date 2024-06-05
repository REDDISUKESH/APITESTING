import React, { useState, useEffect } from 'react';
import { Container, Typography, Paper, Grid, CircularProgress, Pagination } from '@mui/material';
import Searchbar from './Searchbar';
import { fetchItems } from '../api';
import { Highlight } from './Highlight';
import { Link } from 'react-router-dom';
import './Home.css'; // Import CSS file for additional styling

const Home = ({ searchQuery, setSearchQuery }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const postsPerPage = 10;

  useEffect(() => {
    const getPosts = async () => {
      try {
        const data = await fetchItems();
        setPosts(data);
      } catch (err) {
        setError('Failed to fetch posts');
      } finally {
        setLoading(false);
      }
    };
    getPosts();
  }, []);

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.body.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const displayedPosts = filteredPosts.slice((page - 1) * postsPerPage, page * postsPerPage);

  return (
    <Container>
      {/* Title */}
      <Typography variant="h4" align="center" gutterBottom>
        Blog Posts
      </Typography>
      
      {/* Searchbar */}
      <Searchbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      
      {/* Loading indicator */}
      {loading ? (
        <Grid container justifyContent="center" style={{ marginTop: '20px' }}>
          <CircularProgress />
        </Grid>
      ) : error ? (
        // Error message
        <Typography variant="h6" color="error" align="center">
          {error}
        </Typography>
      ) : (
        // Display posts
        <>
          <Grid container spacing={3}>
            {displayedPosts.map(post => (
              <Grid item xs={12} sm={6} md={4} key={post.id}>
                <Paper className="post-paper"> {/* Apply hover effect */}
                  {/* Post title */}
                  <Typography variant="h6" className="post-title" style={{ color: 'red' }}> {/* Change title color */}
                    {/* Post link */}
                    <Link to={`/post/${post.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                      {Highlight(post.title, searchQuery)}
                    </Link>
                  </Typography>
                  {/* Post body */}
                  <Typography variant="body1" className="post-body" style={{ color: 'blue' }}> {/* Change body color */}
                    {Highlight(post.body, searchQuery)}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
          {/* Pagination */}
          <Pagination
            count={Math.ceil(filteredPosts.length / postsPerPage)}
            page={page}
            onChange={handlePageChange}
            style={{ marginTop: '16px', display: 'flex', justifyContent: 'center' }}
          />
        </>
      )}
    </Container>
  );
};

export default Home;
