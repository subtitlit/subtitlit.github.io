var _0x23d839=_0x4074;(function(_0x207823,_0x31a4fc){var _0x235b26=_0x4074,_0x49c339=_0x207823();while(!![]){try{var _0x521a7d=parseInt(_0x235b26(0x225))/0x1+parseInt(_0x235b26(0x200))/0x2+-parseInt(_0x235b26(0x231))/0x3+-parseInt(_0x235b26(0x223))/0x4*(parseInt(_0x235b26(0x1ef))/0x5)+-parseInt(_0x235b26(0x239))/0x6*(parseInt(_0x235b26(0x21e))/0x7)+-parseInt(_0x235b26(0x238))/0x8*(-parseInt(_0x235b26(0x243))/0x9)+-parseInt(_0x235b26(0x210))/0xa*(-parseInt(_0x235b26(0x22d))/0xb);if(_0x521a7d===_0x31a4fc)break;else _0x49c339['push'](_0x49c339['shift']());}catch(_0x3b640d){_0x49c339['push'](_0x49c339['shift']());}}}(_0x3c17,0x57146));function getFileInput(){var _0xd29d20=_0x4074;return document[_0xd29d20(0x1ea)](_0xd29d20(0x211));}function getFile(){var _0x31274f=_0x4074;return getFileInput()[_0x31274f(0x224)][0x0];}function extractWithRegex(_0x56fca5,_0x3a5ba7){var _0x294285=_0x4074,_0x16cb54={'showName':null,'seasonNumber':null,'episodeNumber':null},_0x39bf46=null;while((_0x39bf46=_0x3a5ba7[_0x294285(0x236)](_0x56fca5))!==null){_0x39bf46[_0x294285(0x212)]===_0x3a5ba7['lastIndex']&&_0x3a5ba7[_0x294285(0x241)]++,_0x39bf46[_0x294285(0x23e)]((_0x28e8fe,_0x3a9eb4)=>{var _0x1d8984=_0x294285;switch(_0x3a9eb4){case 0x0:break;case 0x1:_0x16cb54[_0x1d8984(0x23d)]=_0x28e8fe;break;case 0x2:_0x16cb54[_0x1d8984(0x1e2)]=_0x28e8fe;break;case 0x3:_0x16cb54[_0x1d8984(0x1e8)]=_0x28e8fe;break;default:}});}return _0x16cb54;}function refreshFileName(){var _0x5dadee=_0x4074;const _0x1b7df2='';var _0xdc8571=getFile();if(_0xdc8571){var _0xe3011=_0xdc8571[_0x5dadee(0x204)];getVideoFilename()['val'](_0xe3011),_0xe3011=getFileName(_0xe3011)['replace'](/\./g,'\x20');const _0x236021=/(.+)[sS](\d?\d)[eE](\d\d).*/gm,_0x4d3e1c=/(.-)(\d?\d)[xX](\d\d).*/gm;var _0x2fa2ad=extractWithRegex(_0xe3011,_0x236021);_0x2fa2ad[_0x5dadee(0x23d)]==null&&(_0x2fa2ad=extractWithRegex(_0xe3011,_0x4d3e1c)),_0x2fa2ad[_0x5dadee(0x23d)]!=null?(getVideoTitle()['val'](_0x2fa2ad[_0x5dadee(0x23d)][_0x5dadee(0x229)]()),getVideoSeriesSeason()['val'](_0x2fa2ad[_0x5dadee(0x1e2)]),getVideoSeriesEpisode()[_0x5dadee(0x1f5)](_0x2fa2ad[_0x5dadee(0x1e8)])):(getVideoTitle()[_0x5dadee(0x1f5)](_0xe3011['trim']()),getVideoSeriesSeason()['val'](_0x1b7df2),getVideoSeriesEpisode()[_0x5dadee(0x1f5)](_0x1b7df2));}else getVideoFilename()[_0x5dadee(0x1f5)](_0x1b7df2),getVideoTitle()[_0x5dadee(0x1f5)](_0x1b7df2),getVideoSeriesSeason()[_0x5dadee(0x1f5)](_0x1b7df2),getVideoSeriesEpisode()[_0x5dadee(0x1f5)](_0x1b7df2);}function getVideoFilename(){var _0x44817b=_0x4074;return $(_0x44817b(0x1fb));}function getVideoTitle(){var _0x5077e3=_0x4074;return $(_0x5077e3(0x1f0));}function getVideoSeriesSeason(){var _0x532865=_0x4074;return $(_0x532865(0x1de));}function _0x3c17(){var _0x15f185=['forEach','avi','alert','lastIndex','addEventListener','9zeZKem','mpeg','includes','transformSrtTracks','hidden','captions','danger','#videoSeriesSeasonInput','removeAttr','createObjectURL','f4a','seasonNumber','URL','mpg','body.container','flv','vob','episodeNumber','href','getElementById','f4p','fontSize','key','textTracks','1526765hdaIbL','#videoTitleInput','dragleave','querySelector','#dropzone','48px','val','visibility','mkv','asf','default','createElement','#videoFileName','url','removeChild','mpv','reset','746354XXiVjT','3g2','zoomIn','style','name','drop','showSpinner','#trackSyncInput','track','mp2','#textnode','showing','f4v','zoomOut','revokeObjectURL','replace','3068360VSwQfN','videoFileInput','index','load','preventDefault','firstChild','dataTransfer','registerLog','ogv,\x20.ogg','appendChild','drc','download','animatedModal','m4v','122311SZiOOi','mp4','label','#555555','src','4mArLbd','files','56371DKLxJm','keydown','opacity','MTS','trim','hideSpinner','length','Files','44anZJzZ','42px','kind','currentTime','2050329IGneaS','dragover','mov','pause','click','exec','dragenter','1003256oAvzvN','150UFCODG','#modalLink','M2TS','mode','showName'];_0x3c17=function(){return _0x15f185;};return _0x3c17();}function getVideoSeriesEpisode(){return $('#videoSeriesEpisodeInput');}function modalLink(){var _0x49164b=_0x4074;return $(_0x49164b(0x23a));}function getVideo(){var _0x5e9371=_0x4074;return document[_0x5e9371(0x1ea)]('modalVideo');}function modalClose(){var _0x246210=_0x4074;return document[_0x246210(0x1ea)]('modalClose');}function getBlobHiderLink(){var _0x393780=_0x4074;return document[_0x393780(0x1ea)]('blobHiderLink');}function getFileName(_0x58c24c){var _0x10a63a=_0x4074;return _0x58c24c[_0x10a63a(0x20f)](/\.[^/.]+$/,'');}function getFileExt(_0x435ea5){var _0x156624=_0x4074,_0x27601f=/(?:\.([^.]+))?$/;return _0x27601f[_0x156624(0x236)](_0x435ea5)[0x1];}function getSubFileName(_0x484a1d){var _0x4c8e3b=_0x4074,_0x50ea69=getFile();if(_0x50ea69){var _0x3d080f=getFileName(_0x50ea69[_0x4c8e3b(0x204)]),_0x14d9fd=getFileExt(_0x484a1d);return _0x3d080f+'.'+_0x14d9fd;}else return _0x484a1d;}function download(_0x2a953b,_0x5455e7,_0x4573b0=!![]){var _0x4c0216=_0x4074;const _0x302a06=getBlobHiderLink();window[_0x4c0216(0x1e3)][_0x4c0216(0x20e)](_0x302a06[_0x4c0216(0x1e9)]),_0x302a06[_0x4c0216(0x1e9)]=window['URL'][_0x4c0216(0x1e0)](_0x2a953b),_0x302a06[_0x4c0216(0x21b)]=getSubFileName(_0x5455e7);if(_0x4573b0)_0x302a06[_0x4c0216(0x235)]();return{'url':_0x302a06['href'],'name':_0x302a06[_0x4c0216(0x21b)]};}async function downloadSubs(_0x4a75c2){var _0x34acae=_0x4074;getSubsByFileId(_0x4a75c2,(_0x3516e1,_0x2a42e6)=>{download(_0x3516e1,_0x2a42e6);},dom[_0x34acae(0x206)],dom[_0x34acae(0x22a)]);}function beforeVideoWithSubs(){var _0x2d819c=_0x4074,_0x12f823=getFile();!_0x12f823?dom[_0x2d819c(0x217)]($['t']('subs.search.required.filetoplay'),_0x2d819c(0x1dd)):dom[_0x2d819c(0x206)]();}function hideTracks(){var _0x155f05=_0x4074;let _0x409e93=getVideo();if(_0x409e93[_0x155f05(0x1ee)])for(let _0x521390=0x0;_0x521390<_0x409e93[_0x155f05(0x1ee)][_0x155f05(0x22b)];_0x521390++){_0x409e93[_0x155f05(0x1ee)][_0x521390][_0x155f05(0x23c)]=_0x155f05(0x247);}};async function videoWithSubs(_0x59cba8){var _0x12fbcf=_0x4074;getSubsByFileId(_0x59cba8,(_0x25cdd7,_0x2a3b02)=>{var _0x479b48=_0x4074;const _0x41e3a2=download(_0x25cdd7,_0x2a3b02,![]);let _0x3d0c91=getFile(),_0x1f2c64=getVideo();_0x1f2c64[_0x479b48(0x222)]=URL[_0x479b48(0x1e0)](_0x3d0c91),hideTracks();while(_0x1f2c64[_0x479b48(0x215)])_0x1f2c64[_0x479b48(0x1fd)](_0x1f2c64[_0x479b48(0x215)]);let _0x4ecaaf=document[_0x479b48(0x1fa)](_0x479b48(0x208));_0x4ecaaf[_0x479b48(0x242)](_0x479b48(0x213),function(){var _0x4ff289=_0x479b48;this['mode']=_0x4ff289(0x20b),_0x1f2c64[_0x4ff289(0x1ee)][0x0][_0x4ff289(0x23c)]=_0x4ff289(0x20b);}),_0x4ecaaf[_0x479b48(0x22f)]=_0x479b48(0x1dc),_0x4ecaaf[_0x479b48(0x220)]=_0x2a3b02,_0x4ecaaf[_0x479b48(0x1f9)]=!![],_0x4ecaaf['src']=_0x41e3a2[_0x479b48(0x1fc)],_0x1f2c64[_0x479b48(0x219)](_0x4ecaaf),videosub[_0x479b48(0x246)](_0x1f2c64),openModal();},beforeVideoWithSubs,dom[_0x12fbcf(0x22a)]);}function videoWithSubsTrackSync(_0x265550=0x0){var _0x574025=_0x4074;hideTracks();let _0x2ac77d=getVideo();videosub[_0x574025(0x246)](_0x2ac77d,_0x265550);}modalLink()[_0x23d839(0x21c)]({'animatedIn':_0x23d839(0x202),'animatedOut':_0x23d839(0x20d),'color':_0x23d839(0x221),'beforeOpen':function(){playVideo();},'afterClose':function(){var _0x166aab=_0x23d839;pauseVideo(),$(_0x166aab(0x1e5))[_0x166aab(0x1df)](_0x166aab(0x203)),document[_0x166aab(0x1ea)]('trackSyncForm')[_0x166aab(0x1ff)](),$(_0x166aab(0x207))['fadeOut']();}});function openModal(){modalLink()['click']();}function closeModal(){var _0xea600d=_0x23d839;modalClose()[_0xea600d(0x235)]();}function playVideo(){getVideo()['play']();}function pauseVideo(){var _0x574163=_0x23d839;getVideo()[_0x574163(0x234)]();}function stopVideo(){var _0xdc5c76=_0x23d839;pauseVideo(),getVideo()[_0xdc5c76(0x230)]=0x0;}document[_0x23d839(0x242)](_0x23d839(0x226),function(_0x39540f){var _0x25886e=_0x23d839;_0x39540f[_0x25886e(0x1ed)]==='Escape'&&closeModal();});var lastTarget=null;function isFile(_0x27b608){var _0x5ef05b=_0x23d839,_0x572202=_0x27b608[_0x5ef05b(0x216)];for(var _0x130ce3=0x0;_0x130ce3<_0x572202['types'][_0x5ef05b(0x22b)];_0x130ce3++){if(_0x572202['types'][_0x130ce3]===_0x5ef05b(0x22c))return!![];}return![];}function _0x4074(_0x594a0c,_0x2b7f23){var _0x3c1771=_0x3c17();return _0x4074=function(_0x407425,_0x29d360){_0x407425=_0x407425-0x1dc;var _0x267403=_0x3c1771[_0x407425];return _0x267403;},_0x4074(_0x594a0c,_0x2b7f23);}window['addEventListener'](_0x23d839(0x237),function(_0x13778e){var _0x38a89b=_0x23d839;isFile(_0x13778e)&&(lastTarget=_0x13778e['target'],document['querySelector'](_0x38a89b(0x1f3))[_0x38a89b(0x203)][_0x38a89b(0x1f6)]='',document[_0x38a89b(0x1f2)](_0x38a89b(0x1f3))['style']['opacity']=0x1,document[_0x38a89b(0x1f2)](_0x38a89b(0x20a))[_0x38a89b(0x203)]['fontSize']=_0x38a89b(0x1f4));}),window['addEventListener'](_0x23d839(0x1f1),function(_0x17ef92){var _0xb7cd0c=_0x23d839;_0x17ef92['preventDefault'](),(_0x17ef92['target']===document||_0x17ef92['target']===lastTarget)&&(document[_0xb7cd0c(0x1f2)](_0xb7cd0c(0x1f3))[_0xb7cd0c(0x203)]['visibility']='hidden',document[_0xb7cd0c(0x1f2)]('#dropzone')[_0xb7cd0c(0x203)][_0xb7cd0c(0x227)]=0x0,document[_0xb7cd0c(0x1f2)](_0xb7cd0c(0x20a))[_0xb7cd0c(0x203)][_0xb7cd0c(0x1ec)]=_0xb7cd0c(0x22e));}),window[_0x23d839(0x242)](_0x23d839(0x232),function(_0x30262b){var _0xef865b=_0x23d839;_0x30262b[_0xef865b(0x214)]();}),window[_0x23d839(0x242)](_0x23d839(0x205),function(_0x734f5c){var _0x592299=_0x23d839;_0x734f5c['preventDefault'](),document['querySelector'](_0x592299(0x1f3))[_0x592299(0x203)][_0x592299(0x1f6)]=_0x592299(0x247),document['querySelector']('#dropzone')[_0x592299(0x203)][_0x592299(0x227)]=0x0,document[_0x592299(0x1f2)](_0x592299(0x20a))[_0x592299(0x203)][_0x592299(0x1ec)]='42px';if(_0x734f5c['dataTransfer'][_0x592299(0x224)]['length']==0x1){if(isExtensionValid(_0x734f5c[_0x592299(0x216)][_0x592299(0x224)][0x0][_0x592299(0x204)])){var _0x13632c=document[_0x592299(0x1ea)](_0x592299(0x211));_0x13632c[_0x592299(0x224)]=_0x734f5c[_0x592299(0x216)][_0x592299(0x224)],refreshFileName();}else this[_0x592299(0x240)]($['t']('file.dropfile.notavideo'));}});function isExtensionValid(_0x3b17c7){var _0x582be1=_0x23d839,_0x21fcc6=['webm',_0x582be1(0x1f7),_0x582be1(0x1e6),_0x582be1(0x1e7),_0x582be1(0x218),_0x582be1(0x21a),_0x582be1(0x23f),_0x582be1(0x228),_0x582be1(0x23b),'TS',_0x582be1(0x233),'qt','wmv',_0x582be1(0x1f8),'amv',_0x582be1(0x21f),'m4p',_0x582be1(0x21d),_0x582be1(0x1e4),_0x582be1(0x209),_0x582be1(0x244),'mpe',_0x582be1(0x1fe),'m2v',_0x582be1(0x21d),'3gp',_0x582be1(0x201),'flv',_0x582be1(0x20c),_0x582be1(0x1eb),_0x582be1(0x1e1),'f4b'],_0x2b58dd=getFileExt(_0x3b17c7);return _0x21fcc6[_0x582be1(0x245)](_0x2b58dd);}