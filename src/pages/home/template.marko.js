// Compiled using marko@4.14.23 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/demo-marko-ssr$1.0.0/src/pages/home/template.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_loadTemplate = require("marko/src/runtime/helper-loadTemplate"),
    Layout = marko_loadTemplate(require.resolve("../../layouts/default/index.marko")),
    hasRenderBodyKey = Symbol.for("hasRenderBody"),
    app_template = marko_loadTemplate(require.resolve("../../components/app")),
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    app_tag = marko_loadTag(app_template),
    marko_dynamicTag = marko_helpers.d;

function render(input, out, __component, component, state) {
  var data = input;

  marko_dynamicTag(Layout, {
      scripts: {
          renderBody: function renderBody(out) {
            out.w("<script src=\"/static/bundle.js\"></script>");
          }
        },
      title: {
          renderBody: function renderBody(out) {
            out.w("Marko UI SSR Demo");
          }
        },
      body: {
          renderBody: function renderBody(out) {
            app_tag({}, out, __component, "5");
          }
        },
      [hasRenderBodyKey]: true
    }, out, __component, "0");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/demo-marko-ssr$1.0.0/src/pages/home/template.marko",
    tags: [
      "../../layouts/default/index.marko",
      "../../components/app"
    ]
  };
