import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Card, CardContent, Typography, Grid, TextField, InputAdornment, CircularProgress } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import styles from './BusList.module.css';
import { useNavigate } from 'react-router-dom';

const BusList = () => {
  const [busData, setBusData] = useState([]);
  const [filteredBusData, setFilteredBusData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios.get('https://easytripss.onrender.com/admin/bus/getAllBus')
      .then(response => {
        if (response.data.status) {
          setBusData(response.data.data);
          setFilteredBusData(response.data.data); // Initialize filtered data
        }
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching bus data:', error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (searchQuery) {
      const filtered = busData.filter(bus =>
        bus.busTittle.toLowerCase().includes(searchQuery.toLowerCase()) ||
        bus.busNumber.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredBusData(filtered);
    } else {
      setFilteredBusData(busData);
    }
  }, [searchQuery, busData]);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const navigate = useNavigate();

  const handleNavigation = (id) => {
    navigate(`/single-bus/${id}`);
  };

  return (
    <Container className={styles.container}>
      {loading && <CircularProgress className={styles.loading} />}
      <Typography variant="h4" className={styles.title}>
        All Buses List
      </Typography>
      <TextField
        className={styles.searchBar}
        variant="outlined"
        placeholder="Search by Title or Number"
        value={searchQuery}
        onChange={handleSearchChange}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
      <Grid container spacing={3} className={styles.gridContainer}>
        {filteredBusData.map((bus, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
                 <br/>
            <Card className={styles.card} onClick={() => handleNavigation(bus._id)}>
              <CardContent>
                <Typography variant="h5" className={styles.busTitle}>
                  {bus.busTittle}
                </Typography>
                <img src={bus.busImage} alt={bus.busTittle} className={styles.image} />
                <Typography variant="body2" color="textSecondary">
                  Bus No: {bus.busNumber}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Created At: {new Date(bus.createdAt).toLocaleDateString()}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Updated At: {new Date(bus.updatedAt).toLocaleDateString()}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default BusList;
