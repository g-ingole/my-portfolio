import React from 'react'
import './services.css';
import { Card, CardHeader, CardBody, CardFooter, Heading, SimpleGrid, Text, Link } from '@chakra-ui/react';

const Services = () => {
  return (
    <div className="services-container">
      <SimpleGrid spacing={8} templateColumns='repeat(auto-fill, minmax(280px, 1fr))'>
        <Card className="service-card" bg="#1e1e1e">
          <CardHeader>
            <Heading size="lg" className="service-title">
              <i className="fa-solid fa-code fa-beat-fade" ></i>
              Web Design
            </Heading>
          </CardHeader>
          <CardBody>
            <Text className="service-description">
              Web design is the creation of websites and pages to reflect a company’s brand and information.
            </Text>
          </CardBody>
          <CardFooter>
            <Link className="service-link" href="https://www.interaction-design.org/literature/topics/web-design">
              Learn More
            </Link>
          </CardFooter>
        </Card>

        <Card className="service-card" bg="#1e1e1e">
          <CardHeader>
            <Heading size="lg" className="service-title">
              <i className="fa-solid fa-crop-simple fa-flip" ></i>
              Web Development
            </Heading>
          </CardHeader>
          <CardBody>
            <Text className="service-description">
              Web development refers to the creation, building, and maintaining of websites.
            </Text>
          </CardBody>
          <CardFooter>
            <Link className="service-link" href="https://brainstation.io/career-guides/what-is-web-development#:~:text=Web%20development%2C%20also%20known%20as,web%20programming%2C%20and%20database%20management.">
              Learn More
            </Link>
          </CardFooter>
        </Card>

        <Card className="service-card" bg="#1e1e1e">
          <CardHeader>
            <Heading size="lg" className="service-title">
              <i className="fa-brands fa-react fa-spin"></i> ReactJS
            </Heading>
          </CardHeader>
          <CardBody>
            <Text className="service-description">
              React is a declarative, efficient, and flexible JavaScript library for building user interfaces.
            </Text>
          </CardBody>
          <CardFooter>
            <Link className="service-link" href="https://www.uxpin.com/studio/blog/reactjs-websites-examples/">
              Learn More
            </Link>
          </CardFooter>
        </Card>
      </SimpleGrid>
    </div>
  );
};

export default Services;
