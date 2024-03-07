import React from 'react';

const Tooltip = ({ sentimentTopic }) => {
  return (
    <div className="tooltip">
      {sentimentTopic && <p>{sentimentTopic}</p>}
    </div>
  );
};

export default Tooltip;
