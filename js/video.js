var _0x4756b7=_0x465a;(function(_0x3fa890,_0x34eeaa){var _0x5097ad=_0x465a,_0x5a9aa2=_0x3fa890();while(!![]){try{var _0x36dcc0=-parseInt(_0x5097ad(0x25a))/0x1*(-parseInt(_0x5097ad(0x222))/0x2)+-parseInt(_0x5097ad(0x255))/0x3*(-parseInt(_0x5097ad(0x210))/0x4)+parseInt(_0x5097ad(0x24a))/0x5*(parseInt(_0x5097ad(0x202))/0x6)+-parseInt(_0x5097ad(0x21a))/0x7*(parseInt(_0x5097ad(0x215))/0x8)+parseInt(_0x5097ad(0x22e))/0x9+parseInt(_0x5097ad(0x209))/0xa*(-parseInt(_0x5097ad(0x20d))/0xb)+-parseInt(_0x5097ad(0x213))/0xc*(parseInt(_0x5097ad(0x23b))/0xd);if(_0x36dcc0===_0x34eeaa)break;else _0x5a9aa2['push'](_0x5a9aa2['shift']());}catch(_0x1d8ace){_0x5a9aa2['push'](_0x5a9aa2['shift']());}}}(_0x5795,0x99c43));function getFileInput(){var _0x460884=_0x465a;return document[_0x460884(0x225)](_0x460884(0x1f7));}function getFile(){var _0x3539b5=_0x465a;return getFileInput()[_0x3539b5(0x212)][0x0];}function extractWithRegex(_0x493e0b,_0x550e26){var _0x1109be=_0x465a,_0x17bb55={'showName':null,'seasonNumber':null,'episodeNumber':null},_0x43da33=null;while((_0x43da33=_0x550e26[_0x1109be(0x25b)](_0x493e0b))!==null){_0x43da33['index']===_0x550e26['lastIndex']&&_0x550e26[_0x1109be(0x1fe)]++,_0x43da33[_0x1109be(0x245)]((_0x33daf3,_0x481e6e)=>{var _0x4a45c6=_0x1109be;switch(_0x481e6e){case 0x0:break;case 0x1:_0x17bb55[_0x4a45c6(0x258)]=_0x33daf3;break;case 0x2:_0x17bb55[_0x4a45c6(0x254)]=_0x33daf3;break;case 0x3:_0x17bb55[_0x4a45c6(0x203)]=_0x33daf3;break;default:}});}return _0x17bb55;}function refreshFileName(){var _0x3986bf=_0x465a;const _0x26ef68='';var _0x2e80eb=getFile();if(_0x2e80eb){var _0x598c72=_0x2e80eb[_0x3986bf(0x23f)];getVideoFilename()['val'](_0x598c72),_0x598c72=getFileName(_0x598c72)['replace'](/\./g,'\x20');const _0x2b6d87=/(.+)[sS](\d?\d)[eE](\d\d).*/gm,_0x8464d7=/(.-)(\d?\d)[xX](\d\d).*/gm;var _0x1a6440=extractWithRegex(_0x598c72,_0x2b6d87);_0x1a6440[_0x3986bf(0x258)]==null&&(_0x1a6440=extractWithRegex(_0x598c72,_0x8464d7)),_0x1a6440[_0x3986bf(0x258)]!=null?(getVideoTitle()[_0x3986bf(0x20a)](_0x1a6440['showName'][_0x3986bf(0x224)]()),getVideoSeriesSeason()['val'](_0x1a6440[_0x3986bf(0x254)]),getVideoSeriesEpisode()[_0x3986bf(0x20a)](_0x1a6440[_0x3986bf(0x203)])):(getVideoTitle()[_0x3986bf(0x20a)](_0x598c72['trim']()),getVideoSeriesSeason()[_0x3986bf(0x20a)](_0x26ef68),getVideoSeriesEpisode()['val'](_0x26ef68));}else getVideoFilename()[_0x3986bf(0x20a)](_0x26ef68),getVideoTitle()['val'](_0x26ef68),getVideoSeriesSeason()[_0x3986bf(0x20a)](_0x26ef68),getVideoSeriesEpisode()[_0x3986bf(0x20a)](_0x26ef68);}function getVideoFilename(){var _0x526da0=_0x465a;return $(_0x526da0(0x25c));}function getVideoTitle(){var _0x1155a1=_0x465a;return $(_0x1155a1(0x20b));}function _0x465a(_0x2c9793,_0x1d5f49){var _0x57953a=_0x5795();return _0x465a=function(_0x465aca,_0x5e9b46){_0x465aca=_0x465aca-0x1f2;var _0x48fe0e=_0x57953a[_0x465aca];return _0x48fe0e;},_0x465a(_0x2c9793,_0x1d5f49);}function getVideoSeriesSeason(){var _0xc50020=_0x465a;return $(_0xc50020(0x247));}function getVideoSeriesEpisode(){return $('#videoSeriesEpisodeInput');}function modalLink(){var _0x5b1d20=_0x465a;return $(_0x5b1d20(0x253));}function getVideo(){var _0x55e56f=_0x465a;return document['getElementById'](_0x55e56f(0x1f6));}function modalClose(){var _0x1831e6=_0x465a;return document['getElementById'](_0x1831e6(0x207));}function getBlobHiderLink(){var _0x2f6f59=_0x465a;return document[_0x2f6f59(0x225)](_0x2f6f59(0x21d));}function getFileName(_0x3da66f){return _0x3da66f['replace'](/\.[^/.]+$/,'');}function getFileExt(_0x368e2a){var _0x8f92cf=/(?:\.([^.]+))?$/;return _0x8f92cf['exec'](_0x368e2a)[0x1];}function getSubFileName(_0xd4e02){var _0xfe613f=_0x465a,_0x54c34c=getFile();if(_0x54c34c){var _0x4a73fa=getFileName(_0x54c34c[_0xfe613f(0x23f)]),_0x37fcd1=getFileExt(_0xd4e02);return _0x4a73fa+'.'+_0x37fcd1;}else return _0xd4e02;}function download(_0x6ec1b8,_0x3e6b42,_0x349917=!![]){var _0x54f3f7=_0x465a;const _0x50fbd1=getBlobHiderLink();window[_0x54f3f7(0x1f3)][_0x54f3f7(0x257)](_0x50fbd1['href']),_0x50fbd1[_0x54f3f7(0x21f)]=window[_0x54f3f7(0x1f3)][_0x54f3f7(0x237)](_0x6ec1b8),_0x50fbd1[_0x54f3f7(0x251)]=getSubFileName(_0x3e6b42);if(_0x349917)_0x50fbd1[_0x54f3f7(0x233)]();return{'url':_0x50fbd1[_0x54f3f7(0x21f)],'name':_0x50fbd1['download']};}async function downloadSubs(_0x55c325){var _0x114d32=_0x465a;getSubsByFileId(_0x55c325,(_0x599990,_0x377f63)=>{download(_0x599990,_0x377f63);},dom[_0x114d32(0x208)],dom[_0x114d32(0x23c)]);}function _0x5795(){var _0x5a7f99=['dragenter','amv','f4p','modalClose','showSpinner','195360FETFUZ','val','#videoTitleInput','captions','616bWTUjl','showing','#555555','12hfQvgG','keydown','files','4300776SpdaRO','load','5647416qdvFpY','removeAttr','m4p','types','mode','7UQGsoi','#textnode','reset','blobHiderLink','42px','href','track','createElement','128562gzoedu','src','trim','getElementById','length','Files','MTS','mpv','target','3g2','#trackSyncInput','Escape','8546526ZGOWYe','firstChild','removeChild','dragover','avi','click','querySelector','transformSrtTracks','appendChild','createObjectURL','48px','zoomOut','fontSize','13XnyJaE','hideSpinner','opacity','kind','name','dragleave','wmv','preventDefault','hidden','#dropzone','forEach','3gp','#videoSeriesSeasonInput','visibility','flv','20GpTwrT','key','registerLog','mpe','drop','style','mpeg','download','mp4','#modalLink','seasonNumber','931044dKJSqZ','addEventListener','revokeObjectURL','showName','mkv','2pLKKQa','exec','#videoFileName','label','URL','textTracks','dataTransfer','modalVideo','videoFileInput','vob','ogv,\x20.ogg','m4v','danger','drc','m2v','lastIndex','subs.search.required.filetoplay','body.container','file.dropfile.notavideo','1168422xcfJNp','episodeNumber'];_0x5795=function(){return _0x5a7f99;};return _0x5795();}function beforeVideoWithSubs(){var _0x1a9d4e=_0x465a,_0x438be4=getFile();!_0x438be4?dom[_0x1a9d4e(0x24c)]($['t'](_0x1a9d4e(0x1ff)),_0x1a9d4e(0x1fb)):dom['showSpinner']();}function hideTracks(){var _0x2aef9b=_0x465a;let _0x11334=getVideo();if(_0x11334[_0x2aef9b(0x1f4)])for(let _0x4d479c=0x0;_0x4d479c<_0x11334[_0x2aef9b(0x1f4)]['length'];_0x4d479c++){_0x11334['textTracks'][_0x4d479c]['mode']=_0x2aef9b(0x243);}};async function videoWithSubs(_0x4ff0be){var _0x53bed2=_0x465a;getSubsByFileId(_0x4ff0be,(_0x399676,_0x2de2c6)=>{var _0x596182=_0x465a;const _0x2ff046=download(_0x399676,_0x2de2c6,![]);let _0x323bfd=getFile(),_0x46f456=getVideo();_0x46f456[_0x596182(0x223)]=URL[_0x596182(0x237)](_0x323bfd),hideTracks();while(_0x46f456[_0x596182(0x22f)])_0x46f456[_0x596182(0x230)](_0x46f456[_0x596182(0x22f)]);let _0x4ffe29=document[_0x596182(0x221)](_0x596182(0x220));_0x4ffe29[_0x596182(0x256)](_0x596182(0x214),function(){var _0x4c4943=_0x596182;this[_0x4c4943(0x219)]=_0x4c4943(0x20e),_0x46f456['textTracks'][0x0]['mode']='showing';}),_0x4ffe29[_0x596182(0x23e)]=_0x596182(0x20c),_0x4ffe29[_0x596182(0x1f2)]=_0x2de2c6,_0x4ffe29['default']=!![],_0x4ffe29['src']=_0x2ff046['url'],_0x46f456[_0x596182(0x236)](_0x4ffe29),videosub[_0x596182(0x235)](_0x46f456),openModal();},beforeVideoWithSubs,dom[_0x53bed2(0x23c)]);}function videoWithSubsTrackSync(_0x4af9f5=0x0){var _0x16df10=_0x465a;hideTracks();let _0x351a06=getVideo();videosub[_0x16df10(0x235)](_0x351a06,_0x4af9f5);}modalLink()['animatedModal']({'animatedIn':'zoomIn','animatedOut':_0x4756b7(0x239),'color':_0x4756b7(0x20f),'beforeOpen':function(){playVideo();},'afterClose':function(){var _0x3b75c0=_0x4756b7;pauseVideo(),$(_0x3b75c0(0x200))[_0x3b75c0(0x216)](_0x3b75c0(0x24f)),document[_0x3b75c0(0x225)]('trackSyncForm')[_0x3b75c0(0x21c)](),$(_0x3b75c0(0x22c))['fadeOut']();}});function openModal(){var _0x11d73e=_0x4756b7;modalLink()[_0x11d73e(0x233)]();}function closeModal(){var _0xb27e97=_0x4756b7;modalClose()[_0xb27e97(0x233)]();}function playVideo(){getVideo()['play']();}function pauseVideo(){getVideo()['pause']();}function stopVideo(){pauseVideo(),getVideo()['currentTime']=0x0;}document[_0x4756b7(0x256)](_0x4756b7(0x211),function(_0x48dffb){var _0x4a54f8=_0x4756b7;_0x48dffb[_0x4a54f8(0x24b)]===_0x4a54f8(0x22d)&&closeModal();});var lastTarget=null;function isFile(_0x241021){var _0x27b216=_0x4756b7,_0x4eb0db=_0x241021['dataTransfer'];for(var _0x4ff9c2=0x0;_0x4ff9c2<_0x4eb0db['types'][_0x27b216(0x226)];_0x4ff9c2++){if(_0x4eb0db[_0x27b216(0x218)][_0x4ff9c2]===_0x27b216(0x227))return!![];}return![];}window[_0x4756b7(0x256)](_0x4756b7(0x204),function(_0x2bcd14){var _0x56f9b5=_0x4756b7;isFile(_0x2bcd14)&&(lastTarget=_0x2bcd14[_0x56f9b5(0x22a)],document[_0x56f9b5(0x234)](_0x56f9b5(0x244))[_0x56f9b5(0x24f)][_0x56f9b5(0x248)]='',document[_0x56f9b5(0x234)](_0x56f9b5(0x244))[_0x56f9b5(0x24f)][_0x56f9b5(0x23d)]=0x1,document[_0x56f9b5(0x234)](_0x56f9b5(0x21b))[_0x56f9b5(0x24f)][_0x56f9b5(0x23a)]=_0x56f9b5(0x238));}),window[_0x4756b7(0x256)](_0x4756b7(0x240),function(_0x4ae4a5){var _0x4b96a1=_0x4756b7;_0x4ae4a5[_0x4b96a1(0x242)](),(_0x4ae4a5['target']===document||_0x4ae4a5[_0x4b96a1(0x22a)]===lastTarget)&&(document[_0x4b96a1(0x234)](_0x4b96a1(0x244))[_0x4b96a1(0x24f)]['visibility']=_0x4b96a1(0x243),document[_0x4b96a1(0x234)](_0x4b96a1(0x244))[_0x4b96a1(0x24f)]['opacity']=0x0,document['querySelector']('#textnode')[_0x4b96a1(0x24f)]['fontSize']=_0x4b96a1(0x21e));}),window[_0x4756b7(0x256)](_0x4756b7(0x231),function(_0x30d44e){_0x30d44e['preventDefault']();}),window[_0x4756b7(0x256)](_0x4756b7(0x24e),function(_0x1d72dd){var _0x565882=_0x4756b7;_0x1d72dd[_0x565882(0x242)](),document[_0x565882(0x234)]('#dropzone')['style'][_0x565882(0x248)]='hidden',document['querySelector'](_0x565882(0x244))[_0x565882(0x24f)][_0x565882(0x23d)]=0x0,document[_0x565882(0x234)](_0x565882(0x21b))[_0x565882(0x24f)][_0x565882(0x23a)]=_0x565882(0x21e);if(_0x1d72dd['dataTransfer'][_0x565882(0x212)]['length']==0x1){if(isExtensionValid(_0x1d72dd[_0x565882(0x1f5)][_0x565882(0x212)][0x0]['name'])){var _0x1322e1=document[_0x565882(0x225)](_0x565882(0x1f7));_0x1322e1[_0x565882(0x212)]=_0x1d72dd['dataTransfer'][_0x565882(0x212)],refreshFileName();}else this['alert']($['t'](_0x565882(0x201)));}});function isExtensionValid(_0x23dcbc){var _0x47d2a6=_0x4756b7,_0x198e29=['webm',_0x47d2a6(0x259),_0x47d2a6(0x249),_0x47d2a6(0x1f8),_0x47d2a6(0x1f9),_0x47d2a6(0x1fc),_0x47d2a6(0x232),_0x47d2a6(0x228),'M2TS','TS','mov','qt',_0x47d2a6(0x241),'asf',_0x47d2a6(0x205),_0x47d2a6(0x252),_0x47d2a6(0x217),_0x47d2a6(0x1fa),'mpg','mp2',_0x47d2a6(0x250),_0x47d2a6(0x24d),_0x47d2a6(0x229),_0x47d2a6(0x1fd),_0x47d2a6(0x1fa),_0x47d2a6(0x246),_0x47d2a6(0x22b),_0x47d2a6(0x249),'f4v',_0x47d2a6(0x206),'f4a','f4b'],_0x2a046f=getFileExt(_0x23dcbc);return _0x198e29['includes'](_0x2a046f);}