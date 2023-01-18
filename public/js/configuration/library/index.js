(window.webpackJsonp=window.webpackJsonp||[]).push([[116],{"lpX+":function(e,r,a){"use strict";a.r(r);var t={components:{},data:function(){return{configForm:new Form({library_max_book_issue_to_student:"",library_max_book_issue_to_employee:"",library_return_due_day_for_student:"",library_return_due_day_for_employee:"",library_late_fee_frequency_student:"",library_late_fee_applicable_student:0,library_late_fee_charge_student:"",library_late_fee_frequency_employee:"",library_late_fee_applicable_employee:0,library_late_fee_charge_employee:"",config_type:""},!1),default_currency:helper.getConfig("default_currency"),late_fee_frequencies:[]}},mounted:function(){helper.hasPermission("access-configuration")||(helper.notAccessibleMsg(),this.$router.push("/dashboard")),this.getPreRequisite(),this.getConfiguration()},methods:{getPreRequisite:function(){var e=this,r=this.$loading.show();axios.get("/api/configuration/variable?type=library").then((function(a){e.late_fee_frequencies=a.late_fee_frequencies,r.hide()})).catch((function(e){r.hide(),helper.showErrorMsg(e)}))},getConfiguration:function(){var e=this,r=this.$loading.show();axios.get("/api/configuration").then((function(a){e.configForm=helper.formAssign(e.configForm,a),r.hide()})).catch((function(e){r.hide(),helper.showErrorMsg(e)}))},submit:function(){var e=this,r=this.$loading.show();this.configForm.config_type="library",this.configForm.post("/api/configuration").then((function(a){e.$store.dispatch("setConfig",{loaded:!1}),toastr.success(a.message),r.hide()})).catch((function(e){r.hide(),helper.showErrorMsg(e)}))}}},o=a("KHd+"),l=Object(o.a)(t,(function(){var e=this,r=e.$createElement,a=e._self._c||r;return a("div",[a("div",{staticClass:"page-titles"},[a("h3",{staticClass:"text-themecolor"},[e._v(e._s(e.trans("library.library_configuration")))])]),e._v(" "),a("div",{staticClass:"container-fluid"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-body p-4"},[a("form",{on:{submit:function(r){return r.preventDefault(),e.submit(r)},keydown:function(r){return e.configForm.errors.clear(r.target.name)}}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-sm-3"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:""}},[e._v(e._s(e.trans("library.library_max_book_issue_to_student")))]),e._v(" "),a("div",{staticClass:"input-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.configForm.library_max_book_issue_to_student,expression:"configForm.library_max_book_issue_to_student"}],staticClass:"form-control",attrs:{type:"number",name:"library_max_book_issue_to_student",placeholder:e.trans("library.library_max_book_issue_to_student")},domProps:{value:e.configForm.library_max_book_issue_to_student},on:{input:function(r){r.target.composing||e.$set(e.configForm,"library_max_book_issue_to_student",r.target.value)}}}),e._v(" "),a("div",{staticClass:"input-group-append"},[a("span",{staticClass:"input-group-text"},[e._v(e._s(e.trans("library.book")))])])]),e._v(" "),a("show-error",{attrs:{"form-name":e.configForm,"prop-name":"library_max_book_issue_to_student"}})],1)]),e._v(" "),a("div",{staticClass:"col-12 col-sm-3"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:""}},[e._v(e._s(e.trans("library.library_max_book_issue_to_employee")))]),e._v(" "),a("div",{staticClass:"input-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.configForm.library_max_book_issue_to_employee,expression:"configForm.library_max_book_issue_to_employee"}],staticClass:"form-control",attrs:{type:"number",name:"library_max_book_issue_to_employee",placeholder:e.trans("library.library_max_book_issue_to_employee")},domProps:{value:e.configForm.library_max_book_issue_to_employee},on:{input:function(r){r.target.composing||e.$set(e.configForm,"library_max_book_issue_to_employee",r.target.value)}}}),e._v(" "),a("div",{staticClass:"input-group-append"},[a("span",{staticClass:"input-group-text"},[e._v(e._s(e.trans("library.book")))])])]),e._v(" "),a("show-error",{attrs:{"form-name":e.configForm,"prop-name":"library_max_book_issue_to_employee"}})],1)]),e._v(" "),a("div",{staticClass:"col-12 col-sm-3"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:""}},[e._v(e._s(e.trans("library.library_return_due_day_for_student")))]),e._v(" "),a("div",{staticClass:"input-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.configForm.library_return_due_day_for_student,expression:"configForm.library_return_due_day_for_student"}],staticClass:"form-control",attrs:{type:"number",name:"library_return_due_day_for_student",placeholder:e.trans("library.library_return_due_day_for_student")},domProps:{value:e.configForm.library_return_due_day_for_student},on:{input:function(r){r.target.composing||e.$set(e.configForm,"library_return_due_day_for_student",r.target.value)}}}),e._v(" "),a("div",{staticClass:"input-group-append"},[a("span",{staticClass:"input-group-text"},[e._v(e._s(e.trans("general.days")))])])]),e._v(" "),a("show-error",{attrs:{"form-name":e.configForm,"prop-name":"library_return_due_day_for_student"}})],1)]),e._v(" "),a("div",{staticClass:"col-12 col-sm-3"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:""}},[e._v(e._s(e.trans("library.library_return_due_day_for_employee")))]),e._v(" "),a("div",{staticClass:"input-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.configForm.library_return_due_day_for_employee,expression:"configForm.library_return_due_day_for_employee"}],staticClass:"form-control",attrs:{type:"number",name:"library_return_due_day_for_employee",placeholder:e.trans("library.library_return_due_day_for_employee")},domProps:{value:e.configForm.library_return_due_day_for_employee},on:{input:function(r){r.target.composing||e.$set(e.configForm,"library_return_due_day_for_employee",r.target.value)}}}),e._v(" "),a("div",{staticClass:"input-group-append"},[a("span",{staticClass:"input-group-text"},[e._v(e._s(e.trans("general.days")))])])]),e._v(" "),a("show-error",{attrs:{"form-name":e.configForm,"prop-name":"library_return_due_day_for_employee"}})],1)])]),e._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-sm-3"},[a("div",{staticClass:"form-group"},[a("label",{staticClass:"custom-control custom-checkbox m-t-20"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.configForm.library_late_fee_applicable_student,expression:"configForm.library_late_fee_applicable_student"}],staticClass:"custom-control-input",attrs:{type:"checkbox",value:"1",name:"library_late_fee_applicable_student"},domProps:{checked:Array.isArray(e.configForm.library_late_fee_applicable_student)?e._i(e.configForm.library_late_fee_applicable_student,"1")>-1:e.configForm.library_late_fee_applicable_student},on:{change:function(r){var a=e.configForm.library_late_fee_applicable_student,t=r.target,o=!!t.checked;if(Array.isArray(a)){var l=e._i(a,"1");t.checked?l<0&&e.$set(e.configForm,"library_late_fee_applicable_student",a.concat(["1"])):l>-1&&e.$set(e.configForm,"library_late_fee_applicable_student",a.slice(0,l).concat(a.slice(l+1)))}else e.$set(e.configForm,"library_late_fee_applicable_student",o)}}}),e._v(" "),a("span",{staticClass:"custom-control-label"},[e._v(e._s(e.trans("library.library_late_fee_applicable_student")))])]),e._v(" "),a("show-error",{attrs:{"form-name":e.configForm,"prop-name":"library_late_fee_applicable_student"}})],1)]),e._v(" "),e.configForm.library_late_fee_applicable_student?[a("div",{staticClass:"col-12 col-sm-3"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:""}},[e._v(e._s(e.trans("library.library_late_fee_frequency_student")))]),e._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:e.configForm.library_late_fee_frequency_student,expression:"configForm.library_late_fee_frequency_student"}],staticClass:"custom-select col-12",attrs:{name:"library_late_fee_frequency_student"},on:{change:[function(r){var a=Array.prototype.filter.call(r.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.$set(e.configForm,"library_late_fee_frequency_student",r.target.multiple?a:a[0])},function(r){return e.configForm.errors.clear("library_late_fee_frequency_student")}]}},[a("option",{attrs:{value:"null",selected:""}},[e._v(e._s(e.trans("general.select_one")))]),e._v(" "),e._l(e.late_fee_frequencies,(function(r){return a("option",{domProps:{value:r.value}},[e._v("\n                                        "+e._s(r.text)+"\n                                      ")])}))],2),e._v(" "),a("show-error",{attrs:{"form-name":e.configForm,"prop-name":"library_late_fee_frequency_student"}})],1)]),e._v(" "),a("div",{staticClass:"col-12 col-sm-3"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:""}},[e._v(e._s(e.trans("library.library_late_fee_charge_student")))]),e._v(" "),a("currency-input",{attrs:{position:e.default_currency.position,symbol:e.default_currency.symbol,name:"library_late_fee_charge_student",placeholder:e.trans("library.library_late_fee_charge_student")},nativeOn:{input:function(r){return e.configForm.errors.clear("library_late_fee_charge_student")}},model:{value:e.configForm.library_late_fee_charge_student,callback:function(r){e.$set(e.configForm,"library_late_fee_charge_student",r)},expression:"configForm.library_late_fee_charge_student"}}),e._v(" "),a("show-error",{attrs:{"form-name":e.configForm,"prop-name":"library_late_fee_charge_student"}})],1)])]:e._e()],2),e._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-sm-3"},[a("div",{staticClass:"form-group"},[a("label",{staticClass:"custom-control custom-checkbox m-t-20"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.configForm.library_late_fee_applicable_employee,expression:"configForm.library_late_fee_applicable_employee"}],staticClass:"custom-control-input",attrs:{type:"checkbox",value:"1",name:"library_late_fee_applicable_employee"},domProps:{checked:Array.isArray(e.configForm.library_late_fee_applicable_employee)?e._i(e.configForm.library_late_fee_applicable_employee,"1")>-1:e.configForm.library_late_fee_applicable_employee},on:{change:function(r){var a=e.configForm.library_late_fee_applicable_employee,t=r.target,o=!!t.checked;if(Array.isArray(a)){var l=e._i(a,"1");t.checked?l<0&&e.$set(e.configForm,"library_late_fee_applicable_employee",a.concat(["1"])):l>-1&&e.$set(e.configForm,"library_late_fee_applicable_employee",a.slice(0,l).concat(a.slice(l+1)))}else e.$set(e.configForm,"library_late_fee_applicable_employee",o)}}}),e._v(" "),a("span",{staticClass:"custom-control-label"},[e._v(e._s(e.trans("library.library_late_fee_applicable_employee")))])]),e._v(" "),a("show-error",{attrs:{"form-name":e.configForm,"prop-name":"library_late_fee_applicable_employee"}})],1)]),e._v(" "),e.configForm.library_late_fee_applicable_employee?[a("div",{staticClass:"col-12 col-sm-3"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:""}},[e._v(e._s(e.trans("library.library_late_fee_frequency_employee")))]),e._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:e.configForm.library_late_fee_frequency_employee,expression:"configForm.library_late_fee_frequency_employee"}],staticClass:"custom-select col-12",attrs:{name:"library_late_fee_frequency_employee"},on:{change:[function(r){var a=Array.prototype.filter.call(r.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.$set(e.configForm,"library_late_fee_frequency_employee",r.target.multiple?a:a[0])},function(r){return e.configForm.errors.clear("library_late_fee_frequency_employee")}]}},[a("option",{attrs:{value:"null",selected:""}},[e._v(e._s(e.trans("general.select_one")))]),e._v(" "),e._l(e.late_fee_frequencies,(function(r){return a("option",{domProps:{value:r.value}},[e._v("\n                                        "+e._s(r.text)+"\n                                      ")])}))],2),e._v(" "),a("show-error",{attrs:{"form-name":e.configForm,"prop-name":"library_late_fee_frequency_employee"}})],1)]),e._v(" "),a("div",{staticClass:"col-12 col-sm-3"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:""}},[e._v(e._s(e.trans("library.library_late_fee_charge_employee")))]),e._v(" "),a("currency-input",{attrs:{position:e.default_currency.position,symbol:e.default_currency.symbol,name:"library_late_fee_charge_employee",placeholder:e.trans("library.library_late_fee_charge_employee")},nativeOn:{input:function(r){return e.configForm.errors.clear("library_late_fee_charge_employee")}},model:{value:e.configForm.library_late_fee_charge_employee,callback:function(r){e.$set(e.configForm,"library_late_fee_charge_employee",r)},expression:"configForm.library_late_fee_charge_employee"}}),e._v(" "),a("show-error",{attrs:{"form-name":e.configForm,"prop-name":"library_late_fee_charge_employee"}})],1)])]:e._e()],2),e._v(" "),a("div",{staticClass:"text-right"},[a("button",{staticClass:"btn btn-info waves-effect waves-light m-t-10",attrs:{type:"submit"}},[e._v(e._s(e.trans("general.save")))])])])])])])])}),[],!1,null,null,null);r.default=l.exports}}]);
//# sourceMappingURL=index.js.map?id=fa7ac36e1e0ce7e37f67