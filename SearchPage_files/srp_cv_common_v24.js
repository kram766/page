function validator(a,b,c){return c||(c=!1),formValidate=new commonValidator,formValidate.validate({formNames:a,errors:rdx_ErrorList,styles:{errorClass:"err",okClass:"ok",softMandClass:"softMand",parentObjectClass:"formRow",maxLevel:7},submitButton:b,focusOnError:!1,disableSubmit:c}),formValidate}function getPhoneNumber(a,b){if(!$(a).hasClass("telSeen")&&!$(a).hasClass("active")&&!$(a).hasClass("nop")){var c,d,e="preview"==pageName,f=$(a),g="preview"==pageName?$(a).children(".phoneText"):$(a).children(".txt"),h=formHidObj(["sid"]);e?h.key=ukey:(c=g.closest(".tuple").attr("data-index"),d=b.tupleArray[c].key,h.key=d),h.src=pageName,"srp"!=pageName.toLowerCase()&&"preview"!=pageName.toLowerCase()&&"recomcv"!=pageName.toLowerCase()||(h.paramString=parameterString),hfFlowName&&(h.hfFlowName=hfFlowName),$.ajax({type:"GET",url:baseUrl+"/ajax/getContactNumber",dataType:"json",data:h,beforeSend:function(){f.gLoader().block()},success:function(a){if(a.status&&a.url)return void(window.location.href=a.url);0==a.status?msgBar("red",a.msg):null==a.phoneNo&&"undefined"!=typeof previewPhoneNumber&&previewPhoneNumber?formatNumberHtml(previewPhoneNumber,g,f):null!=a.phoneNo&&formatNumberHtml(a,g,f)},complete:function(){f.gLoader().unblock()}})}}function formatNumberHtml(a,b,c){var d=$.trim(a.phoneNo).split("(R)");1==d.length?b.text(a.phoneNo):d.length>1&&d[0].length<13?b.text(d[1]):d.length>1&&!d[1]?b.text(d[0]+"(R)"):(b.text(d[1]),"preview"!==pageName&&b.after('<div class="txt dispN">'+d[0]+'(R)</div><em class="telArrow iconArrUp"></em> <em class="telArrow iconArrDown"></em>')),a.duplicate?c.addClass("telSeen"):"verified"==a.verified.toLowerCase()||"contactable"==a.contactable.toLowerCase()?c.addClass("active"):c.addClass("telSeen"),"preview"==pageName&&(b.addClass("num").removeClass("phoneText"),$("#second-phone-box").is(":visible")||$(".more-phone-link").length&&$(".more-phone-link").show())}String.prototype.chunk=function(a){for(var b=[],c=0,d=this.length;c<d;c+=a)b.push(this.substr(c,a));return b};