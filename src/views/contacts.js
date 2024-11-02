import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Contact101 from '../components/contact101'
import './contacts.css'

const Contacts = (props) => {
  return (
    <div className="contacts-container">
      <Helmet>
        <title>contacts - Buzzing Feisty Goldfish</title>
        <meta
          property="og:title"
          content="contacts - Buzzing Feisty Goldfish"
        />
      </Helmet>
      <Contact101
        content1={
          <Fragment>
            <span className="contacts-text10">
              <span>
                Вы можете связаться со мной с помощью почты или телефона
              </span>
              <br></br>
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="contacts-text13">Связаться со мной</span>
          </Fragment>
        }
        location1={
          <Fragment>
            <span className="contacts-text14">Почта</span>
          </Fragment>
        }
        location2={
          <Fragment>
            <span className="contacts-text15">
              <span>Телефон</span>
              <br></br>
            </span>
          </Fragment>
        }
        location1Description={
          <Fragment>
            <span className="contacts-text18">
              <span>tastemail@email.ru</span>
              <br></br>
            </span>
          </Fragment>
        }
        location2Description={
          <Fragment>
            <span className="contacts-text21">+123-456-7890</span>
          </Fragment>
        }
      ></Contact101>
    </div>
  )
}

export default Contacts
