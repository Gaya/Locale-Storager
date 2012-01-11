/*
 *    Locale Storager
 *    A little script that helps in managing the localeStorage of the browser.
 *    v 0.8 - January 10th 2012
 *    By Gaya Kessler - http://www.gayadesign.com
 *
 *    Usage:
 *    The script stores strings and arrays (objects) in the browser's localeStorage. Also an easy way to parse the
 *    values and get the logical representation in Javascript variables.
 *
 *    localeStorager.store(key, variable)
 *    Store a variable in the localeStorage using a key.
 *
 *    localeStorager.get(key)
 *    Get the Javascript representation of the value using the key.
 *
 *    localeStorager.remove(key)
 *    Remove the value from the localeStorage.
 */

var localeStorager = {
    store: function (key, variable) {
        //check the kind of variable that has been put in.
        localStorage.setItem(key, JSON.stringify(variable));
    },

    get: function (key) {
        //get the value of the key.
        return JSON.parse(localStorage.getItem(key));
    },

    remove: function (key) {
        //empty a localeStorage value
        localStorage.removeItem(key);

        return true;
    }
};