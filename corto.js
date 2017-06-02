// v0.1.0

(function( context ){

    function corto(el, root){

        if( root && !root.tagName ) root = document;

        if( typeof el == 'string' ){
            if( /^[#\.]?[\w-]+$/.test(el) ){
                if( el[0] == '#' )
                    el = [ document.getElementById( el.substr(1) ) ];
                else if( el[0] == '.' )
                    el = (root||document).getElementsByClassName( el.substr(1) );
                else
                    el = (root||document).getElementsByTagName(el);
            } else
                el = (root||document).querySelectorAll(el);
        }

        else if( el instanceof Array == false ){
            el = (root||document).querySelectorAll(el);
        }

        var a = [];
        var i = el.length;
        while(i--) a[i] = el[i];

        a.__loopCounter = 0;
        a.loop = loop;
        a.node = null;

        return a;

    }

    function loop(){
        if( this.__loopCounter == this.length ){
            this.node = null;
            this.__loopCounter = 0;
        } else {
            this.node = this[this.__loopCounter++];
        }
        return this.node;
    }

    var _$$ = context.$$;
    corto.noConflict = function(){
        if ( context.$$ === corto ) context.$$ = _$$;
    };

    context.corto = context.$$ = corto;

}( this || window ));
