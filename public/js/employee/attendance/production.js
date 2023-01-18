(window.webpackJsonp=window.webpackJsonp||[]).push([[165],{vUxU:function(e,t,a){"use strict";a.r(t);var n={components:{},data:function(){return{attendanceForm:new Form({employee_id:"",date_of_attendance:"",attendances:[],category:"production"},!1),disabled:{dates:[]},is_payroll_generated:!1,attendance:{},employees:[],selected_employee:null,attendance_types:[]}},mounted:function(){helper.hasPermission("mark-employee-attendance")||(helper.notAccessibleMsg(),this.$router.push("/dashboard")),this.attendanceForm.date_of_attendance=helper.today(),this.getPreRequisite()},methods:{getValueName:function(e){return"value_"+e},getPreRequisite:function(){var e=this,t=this.$loading.show();axios.get("/api/employee/attendance/production/pre-requisite").then((function(a){e.employees=a.employees,e.attendance_types=a.attendance_types,t.hide()})).catch((function(e){t.hide(),helper.showErrorMsg(e)}))},onEmployeeSelect:function(e){this.attendanceForm.employee_id=e.id,this.fetch()},fetch:function(){var e=this;if(this.attendanceForm.employee_id){var t=this.$loading.show();axios.post("/api/employee/attendance/production/fetch",{employee_id:this.attendanceForm.employee_id,date:this.attendanceForm.date_of_attendance}).then((function(a){e.attendance=a.attendance,e.attendanceForm.attendances=[],e.is_payroll_generated=a.is_payroll_generated,e.attendance_types.forEach((function(t){var a=e.attendance.attendance_details.find((function(e){return e.employee_attendance_type_id==t.id}));e.attendanceForm.attendances.push({id:t.id,name:t.name,alias:t.alias,unit:t.unit,value:void 0!==a?a.value:0,remarks:void 0!==a?a.remarks:""})})),t.hide()})).catch((function(e){t.hide(),helper.showErrorMsg(e)}))}},submit:function(){var e=this.$loading.show();this.attendanceForm.post("/api/employee/attendance/production").then((function(t){e.hide(),toastr.success(t.message)})).catch((function(t){e.hide(),helper.showErrorMsg(t)}))}},watch:{"attendanceForm.date_of_attendance":function(e){this.fetch()}}},s=a("KHd+"),o=Object(s.a)(n,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"page-titles"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-sm-6"},[a("h3",{staticClass:"text-themecolor"},[e._v(e._s(e.trans("employee.mark_production_attendance")))])]),e._v(" "),a("div",{staticClass:"col-12 col-sm-6"},[a("div",{staticClass:"action-buttons pull-right"},[a("button",{staticClass:"btn btn-info btn-sm",on:{click:function(t){return e.$router.push("/employee/attendance")}}},[a("i",{staticClass:"fas fa-list"}),e._v(" "),a("span",{staticClass:"d-none d-sm-inline"},[e._v(e._s(e.trans("employee.list_attendance")))])]),e._v(" "),a("button",{staticClass:"btn btn-info btn-sm",on:{click:function(t){return e.$router.push("/employee/attendance/regular")}}},[a("i",{staticClass:"fas fa-check"}),e._v(" "),a("span",{staticClass:"d-none d-sm-inline"},[e._v(e._s(e.trans("employee.mark_regular_attendance")))])])])])])]),e._v(" "),a("div",{staticClass:"container-fluid"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-body p-4"},[a("form",{on:{submit:function(t){return t.preventDefault(),e.submit(t)},keydown:function(t){return e.attendanceForm.errors.clear(t.target.name)}}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-sm-3"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:""}},[e._v(e._s(e.trans("employee.employee")))]),e._v(" "),a("v-select",{attrs:{label:"name","track-by":"id",name:"employee_id",id:"employee_id",options:e.employees,placeholder:e.trans("employee.select_employee")},on:{select:e.onEmployeeSelect},model:{value:e.selected_employee,callback:function(t){e.selected_employee=t},expression:"selected_employee"}},[e.employees.length?e._e():a("div",{staticClass:"multiselect__option",attrs:{slot:"afterList"},slot:"afterList"},[e._v("\n                                        "+e._s(e.trans("general.no_option_found"))+"\n                                    ")])]),e._v(" "),e.is_payroll_generated?a("span",{staticClass:"help-block text-danger font-80pc"},[e._v(e._s(e.trans("employee.payroll_is_generated")))]):e._e()],1)]),e._v(" "),a("div",{staticClass:"col-12 col-sm-3"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:""}},[e._v(e._s(e.trans("employee.date_of_attendance")))]),e._v(" "),a("datepicker",{attrs:{bootstrapStyling:!0,disabledDates:e.disabled,placeholder:e.trans("employee.date_of_attendance")},model:{value:e.attendanceForm.date_of_attendance,callback:function(t){e.$set(e.attendanceForm,"date_of_attendance",t)},expression:"attendanceForm.date_of_attendance"}}),e._v(" "),a("show-error",{attrs:{"form-name":e.attendanceForm,"prop-name":"date_of_attendance"}})],1)])]),e._v(" "),e._l(e.attendanceForm.attendances,(function(t,n){return a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-sm-3"},[e._v("\n                            "+e._s(t.name)+" ("+e._s(t.alias)+")\n                        ")]),e._v(" "),a("div",{staticClass:"col-12 col-sm-3"},[a("div",{staticClass:"form-group"},[a("div",{staticClass:"input-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.value,expression:"attendance.value"}],staticClass:"form-control",attrs:{type:"number",name:e.getValueName(n),placeholder:e.trans("employee.production_attendance_value"),disabled:!!e.is_payroll_generated},domProps:{value:t.value},on:{input:function(a){a.target.composing||e.$set(t,"value",a.target.value)}}}),e._v(" "),a("div",{staticClass:"input-group-append"},[a("span",{staticClass:"input-group-text"},[e._v(e._s(t.unit))])])]),e._v(" "),a("show-error",{attrs:{"form-name":e.attendanceForm,"prop-name":e.getValueName(n)}})],1)]),e._v(" "),a("div",{staticClass:"col-12 col-sm-6"},[a("div",{staticClass:"form-group"},[a("autosize-textarea",{attrs:{rows:"1",name:"",placeholder:e.trans("employee.attendance_remarks")},model:{value:t.remarks,callback:function(a){e.$set(t,"remarks",a)},expression:"attendance.remarks"}})],1)])])})),e._v(" "),e.attendanceForm.attendances.length&&e.attendance_types.length?a("div",{staticClass:"form-group"},[a("button",{staticClass:"btn btn-info pull-right",attrs:{type:"submit",disabled:!!e.is_payroll_generated}},[e._v(e._s(e.trans("general.save")))])]):e._e()],2)])])])])}),[],!1,null,null,null);t.default=o.exports}}]);
//# sourceMappingURL=production.js.map?id=13cb341e532c4e0a5176