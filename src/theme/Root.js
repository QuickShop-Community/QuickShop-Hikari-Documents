import React from 'react';
import Root from '@theme-original/Root';

/**
 * Keep a Root swizzle in place for compatibility with the existing project,
 * but remove the previous global starfield. The new visual identity is handled
 * entirely by the normal Docusaurus layout and CSS theme.
 */
export default function RootWrapper(props) {
  return <Root {...props} />;
}
