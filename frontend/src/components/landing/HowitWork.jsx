import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import EmergencyShareIcon from "@mui/icons-material/EmergencyShare";
import AirportShuttleIcon from "@mui/icons-material/AirportShuttle";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import VaccinesIcon from "@mui/icons-material/Vaccines";
import Typography from "@mui/material/Typography";

const HowItWorks = () => {
  return (
    <section className=" bg-slate-100 py-20 px-4">
      <div className="max-w-7xl mx-auto mb-14">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-gray-600 text-lg">
            Simple steps to get emergency medical assistance
          </p>
        </div>

        <div className="relative flex flex-col items-center gap-8 max-w-3xl mx-auto">
          <Timeline position="alternate">
            <TimelineItem>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot>
                  <EmergencyShareIcon />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent
                sx={{ py: "12px", px: 2 }}
                className=" flex flex-col gap-2"
              >
                <Typography
                  variant="h6"
                  component="span"
                  className=" text-2xl text-red-600 "
                >
                  Request Emergency Service
                </Typography>
                <Typography className="  text-justify">
                  Open the app and request immediate assistance. Share your
                  location and describe the emergency situation or health
                  condition.
                </Typography>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot color="primary">
                  <AirportShuttleIcon />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent
                sx={{ py: "12px", px: 2 }}
                className=" flex flex-col gap-2"
              >
                <Typography
                  variant="h6"
                  component="span"
                  className=" text-2xl text-red-600"
                >
                  Ambulance Dispatch
                </Typography>
                <Typography className="text-justify">
                  The nearest available ambulance choosen by you will be
                  dispatched to your location with real-time tracking for both
                  parties.
                </Typography>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot color="primary" variant="outlined">
                  <LocalHospitalIcon />
                </TimelineDot>
                <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
              </TimelineSeparator>
              <TimelineContent
                sx={{ py: "12px", px: 2 }}
                className=" flex flex-col gap-2"
              >
                <Typography
                  variant="h6"
                  component="span"
                  className=" text-2xl text-red-600 "
                >
                  Hospital Selection
                </Typography>
                <Typography className="text-justify">
                  Based on your condition, appropriate hospitals are suggested.
                  Choose your preferred facility or let the ambulance team
                  decide.
                </Typography>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineConnector
                  sx={{ bgcolor: "secondary.main" }}
                  className=" flex flex-col gap-2"
                />
                <TimelineDot color="secondary">
                  <VaccinesIcon />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: "12px", px: 2 }}>
                <Typography
                  variant="h6"
                  component="span"
                  className=" text-2xl text-red-600"
                >
                  Hospital Preparation
                </Typography>
                <Typography className="text-justify">
                  Hospital receives real-time updates about your condition and
                  estimated arrival time to prepare for immediate treatment.
                </Typography>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
