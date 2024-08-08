import React, { useEffect, useState } from "react";
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
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const UpdateForm = () => {
  const { id } = useParams();
  const [isChecked, setIsChecked] = useState(false);
  const [busTittle, setBusTittle] = useState("");
  const [busNumber, setBusNumber] = useState("");
  const [busImage, setBusImage] = useState("");
  const [busContent, setBusContent] = useState("");
  const [loading, setLoading] = useState(false);
  const [section1Title, setSection1Title] = useState("");
  const [section2Title, setSection2Title] = useState("");
  const [section3Title, setSection3Title] = useState("");
  const [section4Title, setSection4Title] = useState("");
  const [landMarkTitle, setlandMarkTitle] = useState("");
  const [freqOfBusTitle, setfreqOfBusTitle] = useState("");
  const [nearByAttractionsTitle, setnearByAttractionsTitle] = useState("");
  const [safetyMeasuresTitle, setsafetyMeasuresTitle] = useState("");
  const [dailyPassengersTipsTitle, setdailyPassengersTipsTitle] = useState("");
  const [specialNotesTitle, setspecialNotesTitle] = useState("");
  const [subSection2CTitle, setsubSection2CTitle] = useState("");
  const [subSection2ATitle, setsubSection2ATitle] = useState("");
  const [subSection2BTitle, setsubSection2BTitle] = useState("");
  const [section2Des, setSection2Des] = useState("");
  const [subSection1ATitle, setSubSection1ATitle] = useState("");
  const [subSection1BTitle, setSubSection1BTitle] = useState("");
  const [totalNumOfStopsTitle, settotalNumOfStopsBusTitle] = useState("");

  const [section1, setSection1] = useState({
    title1: section1Title,
    description1: "",
    subSection1A: {
      title1A: subSection1ATitle,
      busStarts1A: "",
      busEnds1A: "",
      firstBus1A: "",
      lastBus1A: "",
      totalStops1A: "",
      totalDepartures1A: "",
    },
    subSection1B: {
      title1B: subSection1BTitle,
      busStarts1B: "",
      busEnds1B: "",
      firstBus1B: "",
      lastBus1B: "",
      totalStops1B: "",
      totalDepartures1B: "",
    },
  });

  const [section2, setSection2] = useState({
    title2: section2Title,
    description2: section2Des,
    subSection2A: {
      title2A: subSection2ATitle,
      busListUpRoute: [],
    },
    subSection2B: {
      title2B: subSection2BTitle,
      busListDownRoute: [],
    },
    subSection2C: {
      title2C: subSection2CTitle,
      description2C: "",
    },
  });

  const [section3, setSection3] = useState({
    title3: section3Title,
    faq: [
      {
        que: "",
        ans: "",
      },
    ],
  });

  const [section4, setSection4] = useState({
    title4: section4Title,
    allBusStops: "",
  });

  const [landMark, setLandMark] = useState({
    tittle: landMarkTitle,
    description: "",
  });

  const [freqOfBus, setFreqOfBus] = useState({
    tittle: freqOfBusTitle,
    description: "",
  });

  const [totalNumOfStops, setTotalNumOfStops] = useState({
    tittle: totalNumOfStopsTitle,
    description: "",
  });

  const [nearByAttractions, setNearByAttractions] = useState({
    tittle: nearByAttractionsTitle,
    description: "",
  });

  const [safetyMeasures, setSafetyMeasures] = useState({
    tittle: safetyMeasuresTitle,
    description: "",
  });

  const [dailyPassengersTips, setDailyPassengersTips] = useState({
    tittle: dailyPassengersTipsTitle,
    description: "",
  });

  const [specialNotes, setSpecialNotes] = useState({
    tittle: specialNotesTitle,
    description: "",
  });

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `https://easytripss.onrender.com/public/bus/getSingleBus/${id}`
      )
      .then((response) => {
        if (response.data.status) {
          const data = response.data.data;
          setBusTittle(data.busTittle);
          setBusNumber(data.busNumber);
          setBusImage(data.busImage);
          setBusContent(data.busContent);

          const section1Data = data.section1;
          setSection1Title(section1Data.title1);
          setSubSection1ATitle(section1Data.subSection1A.title1A);
          setSubSection1BTitle(section1Data.subSection1B.title1B);
          setSection1({
            title1: section1Data.title1,
            description1: section1Data.description1,
            subSection1A: section1Data.subSection1A,
            subSection1B: section1Data.subSection1B,
          });

          const section2Data = data.section2;
          setSection2Title(section2Data.title2);
          setSection2Des(section2Data.description2);
          setsubSection2ATitle(section2Data.subSection2A.title2A);
          setsubSection2BTitle(section2Data.subSection2B.title2B);
          setsubSection2CTitle(section2Data.subSection2C.title2C);
          setSection2({
            title2: section2Data.title2,
            description2: section2Data.description2,
            subSection2A: section2Data.subSection2A,
            subSection2B: section2Data.subSection2B,
            subSection2C: section2Data.subSection2C,
          });

          const section3Data = data.section3;
          setSection3Title(section3Data.title3);
          setSection3(section3Data);

          const section4Data = data.section4;
          setSection4Title(section4Data.title4);
          setSection4(section4Data);

          const landMarkData = data.landMark;
          setlandMarkTitle(landMarkData.tittle);
          setLandMark(landMarkData);

          const freqOfBusData = data.freqOfBus;
          setfreqOfBusTitle(freqOfBusData.tittle);
          setFreqOfBus(freqOfBusData);

          const totalNumOfStopsData = data.totalNumOfStops;
          settotalNumOfStopsBusTitle(totalNumOfStopsData.tittle);
          setTotalNumOfStops(totalNumOfStopsData);

          const nearByAttractionsData = data.nearByAttractions;
          setnearByAttractionsTitle(nearByAttractionsData.tittle);
          setNearByAttractions(nearByAttractionsData);

          const safetyMeasuresData = data.safetyMeasures;
          setsafetyMeasuresTitle(safetyMeasuresData.tittle);
          setSafetyMeasures(safetyMeasuresData);

          const dailyPassengersTipsData = data.dailyPassengersTips;
          setdailyPassengersTipsTitle(dailyPassengersTipsData.tittle);
          setDailyPassengersTips(dailyPassengersTipsData);

          const specialNotesData = data.specialNotes;
          setspecialNotesTitle(specialNotesData.tittle);
          setSpecialNotes(specialNotesData);
        }
      })
      .catch((error) => console.error("Error fetching bus data:", error))
      .finally(() => setLoading(false));
  }, [id]);

  useEffect(() => {
    setSection1((prev) => ({
      ...prev,
      title1: section1Title,
      subSection1A: {
        ...prev.subSection1A,
        title1A: subSection1ATitle,
      },
      subSection1B: {
        ...prev.subSection1B,
        title1B: subSection1BTitle,
      },
    }));
    setSection2((prev) => ({
      ...prev,
      title2: section2Title,
      description2: section2Des,
      subSection2A: {
        ...prev.subSection2A,
        title2A: subSection2ATitle,
      },
      subSection2B: {
        ...prev.subSection2B,
        title2B: subSection2BTitle,
      },
      subSection2C: {
        ...prev.subSection2C,
        title2C: subSection2CTitle,
      },
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
    subSection1ATitle,
    subSection1BTitle,
    section2Title,
    section2Des,
    subSection2ATitle,
    subSection2BTitle,
    subSection2CTitle,
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

  if (loading) {
    return <div>Loading...</div>;
  }

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

    // Send the data to the API
    try {
      const response = await fetch(
        `https://easytripss.onrender.com/admin/bus/update/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      const result = await response.json();
      if (result.status) {
        alert("Success! : Page Updated👍🏻");
        setLoading(false);
      } else {
        alert(result.message);
        setLoading(false);
      }
    } catch (error) {
      console.error("Error:", error);
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
        Update Bus Route
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
          onChange={(e) => setsubSection2ATitle(e.target.value)}
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
          onChange={(e) => setsubSection2BTitle(e.target.value)}
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
          onChange={(e) => setsubSection2CTitle(e.target.value)}
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
          onChange={(e) => setlandMarkTitle(e.target.value)}
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
          onChange={(e) => setfreqOfBusTitle(e.target.value)}
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
          onChange={(e) => setnearByAttractionsTitle(e.target.value)}
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
          onChange={(e) => setsafetyMeasuresTitle(e.target.value)}
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
          onChange={(e) => setdailyPassengersTipsTitle(e.target.value)}
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
          onChange={(e) => setspecialNotesTitle(e.target.value)}
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
        {loading ? <CircularProgress size={24} /> : "Update"}
      </Button>
    </Box>
  );
};

export default UpdateForm;
