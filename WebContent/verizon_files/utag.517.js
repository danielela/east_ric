//tealium universal tag - utag.517 ut4.0.201803192352, Copyright 2018 Tealium.com Inc. All Rights Reserved.
try{(function(id,loader){var u={};utag.o[loader].sender[id]=u;if(utag===undefined){utag={};}if(utag.ut===undefined){utag.ut={};}if(utag.ut.loader===undefined){u.loader=function(o){var a,b,c,l;a=document;if(o.type==="iframe"){b=a.createElement("iframe");b.setAttribute("height","1");b.setAttribute("width","1");b.setAttribute("style","display:none");b.setAttribute("src",o.src);}else if(o.type==="img"){utag.DB("Attach img: "+o.src);b=new Image();b.src=o.src;return;}else{b=a.createElement("script");b.language="javascript";b.type="text/javascript";b.async=1;b.charset="utf-8";b.src=o.src;}if(o.id){b.id=o.id;}if(typeof o.cb==="function"){if(b.addEventListener){b.addEventListener("load",function(){o.cb();},false);}else{b.onreadystatechange=function(){if(this.readyState==="complete"||this.readyState==="loaded"){this.onreadystatechange=null;o.cb();}};}}l=o.loc||"head";c=a.getElementsByTagName(l)[0];if(c){utag.DB("Attach to "+l+": "+o.src);if(l==="script"){c.parentNode.insertBefore(b,c);}else{c.appendChild(b);}}};}else{u.loader=utag.ut.loader;}
u.ev={'view':1};u.initialized=false;u.map={};u.extend=[function(a,b){try{if(1){jQuery('#storeLocator').on('click','.switch a',function(){var lName=jQuery(this).text().toLowerCase().replace(/^\s\s*/,'').replace(/\s\s*$/,'');vzwLinkTrack(lName);});jQuery('#storeLocator').on('click','#cityStateLinks #cityList a',function(){var lName=jQuery(this).text().toLowerCase().replace(/^\s\s*/,'').replace(/\s\s*$/,'');if(document.location.pathname=="/stores/"){vzwLinkTrack('state:'+lName);}else{vzwLinkTrack('city selection:'+lName);}});jQuery('#storeLocator').on('click','#cityStateLinks a',function(){var lName=jQuery(this).text().toLowerCase().replace(/^\s\s*/,'').replace(/\s\s*$/,'');s.linkTrackVars=s.apl(s.linkTrackVars,",",",",1);if(document.location.pathname=="/stores/"){vzwLinkTrack(lName);}});jQuery('#storeLocator').on('click','.immediate-assistance li a',function(){var lName=jQuery(this).text().toLowerCase();var catName=jQuery(this).parentsUntil('.section-wrapper').children('h2').text().replace(/^\s\s*/,'').replace('?','').replace('.','').replace(/\s\s*$/,'').toLowerCase();vzwLinkTrack(catName+':'+lName);});jQuery('#storeLocator').on('click','#cityList-nav a',function(){var lName=jQuery(this).text().toLowerCase().replace(/^\s\s*/,'').replace(/\s\s*$/,'');vzwLinkTrack(lName);});jQuery('#storeLocator').on('click','.cityStoreList  a',function(){var lName=jQuery(this).text().replace(/^\s\s*/,'').replace(/\s\s*$/,'').toLowerCase();vzwLinkTrack(lName);});jQuery('#storeLocator').on('mousedown','input#submit',function(){var lName=jQuery(this).text().replace(/^\s\s*/,'').replace(/\s\s*$/,'').toLowerCase();vzwLinkTrack('submit search button'+lName);});jQuery('#storeLocator').on('click','.bannerWrap_copy a',function(){var lName=jQuery(this).text().toLowerCase().replace(/^\s\s*/,'').replace(/\s\s*$/,'').toLowerCase();vzwLinkTrack('in-store pickup: '+lName);});jQuery('#storeLocator').on('mousedown','.store-filter ul.method-list li label, .store-filter ul.method-list li label div.icheckbox ins.iCheck-helper',function(){var lName=jQuery(this).text().toLowerCase().replace(/^\s\s*/,'').replace(/\s\s*$/,'');vzwLinkTrack('filter type: '+lName);});jQuery('#storeLocator').on('change','.store-filter ul.method-list li label div.icheckbox input.checkbox',function(){var lName=jQuery(this).val()
vzwLinkTrack('filter type: '+lName);});jQuery('#storeLocator').on('click','#nationalIndirectRetailers a',function(){var lName='';if(jQuery(this).children('img').length>0){lName=jQuery(this).children('img').attr('alt').toLowerCase();}else{lName=jQuery(this).text().replace(/^\s\s*/,'').replace(/\s\s*$/,'').toLowerCase();}
vzwLinkTrack(lName);});jQuery('#storeLocator').on('mousedown','form.store-search .tt-dropdown-menu .searchResult label.show-content',function(){var lName='authorized retailers';if(jQuery(this).children('.icheckbox').hasClass('checked')){lName=lName+':include';}else{lName=lName+':exclude';}
vzwLinkTrack(lName);});jQuery('form.store-search .tt-dropdown-menu .searchResult .icheckbox .iCheck-helper').on('mousedown',function(){var lName='authorized retailers';s.linkTrackVars=s.apl(s.linkTrackVars,",",",",1);if(jQuery(this).parent().hasClass('checked')){lName=lName+':include';}else{lName=lName+':exclude';}
vzwLinkTrack(lName);});jQuery('#storeLocator').on('click','#tt_lookingForWrapper .background_supporting a',function(){var lName=jQuery(this).text().replace(/^\s\s*/,'').replace(/\s\s*$/,'');var cat=jQuery(this).parents('#tt_lookingForWrapper').find('h2').text().replace(/^\s\s*/,'').replace(/\s\s*$/,'');vzwLinkTrack(cat+':'+lName);});jQuery('#storeLocator').on('click','#tt_needHelpWrapper .background_supporting a',function(){var lName=jQuery(this).text().replace(/^\s\s*/,'').replace(/\s\s*$/,'');var cat=jQuery(this).parents('#tt_needHelpWrapper').find('h2').text().replace(/^\s\s*/,'').replace(/\s\s*$/,'');vzwLinkTrack(cat+':'+lName);});jQuery('#storeLocator').on('click','.banner-content a',function(){var catName=jQuery(this).parents('.banner-content').find('h2').text().replace(/^\s\s*/,'').replace(/\s\s*$/,'').toLowerCase();var lName=jQuery(this).text().replace(/^\s\s*/,'').replace(/\s\s*$/,'').toLowerCase();vzwLinkTrack(catName+':'+lName);});}}catch(e){utag.DB(e)}}];u.send=function(a,b){if(u.ev[a]||u.ev.all!==undefined){var c,d,e,f,i;u.data={};for(c=0;c<u.extend.length;c++){try{d=u.extend[c](a,b);if(d==false)return}catch(e){}};for(d in utag.loader.GV(u.map)){if(b[d]!==undefined&&b[d]!==""){e=u.map[d].split(",");for(f=0;f<e.length;f++){u.data[e[f]]=b[d];}}}
}};utag.o[loader].loader.LOAD(id);})("517","vzw.main");}catch(error){utag.DB(error);}
