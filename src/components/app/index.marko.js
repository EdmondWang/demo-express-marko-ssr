// Compiled using marko@4.16.6 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/demo-express-marko-ssr$1.0.0/src/components/app/index.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_loadTemplate = require("marko/src/runtime/helper-loadTemplate"),
    Greeting = marko_loadTemplate(require.resolve("../greeting/index.marko")),
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_dynamicTag = marko_helpers.d,
    counter_template = marko_loadTemplate(require.resolve("../counter")),
    marko_loadTag = marko_helpers.t,
    counter_tag = marko_loadTag(counter_template);

function render(input, out, __component, component, state) {
  var data = input;

  marko_dynamicTag(out, Greeting, {
      "{name: 'edmond'}": true
    }, null, null, __component, "0");

  counter_tag({}, out, __component, "1");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/demo-express-marko-ssr$1.0.0/src/components/app/index.marko",
    tags: [
      "../greeting/index.marko",
      "../counter"
    ]
  };
