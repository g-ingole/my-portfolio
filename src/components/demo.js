import React from 'react'
import '../index.css';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
const demo = () => {
  return (
    <div>
      <Tabs>
        <TabList style={{ width: "0px" }}>
          <Tab style={{ color: "#ff004f" }}><h3 style={{ color: "#ababab" }}>Skills</h3></Tab>
          <Tab style={{ color: "#ff004f" }}><h3 style={{ color: "#ababab" }}>Experience</h3></Tab>
          <Tab style={{ color: "#ff004f" }}><h3 style={{ color: "#ababab" }}>Education</h3></Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <h2 style={{ color: "#b54769" }}>Frontend Developer</h2>
            <p style={{ fontSize: "17px" }}>
              Skilled in implementing visual elements that users see and interact with on websites.
              Experienced in creating responsive websites for desktop, tablet, and mobile devices using
              <strong> HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong>, <strong>React.js</strong>, and frameworks like <strong>Bootstrap</strong>.
              Proficient in integrating APIs and developing reusable, modular UI components to enhance user experience.
            </p>

            <h2 style={{ color: "#b54769" }}>Backend Developer</h2>
            <p style={{ fontSize: "17px" }}>
              Expertise in server-side development using <strong>Node.js</strong>, <strong>Express.js</strong>, and
              <strong> MongoDB</strong>. Proficient in developing APIs to handle data requests, enabling seamless
              communication between the frontend and backend. Skilled in designing and managing databases for
              efficient data storage and retrieval, ensuring scalable and responsive web applications.
            </p>

            <h2 style={{ color: "#b54769" }}>Project Management</h2>
            <p style={{ fontSize: "17px" }}>
              Experienced in working within <strong>Agile Scrum</strong> teams, utilizing tools like
              <strong> Jira</strong> and <strong>Trello</strong> for task management. Proficient in version control
              using <strong>GitHub</strong>. Demonstrated leadership by managing teams, training developers, and
              ensuring timely project delivery with high-quality standards.
            </p>

            <h2 style={{ color: "#b54769" }}>Mechanical Engineering</h2>
            <p style={{ fontSize: "17px" }}>
              Strong background in mechanical design and analysis, with expertise in tools like
              <strong> AutoCAD</strong>, <strong>CREO Parametric</strong>.
              Successfully designed and developed projects such as <em>Electric Go-Kart</em>, focusing on
              optimizing chassis strength, integrating steering systems, and improving efficiency through
              stress analysis and hydraulic braking systems.
            </p>

            <h2 style={{ color: "#b54769" }}>Soft Skills</h2>
            <p style={{ fontSize: "17px" }}>
              Proficient in <strong>team collaboration</strong>, <strong>decision-making</strong>, and
              <strong> problem-solving</strong>. Demonstrates excellent <strong>time management</strong>,
              <strong>attention to detail</strong>, and the ability to innovate while ensuring project success.
              Experienced in delivering professional presentations and training sessions to enhance
              team performance.
            </p>

          </TabPanel>

          <TabPanel>
            <div>
              {/* Sales Development Manager at NEXA Automotive */}
              <h2 style={{ color: "#b54769" }}>
                Sales Development Manager & Internal Trainer at NEXA Automotive Manufacturers Pvt. Ltd. <br />Nov 2024 to Dec 2024
              </h2>
              <p style={{ fontSize: "17px" }}>
                Led a cross-functional team to achieve business goals and identify future priorities.
                Conducted comprehensive training programs for sales executives and team leaders to enhance performance through in-depth product knowledge.
                Delivered professional presentations on newly launched cars, emphasizing their features and benefits.
                Developed tailored training modules, workshops, and guides for team members.
                Monitored team performance post-training, identifying areas for improvement.
              </p>

              {/* Sales Executive at NEXA Automotive */}
              <h2 style={{ color: "#b54769" }}>
                Sales Executive at NEXA Automotive Manufacturers Pvt. Ltd. <br />July 2024 – Nov 2024
              </h2>
              <p style={{ fontSize: "17px" }}>
                Coordinated promotional activities with the Sales Manager, reporting outcomes for performance optimization.
                Successfully generated and converted leads to achieve sales targets.
              </p>
              {/* Trainee Engineer at Kizora Software Pvt. Ltd. */}
              <h2 style={{ color: "#b54769" }}>
                Trainee Engineer at Kizora Software Pvt. Ltd.<br />Sept 2023 to July 2024
              </h2>
              <p style={{ fontSize: "17px" }}>
                Proficient in JavaScript and skilled in UI design with ReactJS.
                Demonstrated expertise in project management, utilizing Jira for efficient task tracking.
                Engaged in continuous learning and professional development within software development.
                Gained hands-on experience in live projects, including designing responsive UI components.
                Managed client and super admin roles, ensuring effective communication and functionality.
              </p>

              {/* Junior React Developer at AnkHub Technology Services */}
              <h2 style={{ color: "#b54769" }}>
                Junior React Developer at AnkHub Technology Services <br />Since Aug 2022 to Sept 2023
              </h2>
              <p style={{ fontSize: "17px" }}>
                Developed and maintained frontend components with React JS, using both Class and Function Components.
                Integrated APIs to enable seamless frontend-backend communication.
                Managed application state efficiently with Hooks and implemented responsive UI components for optimal cross-device experiences.
                Collaborated in Agile Scrum teams, contributing to daily stand-ups and sprint planning with Trello for project management.
              </p>
              {/* Service Intern at Yamaha */}
              <h2 style={{ color: "#b54769" }}>
                Service Intern at Yamaha – Tajshree Motors Pvt. Ltd. <br />Jan 2022 – Feb 2022
              </h2>
              <p style={{ fontSize: "17px" }}>
                Assisted customers with vehicle servicing, ensuring trust in after-sales services.
                Guided customers on tailored maintenance schedules and service options.
                Learned workshop management and coordinated service teams for timely delivery.
              </p>
            </div>

          </TabPanel>
          <TabPanel>
            <div>
              <h2 style={{ color: "#b54769" }}>July 2022</h2>
              <p style={{ fontSize: "17px" }}>
                Bachelor of Engineering (B.E.) – Mechanical Engineering, KDK College of Engineering, RTM Nagpur University, Nagpur, India<br />
                <strong>CGPA:</strong> 9.5
              </p>

              <h2 style={{ color: "#b54769" }}>July 2019</h2>
              <p style={{ fontSize: "17px" }}>
                Diploma in Mechanical Engineering, Maharashtra State Board of Technical Education (MSBTE), Nagpur, India<br />
                <strong>CGPA:</strong> 6.0
              </p>
            </div>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  )
}

export default demo
