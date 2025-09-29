import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import './index.css';
import { Home, Projects, Experience, Contact  } from './components';
import Layout from './Layout';

const experiences = [
  {
    role: "Intern",
    company: "John Deere",
    duration: "July 2023 – Aug 2023",
    location: "Pune, Maharashtra",
    responsibilities: [
      "Built a full-stack analytics platform tracking page views, time on page, clicks, downloads, and unique visitors.",
      "Developed a data-analysis app with dynamic charts and ML models for predictive and descriptive insights.",
    ],
    tech: ["Flask", "React.js", "Next.js"],
  },
];



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='/projects' element={<Projects />} />
      <Route path='/experience' element={<Experience experiences={experiences} />} />
      <Route path='/contact' element={<Contact />} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
