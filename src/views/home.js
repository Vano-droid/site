import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Hero17 from '../components/hero17'
import Features25 from '../components/features25'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Buzzing Feisty Goldfish</title>
        <meta property="og:title" content="Buzzing Feisty Goldfish" />
      </Helmet>
      <Hero17
        action1={
          <Fragment>
            <span className="home-text10">Моё портфолио</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="home-text11">Связаться со мной</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text12">
              Позвольте рассказать о своих навыках
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text13">Моё портфолио</span>
          </Fragment>
        }
      ></Hero17>
      <Features25
        feature1Title={
          <Fragment>
            <span className="home-text14">
              <span>Языки программирования для веб-разработки</span>
              <br></br>
            </span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text17">
              Языки программирования для другой части в основном
            </span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text18">
              Знание JS,Node.js,  Edge.js, React.js,Vue.js, MYSQL,Java,Ruby
            </span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text19">
              Я знаю и умею писать на C++,C#,Python,C.
            </span>
          </Fragment>
        }
      ></Features25>
    </div>
  )
}

export default Home
