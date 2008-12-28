function formvalidator()
{
      this.presetRULESarray = new Array();
      this.errMSGarray = new Array();
      this.errCTRLIDSarray = new Array();

      // carriage return/line feeder is differently managed by operating systems
      this.CRLF = ( navigator.userAgent.toLowerCase().indexOf( "windows" ) != -1 ) ? "\r\n" : "\n" ;

      // these members will be used to catch the response from validation and
      // manage it through some output function
      this.outputResponseFn ;
      this.responseValue = false ;
      this.errNUMBER = 0 ;
}

formvalidator.prototype.getERRORSnumber = function()    { return this.errNUMBER ; }

formvalidator.prototype.flushERRORSarrays = function()
{
      while( this.errMSGarray.length > 0 ) this.errMSGarray.pop() ;
      while( this.errCTRLIDSarray.length > 0 ) this.errCTRLIDSarray.pop() ;
}

formvalidator.prototype.getResponse = function() { return this.responseValue ; }

formvalidator.prototype.getRULESarrayLENGTH = function()
{
    var l = 0 ;
    for( var currentKEY in this.presetRULESarray )
    {
         l++ ;
    }

    return l ;
}

formvalidator.prototype.getRulesList = function( bPLAINtextMODE ) // switch between PLAIN or HTML mode
{
    if ( this.getRULESarrayLENGTH() == 0 ) return false ;
    else
    {
        var retSTR = "" ;
        
        for( var currentKEY in this.presetRULESarray )
        {
              var packingARRAY = this.presetRULESarray[ currentKEY ].split( "@@" ); ;
              var CTRLid = packingARRAY[0] ;
              var regexp = packingARRAY[1] ;
        
              retSTR += currentKEY + " : " + CTRLid + " - " + regexp ;
              retSTR += ( bPLAINtextMODE ) ? this.CRLF : "<br>" ;
        }
        
        return retSTR ;
    }
}

formvalidator.prototype.AddRule = function( CTRLid, regExpression, errMSG )
{
    var bFOUND = false ;
    if ( CTRLid.length == 0 || regExpression.length == 0 ) return false ;

    for( var currentKEY in this.presetRULESarray )
    {
    	   if ( currentKEY == CTRLid )
    	   {
              bFOUND = true ; // there must be one only entry per key
              break ;
         }
    }
    
    if ( !bFOUND )
    {
        this.errMSGarray[ CTRLid ] = errMSG ;
        this.presetRULESarray[ CTRLid ] = regExpression ;

        // checks whether contents have been put into the array
        return ( this.presetRULESarray[ CTRLid ] == regExpression ) ? true : false ;
    }
    else return false ; // ... that is, returns FALSE because the input key was already added
}

formvalidator.prototype.ModifyRule = function( CTRLid, regExpression, errMSG )
{
    var bFOUND = false ;
    if ( CTRLid.length == 0 || regExpression.length == 0 ) return false ;

    for( var currentKEY in this.presetRULESarray )
    {
    	   if ( currentKEY == CTRLid )
    	   {
              this.presetRULESarray[ CTRLid ] = regExpression ;
              
              // checks if the value, associated to key, has been really modified
              bFOUND = ( this.presetRULESarray[ CTRLid ] == regExpression ) ? true : false ;
              
              if ( bFOUND )
              {
                  this.errMSGarray[ CTRLid ] = errMSG ;
              }
              break ;
         }
    }
    
    return bFOUND ;
}

formvalidator.prototype.DeleteRule = function( CTRLid )
{
    if ( CTRLid.length == 0 ) return false ;

    for( var currentKEY in this.presetRULESarray )
    {
    	   if ( currentKEY == CTRLid )
    	   {
              delete this.presetRULESarray[ CTRLid ] ;
              break ;
         }
    }
}

formvalidator.prototype.check = function()
{
    if ( this.getRULESarrayLENGTH() == 0 ) return false ;
    else
    {
        this.errNUMBER = 0 ;
    
        for( var currentKEY in this.presetRULESarray )
        {
                    var CTRLid = currentKEY ;
                    var regEXPR = this.presetRULESarray[ currentKEY ] ;
                    
                    if ( CTRLid.length > 0 && regEXPR.length > 0 )
                    {
                        var CTRL = document.getElementById( CTRLid );
                        if ( CTRL != null )
                        {
                            var bOK = false ;
                            
                            switch( CTRL.tagName.toLowerCase() )
                            {
                                case "input" :
                                    var INPUTvalue = CTRL.value ;
                                    RegExpOBJ = new RegExp( regEXPR ) ;
                                    bOK = this.responseValue = RegExpOBJ.test( INPUTvalue );
                                break;
                                case "select" :
                                    var INPUTvalue = CTRL.options[ CTRL.selectedIndex ] ;
                                    RegExpOBJ = new RegExp( regEXPR ) ;
                                    bOK = this.responseValue = RegExpOBJ.test( INPUTvalue );
                                break;
                                case "td" :
                                    var INPUTvalue = CTRL.innerHTML ;
                                    RegExpOBJ = new RegExp( regEXPR ) ;
                                    bOK = this.responseValue = RegExpOBJ.test( INPUTvalue );
                                break;
                            }

                            if ( !bOK )
                            {
                                 this.errNUMBER++ ;
                                 this.errCTRLIDSarray.push( "" + CTRLid );
                            }
                        }
                    }
        }
        
        return ( this.errCTRLIDSarray.length > 0 ) ? false : true ;
    }
}

formvalidator.prototype.outputResponseFn = function()
{
        var responseSTR = "" ;
        
        if ( this.errCTRLIDSarray.length > 0 )
        {
            for( var ID in this.errCTRLIDSarray )
            {
                var key = this.errCTRLIDSarray[ ID ] ;
                var errMSG = this.errMSGarray[ key ] ;

                var CTRL = document.getElementById( key ) ;
                
                if ( CTRL != null )
                {
                    if ( errMSG.length > 0 )
                    {
                            CTRL.style.backgroundColor = "#FF6666" ;
                            CTRL.style.color = "black" ;

                            responseSTR += errMSG + "\r\n" ;
                    }
                    else
                    {
                            CTRL.style.backgroundColor = "white" ;
                            CTRL.style.color = "black" ;
                    }
                }
            }
        }

        this.flushERRORSarrays() ;
        return responseSTR ;
}
