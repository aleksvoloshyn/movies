import { v4 as uuidv4 } from 'uuid'

import {
  Board,
  Header,
  NameTitle,
  ProfTitle,
  BoardSection,
  BoardHeader,
  BoardItems,
  BoardItem,
  BoardItemLink,
  BoardCardItems,
} from './board.styled'

import ProjectCard from './../ProjectCard/ProjectCard'
import icecream from './../../../images/icecream.jpg'
import filmoteka from './../../../images/filmoteka.jpg'
import kapusta from './../../../images/kapusta.jpg'
import moviesearch from './../../../images/moviesearch.jpg'
import phonebook from './../../../images/phonebook.jpg'
import webstudio from './../../../images/webstudio.jpg'
import imagesearch from './../../../images/imagesearch.jpg'
import dashboard from './../../../images/dashboard.jpg'
import todolist from './../../../images/todolist.jpg'

const summary = `I'm a Front-End developer looking for a position in a friendly
              environment, in which I can grow with the company as a developer.
              I've knowledge of HTML, CSS, JavaScript, and React. Also, I've
              hands-on experience in following Agile/Scrum methodology when
              working in a team. I'm a fast learner, responsible, and ready for
              challenging tasks. Result oriented.`

const teamProjects = [
  {
    id: 1,
    frontTitle: 'Filmoteka ',
    imageSrc: filmoteka,
    frontContent: 'Movies library app. Teamwork.',
    role: 'developer',
    techStack: 'HTML, SASS, CSS, JS, Handlebars, REST API, AXIOS, Parcel',
    backRepo: 'https://github.com/aleksvoloshyn/filmoteka',
    backSite: 'https://nataliiavalko.github.io/filmoteka-js/',
  },
  {
    id: 2,
    frontTitle: 'Ice Cream ',
    imageSrc: icecream,
    frontContent: 'The website with a responsive layout.',
    role: 'developer',
    techStack: 'HTML, SASS, JS, Parsel',
    backRepo: 'https://github.com/aleksvoloshyn/iceCream',
    backSite: 'https://nataliiavalko.github.io/parcel-project-template/',
  },
  // {
  //   id: 3,
  //   frontTitle: 'Kapu$ta ',
  //   imageSrc: kapusta,
  //   frontContent: 'Financial accounting app.Teamwork.',
  //   role: 'developer(reports)',
  //   techStack: 'HTML, SASS, JS, WEBPACK, REACT, RTK',
  //   backRepo: 'https://github.com/aleksvoloshyn/kapusta',
  //   backSite: 'https://adamants-kapusta.netlify.app/',
  // },
]
const myOwnProjects = [
  {
    id: 1,
    frontTitle: 'WebStudio ',
    imageSrc: webstudio,
    frontContent: 'Adaptive website markup',
    role: 'developer',
    techStack: ' HTML, SASS, CSS, JS',
    backRepo: 'https://github.com/aleksvoloshyn/goit-markup-hw-08',
    backSite: 'https://aleksvoloshyn.github.io/goit-markup-hw-08/index.html',
  },
  {
    id: 2,
    frontTitle: 'Images finder ',
    imageSrc: imagesearch,
    frontContent: 'Images search service',
    role: 'developer',
    techStack: ' REACT',
    backRepo:
      'https://github.com/aleksvoloshyn/rr_dash/tree/dev/src/pages/ImageFinder',
    backSite: 'https://alex-dashboard.netlify.app/image_finder',
  },
  {
    id: 3,
    frontTitle: 'Phone Book ',
    imageSrc: phonebook,
    frontContent: 'phonebook  service',
    role: 'developer',
    techStack: 'REACT',
    backRepo: 'https://github.com/aleksvoloshyn/goit-react-hw-06-phonebook',
    backSite: 'https://alv-phone-book.netlify.app/',
  },
  {
    id: 4,
    frontTitle: 'Dashboard',
    imageSrc: dashboard,
    frontContent: 'Dashboard app',
    role: 'developer',
    techStack: 'WEBPACK, REACT, styled-components',
    backRepo: 'https://github.com/aleksvoloshyn/rr_dash/tree/dev',
    backSite: 'https://alex-dashboard.netlify.app/',
  },

  {
    id: 5,
    frontTitle: 'Movie search',
    imageSrc: moviesearch,
    frontContent: 'Movie search service',
    role: 'developer',
    techStack: 'WEBPACK, REACT',
    backRepo:
      'https://github.com/aleksvoloshyn/rr_dash/tree/dev/src/pages/Moviesearch',
    backSite: 'https://alex-dashboard.netlify.app/moviesearch',
  },
  {
    id: 6,
    frontTitle: 'Todo-list',
    imageSrc: todolist,
    frontContent: 'Todo-list app',
    role: 'developer',
    techStack: 'WEBPACK, REACT',
    backRepo:
      'https://github.com/aleksvoloshyn/rr_dash/tree/dev/src/pages/ToDoLIst',
    backSite: 'https://alex-dashboard.netlify.app/todolist',
  },
]

const BoardComp = () => {
  return (
    <>
      <Board>
        <Header>
          <NameTitle>OLEKSII VOLOSHYN</NameTitle>
          <ProfTitle>Frontend developer</ProfTitle>
        </Header>

        <BoardSection>
          <BoardHeader>SUMMARY</BoardHeader>
          <BoardItems>
            <BoardItem>{summary}</BoardItem>
          </BoardItems>
        </BoardSection>

        <BoardSection>
          <BoardHeader>TEAM-PROJECTS EXPERIENCE</BoardHeader>
          <BoardCardItems>
            {teamProjects.map((proj) => {
              return (
                <ProjectCard
                  key={uuidv4()}
                  frontTitle={proj.frontTitle}
                  imageSrc={proj.imageSrc}
                  frontContent={proj.frontContent}
                  role={proj.role}
                  backRepo={proj.backRepo}
                  backSite={proj.backSite}
                  techStack={proj.techStack}
                ></ProjectCard>
              )
            })}
          </BoardCardItems>
        </BoardSection>

        <BoardSection>
          <BoardHeader>OTHER PROJECTS (HTML, CSS, JS, REACT)</BoardHeader>
          <BoardCardItems>
            {myOwnProjects.map((proj) => {
              return (
                <ProjectCard
                  key={uuidv4()}
                  frontTitle={proj.frontTitle}
                  imageSrc={proj.imageSrc}
                  frontContent={proj.frontContent}
                  role={proj.role}
                  backRepo={proj.backRepo}
                  backSite={proj.backSite}
                  techStack={proj.techStack}
                ></ProjectCard>
              )
            })}
          </BoardCardItems>
        </BoardSection>
        <BoardSection>
          <BoardHeader>WORK EXPERIENCE</BoardHeader>
          <BoardItems>
            <BoardItem>
              2017 - present: <b>Sole proprietor</b> Informatization consulting
              | international removals support
            </BoardItem>
            <BoardItem>
              2007 – 2017 : <b>Parus</b>, Kyiv Ukraine. Automation specialist
            </BoardItem>
          </BoardItems>
        </BoardSection>
        <BoardSection>
          <BoardHeader>EDUCATION</BoardHeader>
          <BoardItems>
            <BoardItem>
              Chernihiv National University of Technology | 2001-2006 The
              <BoardItemLink href="https://ekona.stu.cn.ua/">
                Department of Econometrics, Accounting and Auditing
              </BoardItemLink>
            </BoardItem>
          </BoardItems>
        </BoardSection>
        <BoardSection>
          <BoardHeader>ADDITIONAL EDUCATION</BoardHeader>
          <BoardItems>
            <BoardItem>
              <b>IT School GoIT (Kyiv) | 2020-2021</b>
              <br />
              Full-Stack Developer
            </BoardItem>
          </BoardItems>
        </BoardSection>
        <BoardSection> </BoardSection>
      </Board>
    </>
  )
}

export default BoardComp
