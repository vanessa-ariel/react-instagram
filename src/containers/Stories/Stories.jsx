import React, { useState } from "react";

import Story from '../../components/Story';

import './Stories.scss';

const Stories = ({ stories, getUserHandler, showStory}) => {
  return (
    <React.Fragment>
      <section className="stories">
        <div className="container">
          {showStory && (
            <Story />
            )}
        </div>
      </section>

    </React.Fragment>
  );
};

export default Stories;
