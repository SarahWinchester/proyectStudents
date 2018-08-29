  (function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['students'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "        <div class =\" col-10 offset-1 border\">\r\n            <div class=\"row\">\r\n                <img src=\"\" alt=\"\" src=\""
    + alias4(((helper = (helper = helpers.photo || (depth0 != null ? depth0.photo : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"photo","hash":{},"data":data}) : helper)))
    + "\" class=\"col-2 img-thumbnail \">\r\n                <div class=\"col-3\">\r\n                        <div>"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</div>\r\n                        <div>"
    + alias4(((helper = (helper = helpers.apellido || (depth0 != null ? depth0.apellido : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"apellido","hash":{},"data":data}) : helper)))
    + "</div>\r\n                </div>\r\n                <div class=\"col-5\">\r\n                    <div>Skills</div>\r\n                        <div class=\"skillbtn btn\">"
    + alias4(((helper = (helper = helpers.skill || (depth0 != null ? depth0.skill : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"skill","hash":{},"data":data}) : helper)))
    + "\r\n                            <button type=\"button\" class=\"btn skillbtn closebtn\" aria-label=\"Close\">\r\n                                <span aria-hidden=\"true\">&times;</span>\r\n                            </button>\r\n                        </div>\r\n                    <div><i class=\"fas fa-plus\"></i> Añadir otro</div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"row\">\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.data : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>";
},"useData":true});
})();
