/*
    JS String Library is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 2 of the License.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

//////////////////////////////////////////////////////////////////////
function addslashes()
{
    return this.replace( '/(["\'\])/g', "\\$1" ).replace( '/\0/g', "\\0" );
}

function stripslashes()
{
    return this.replace('/\0/g', '0').replace('/\(.)/g', '$1' );
}

function replaceAll( s1, s2 ) { return this.split( s1 ).join( s2 ) ; }

/*
function intrude( intruderSTR )
{
    var outputSTR = "" ;
    var l = this.length ;
    
    for( i = 0 ; i < l ; i++ )
    {
        outputSTR += this.charAt( i );
        if ( i < ( l - 1 ) ) outputSTR += intruderSTR ;
    }
    
    return outputSTR ;
}
*/

function stripOutTags()
{
    var str = this ;
    var bracketsSEMAPHORE = 0 ;
    var resultSTR = "" ;
    
    var l = str.length ;
    
    for( i = 0 ; i < l ; i++ )
    {
        var ch = str.charAt( i ) ;
    
        if ( ch == "<" ) ++bracketsSEMAPHORE ;
        else if ( ch == ">" ) --bracketsSEMAPHORE ;
        else if ( bracketsSEMAPHORE == 0 ) resultSTR += ch ;
    }
    
    return resultSTR ;
}

function html_entity_decode()
{ 
    var str = this.replaceAll( "&lsquo;", "�" );
    str = str.replaceAll( "&ldquo;", "�" );
    str = str.replaceAll( "&quot;", "\"" );

    str = str.replaceAll( "&agrave;", "�" );
    str = str.replaceAll( "&aacute;", "�" );
    str = str.replaceAll( "&acirc;", "�" );
    str = str.replaceAll( "&#259;", "�" );
    str = str.replaceAll( "&auml;", "�" );
    str = str.replaceAll( "&#314;", "�" );
    str = str.replaceAll( "&#Agrave;", "�" );
    str = str.replaceAll( "&#Aacute;", "�" );
    str = str.replaceAll( "&#Acirc;", "�" );
    str = str.replaceAll( "&#258;", "�" );
    str = str.replaceAll( "&#Auml;", "�" );
    str = str.replaceAll( "&#313;", "�" );

    str = str.replaceAll( "&#263;", "�" );
    str = str.replaceAll( "&#262;", "�" );

    str = str.replaceAll( "&ccedil;", "�" );
    str = str.replaceAll( "&Ccedil;", "�" );

    str = str.replaceAll( "&#egrave;", "�" );
    str = str.replaceAll( "&eacute;", "�" );
    str = str.replaceAll( "&#281;", "�" );
    str = str.replaceAll( "&euml;", "�" );
    str = str.replaceAll( "&Egrave;", "�" );
    str = str.replaceAll( "&Eacute;", "�" );
    str = str.replaceAll( "&#280;", "�" );
    str = str.replaceAll( "&Euml;", "�" );

    str = str.replaceAll( "&igrave;", "�" );
    str = str.replaceAll( "&iacute;", "�" );
    str = str.replaceAll( "&icirc;", "�" );
    str = str.replaceAll( "&#271;", "�" );
    str = str.replaceAll( "&Igrave;", "�" );
    str = str.replaceAll( "&Iacute;", "�" );
    str = str.replaceAll( "&Icirc;", "�" );
    str = str.replaceAll( "&#270;", "�" );

    str = str.replaceAll( "&#272;", "�" );

    str = str.replaceAll( "&#324;", "�" );
    str = str.replaceAll( "&#323;", "�" );

    str = str.replaceAll( "&oelig;", "�" );

    str = str.replaceAll( "&ograve;", "�" );
    str = str.replaceAll( "&oacute;", "�" );
    str = str.replaceAll( "&ocirc;", "�" );
    str = str.replaceAll( "&#337;", "�" );
    str = str.replaceAll( "&#ouml;", "�" );
    str = str.replaceAll( "&Ograve;", "�" );
    str = str.replaceAll( "&Oacute;", "�" );
    str = str.replaceAll( "&Ocirc;", "�" );
    str = str.replaceAll( "&#336;", "�" );
    str = str.replaceAll( "&Ouml;", "�" );

    str = str.replaceAll( "&ugrave;", "�" );
    str = str.replaceAll( "&uacute;", "�" );
    str = str.replaceAll( "&ucirc;", "�" );
    str = str.replaceAll( "&uuml;", "�" );
    str = str.replaceAll( "&Ugrave;", "�" );
    str = str.replaceAll( "&Uacute;", "�" );
    str = str.replaceAll( "&Ucirc;", "�" );
    str = str.replaceAll( "&Uuml;", "�" );

    str = str.replaceAll( "&amp;", "&" );

    return str.replaceAll( "&#39;", "'" );
}

function html_entity_encode()
{ 
    var str = this.replaceAll( "\"", "&quot;" );
    str = str.replaceAll( "�", "&lsquo;" );
    str = str.replaceAll( "�", "&ldquo;" );

    str = str.replaceAll( "�", "&agrave;" );
    str = str.replaceAll( "�", "&aacute;" );
    str = str.replaceAll( "�", "&acirc;" );
    str = str.replaceAll( "�", "&#259;" );
    str = str.replaceAll( "�", "&auml;" );
    str = str.replaceAll( "�", "&#314;" );
    str = str.replaceAll( "�", "&#Agrave;" );
    str = str.replaceAll( "�", "&#Aacute;" );
    str = str.replaceAll( "�", "&#Acirc;" );
    str = str.replaceAll( "�", "&#258;" );
    str = str.replaceAll( "�", "&#Auml;" );
    str = str.replaceAll( "�", "&#313;" );


    str = str.replaceAll( "�", "&#263;" );
    str = str.replaceAll( "�", "&#262;" );

    str = str.replaceAll( "�", "&ccedil;" );
    str = str.replaceAll( "�", "&Ccedil;" );

    str = str.replaceAll( "�", "&#egrave;" );
    str = str.replaceAll( "�", "&eacute;" );
    str = str.replaceAll( "�", "&#281;" );
    str = str.replaceAll( "�", "&euml;" );
    str = str.replaceAll( "�", "&Egrave;" );
    str = str.replaceAll( "�", "&Eacute;" );
    str = str.replaceAll( "�", "&#280;" );
    str = str.replaceAll( "�", "&Euml;" );

    str = str.replaceAll( "�", "&igrave;" );
    str = str.replaceAll( "�", "&iacute;" );
    str = str.replaceAll( "�", "&icirc;" );
    str = str.replaceAll( "�", "&#271;" );
    str = str.replaceAll( "�", "&Igrave;" );
    str = str.replaceAll( "�", "&Iacute;" );
    str = str.replaceAll( "�", "&Icirc;" );
    str = str.replaceAll( "�", "&#270;" );

    str = str.replaceAll( "�", "&#272;" );

    str = str.replaceAll( "�", "&#324;" );
    str = str.replaceAll( "�", "&#323;" );

    str = str.replaceAll( "�", "&oelig;" );

    str = str.replaceAll( "�", "&ograve;" );
    str = str.replaceAll( "�", "&oacute;" );
    str = str.replaceAll( "�", "&ocirc;" );
    str = str.replaceAll( "�", "&#337;" );
    str = str.replaceAll( "�", "&#ouml;" );
    str = str.replaceAll( "�", "&Ograve;" );
    str = str.replaceAll( "�", "&Oacute;" );
    str = str.replaceAll( "�", "&Ocirc;" );
    str = str.replaceAll( "�", "&#336;" );
    str = str.replaceAll( "�", "&Ouml;" );

    str = str.replaceAll( "�", "&ugrave;" );
    str = str.replaceAll( "�", "&uacute;" );
    str = str.replaceAll( "�", "&ucirc;" );
    str = str.replaceAll( "�", "&uuml;" );
    str = str.replaceAll( "�", "&Ugrave;" );
    str = str.replaceAll( "�", "&Uacute;" );
    str = str.replaceAll( "�", "&Ucirc;" );
    str = str.replaceAll( "�", "&Uuml;" );

    str = str.replaceAll( "&", "&amp;" );

    return str.replaceAll( "'", "&#39;" );
}

function reverse()
{
    var retSTR = "" ;
    
    for( i = ( this.length - 1 ) ; i >= 0 ; i-- )
    {
        retSTR += this.charAt( i );
    }
    
    return retSTR ;
}

function embedQuotes()
{
      var str = this.replaceAll( "\"", "\\\"" ) ;
      return str.replaceAll( "'", "\'" ) ;
}

function isNumber()
{
    var regularEXPR = new RegExp( "^[0-9.,\+\-]{1,}$" ) ;
    return regularEXPR.test( this );
}

function onlyDigits()
{
    var regularEXPR = new RegExp( "^[0-9]{1,}$" ) ;
    return regularEXPR.test( this );
}

function isAlpha()
{
    var regularEXPR = new RegExp( "^[a-zA-z]{1,}$" ) ;
    return regularEXPR.test( this );
}

function isAlphaLower()
{
    var regularEXPR = new RegExp( "^[a-z]{1,}$" ) ;
    return regularEXPR.test( this );
}

function isAlphaUpper()
{
    var regularEXPR = new RegExp( "^[A-Z]{1,}$" ) ;
    return regularEXPR.test( this );
}

function isAlphanumeric()
{
    var regularEXPR = new RegExp( "^[a-zA-Z0-9]{1,}$" ) ;
    return regularEXPR.test( this );
}

function testME( regularEXPRESSION )
{
    var regularEXPR = new RegExp( regularEXPRESSION ) ;
    return regularEXPR.test( this );
}

function intME() { return parseInt( this ); }
function floatME() { return parseFloat( this ); }

function utf8_encode()
{
        string = this.replace(/\r\n/g,"\n");

        var utftext = "";

        for (var n = 0; n < string.length; n++)
        {
            var c = string.charCodeAt(n);

            if (c < 128) { utftext += String.fromCharCode(c); }
            else if ( ( c > 127 ) && ( c < 2048 ) )
            {
                utftext += String.fromCharCode((c>>6)|192);
                utftext += String.fromCharCode((c&63)|128);
            }
            else
            {
                utftext += String.fromCharCode((c>>12)|224);
                utftext += String.fromCharCode(((c>>6)&63)|128);
                utftext += String.fromCharCode((c&63)|128);
            }
        }

        return utftext ;
}

function utf8_decode()
{
        var string = "";
        var i = 0;
        var c = c1 = c2 = 0;

        var utftext = this ;

        while ( i < utftext.length )
        {
            c = utftext.charCodeAt(i);

            if (c < 128)
            {
                string += String.fromCharCode(c);
                i++;
            }
            else if((c > 191) && (c < 224))
            {
                c2 = utftext.charCodeAt(i+1);
                string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
                i += 2;
            }
            else
            {
                c2 = utftext.charCodeAt(i+1);
                c3 = utftext.charCodeAt(i+2);
                string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
                i += 3;
            }

        }

        return string;
}

function euclideandistancefrom( toSTR )
{
    var fromSTR = this ;

    if ( fromSTR.length != toSTR.length ) return -1 ;
    else
    {
        var sum = 0 ;
        for( i = 0 ; i < fromSTR.length ; i++ )
        {
            var fromCHARval = fromSTR.charCodeAt( i ) ;
            var toCHARval = toSTR.charCodeAt( i ) ;
            
            // compute distance in Euclidean metric
            sum += Math.abs( fromCHARval - toCHARval ) ;
        }
    
        return sum ;
    }
}

function fromSTRINGtoURL()
{
    var s = this.replaceAll( "&", "%46" ) ;
    s = s.replaceAll( " ", "%20" ) ;
    s = s.replaceAll( "%", "%25" ) ;
    s = s.replaceAll( "=", "%3D" ) ;

    return s ;
}

function fromURLtoSTRING()
{
    var s = this.replaceAll( "%46", "&" ) ;
    s = s.replaceAll( "%20", " " ) ;
    s = s.replaceAll( "%25", "%" ) ;
    s = s.replaceAll( "%3D", "=" ) ;

    return s ;
}

String.prototype.fromSTRINGtoURL = fromSTRINGtoURL // turn ambiguous chars for URLs into number codes
String.prototype.fromURLtoSTRING = fromURLtoSTRING // ... back

String.prototype.trim = function()  { return this.replace(/^\s+|\s+$/g,""); }
String.prototype.ltrim = function() { return this.replace(/^\s+/,""); }
String.prototype.rtrim = function() { return this.replace(/\s+$/,""); }

// String.prototype.intruder = intruder ;
String.prototype.stripOutTags = stripOutTags ;
String.prototype.embedQuotes = embedQuotes ;
String.prototype.reverse = reverse ;

String.prototype.intME = intME ;
String.prototype.floatME = floatME ;

String.prototype.addslashes = addslashes ;
String.prototype.stripslashes = stripslashes ;
String.prototype.replaceAll = replaceAll ;

String.prototype.euclideandistancefrom = euclideandistancefrom ;

String.prototype.html_entity_decode = html_entity_decode ;
String.prototype.html_entity_encode = html_entity_encode ;

String.prototype.isNumber = isNumber ;
String.prototype.isAlpha = isAlpha ;
String.prototype.isAlphaLower = isAlphaLower ;
String.prototype.isAlphaUpper = isAlphaUpper ;
String.prototype.isAlphanumeric = isAlphanumeric ;

String.prototype.testME = testME ;

String.prototype.onlyDigits = onlyDigits ;

String.prototype.utf8_encode = utf8_encode ;
String.prototype.utf8_decode = utf8_decode ;
