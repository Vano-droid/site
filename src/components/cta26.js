import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './cta26.css'

const CTA26 = (props) => {
  return (
    <div className={`thq-section-padding ${props.rootClassName} `}>
      <div className="thq-section-max-width">
        <div className="cta26-accent2-bg">
          <div className="cta26-accent1-bg">
            <div className="cta26-container2">
              <div className="cta26-content">
                <span className="thq-heading-2">
                  {props.heading1 ?? (
                    <Fragment>
                      <span className="cta26-text5">
                        Ready to showcase your skills?
                      </span>
                    </Fragment>
                  )}
                </span>
                <p className="thq-body-large">
                  {props.content1 ?? (
                    <Fragment>
                      <span className="cta26-text4">
                        Browse through my portfolio to see my latest projects
                        and skills.
                      </span>
                    </Fragment>
                  )}
                </p>
              </div>
              <Link to="/contacts" className="cta26-navlink button">
                <span>
                  {props.button ?? (
                    <Fragment>
                      <span className="cta26-text6">
                        <span>Моё портфолио</span>
                        <br></br>
                      </span>
                    </Fragment>
                  )}
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

CTA26.defaultProps = {
  content1: undefined,
  rootClassName: '',
  heading1: undefined,
  button: undefined,
}

CTA26.propTypes = {
  content1: PropTypes.element,
  rootClassName: PropTypes.string,
  heading1: PropTypes.element,
  button: PropTypes.element,
}

export default CTA26
