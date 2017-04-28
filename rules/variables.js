module.exports = {
    rules: {
        // enforce or disallow variable initializations at definition
        "init-declarations": 0,

        // disallow the catch clause parameter name being the same as a
        // variable in the outer scope
        "no-catch-shadow": 0,

        // disallow deletion of variables
        "no-delete-var": "error",

        // disallow labels that share a name with a variable
        "no-label-var": 0,

        // disallow shadowing of names such as arguments
        "no-shadow-restricted-names": "error",

        // disallow declaration of variables already declared in the outer
        // scope
        "no-shadow": "error",

        // disallow use of undefined when initializing variables
        "no-undef-init": 0,

        // disallow use of undeclared variables unless mentioned in a
        // /*global */ block
        "no-undef": "error",

        // disallow use of undefined variable
        "no-undefined": 0,

        // disallow declaration of variables that are not used in the code
        "no-unused-vars": [ 1, {
            "vars": "local",
            "args": "after-used"
        } ],

        // disallow use of variables before they are defined
        "no-use-before-define": "error",
    },
}