import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import CTA26 from '../components/cta26'
import Features242 from '../components/features242'
import './page.css'

const Page = (props) => {
  return (
    <div className="page-container">
      <Helmet>
        <title>Page - Buzzing Feisty Goldfish</title>
        <meta property="og:title" content="Page - Buzzing Feisty Goldfish" />
      </Helmet>
      <CTA26
        content1={
          <Fragment>
            <span className="page-text10">
              Можете связаться со мной через них
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="page-text11">Мои контакты</span>
          </Fragment>
        }
        button={
          <Fragment>
            <span className="page-text12">
              <span>К моим контактам</span>
              <br></br>
            </span>
          </Fragment>
        }
      ></CTA26>
      <Features242
        feature1Title={
          <Fragment>
            <span className="page-text15">Project 1</span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="page-text16">Project 2</span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="page-text17">Project 3</span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="page-text18">Description for Project 1</span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="page-text19">Description for Project 2</span>
          </Fragment>
        }
        feature3Description={
          <Fragment>
            <span className="page-text20">Description for Project 3</span>
          </Fragment>
        }
        rootClassName="features242root-class-name"
      ></Features242>
    </div>
  )
}

export default Page
