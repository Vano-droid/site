import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './contact101.css'

const Contact101 = (props) => {
  return (
    <div className="contact101-container1 thq-section-padding">
      <div className="contact101-max-width thq-section-max-width">
        <div className="contact101-content1 thq-flex-row">
          <div className="contact101-content2">
            <h2 className="thq-heading-2">
              {props.heading1 ?? (
                <Fragment>
                  <span>Contact Me</span>
                </Fragment>
              )}
            </h2>
            <p className="thq-body-large">
              {props.content1 ?? (
                <Fragment>
                  <span>
                    Feel free to reach out to me for any inquiries or
                    collaborations.
                  </span>
                </Fragment>
              )}
            </p>
          </div>
        </div>
        <div className="contact101-content3 thq-flex-row">
          <div className="contact101-container2">
            <img
              alt={props.location1ImageAlt}
              src={props.location1ImageSrc}
              className="contact101-image1 thq-img-ratio-16-9"
            />
            <h3 className="contact101-text12 thq-heading-3">
              {props.location1 ?? (
                <Fragment>
                  <span>Email</span>
                </Fragment>
              )}
            </h3>
            <p className="thq-body-large">
              {props.location1Description ?? (
                <Fragment>
                  <span>example@example.com</span>
                </Fragment>
              )}
            </p>
            <div className="contact101-container3"></div>
          </div>
          <div className="contact101-container4">
            <img
              alt={props.location2ImageAlt}
              src={props.location2ImageSrc}
              className="contact101-image2 thq-img-ratio-16-9"
            />
            <h3 className="contact101-text14 thq-heading-3">
              {props.location2 ?? (
                <Fragment>
                  <span>Phone</span>
                </Fragment>
              )}
            </h3>
            <p className="thq-body-large">
              {props.location2Description ?? (
                <Fragment>
                  <span>+123-456-7890</span>
                </Fragment>
              )}
            </p>
            <div className="contact101-container5"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

Contact101.defaultProps = {
  content1: undefined,
  location1ImageSrc:
    'https://images.unsplash.com/photo-1687800249429-f940fed1f1f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMDU1NzMzM3w&ixlib=rb-4.0.3&q=80&w=1080',
  heading1: undefined,
  location2Description: undefined,
  location1ImageAlt: 'Email Icon',
  location2ImageSrc:
    'https://images.unsplash.com/photo-1612197527762-8cfb55b618d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMDU1NzI5OXw&ixlib=rb-4.0.3&q=80&w=1080',
  location2ImageAlt: 'Phone Icon',
  location1: undefined,
  location1Description: undefined,
  location2: undefined,
}

Contact101.propTypes = {
  content1: PropTypes.element,
  location1ImageSrc: PropTypes.string,
  heading1: PropTypes.element,
  location2Description: PropTypes.element,
  location1ImageAlt: PropTypes.string,
  location2ImageSrc: PropTypes.string,
  location2ImageAlt: PropTypes.string,
  location1: PropTypes.element,
  location1Description: PropTypes.element,
  location2: PropTypes.element,
}

export default Contact101
