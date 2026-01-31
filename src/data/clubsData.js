import codingImg from "../assets/clubs/coding.jpg";
import culturalImg from "../assets/clubs/cultural.jpg";
import sportsImg from "../assets/clubs/sports.jpg";
import roboticsImg from "../assets/clubs/robotics.jpg";
import photographyImg from "../assets/clubs/photography.jpg";
import environmentalImg from "../assets/clubs/environmental.jpg";
import debateImg from "../assets/clubs/debate.jpg";
import musicImg from "../assets/clubs/music.jpg";

import event1 from "../assets/events/event1.jpg";
import event2 from "../assets/events/event2.jpg";
import event3 from "../assets/events/event3.jpg";

// 8 Clubs Data
const clubs = [
  {
    id: "academic",
    name: "Academic Club",
    image: codingImg,
    shortDesc: "Build, code, and innovate with fellow programmers.",
    about:
      "Academic Club encourages students to learn programming, participate in hackathons, and build real-world projects.",
    coordinator: "Prof. Ankit Sharma",
    members: ["Amit Kumar", "Neha Singh", "Rohit Verma"],
    gallery: [event1, event2, event3],
  },
  {
    id: "cultural",
    name: "Cultural Club",
    image: culturalImg,
    shortDesc: "Celebrate art, music, dance, and traditions.",
    about:
      "Cultural Club promotes cultural activities like dance, music, drama, and festivals.",
    coordinator: "Dr. Pooja Mishra",
    members: ["Anjali", "Saurabh", "Kunal"],
    gallery: [event2, event3, event1],
  },
  {
    id: "sports",
    name: "Sports Club",
    image: sportsImg,
    shortDesc: "Stay fit, compete, and win together.",
    about:
      "Sports Club organizes tournaments and encourages physical fitness and teamwork.",
    coordinator: "Mr. Rakesh Yadav",
    members: ["Rahul", "Vikas", "Deepak"],
    gallery: [event3, event1, event2],
  },
  {
    id: "Health Club",
    name: "Health Club",
    image: roboticsImg,
    shortDesc: "Explore robotics and AI innovations.",
    about:
      "Health Club encourages students to build robots, learn AI and automation, and compete in competitions.",
    coordinator: "Prof. Neha Verma",
    members: ["Aditya", "Simran", "Karan"],
    gallery: [event1, event3, event2],
  },
  {
    id: "photography",
    name: "Photography Club",
    image: photographyImg,
    shortDesc: "Capture the world through the lens.",
    about:
      "Photography Club teaches photography, editing, and organizes campus photo walks and exhibitions.",
    coordinator: "Prof. Priya Mehta",
    members: ["Anjali", "Rishi", "Meera"],
    gallery: [event2, event1, event3],
  },
  {
    id: "environmental",
    name: "Environmental Club",
    image: environmentalImg,
    shortDesc: "Promote eco-friendly initiatives and sustainability.",
    about:
      "Environmental Club organizes tree plantations, clean-up drives, and awareness campaigns on sustainability.",
    coordinator: "Prof. Sunil Agarwal",
    members: ["Shreya", "Aman", "Rahul"],
    gallery: [event3, event2, event1],
  },
  {
    id: "debate",
    name: "Debate Club",
    image: debateImg,
    shortDesc: "Sharpen your public speaking and debating skills.",
    about:
      "Debate Club organizes debates, elocutions, and public speaking events for students.",
    coordinator: "Prof. Deepak Sharma",
    members: ["Nidhi", "Kunal", "Priya"],
    gallery: [event1, event2, event3],
  },
  {
    id: "music",
    name: "Music Club",
    image: musicImg,
    shortDesc: "Sing, play instruments, and perform on campus.",
    about:
      "Music Club encourages students to learn and perform music, organize concerts and jam sessions.",
    coordinator: "Prof. Anjali Gupta",
    members: ["Rohan", "Simran", "Aditi"],
    gallery: [event2, event3, event1],
  },
];

export default clubs;
