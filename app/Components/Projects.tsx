import React from 'react';
import Heading from './Heading';
import Card from './Card';

const data = [
 
 
  {
    id: "1",
    title: "To-Do List",
    description: "",
    image: "/todo.png",
    tags: ["HTML", "CSS", "Typescript"]
  },
  {
    id: "2",
    title: "Happy Birth DayProject",
    description: "",
    image: "/bday.png",
    tags: ["HTML", "Node", "CSS", "Typescript"]
},
{
  id: "3",
  title: "Pomodoro Timer",
  description: "",
  image: "/POMODORO.png",
  tags: ["HTML", "Node", "CSS", "Typescript"]
},
{
  id: "4",
  title: "Calculator",
  description: "",
  image: "/calculator.png",
  tags: ["HTML", "Node", "CSS", "Typescript"]
},

{
  id: "5",
  title: "Static Resume",
  description: "",
  image: "/Resume.jpeg",
  tags: ["HTML", "Node", "CSS", "Typescript"]
},

{
  id: "6",
  title: "Dynamic Resume",
  description: "",
  image: "/dyyyy.png",
  tags: ["HTML", "Node", "CSS", "Typescript"]
},


];

const Projects = () => {
    return (
      <div id="projects" className="container pt-32 font-extrabold text-indigo-950 ">
        <Heading title="My Projects" />
        {/* <div className="grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center"> */}
        <div className="grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center min-w-[18rem] min-h-[24rem]">
  
          {data.map((el) => (
            <Card 
              key={el.id}
              title={el.title}
              description={el.description}
              img={el.image}
              tags={el.tags}
              />
          ))}
        </div>
    </div>
    );
  };
  
  export default Projects;