import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  IconButton,
  CircularProgress,
} from "@mui/material";
import { RemoveCircle } from "@mui/icons-material";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const ComplexForm = () => {
  const [busTittle, setBusTittle] = useState(
    "218 DTC Bus Route – Timings: Babarpur Extension – Shadipur Depot"
  );
  const [busNumber, setBusNumber] = useState("0001");
  const [busImage, setBusImage] = useState(
    "https://st5.depositphotos.com/4293711/67603/i/600/depositphotos_676034810-stock-photo-bus-driving-moving-high-motion.jpg"
  );
  const [busContent, setBusContent] = useState(
    "The 218 DTC bus route is a vital public transport link in Delhi NCR, connecting Babarpur Extension with Shadipur Depot. This comprehensive guide covers all you need to know about the 218 bus route, including its timings, key landmarks, fare details, frequency, stops, nearby attractions, safety measures, and tips for daily passengers."
  );
  const [loading, setLoading] = useState(false);
  const [section1Title, setSection1Title] = useState("Overall Timings");
  const [section2Title, setSection2Title] = useState("Total Routes and Stops");
  const [section3Title, setSection3Title] = useState("FAQs");
  const [section4Title, setSection4Title] = useState("All 218 DTC Bus Stops");
  const [landMarkTitle, setLandMarkTitle] = useState("Key Landmarks");
  const [freqOfBusTitle, setFreqOfBusTitle] = useState("Frequency of Bus");
  const [totalNumOfStopsTitle, settotalNumOfStopsBusTitle] = useState("Total Number of Stops");
  const [nearByAttractionsTitle, setNearByAttractionsTitle] = useState("Nearby Attractions");
  const [safetyMeasuresTitle, setSafetyMeasuresTitle] = useState("Safety Measures");
  const [dailyPassengersTipsTitle, setDailyPassengersTipsTitle] = useState("Daily Passengers Tips");
  const [specialNotesTitle, setSpecialNotesTitle] = useState("Special Notes");
  const [subSection2CTitle, setSubSection2CTitle] = useState("Fare");
  const [subSection2ATitle, setSubSection2ATitle] = useState(
    "Up route: Babarpur Extension to Shadipur Depot"
  );
  const [subSection2BTitle, setSubSection2BTitle] = useState(
    "Down route: Shadipur Depot to Babarpur Extension"
  );
  const [section2Des, setSection2Des] = useState(
    "The 218 bus route features a total of 33 stops from Babarpur Extension to Shadipur Depot covering a distance of 16.9 km with almost 8-12 trips each day"
  );
  const [subSection1ATitle, setSubSection1ATitle] = useState(
    "Up route timings from: Babarpur Extension to Shadipur Depot"
  );
  const [subSection1BTitle, setSubSection1BTitle] = useState(
    "Down route timings from: Shadipur Depot to Babarpur Extension"
  );

  const [section1, setSection1] = useState({
    title1: section1Title,
    description1:
      "The 218 bus route operates from early morning till late evening, ensuring convenient travel for daily commuters. The first bus from Babarpur Extension typically departs around 7:30 AM, while the last bus leaves Shadipur Depot at approximately 10:30 PM. Timings may vary slightly on weekends and public holidays.",
    subSection1A: {
      title1A: subSection1ATitle,
      busStarts1A: "Babarpur Extension",
      busEnds1A: "Shadipur Depot",
      firstBus1A: "7:30 AM",
      lastBus1A: "10:40 PM",
      totalStops1A: "33",
      totalDepartures1A: "12 every day",
    },
    subSection1B: {
      title1B: subSection1BTitle,
      busStarts1B: "Shadipur Depot",
      busEnds1B: "Babarpur Extension",
      firstBus1B: "8:55 AM",
      lastBus1B: "8:50 PM",
      totalStops1B: "33",
      totalDepartures1B: "8 daily",
    },
  });

  const [section2, setSection2] = useState({
    title2: section2Title,
    description2: section2Des,
    subSection2A: {
      title2A: subSection2ATitle,
      busListUpRoute: ["Babarpur Extension", "Mauzpur", "Zafarabad School"],
    },
    subSection2B: {
      title2B: subSection2BTitle,
      busListDownRoute: [
        "Shadipur Depot",
        "Shadipur Metro Station",
        "West Patel Nagar",
      ],
    },
    subSection2C: {
      title2C: subSection2CTitle,
      description2C:
        "The fare for the 218 bus route is affordable, making it a popular choice among Delhi’s residents. The cost ranges from ₹10 to ₹25, depending on the distance travelled. Concession fares are available for students and senior citizens.",
    },
  });

  const [section3, setSection3] = useState({
    title3: section3Title,
    faq: [
      {
        que: "How frequent is the 218 bus?",
        ans: "Buses on the 218 route run at regular intervals to accommodate the high demand. During peak hours, buses are available every 10-15 minutes, while during off-peak times, the frequency is approximately every 20-30 minutes.",
      },
    ],
  });

  const [section4, setSection4] = useState({
    title4: section4Title,
    allBusStops:
      "The 218 bus route features a total of 33 stops from Babarpur Extension to Shadipur Depot covering a distance of 16.9 km with almost 12 trips each day. These stops are strategically placed to serve key residential and commercial areas, making the route highly convenient for passengers.",
  });

  const [landMark, setLandMark] = useState({
    tittle: landMarkTitle,
    description:
      "Travelling along the 218 bus route, passengers will pass several significant landmarks, including: /n Babarpur Extension /n Mauzpur /n Rajendra Place /n Shadipur Depot /n  These stops serve as key points of interest for commuters and tourists alike, providing easy access to various parts of the city.",
  });

  const [freqOfBus, setFreqOfBus] = useState({
    tittle: freqOfBusTitle,
    description:
      "Buses on the 218 route run at regular intervals to accommodate the high demand. During peak hours, buses are available every 10-15 minutes, while during off-peak times, the frequency is approximately every 20-30 minutes.",
  });

  const [totalNumOfStops, setTotalNumOfStops] = useState({
    tittle: totalNumOfStopsTitle,
    description:
      "The 218 bus route features a total of 33 stops from Babarpur Extension to Shadipur Depot covering a distance of 16.9 km with almost 12 trips each day. These stops are strategically placed to serve key residential and commercial areas, making the route highly convenient for passengers.",
  });

  const [nearByAttractions, setNearByAttractions] = useState({
    tittle: nearByAttractionsTitle,
    description:
      "The 218 bus route is conveniently located near several attractions, including:\nRestaurants- Popular dining spots such as Connaught Place and Karol Bagh are easily accessible.\nParks- Lush green spaces like Central Ridge Reserve Forest and Talkatora Garden offer a serene retreat.\nHotels- Numerous hotels, ranging from budget to luxury, are located along or near the route, providing comfortable stay options for travellers.",
  });

  const [safetyMeasures, setSafetyMeasures] = useState({
    tittle: safetyMeasuresTitle,
    description:
      "DTC prioritizes passenger safety on the 218 bus route. Buses are well equipped and regular maintenance checks are conducted to ensure the vehicles are in top condition. Additionally, bus conductors and drivers are trained to handle emergencies and provide assistance to passengers.",
  });

  const [dailyPassengersTips, setDailyPassengersTips] = useState({
    tittle: dailyPassengersTipsTitle,
    description:
      "Plan Ahead: Check the 218 bus timetable online to plan your journey efficiently.\nTravel Light: Avoid carrying heavy luggage during peak hours to ensure a comfortable ride.\nStay Alert: Keep an eye on your belongings and be aware of your surroundings, especially in crowded areas.",
  });

  const [specialNotes, setSpecialNotes] = useState({
    tittle: specialNotesTitle,
    description:
      "The 218c bus route is an alternative route that also serves the Babarpur Extension to Shadipur Depot corridor, offering passengers more travel options. Additionally, the Shadipur bus depot is a key hub, connecting various routes, including Shadipur to Janakpuri West and Shadipur to Tilak Nagar. For those travelling from Jhandewalan to Shadipur, the 218 bus route provides a direct and convenient service.\nThis popular route is operated by the Delhi Transport Corporation and is thus powered by eco-friendly CNG gases covering a total travel time of 1 hour. The 218 bus route ensures a reliable and efficient means of transportation for daily commuters and visitors in Delhi.",
  });

  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    setSection1((prevSection) => ({
      ...prevSection,
      title1: section1Title,
      subSection1A: { ...prevSection.subSection1A, title1A: subSection1ATitle },
      subSection1B: { ...prevSection.subSection1B, title1B: subSection1BTitle },
    }));
  }, [section1Title, subSection1ATitle, subSection1BTitle]);

  useEffect(() => {
    setSection2((prevSection) => ({
      ...prevSection,
      title2: section2Title,
      description2: section2Des,
      subSection2A: { ...prevSection.subSection2A, title2A: subSection2ATitle },
      subSection2B: { ...prevSection.subSection2B, title2B: subSection2BTitle },
      subSection2C: { ...prevSection.subSection2C, title2C: subSection2CTitle },
    }));
  }, [section2Title, section2Des, subSection2ATitle, subSection2BTitle, subSection2CTitle]);

  useEffect(() => {
    setSection1((prev) => ({
      ...prev,
      title1: section1Title,
    }));
    setSection2((prev) => ({
      ...prev,
      title2: section2Title,
    }));
    setSection3((prev) => ({
      ...prev,
      title3: section3Title,
    }));
    setSection4((prev) => ({
      ...prev,
      title4: section4Title,
    }));
    setLandMark((prev) => ({
      ...prev,
      tittle: landMarkTitle,
    }));
    setFreqOfBus((prev) => ({
      ...prev,
      tittle: freqOfBusTitle,
    }));
    setTotalNumOfStops((prev) => ({
      ...prev,
      tittle: totalNumOfStopsTitle,
    }));
    setNearByAttractions((prev) => ({
      ...prev,
      tittle: nearByAttractionsTitle,
    }));
    setSafetyMeasures((prev) => ({
      ...prev,
      tittle: safetyMeasuresTitle,
    }));
    setDailyPassengersTips((prev) => ({
      ...prev,
      tittle: dailyPassengersTipsTitle,
    }));
    setSpecialNotes((prev) => ({
      ...prev,
      tittle: specialNotesTitle,
    }));
  }, [
    section1Title,
    section2Title,
    section3Title,
    section4Title,
    landMarkTitle,
    freqOfBusTitle,
    totalNumOfStopsTitle,
    nearByAttractionsTitle,
    safetyMeasuresTitle,
    dailyPassengersTipsTitle,
    specialNotesTitle,
  ]);

  const handleFaqChange = (index, updatedFaq) => {
    setSection3((prev) => ({
      ...prev,
      faq: prev.faq.map((item, i) => (i === index ? updatedFaq : item)),
    }));
  };

  const addFaq = () => {
    setSection3((prev) => ({
      ...prev,
      faq: [...prev.faq, { que: "", ans: "" }],
    }));
  };

  const removeFaq = (index) => {
    setSection3((prev) => ({
      ...prev,
      faq: prev.faq.filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = async () => {
    setLoading(true);
    const data = {
      busTittle,
      busNumber,
      busImage,
      busContent,
      section1,
      section2,
      section3,
      section4,
      landMark,
      freqOfBus,
      totalNumOfStops,
      nearByAttractions,
      safetyMeasures,
      dailyPassengersTips,
      specialNotes,
      isPublic:isChecked
    };

    try {
      const response = await fetch(
        "https://easytripss.onrender.com/admin/bus/create",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      const result = await response.json();
      if (result.status) {
        alert("Success! : Page Created👍🏻");
      } else {
        alert(result.message);
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleMultiLineInputChange = (value, section, field) => {
    setSection2((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value.split("\n"),
      },
    }));
  };

  const handleBusListChange = (index, value, section, field) => {
    setSection2((prev) => {
      const updatedList = prev[section][field].map((item, i) =>
        i === index ? value : item
      );
      return {
        ...prev,
        [section]: {
          ...prev[section],
          [field]: updatedList,
        },
      };
    });
  };

  const addRouteStop = (section, field) => {
    setSection2((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: [...prev[section][field], ""],
      },
    }));
  };

  const removeRouteStop = (index, section, field) => {
    setSection2((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: prev[section][field].filter((_, i) => i !== index),
      },
    }));
  };

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Create Bus Route
      </Typography>
      <h2>1. Intro</h2>
      <div>
      <label>
        blog Status :
        <input 
          type="checkbox" 
          checked={isChecked} 
          onChange={handleCheckboxChange} 
        />
        {isChecked ? "True" : "False"}
      </label>
    </div>
      <TextField
        label="Bus Title"
        value={busTittle}
        onChange={(e) => setBusTittle(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Bus Number"
        value={busNumber}
        onChange={(e) => setBusNumber(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Bus Image URL"
        value={busImage}
        onChange={(e) => setBusImage(e.target.value)}
        fullWidth
        margin="normal"
      />
      {busImage && (
        <Box sx={{ mt: 2 }}>
          <img
            src={busImage}
            alt="Bus Preview"
            style={{
              width: "100%",
              maxHeight: "300px",
              objectFit: "contain",
            }}
          />
          <Typography variant="caption" color="textSecondary">
            Image Preview
          </Typography>
        </Box>
      )}
      <ReactQuill
        theme="snow"
        value={busContent}
        onChange={setBusContent}
        style={{ marginBottom: "20px" }}
      />
      <Box>
        <h2>2. Overall Timings</h2>
        <TextField
          label="section1Title"
          value={section1Title}
          onChange={(e) => setSection1Title(e.target.value)}
          fullWidth
          margin="normal"
        />
        <ReactQuill
          theme="snow"
          value={section1.description1}
          onChange={(value) =>
            setSection1({ ...section1, description1: value })
          }
          style={{ marginBottom: "20px" }}
        />
        <Typography variant="h6" gutterBottom>
          Up route timings from :
        </Typography>
        <TextField
          label="sub Section1A Title"
          value={subSection1ATitle}
          onChange={(e) => setSubSection1ATitle(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Bus Starts"
          value={section1?.subSection1A?.busStarts1A}
          onChange={(e) =>
            setSection1({
              ...section1,
              subSection1A: {
                ...section1.subSection1A,
                busStarts1A: e.target.value,
              },
            })
          }
          fullWidth
          margin="normal"
        />
        <TextField
          label="Bus Ends"
          value={section1?.subSection1A?.busEnds1A}
          onChange={(e) =>
            setSection1({
              ...section1,
              subSection1A: {
                ...section1.subSection1A,
                busEnds1A: e.target.value,
              },
            })
          }
          fullWidth
          margin="normal"
        />
        <TextField
          label="First Bus"
          value={section1?.subSection1A?.firstBus1A}
          onChange={(e) =>
            setSection1({
              ...section1,
              subSection1A: {
                ...section1.subSection1A,
                firstBus1A: e.target.value,
              },
            })
          }
          fullWidth
          margin="normal"
        />
        <TextField
          label="Last Bus"
          value={section1?.subSection1A?.lastBus1A}
          onChange={(e) =>
            setSection1({
              ...section1,
              subSection1A: {
                ...section1.subSection1A,
                lastBus1A: e.target.value,
              },
            })
          }
          fullWidth
          margin="normal"
        />
        <TextField
          label="Total Stops"
          value={section1?.subSection1A?.totalStops1A}
          onChange={(e) =>
            setSection1({
              ...section1,
              subSection1A: {
                ...section1.subSection1A,
                totalStops1A: e.target.value,
              },
            })
          }
          fullWidth
          margin="normal"
        />
        <TextField
          label="Total Departures"
          value={section1?.subSection1A?.totalDepartures1A}
          onChange={(e) =>
            setSection1({
              ...section1,
              subSection1A: {
                ...section1.subSection1A,
                totalDepartures1A: e.target.value,
              },
            })
          }
          fullWidth
          margin="normal"
        />

        <Typography variant="h6" gutterBottom>
          Down route timings from :
        </Typography>
        <TextField
          label="sub Section1B Title"
          value={subSection1BTitle}
          onChange={(e) => setSubSection1BTitle(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Bus Starts"
          value={section1?.subSection1B?.busStarts1B}
          onChange={(e) =>
            setSection1({
              ...section1,
              subSection1B: {
                ...section1.subSection1B,
                busStarts1B: e.target.value,
              },
            })
          }
          fullWidth
          margin="normal"
        />
        <TextField
          label="Bus Ends"
          value={section1?.subSection1B?.busEnds1B}
          onChange={(e) =>
            setSection1({
              ...section1,
              subSection1B: {
                ...section1.subSection1B,
                busEnds1B: e.target.value,
              },
            })
          }
          fullWidth
          margin="normal"
        />
        <TextField
          label="First Bus"
          value={section1?.subSection1B?.firstBus1B}
          onChange={(e) =>
            setSection1({
              ...section1,
              subSection1B: {
                ...section1.subSection1B,
                firstBus1B: e.target.value,
              },
            })
          }
          fullWidth
          margin="normal"
        />
        <TextField
          label="Last Bus"
          value={section1?.subSection1B?.lastBus1B}
          onChange={(e) =>
            setSection1({
              ...section1,
              subSection1B: {
                ...section1.subSection1B,
                lastBus1B: e.target.value,
              },
            })
          }
          fullWidth
          margin="normal"
        />
        <TextField
          label="Total Stops"
          value={section1?.subSection1B?.totalStops1B}
          onChange={(e) =>
            setSection1({
              ...section1,
              subSection1B: {
                ...section1.subSection1B,
                totalStops1B: e.target.value,
              },
            })
          }
          fullWidth
          margin="normal"
        />
        <TextField
          label="Total Departures"
          value={section1?.subSection1B.totalDepartures1B}
          onChange={(e) =>
            setSection1({
              ...section1,
              subSection1B: {
                ...section1.subSection1B,
                totalDepartures1B: e.target.value,
              },
            })
          }
          fullWidth
          margin="normal"
        />
      </Box>
      <Box>
        <h2>3. Total Routes and Stops</h2>
        <TextField
          label="section2 Title"
          value={section2Title}
          onChange={(e) => setSection2Title(e.target.value)}
          fullWidth
          margin="normal"
        />
        <ReactQuill
          theme="snow"
          value={section2Des}
          onChange={(value) => setSection2Des(value)}
          style={{ marginBottom: "20px" }}
        />
        <br />
        <Typography variant="h6" gutterBottom>
          Up route :
        </Typography>
        <TextField
          label="subSection2ATitle"
          value={subSection2ATitle}
          onChange={(e) => setSubSection2ATitle(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Bus List (Up Route)"
          multiline
          rows={4}
          value={section2.subSection2A.busListUpRoute.join("\n")}
          onChange={(e) =>
            handleMultiLineInputChange(
              e.target.value,
              "subSection2A",
              "busListUpRoute"
            )
          }
          fullWidth
          margin="normal"
        />
        {section2.subSection2A.busListUpRoute.map((bus, index) => (
          <Box
            key={index}
            sx={{ display: "flex", alignItems: "center", mb: 1 }}
          >
            <TextField
              value={bus}
              onChange={(e) =>
                handleBusListChange(
                  index,
                  e.target.value,
                  "subSection2A",
                  "busListUpRoute"
                )
              }
              fullWidth
              margin="normal"
            />
            <IconButton
              onClick={() =>
                removeRouteStop(index, "subSection2A", "busListUpRoute")
              }
            >
              <RemoveCircle />
            </IconButton>
          </Box>
        ))}
        <Button onClick={() => addRouteStop("subSection2A", "busListUpRoute")}>
          Add Stop
        </Button>
        <br />
        <Typography variant="h6" gutterBottom>
          Down route :
        </Typography>
        <TextField
          label="subSection2BTitle"
          value={subSection2BTitle}
          onChange={(e) => setSubSection2BTitle(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Bus List (Down Route)"
          multiline
          rows={4}
          value={section2.subSection2B.busListDownRoute.join("\n")}
          onChange={(e) =>
            handleMultiLineInputChange(
              e.target.value,
              "subSection2B",
              "busListDownRoute"
            )
          }
          fullWidth
          margin="normal"
        />
        {section2.subSection2B.busListDownRoute.map((bus, index) => (
          <Box
            key={index}
            sx={{ display: "flex", alignItems: "center", mb: 1 }}
          >
            <TextField
              value={bus}
              onChange={(e) =>
                handleBusListChange(
                  index,
                  e.target.value,
                  "subSection2B",
                  "busListDownRoute"
                )
              }
              fullWidth
              margin="normal"
            />
            <IconButton
              onClick={() =>
                removeRouteStop(index, "subSection2B", "busListDownRoute")
              }
            >
              <RemoveCircle />
            </IconButton>
          </Box>
        ))}
        <Button
          onClick={() => addRouteStop("subSection2B", "busListDownRoute")}
        >
          Add Stop
        </Button>
        <h2>4. Fare</h2>
        <TextField
          label="subSection2CTitle"
          value={subSection2CTitle}
          onChange={(e) => setSubSection2CTitle(e.target.value)}
          fullWidth
          margin="normal"
        />
        <ReactQuill
          theme="snow"
          value={section2.subSection2C.description2C}
          onChange={(value) =>
            setSection2({
              ...section2,
              subSection2C: { ...section2.subSection2C, description2C: value },
            })
          }
          style={{ marginBottom: "20px" }}
        />
      </Box>

      <Box>
        <h2>5. FAQs</h2>
        <TextField
          label="section3Title"
          value={section3Title}
          onChange={(e) => setSection3Title(e.target.value)}
          fullWidth
          margin="normal"
        />
        {section3.faq.map((faq, index) => (
          <Box key={index}>
            <TextField
              label={`Question ${index + 1}`}
              value={faq.que}
              onChange={(e) =>
                handleFaqChange(index, { ...faq, que: e.target.value })
              }
              fullWidth
              margin="normal"
            />
            <ReactQuill
              theme="snow"
              value={faq.ans}
              onChange={(value) =>
                handleFaqChange(index, { ...faq, ans: value })
              }
              style={{ marginBottom: "20px" }}
            />
            <IconButton onClick={() => removeFaq(index)}>
              <RemoveCircle />
            </IconButton>
          </Box>
        ))}
        <Button onClick={addFaq}>Add FAQ</Button>
      </Box>

      <Box>
        <h2>6. All 218 DTC Bus Stops</h2>
        <TextField
          label="section4Title"
          value={section4Title}
          onChange={(e) => setSection4Title(e.target.value)}
          fullWidth
          margin="normal"
        />
        <ReactQuill
          theme="snow"
          value={section4.allBusStops}
          onChange={(value) => setSection4({ ...section4, allBusStops: value })}
          style={{ marginBottom: "20px" }}
        />
      </Box>

      <Box>
        <h2>7. LandMark</h2>
        <TextField
          label="landMarkTitle"
          value={landMarkTitle}
          onChange={(e) => setLandMarkTitle(e.target.value)}
          fullWidth
          margin="normal"
        />
        <ReactQuill
          theme="snow"
          value={landMark.description}
          onChange={(value) => setLandMark({ ...landMark, description: value })}
          style={{ marginBottom: "20px" }}
        />
      </Box>

      <Box>
        <h2>8. Freq Of Bus</h2>
        <TextField
          label="freqOfBus"
          value={freqOfBusTitle}
          onChange={(e) => setFreqOfBusTitle(e.target.value)}
          fullWidth
          margin="normal"
        />
        <ReactQuill
          theme="snow"
          value={freqOfBus.description}
          onChange={(value) =>
            setFreqOfBus({ ...freqOfBus, description: value })
          }
          style={{ marginBottom: "20px" }}
        />
      </Box>

      <Box>
        <h2>9. Total Num Of Stops</h2>
        <TextField
          label="total Num Of Stops"
          value={totalNumOfStopsTitle}
          onChange={(e) => settotalNumOfStopsBusTitle(e.target.value)}
          fullWidth
          margin="normal"
        />
        <ReactQuill
          theme="snow"
          value={totalNumOfStops.description}
          onChange={(value) =>
            setTotalNumOfStops({ ...totalNumOfStops, description: value })
          }
          style={{ marginBottom: "20px" }}
        />
      </Box>

      <Box>
        <h2>10. Near By Attractionss</h2>
        <TextField
          label="Near By Attractions"
          value={nearByAttractionsTitle}
          onChange={(e) => setNearByAttractionsTitle(e.target.value)}
          fullWidth
          margin="normal"
        />
        <ReactQuill
          theme="snow"
          value={nearByAttractions.description}
          onChange={(value) =>
            setNearByAttractions({ ...nearByAttractions, description: value })
          }
          style={{ marginBottom: "20px" }}
        />
      </Box>

      <Box>
        <h2>11. Safety Measure</h2>
        <TextField
          label="Safety Measures"
          value={safetyMeasuresTitle}
          onChange={(e) => setSafetyMeasuresTitle(e.target.value)}
          fullWidth
          margin="normal"
        />
        <ReactQuill
          theme="snow"
          value={safetyMeasures.description}
          onChange={(value) =>
            setSafetyMeasures({ ...safetyMeasures, description: value })
          }
          style={{ marginBottom: "20px" }}
        />
      </Box>

      <Box>
        <h2>12. Daily Passengers Tips </h2>
        <TextField
          label="Safety Measures"
          value={dailyPassengersTipsTitle}
          onChange={(e) => setDailyPassengersTipsTitle(e.target.value)}
          fullWidth
          margin="normal"
        />
        <ReactQuill
          theme="snow"
          value={dailyPassengersTips.description}
          onChange={(value) =>
            setDailyPassengersTips({
              ...dailyPassengersTips,
              description: value,
            })
          }
          style={{ marginBottom: "20px" }}
        />
      </Box>

      <Box>
        <h2>13. Special Notes Title</h2>
        <TextField
          label="Special Notes Title"
          value={specialNotesTitle}
          onChange={(e) => setSpecialNotesTitle(e.target.value)}
          fullWidth
          margin="normal"
        />
        <ReactQuill
          theme="snow"
          value={specialNotes.description}
          onChange={(value) =>
            setSpecialNotes({ ...specialNotes, description: value })
          }
          style={{ marginBottom: "20px" }}
        />
      </Box>

      <Button
        variant="contained"
        color="primary"
        onClick={handleSubmit}
        disabled={loading}
      >
        {loading ? <CircularProgress size={24} /> : "Submit"}
      </Button>
    </Box>
  );
};

export default ComplexForm;
