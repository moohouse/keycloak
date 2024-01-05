"use strict";(self.webpackChunkkeycloak_theme_dsfr=self.webpackChunkkeycloak_theme_dsfr||[]).push([[5995],{2889:function(s,e,a){a.d(e,{a:function(){return t}});var l=a(6055),c=a(969);function t(s){var e=s.defaultClasses;return{useGetClassName:function(s){var a=s.classes;return{getClassName:(0,c.O)((function(s){return(0,l.W)(s,e[s],null===a||void 0===a?void 0:a[s])}))}}}}},7107:function(s,e,a){a.d(e,{v:function(){return l}});var l=(0,a(2889).a)({defaultClasses:{kcHtmlClass:"login-pf",kcLoginClass:"login-pf-page",kcContentWrapperClass:"row",kcHeaderClass:"login-pf-page-header",kcHeaderWrapperClass:void 0,kcFormCardClass:"card-pf",kcFormCardAccountClass:"login-pf-accounts",kcFormSocialAccountClass:"login-pf-social-section",kcFormSocialAccountContentClass:"col-xs-12 col-sm-6",kcFormHeaderClass:"login-pf-header",kcLocaleWrapperClass:void 0,kcFeedbackErrorIcon:"pficon pficon-error-circle-o",kcFeedbackWarningIcon:"pficon pficon-warning-triangle-o",kcFeedbackSuccessIcon:"pficon pficon-ok",kcFeedbackInfoIcon:"pficon pficon-info",kcResetFlowIcon:"pficon pficon-arrow fa-2x",kcFormGroupClass:"form-group",kcLabelWrapperClass:"col-xs-12 col-sm-12 col-md-12 col-lg-12",kcSignUpClass:"login-pf-signup",kcInfoAreaWrapperClass:void 0,kcLogoClass:"login-pf-brand",kcContainerClass:"container-fluid",kcContentClass:"col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 col-lg-6 col-lg-offset-3",kcFeedbackAreaClass:"col-md-12",kcLocaleClass:"col-xs-12 col-sm-1",kcAlertIconClasserror:"pficon pficon-error-circle-o",kcFormAreaClass:"col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2 col-lg-8 col-lg-offset-2",kcFormSocialAccountListClass:"login-pf-social list-unstyled login-pf-social-all",kcFormSocialAccountDoubleListClass:"login-pf-social-double-col",kcFormSocialAccountListLinkClass:"login-pf-social-link",kcWebAuthnKeyIcon:"pficon pficon-key",kcWebAuthnDefaultIcon:"pficon pficon-key",kcFormClass:"form-horizontal",kcFormGroupErrorClass:"has-error",kcLabelClass:"control-label",kcInputClass:"form-control",kcInputErrorMessageClass:"pf-c-form__helper-text pf-m-error required kc-feedback-text",kcInputWrapperClass:"col-xs-12 col-sm-12 col-md-12 col-lg-12",kcFormOptionsClass:"col-xs-12 col-sm-12 col-md-12 col-lg-12",kcFormButtonsClass:"col-xs-12 col-sm-12 col-md-12 col-lg-12",kcFormSettingClass:"login-pf-settings",kcTextareaClass:"form-control",kcInfoAreaClass:"col-xs-12 col-sm-4 col-md-4 col-lg-5 details",kcFormGroupHeader:"pf-c-form__group",kcButtonClass:"btn",kcButtonPrimaryClass:"btn-primary",kcButtonDefaultClass:"btn-default",kcButtonLargeClass:"btn-lg",kcButtonBlockClass:"btn-block",kcInputLargeClass:"input-lg",kcSrOnlyClass:"sr-only",kcSelectAuthListClass:"list-group list-view-pf",kcSelectAuthListItemClass:"list-group-item list-view-pf-stacked",kcSelectAuthListItemFillClass:"pf-l-split__item pf-m-fill",kcSelectAuthListItemIconPropertyClass:"fa-2x select-auth-box-icon-properties",kcSelectAuthListItemIconClass:"pf-l-split__item select-auth-box-icon",kcSelectAuthListItemTitle:"select-auth-box-paragraph",kcSelectAuthListItemInfoClass:"list-view-pf-main-info",kcSelectAuthListItemLeftClass:"list-view-pf-left",kcSelectAuthListItemBodyClass:"list-view-pf-body",kcSelectAuthListItemDescriptionClass:"list-view-pf-description",kcSelectAuthListItemHeadingClass:"list-group-item-heading",kcSelectAuthListItemHelpTextClass:"list-group-item-text",kcAuthenticatorDefaultClass:"fa list-view-pf-icon-lg",kcAuthenticatorPasswordClass:"fa fa-unlock list-view-pf-icon-lg",kcAuthenticatorOTPClass:"fa fa-mobile list-view-pf-icon-lg",kcAuthenticatorWebAuthnClass:"fa fa-key list-view-pf-icon-lg",kcAuthenticatorWebAuthnPasswordlessClass:"fa fa-key list-view-pf-icon-lg",kcSelectOTPListClass:"card-pf card-pf-view card-pf-view-select card-pf-view-single-select",kcSelectOTPListItemClass:"card-pf-body card-pf-top-element",kcAuthenticatorOtpCircleClass:"fa fa-mobile card-pf-icon-circle",kcSelectOTPItemHeadingClass:"card-pf-title text-center",kcFormOptionsWrapperClass:void 0}}).useGetClassName},8029:function(s,e,a){a.r(e),a.d(e,{default:function(){return o}});var l=a(184),c=a(6055),t=a(7107);function o(s){var e,a,o,i,r=s.kcContext,n=s.i18n,u=s.doUseDefaultCss,p=s.Template,m=s.classes,f=(0,t.v)({doUseDefaultCss:u,classes:m}).getClassName,k=n.msg,d=n.msgStr,C=r.url,g=r.user,b=r.messagesPerField,h=r.isAppInitiatedAction;return(0,l.jsx)(p,Object.assign({},{kcContext:r,i18n:n,doUseDefaultCss:u,classes:m},{headerNode:k("loginProfileTitle")},{children:(0,l.jsxs)("form",Object.assign({id:"kc-update-profile-form",className:f("kcFormClass"),action:C.loginAction,method:"post"},{children:[g.editUsernameAllowed&&(0,l.jsxs)("div",Object.assign({className:(0,c.W)(f("kcFormGroupClass"),b.printIfExists("username",f("kcFormGroupErrorClass")))},{children:[(0,l.jsx)("div",Object.assign({className:f("kcLabelWrapperClass")},{children:(0,l.jsx)("label",Object.assign({htmlFor:"username",className:f("kcLabelClass")},{children:k("username")}))})),(0,l.jsx)("div",Object.assign({className:f("kcInputWrapperClass")},{children:(0,l.jsx)("input",{type:"text",id:"username",name:"username",defaultValue:null!==(e=g.username)&&void 0!==e?e:"",className:f("kcInputClass")})}))]})),(0,l.jsxs)("div",Object.assign({className:(0,c.W)(f("kcFormGroupClass"),b.printIfExists("email",f("kcFormGroupErrorClass")))},{children:[(0,l.jsx)("div",Object.assign({className:f("kcLabelWrapperClass")},{children:(0,l.jsx)("label",Object.assign({htmlFor:"email",className:f("kcLabelClass")},{children:k("email")}))})),(0,l.jsx)("div",Object.assign({className:f("kcInputWrapperClass")},{children:(0,l.jsx)("input",{type:"text",id:"email",name:"email",defaultValue:null!==(a=g.email)&&void 0!==a?a:"",className:f("kcInputClass")})}))]})),(0,l.jsxs)("div",Object.assign({className:(0,c.W)(f("kcFormGroupClass"),b.printIfExists("firstName",f("kcFormGroupErrorClass")))},{children:[(0,l.jsx)("div",Object.assign({className:f("kcLabelWrapperClass")},{children:(0,l.jsx)("label",Object.assign({htmlFor:"firstName",className:f("kcLabelClass")},{children:k("firstName")}))})),(0,l.jsx)("div",Object.assign({className:f("kcInputWrapperClass")},{children:(0,l.jsx)("input",{type:"text",id:"firstName",name:"firstName",defaultValue:null!==(o=g.firstName)&&void 0!==o?o:"",className:f("kcInputClass")})}))]})),(0,l.jsxs)("div",Object.assign({className:(0,c.W)(f("kcFormGroupClass"),b.printIfExists("lastName",f("kcFormGroupErrorClass")))},{children:[(0,l.jsx)("div",Object.assign({className:f("kcLabelWrapperClass")},{children:(0,l.jsx)("label",Object.assign({htmlFor:"lastName",className:f("kcLabelClass")},{children:k("lastName")}))})),(0,l.jsx)("div",Object.assign({className:f("kcInputWrapperClass")},{children:(0,l.jsx)("input",{type:"text",id:"lastName",name:"lastName",defaultValue:null!==(i=g.lastName)&&void 0!==i?i:"",className:f("kcInputClass")})}))]})),(0,l.jsxs)("div",Object.assign({className:f("kcFormGroupClass")},{children:[(0,l.jsx)("div",Object.assign({id:"kc-form-options",className:f("kcFormOptionsClass")},{children:(0,l.jsx)("div",{className:f("kcFormOptionsWrapperClass")})})),(0,l.jsx)("div",Object.assign({id:"kc-form-buttons",className:f("kcFormButtonsClass")},{children:h?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("input",{className:(0,c.W)(f("kcButtonClass"),f("kcButtonPrimaryClass"),f("kcButtonLargeClass")),type:"submit",defaultValue:d("doSubmit")}),(0,l.jsx)("button",Object.assign({className:(0,c.W)(f("kcButtonClass"),f("kcButtonDefaultClass"),f("kcButtonLargeClass")),type:"submit",name:"cancel-aia",value:"true"},{children:k("doCancel")}))]}):(0,l.jsx)("input",{className:(0,c.W)(f("kcButtonClass"),f("kcButtonPrimaryClass"),f("kcButtonBlockClass"),f("kcButtonLargeClass")),type:"submit",defaultValue:d("doSubmit")})}))]}))]}))}))}},6055:function(s,e,a){a.d(e,{W:function(){return o}});var l=a(3433),c=a(4849),t=a(2778),o=function s(){for(var e=arguments.length,a=0,o="";a<e;a++){var i=a<0||arguments.length<=a?void 0:arguments[a];if(null!=i){var r=void 0;switch(typeof i){case"boolean":break;case"object":if(Array.isArray(i))r=s.apply(void 0,(0,l.Z)(i));else for(var n in(0,c.h)(!(0,t.z)(i,!1)),r="",i)i[n]&&n&&(r&&(r+=" "),r+=n);break;default:r=i}r&&(o&&(o+=" "),o+=r)}}return o}},2778:function(s,e,a){function l(s,e){return e}a.d(e,{z:function(){return l}})}}]);
//# sourceMappingURL=5995.4e28a532.chunk.js.map