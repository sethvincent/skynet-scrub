'use strict';
import { jsdom } from 'jsdom';
import check from 'mapbox-gl-supported';

const isNode = typeof window === 'undefined';
const _ = isNode ? jsdom('<div id="site-canvas"></div>').defaultView : window;
if (isNode) {
  global.window = _;
  global.document = _.document;
  global.navigator = _.navigator;
}
export const mapboxgl = !isNode ? _.mapboxgl : () => true;
export const MapboxDraw = !isNode ? _.MapboxDraw : () => true;
export const glSupport = check();
export default _;
