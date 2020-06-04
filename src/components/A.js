import React from 'react';
import { Link } from '@reach/router';
import app from '../../package.json';

const A = props => {
  const newPorps = { ...props };
  delete newPorps.sendAction;
  delete newPorps.onClick;
  const { href, to, children, className, event, sendAction } = props;
  let internal = false;
  let link = to || href || '/';
  const domain = app.domain;

  if (link.indexOf(domain) === 0) {
    // its a internal link user react router
    link = link.substring(domain.length);
    internal = true;
  } else if (link.indexOf('/') === 0) {
    // relative link , use react router
    internal = true;
  }

  const trackingEvent = e => {
    if (event) sendAction(event);
    if (props.onClick) props.onClick(e);
  };

  if (internal)
    return (
      <Link
        onClick={trackingEvent}
        className={className}
        style={props.style}
        to={link}
      >
        {children}
      </Link>
    );
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      onClick={trackingEvent}
      {...newPorps}
      href={link}
    >
      {children}
    </a>
  );
  // todo: add alt text titiles and seo to links
};

export default A;
