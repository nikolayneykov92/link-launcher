import React from 'react';

function Link({ icon, name, url }) {
  const openUrl = () => {
    window.open(url);
  };

  return (
    <div className="link-item" onClick={openUrl}>
      <img className="icon" src={icon} alt="icon" />
      <h4 className="link-name">{name}</h4>
      <p className="url">{url}</p>
    </div>
  );
}

export default Link;
