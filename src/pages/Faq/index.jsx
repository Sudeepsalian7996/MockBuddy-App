import React from "react";
import { Container, Box, Typography, Button } from "@mui/material";
import FaqCard from "pages/Faq/FaqCard";

const mostCommonFaq = [
  {
    question: "How does it work?",
    answer:
      "Every day at pre-scheduled times, Exponent facilitates peer-to-peer mock interview sessions for tech roles. Interviews are live one-on-one video calls hosted on our website, with a built-in shared code editor for technical interviews. Exponent automatically matches you with peers based on your availability, practice needs, and interview objectives. We manage the interview scheduling and supply potential questions. For technical questions, we'll also share hints, test cases, and the solution. Each practice session is reciprocal: everyone takes turns as both the interviewee and interviewer. Interviewing others is beneficial to you too! Being the interviewer provides insights into best interview practices.",
  },
  {
    question: "What kind of interviews can I practice?",
    answer:
      "We support these roles and interview types: Product Management: Product sense, estimation, product design, and analytical questions. Data Structures & Algorithms: Coding questions that test fundamental CS concepts. System Design: Design scalable systems and weigh trade-offs. Behavioral: Work experience and culture-fit questions for all tech roles. Data Science: (Coming soon) Machine Learning: (Coming soon)",
  },
  {
    question: "How do I join an interview?",
    answer:
      "You can participate in an interview by joining at the last minute or scheduling it in advance. To join last minute, return to this page ten minutes before the next scheduled session. To schedule a peer-to-peer mock interview for later: Click on 'Schedule practice session' above. Select an interview type: product management, behavioral, data structures & algorithms, or system design. Choose a date, time, and difficulty level that fits your schedule and prep needs. Add the session to your calendar and receive automatic email reminders. In the ten minutes before your start time, return to this page to begin your interview.",
  },
  {
    question: "When do interviews happen?",
    answer:
      "This is our daily interview schedule. This is the time each mock interview session starts. Return to this page ten minutes before your scheduled time to join. Product Management: 8 AM and 6 PM Pacific Time. Data Structures & Algorithms: Every two hours between 8 AM and midnight, local time. System Design: 2 AM, 8 AM, 12 PM, and 6 PM Pacific Time. Behavioral: 8 AM and 6 PM Pacific Time.",
  },
  {
    question: "Will I be reminded about my interview?",
    answer:
      "Yes, we will send you an email confirmation and reminders. You can add the session to your Google Calendar from the confirmation email or from the dashboard.",
  },
  {
    question: "Is it free?",
    answer:
      "Exponent's mock interview practice tool is free to use. Free users are allotted credits to practice every month. Members enjoy unlimited access.",
  },
  {
    question: "I used Pramp before. Do I need an Exponent account?",
    answer:
      "Pramp is now Exponent. You can schedule the same types of mock interviews on Exponent as you could on Pramp, however you'll need an Exponent account. If you have a Pramp account, click here to link your Exponent account.",
  },
  {
    question: "Where can I share feedback?",
    answer:
      "We'd love to hear your suggestions on how we can improve Exponent Practice. Reach out to us with comments, concerns, or ideas at practice@tryexponent.com.",
  },
];

const peerMatching = [
  {
    question: "Can I choose my partner?",
    answer:
      "In most cases, we automatically match you with a suitable partner based on experience level and interview history. If you get along well, you can use the Intro feature on your dashboard to exchange information with a previous partner. Stay in touch and continue practicing together! If you want to practice with someone you know, you can use the Practice with a Friend feature.",
  },
  {
    question: "How does the matching process work?",
    answer:
      "Our matching algorithm considers several factors to pair you with a suitable peer for practice, including your schedule and availability, current role, experience level, and interviewing history.",
  },
  {
    question: "What if I can't attend a scheduled interview?",
    answer:
      "Life happens! If you're unable to attend your interview, please log in to your account and either cancel or reschedule it prior to the session start time. You will have your interview credit returned to your account.",
  },
];
const interviewFaq = [
  {
    question: "What does a typical interview involve?",
    answer:
      "Each interview involves you and your partner interviewing each other for approximately 30 minutes each, making the entire session about an hour long. You will be connected via a video call. For Data Structures & Algorithms interviews, you will solve your question using a collaborative code editor. For all other interview types, suggested questions will be offered before and during the session. Interviewer and interviewee roles are randomly assigned at the start of the interview, and you switch halfway through. While interviews typically last an hour, you will have access to the video call for up to two hours. The interview will automatically end after this period.",
  },
  {
    question: "What types of questions will I get?",
    answer:
      "It depends on the interview type you select. For Data Structures & Algorithms interviews, your peer will be preassigned a coding question to ask you. For all other interview types, suggested questions will be offered before and during the session. These questions come from our database, which includes real-world questions seen by candidates in recent interviews.",
  },
  {
    question: "What questions should I ask?",
    answer:
      "It depends on the interview type you select. For Data Structures & Algorithms interviews, you will be preassigned a coding question to ask your partner. We strongly suggest practicing the question before your interview. For all other interview types, suggested questions will be offered before and during the session. These questions come from our database, which includes real-world questions seen by candidates in recent interviews. You are also welcome to bring your own question or ask your partner what they would like to practice!",
  },
  {
    question: "Are interviews anonymous?",
    answer:
      "We prioritize your privacy. Only your public display name will be shared with your partner. (Your public display name can be updated on your Account page.) During and after the interview, you can choose to exchange information with your practice partner. Doing so is a great way to stay in touch and continue practicing together! We recommend leaving video on, but you also have the option to conduct the interview with audio only.",
  },
  {
    question: "How do I join an upcoming interview?",
    answer:
      "Return to this page up to ten minutes before your scheduled start time. When the waiting room is open, an option to join will appear. We'll also send you an email reminder ten minutes before your interview.",
  },
  {
    question: "Can I run code during the interview?",
    answer:
      "Data Structures & Algorithms mock interviews include a built-in collaborative code editor. We support popular programming languages like Python, JavaScript, Java, Go, C++, C, C#, Ruby, and Swift.",
  },
];

const techSupportFaq = [
  {
    question: "Why isn't my video working?",
    answer: `Our video chat uses a peer-to-peer video connection, which directly connects peers.
  
      This means most issues typically result from browser support, permissions, or an unstable internet connection.
  
      Ensure your browser has permission to access your camera and microphone. Ensure your browser has given Exponent permission to access your camera and microphone. Confirm that your browser supports WebRTC.
  
      Troubleshooting Tips:
      - Try refreshing the page, but avoid clicking "End Session."
      - Ensure your browser has permission to access your camera and microphone.
      - Ensure your browser has given the Exponent website permission to access your camera and microphone.
      - Run a test to check your browser's WebRTC support.
      - If you have multiple cameras or microphones installed, your browser or operating system may be using the wrong one. Check and adjust if needed.
      - Close all browser windows and restart your browser application.
      - If another app or browser is using the camera, quit the application or restart your computer.
      - If your connection is slow, consider using a wired connection instead of WiFi.
  
      If the above suggestions don't resolve your issue, please email us at practice@tryexponent.com`,
  },
  {
    question: "Can I turn off my video?",
    answer: `Yes, you can disable your video during calls. However, we recommend leaving it on to receive feedback on your soft skills!`,
  },
  {
    question: "Which browsers are supported?",
    answer: `We require recent versions of Chrome, Safari, Firefox, or Edge. Other browsers may work, but we don't officially support them.`,
  },
  {
    question: "Can I use a mobile device?",
    answer: `We don't support mock interviewing on mobile devices. Many features in our mock interview tool are designed for desktop use.`,
  },
];

const Faqs = () => {
  return (
    <Container sx={{ marginTop: "4rem" }}>
      <Typography
        sx={{
          textAlign: "center",
          fontSize: "2rem",
          fontWeight: 600,
          marginBottom: "1rem",
        }}
      >
        We're here to answer all your questions
      </Typography>
      <Typography
        sx={{
          textAlign: "center",
          margin: "auto",
          width: "50%",
          color: "grey",
        }}
      >
        If you're new to mockbuddy, this section will help you learn more about
        the platform and its features.
      </Typography>
      <Box sx={{ margin: "1.5rem 6rem" }}>
        <Box sx={{ margin: "1rem 0 2rem 0" }}>
          <Typography
            sx={{
              fontWeight: "bolder",
              fontSize: "1.4rem",
              marginBottom: "1rem",
            }}
          >
            Popular questions
          </Typography>
          {mostCommonFaq.map((item, index) => (
            <FaqCard item={item} index={index} />
          ))}
        </Box>
        <Box sx={{ margin: "1rem 0 2rem 0" }}>
          <Typography
            sx={{
              fontWeight: "bolder",
              fontSize: "1.4rem",
              marginBottom: "1rem",
            }}
          >
            Peer matching and partner selection
          </Typography>
          {peerMatching.map((item, index) => (
            <FaqCard item={item} index={index} />
          ))}
        </Box>{" "}
        <Box sx={{ margin: "1rem 0 2rem 0" }}>
          <Typography
            sx={{
              fontWeight: "bolder",
              fontSize: "1.4rem",
              marginBottom: "1rem",
            }}
          >
            All about your mock interviews
          </Typography>
          {interviewFaq.map((item, index) => (
            <FaqCard item={item} index={index} />
          ))}
        </Box>{" "}
        <Box sx={{ margin: "1rem 0 2rem 0" }}>
          <Typography
            sx={{
              fontWeight: "bolder",
              fontSize: "1.4rem",
              marginBottom: "1rem",
            }}
          >
            Technical support and troubleshooting
          </Typography>
          {techSupportFaq.map((item, index) => (
            <FaqCard item={item} index={index} />
          ))}
        </Box>
      </Box>

      <Box sx={{ textAlign: "center" }}>
        <Typography sx={{ color: "grey", marginBottom: "1rem" }}>
          Got any more questions?
        </Typography>
        <Button
          sx={{
            textTransform: "none",
            padding: "0.65rem 2rem",
            border: "1px solid #dbd4d4",
            fontSize: "1rem",
          }}
        >
          Get in touch
        </Button>
      </Box>
    </Container>
  );
};

export default Faqs;

//     padding: 0.65rem 2rem;
//     border: 1px solid #dbd4d4;
//     font-size: 1rem;
