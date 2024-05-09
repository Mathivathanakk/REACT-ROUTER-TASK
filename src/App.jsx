import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageNotFound from "./Pages/PageNotFound";
import All from "./Pages/All";
import Career from "./Pages/Career";
import CyberSecurity from "./Pages/CyberSecurity";
import FullStack from "./Pages/FullStack";
import DataScience from "./Pages/DataScience";
import Navbar from "./Components/Navbar";
import Courses from "./Pages/Courses";

const App = () => {
  let data = [
    {
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2024/02/Project-Ideas-for-Frontend-Development.webp",
      title: "Best Full-Stack Development Project Ideas in 2024",
      author: "By Isha Sharma",
      date: "Mar 25, 2024",
      topic: "fsd",
      id:1,
    },
    {
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/07/how-long-it-would-it-take-to-learn-full-stack-development_-1536x804.webp",
      title: "How Long Would It Take to Be a Full Stack Developer?",
      author: "By Meghana D",
      date: "26 Mar, 2024",
      topic: "fsd",
      id:2,
    },
    {
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2024/02/Feature-image-Steps-to-Create-a-Simple-Hello-World-Page-Using-HTML.webp",
      title: "How does Apache work? A detailed introduction to Apache",
      author: "By Tushar Vinocha",
      date: "26 Mar, 2024",
      topic: "fsd",
      id:3,
    },
    {
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/07/how-long-it-would-it-take-to-learn-full-stack-development_-1536x804.webp",
      title: "Top 10 Full-Stack Developer Frameworks in 2024",
      author: "By Isha Sharma",
      date: "Apr 16, 2024",
      topic: "fsd",
      id:4,
    },
    {
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2024/02/Feature-image-Steps-to-Create-a-Simple-Hello-World-Page-Using-HTML.webp",
      title: "6 Essential Prerequisites For Learning ReactJS",
      author: "By Ramkumar",
      date: "25 Mar, 2024",
      topic: "fsd",
      id:5,
    },
    {
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Top-High-Paying-Non-Coding-Jobs-in-Data-Science.webp",
      title: "Top 10 High Paying Non-Coding Jobs in Data Science in 2024",
      author: "By Isha Sharma",
      date: "16 Apr, 2024",
      topic: "datascience",
      id:6,
    },
    {
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/08/feature-image-Best-Data-Science-Online-Courses-for-Beginners.webp",
      title: "Roles and Responsibilities of a Data Scientist",
      author: "By Jaishree Tomar",
      date: "Apr 16, 2024",
      topic: "datascience",
      id:7,
    },
    {
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Top-High-Paying-Non-Coding-Jobs-in-Data-Science.webp",
      title: "How Long Would It Take to Learn Data Science?",
      author: "By Meghana D",
      date: "Apr 16, 2024",
      topic: "datascience",
      id:8,
    },
    {
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/08/feature-image-Best-Data-Science-Online-Courses-for-Beginners.webp",
      title: "Everything about Data Scientist Salary in India | 2024",
      author: "By Srinithi Sankar",
      date: "Apr 02, 2024",
      topic: "datascience",
      id:9,
    },
    {
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Top-High-Paying-Non-Coding-Jobs-in-Data-Science.webp",
      title: "Data Science vs Data Analytics | Best Career Choice in 2024",
      author: "By Lahari Chandana",
      date: "Apr 16, 2024",
      topic: "datascience",
      id:10,
    },
    {
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2021/03/The-Ultimate-%E2%80%A8Cybersecurity-Roadmap-for-Beginners.webp",
      title: "Cybersecurity Vs Ethical Hacking: Top 10 Differences",
      author: "By Tushar Vinocha",
      date: "Apr 16, 2024",
      topic: "cybersecurity",
      id:11,
    },
    {
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Non-Coding-Jobs-in-Cybersecurity.webp",
      title: "Non-Coding Jobs in Cybersecurity: A Comprehensive Guide",
      author: "By Jaishree Tomar",
      date: "Mar 26, 2024",
      topic: "cybersecurity",
      id:12,
    },
    {
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2021/03/The-Ultimate-%E2%80%A8Cybersecurity-Roadmap-for-Beginners.webp",
      title: "8 Different Types of Cybersecurity and Threats Involved",
      author: "By Tushar Vinocha",
      date: "Sep 08, 2023",
      topic: "cybersecurity",
      id:13,
    },
    {
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Non-Coding-Jobs-in-Cybersecurity.webp",
      title:
        "What is Cybersecurity? Importance and its uses & the growing challenges in 2023!",
      author: "By Tushar Vinocha",
      date: "Oct 04, 2023",
      topic: "cybersecurity",
      id:14,
    },
    {
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2021/03/The-Ultimate-%E2%80%A8Cybersecurity-Roadmap-for-Beginners.webp",
      title: "The Ultimate Cybersecurity Roadmap for Beginners",
      author: "By Srinithi Sankar",
      date: "Mar 23, 2024",
      topic: "cybersecurity",
      id:15,
    },
    {
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-Is-Choosing-Automation-Testing-a-Good-Career-Opportunity.webp",
      title: "10 Best Software Engineering Careers in 2024",
      author: "By Saakshi Priyadarshini",
      date: "Mar 25, 2024",
      topic: "career",
      id:16,
    },
    {
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2024/05/Feature-Image-Career-in-Animation.webp",
      title: "Career in Animation: Jobs, Salary, Future Scope in India (2024)",
      author: "By Saanchi Bhardwaj",
      date: "03 May, 2024",
      topic: "career",
      id:17,
    },
    {
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-Is-Choosing-Automation-Testing-a-Good-Career-Opportunity.webp",
      title:
        "Is Choosing Automation Testing a Good Career Opportunity in 2024?",
      author: "By Isha Sharma",
      date: "Apr 16, 2024",
      topic: "career",
      id:18,
    },
    {
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2024/05/Feature-Image-Career-in-Animation.webp",
      title: "Is Data Science A Good Career Choice In 2024?",
      author: "By Archana",
      date: "16 Apr, 2024",
      topic: "career",
      id:19,
    },
    {
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-Is-Choosing-Automation-Testing-a-Good-Career-Opportunity.webp",
      title: "Top 30 Mini Project Ideas For College Students [UPDATED]",
      author: "By Srinithi Sankar",
      date: "Mar 25, 2024",
      topic: "career",
      id:20,
    },
  ];

  return (
    <div>
      
      <BrowserRouter>
        <div >
          <Navbar />
        </div>
        <Routes>
          <Route path="/" element={<Courses />} />
          <Route path="/all" element={<All data={data} />} />
          <Route path="/fullstack" element={<FullStack data={data} />} />
          <Route path="/datascience" element={<DataScience data={data} />} />
          <Route
            path="/cybersecurity"
            element={<CyberSecurity data={data} />}
          />
          <Route path="/career" element={<Career data={data} />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
