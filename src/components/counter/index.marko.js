// Compiled using marko@4.16.6 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/demo-express-marko-ssr$1.0.0/src/components/counter/index.marko",
    marko_component = require("./component"),
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_escapeXml = marko_helpers.x;

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<p>" +
    marko_escapeXml(data.name) +
    "</p><div>The current count is " +
    marko_escapeXml(state.count) +
    "</div><div>The nested count is " +
    marko_escapeXml(state.nest.count) +
    "</div><button>Click me!</button>");
}

marko_template._ = marko_renderer(render, {
    ___type: marko_componentType
  }, marko_component);

marko_template.Component = marko_defineComponent(marko_component, marko_template._);

marko_template.meta = {
    id: "/demo-express-marko-ssr$1.0.0/src/components/counter/index.marko",
    component: "./"
  };
