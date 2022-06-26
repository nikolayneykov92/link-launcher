import React from 'react';
import Link from './Link';

const mockLinks = [
  { id: 1, icon: 'https://www.google.com/favicon.ico', name: 'Google', url: 'https://www.google.com/' },
  {
    id: 2,
    icon: 'https://www.youtube.com/s/desktop/f9ccd8c6/img/favicon.ico',
    name: 'Youtube',
    url: 'https://www.youtube.com/',
  },
];

function LinkList() {
  return (
    <div className="link-item-list">
      {mockLinks.map(({ id, icon, name, url }) => (
        <Link key={id} icon={icon} name={name} url={url} />
      ))}
    </div>
  );
}

export default LinkList;
