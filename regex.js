/**
     * @function
     * @desc convert string to regex Obj
     * @param {String} regexPattern
     */
    public getRegExpObjFromString(regexPattern) {
        if(!regexPattern) {
            return;
        }
        
        let flags: any = /(?!^)[^\/]+$/gi.exec(regexPattern);
  
        if (flags && flags.length) {
            flags = flags[0];
        } else {
            flags = '';
        }
        
        regexPattern = /[^\/].+(?=\/)/.exec(regexPattern)[0];
        
        return new RegExp(regexPattern, flags);
    }
