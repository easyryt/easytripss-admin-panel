import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Card, CardContent, Typography, Button, Grid, CircularProgress } from '@mui/material';
import styles from './BusDetail.module.css';

const BusDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [busData, setBusData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`https://easytripss.onrender.com/public/bus/getSingleBus/${id}`)
      .then(response => {
        if (response.data.status) {
          setBusData(response.data.data);
        }
      })
      .catch(error => console.error('Error fetching bus data:', error))
      .finally(() => setLoading(false));
  }, [id]);

  const handleDelete = () => {
    setLoading(true);
    axios.delete(`https://easytripss.onrender.com/admin/bus/delete/${id}`)
      .then(response => {
        if (response.data.status) {
          navigate('/page-list');
        }
      })
      .catch(error => console.error('Error deleting bus data:', error))
      .finally(() => setLoading(false));
  };

  const handleEdit = () => {
    navigate(`/update-bus/${id}`);
  };

  if (loading) {
    return <CircularProgress />;
  }

  if (!busData) {
    return <Typography>No bus data available.</Typography>;
  }

  return (
    <Container className={styles.container}>
      <div className={styles.header}>
        <Typography variant="h6" className={styles.busNo}>
          Bus No: {busData.busNumber}
        </Typography>
        <Grid container justifyContent="flex-end">
          <Button variant="contained" color="primary" onClick={handleEdit} className={styles.button}>
            Edit
          </Button>
          <Button variant="contained" color="secondary" onClick={handleDelete} className={styles.button}>
            Delete
          </Button>
        </Grid>
      </div>
      <br/>
      <Card className={styles.card}>
        <CardContent>
          <Typography variant="h4" className={styles.busTitle}>
            {busData.busTittle}
          </Typography>
          <img src={busData.busImage} alt={busData.busTittle} className={styles.image} />
          <Typography variant="body1" className={styles.description} dangerouslySetInnerHTML={{ __html: busData.busContent }} />
          <Typography variant="body2" color="textSecondary">
            Created At: {new Date(busData.createdAt).toLocaleDateString()}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Updated At: {new Date(busData.updatedAt).toLocaleDateString()}
          </Typography>

          <Typography variant="h5" className={styles.sectionTitle}>{busData.section1.title1}</Typography>
          <Typography variant="body1" dangerouslySetInnerHTML={{ __html: busData.section1.description1 }} />

          <Typography variant="h6" className={styles.subSectionTitle}>{busData.section1.subSection1A.title1A}</Typography>
          <Typography variant="body2">Bus Starts: {busData.section1.subSection1A.busStarts1A}</Typography>
          <Typography variant="body2">Bus Ends: {busData.section1.subSection1A.busEnds1A}</Typography>
          <Typography variant="body2">First Bus: {busData.section1.subSection1A.firstBus1A}</Typography>
          <Typography variant="body2">Last Bus: {busData.section1.subSection1A.lastBus1A}</Typography>
          <Typography variant="body2">Total Stops: {busData.section1.subSection1A.totalStops1A}</Typography>
          <Typography variant="body2">Total Departures: {busData.section1.subSection1A.totalDepartures1A}</Typography>

          <Typography variant="h6" className={styles.subSectionTitle}>{busData.section1.subSection1B.title1B}</Typography>
          <Typography variant="body2">Bus Starts: {busData.section1.subSection1B.busStarts1B}</Typography>
          <Typography variant="body2">Bus Ends: {busData.section1.subSection1B.busEnds1B}</Typography>
          <Typography variant="body2">First Bus: {busData.section1.subSection1B.firstBus1B}</Typography>
          <Typography variant="body2">Last Bus: {busData.section1.subSection1B.lastBus1B}</Typography>
          <Typography variant="body2">Total Stops: {busData.section1.subSection1B.totalStops1B}</Typography>
          <Typography variant="body2">Total Departures: {busData.section1.subSection1B.totalDepartures1B}</Typography>


          <Typography variant="h5" className={styles.sectionTitle}>{busData.section2.title2}</Typography>
          <Typography variant="body1" dangerouslySetInnerHTML={{ __html: busData.section2.description2 }} />
        
          <Typography variant="h6" className={styles.subSectionTitle}>{busData.section2.subSection2A.title2A}</Typography>
          <Typography variant="body2">Up Route Stops:</Typography>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Stop No</th>
                <th>Bus Stand Name</th>
              </tr>
            </thead>
            <tbody>
              {busData.section2.subSection2A.busListUpRoute.map((stop, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{stop}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <Typography variant="h6" className={styles.subSectionTitle}>{busData.section2.subSection2B.title2B}</Typography>
          <Typography variant="body2">Down Route Stops:</Typography>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Stop No</th>
                <th>Bus Stand Name</th>
              </tr>
            </thead>
            <tbody>
              {busData.section2.subSection2B.busListDownRoute.map((stop, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{stop}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <Typography variant="h5" className={styles.sectionTitle}>{busData.landMark.tittle}</Typography>
          <Typography variant="body1" dangerouslySetInnerHTML={{ __html: busData.landMark.description }} />

          <Typography variant="h5" className={styles.subSectionTitle}>{busData.section2.subSection2C.title2C}</Typography>
          <Typography variant="body1" dangerouslySetInnerHTML={{ __html: busData.section2.subSection2C.description2C }} />

          <Typography variant="h5" className={styles.sectionTitle}>{busData.freqOfBus.tittle}</Typography>
          <Typography variant="body1" dangerouslySetInnerHTML={{ __html: busData.freqOfBus.description }} />

          <Typography variant="h5" className={styles.sectionTitle}>{busData.totalNumOfStops.tittle}</Typography>
          <Typography variant="body1" dangerouslySetInnerHTML={{ __html: busData.totalNumOfStops.description }} />

          <Typography variant="h5" className={styles.sectionTitle}>{busData.nearByAttractions.tittle}</Typography>
          <Typography variant="body1" dangerouslySetInnerHTML={{ __html: busData.nearByAttractions.description }} />

          <Typography variant="h5" className={styles.sectionTitle}>{busData.safetyMeasures.tittle}</Typography>
          <Typography variant="body1" dangerouslySetInnerHTML={{ __html: busData.safetyMeasures.description }} />

          <Typography variant="h5" className={styles.sectionTitle}>{busData.dailyPassengersTips.tittle}</Typography>
          <Typography variant="body1" dangerouslySetInnerHTML={{ __html: busData.dailyPassengersTips.description }} />

          <Typography variant="h5" className={styles.sectionTitle}>{busData.section3.title3}</Typography>
          {busData.section3.faq.map((faqItem, index) => (
            <div key={faqItem._id}>
              <Typography variant="h6" className={styles.faqQuestion}>{faqItem.que}</Typography>
              <Typography variant="body1" dangerouslySetInnerHTML={{ __html: faqItem.ans }} />
            </div>
          ))}

          <Typography variant="h5" className={styles.sectionTitle}>{busData.specialNotes.tittle}</Typography>
          <Typography variant="body1" dangerouslySetInnerHTML={{ __html: busData.specialNotes.description }} />

          <Typography variant="h5" className={styles.sectionTitle}>{busData.section4.title4}</Typography>
          <Typography variant="body1" dangerouslySetInnerHTML={{ __html: busData.section4.allBusStops }} />
        </CardContent>
      </Card>
    </Container>
  );
};

export default BusDetail;
