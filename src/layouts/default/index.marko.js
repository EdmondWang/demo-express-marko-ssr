// Compiled using marko@4.16.6 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/demo-express-marko-ssr$1.0.0/src/layouts/default/index.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_dynamicTag = marko_helpers.d,
    marko_loadTag = marko_helpers.t,
    component_globals_tag = marko_loadTag(require("marko/src/components/taglib/component-globals-tag")),
    init_components_tag = marko_loadTag(require("marko/src/components/taglib/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/taglibs/core/await/reorderer-renderer"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<!doctype html><html lang=\"en\"><head><meta charset=\"UTF-8\"><title>");

  marko_dynamicTag(out, data.title, {}, null, null, __component, "4");

  out.w("</title>");

  marko_dynamicTag(out, data.styles, {}, null, null, __component, "5");

  out.w("</head><body>");

  component_globals_tag({}, out);

  out.w("<div class=\"container\"><h1>");

  marko_dynamicTag(out, data.title, {}, null, null, __component, "9");

  out.w("</h1><main id=\"main\">");

  marko_dynamicTag(out, data.body, {}, null, null, __component, "11");

  out.w("</main></div>");

  marko_dynamicTag(out, data.scripts, {}, null, null, __component, "12");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "13");

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/demo-express-marko-ssr$1.0.0/src/layouts/default/index.marko",
    tags: [
      "marko/src/components/taglib/component-globals-tag",
      "marko/src/components/taglib/init-components-tag",
      "marko/src/taglibs/core/await/reorderer-renderer"
    ]
  };
