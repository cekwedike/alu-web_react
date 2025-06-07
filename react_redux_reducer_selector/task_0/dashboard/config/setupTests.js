import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { JSDOM } from "jsdom";

Enzyme.configure({ adapter: new Adapter() });

// Set up a global document and window using jsdom
const jsdom = new JSDOM("<!doctype html><html><body></body></html>", {
  url: "http://localhost",
});
const { window } = jsdom;

function copyProps(src, target) {
  Object.defineProperties(target, {
    ...Object.getOwnPropertyDescriptors(src),
    ...Object.getOwnPropertyDescriptors(target),
  });
}

global.window = window;
global.document = window.document;
global.navigator = {
  userAgent: "node.js",
};
copyProps(window, global);

// Mock localStorage
global.localStorage = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
};

// Mock window.alert
window.alert = jest.fn();
global.alert = jest.fn();
