function ebStdBannerFlash_24174387_04466179315932095_DoFSCommand(command,args){ try{ if(!args||args=='null')args='';command = command.replace(/FSCommand:/ig,''); return EBG.ads['24174387_04466179315932095']._CCs['ebStdBannerFlash_24174387_04466179315932095']._handleMessage(command,args,'ebStdBannerFlash_24174387_04466179315932095');}catch(e){if(window.mmFSExceptionAlert)mmFSExceptionAlert('Command: '+command+'\nargs: '+args.toString()+'\n\nexception in DoFS func:\n'+e.message)}}function ebIsFlashExtInterfaceExist(){return true;}