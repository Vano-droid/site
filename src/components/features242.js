import React, { useState, Fragment } from 'react'

import PropTypes from 'prop-types'

import './features242.css'

const Features242 = (props) => {
  const [activeTab, setActiveTab] = useState(0)
  return (
    <div className={`thq-section-padding ${props.rootClassName} `}>
      <div className="features242-container2 thq-section-max-width">
        <div className="features242-image-container">
          {activeTab === 0 && (
            <img
              alt={props.feature1ImgAlt}
              src={props.feature1ImgSrc}
              className="features242-image1 thq-img-ratio-16-9"
            />
          )}
          {activeTab === 1 && (
            <img
              alt={props.feature2ImgAlt}
              src={props.feature2ImgSrc}
              className="features242-image2 thq-img-ratio-16-9"
            />
          )}
          {activeTab === 2 && (
            <img
              alt={props.feature3ImgAlt}
              src={props.feature3ImgSrc}
              className="features242-image3 thq-img-ratio-16-9"
            />
          )}
        </div>
        <div className="features242-tabs-menu">
          <div
            onClick={() => setActiveTab(0)}
            className="features242-tab-horizontal1"
          >
            <div className="features242-divider-container1">
              {activeTab === 0 && (
                <div className="features242-container3"></div>
              )}
            </div>
            <div className="features242-content1">
              <h2 className="thq-heading-2">
                {props.feature1Title ?? (
                  <Fragment>
                    <span>Project 1</span>
                  </Fragment>
                )}
              </h2>
              <span className="thq-body-small">
                {props.feature1Description ?? (
                  <Fragment>
                    <span>Description for Project 1</span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <div
            onClick={() => setActiveTab(1)}
            className="features242-tab-horizontal2"
          >
            <div className="features242-divider-container2">
              {activeTab === 1 && (
                <div className="features242-container4"></div>
              )}
            </div>
            <div className="features242-content2">
              <h2 className="thq-heading-2">
                {props.feature2Title ?? (
                  <Fragment>
                    <span>Project 2</span>
                  </Fragment>
                )}
              </h2>
              <span className="thq-body-small">
                {props.feature2Description ?? (
                  <Fragment>
                    <span>Description for Project 2</span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <div
            onClick={() => setActiveTab(2)}
            className="features242-tab-horizontal3"
          >
            <div className="features242-divider-container3">
              {activeTab === 2 && (
                <div className="features242-container5"></div>
              )}
            </div>
            <div className="features242-content3">
              <h2 className="thq-heading-2">
                {props.feature3Title ?? (
                  <Fragment>
                    <span>Project 3</span>
                  </Fragment>
                )}
              </h2>
              <span className="thq-body-small">
                {props.feature3Description ?? (
                  <Fragment>
                    <span>Description for Project 3</span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Features242.defaultProps = {
  feature3ImgAlt: 'Project 3 Image',
  feature3ImgSrc:
    'https://images.unsplash.com/photo-1687800241619-d43acec6d607?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMDU1NzI3NHw&ixlib=rb-4.0.3&q=80&w=1080',
  feature1Title: undefined,
  feature1ImgAlt: 'Project 1 Image',
  feature3Title: undefined,
  feature1ImgSrc:
    'https://images.unsplash.com/photo-1549113611-34c225409865?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMDU1NzMwNnw&ixlib=rb-4.0.3&q=80&w=1080',
  feature2ImgAlt: 'Project 2 Image',
  feature3Description: undefined,
  feature2ImgSrc:
    'https://images.unsplash.com/photo-1730115506603-e4f1b32fb010?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMDU1NzMzNHw&ixlib=rb-4.0.3&q=80&w=1080',
  feature2Title: undefined,
  feature2Description: undefined,
  feature1Description: undefined,
  rootClassName: '',
}

Features242.propTypes = {
  feature3ImgAlt: PropTypes.string,
  feature3ImgSrc: PropTypes.string,
  feature1Title: PropTypes.element,
  feature1ImgAlt: PropTypes.string,
  feature3Title: PropTypes.element,
  feature1ImgSrc: PropTypes.string,
  feature2ImgAlt: PropTypes.string,
  feature3Description: PropTypes.element,
  feature2ImgSrc: PropTypes.string,
  feature2Title: PropTypes.element,
  feature2Description: PropTypes.element,
  feature1Description: PropTypes.element,
  rootClassName: PropTypes.string,
}

export default Features242
