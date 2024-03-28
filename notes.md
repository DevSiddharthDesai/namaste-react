# React Element(Object) ===> HTML(Browser Understand)

# Root div HTML elements are replaced by root render.

# package.json is a configuration for NPM.

# Two types of packages - Dev Dependency and Main Dependency -> Dev Dependency is only required in Development mode not in production but Main Dependency goes to Production App.

# Difference between tilde(~) and caret(^) -

    Tilde(~) - We can accept only a patch release when updating our package.
    Caret(^) - We can accept minor releases and patch releases, but not a major release when updating our package.

# package-lock.json keeps exact track of versions installed like there exact version number.

# Transitive Dependency -> Suppose Parcel is package and it has its dependecies that goes into node_modules and this is called Transitive Dependency. That is why Node_modules contains so much packages.

# node_modules dependencies packages have its own package.json

# npm is mostly used to install a package and npx is used to execute a package.

# Parcel bundler takes care about multiple things :-

    # Dev Build
    # Local Server
    # File Watching Algorithm - written in C++
    # Caching - Faster Builds
    # Image Optimization
    # Minification
    # Bundling
    # Compress
    # Consistent Hashing
    # Code Splitting
    # Differential Bundling  - Support older browsers
    # Diagnostic
    # Tree Shaking - remove unnecessary code
    # Error

# JSX is not HTML inside JS but its HTML like syntax

# JSX is different and JS is different

# Normal JSX can be directly passed in root render but component needs angle brackets.

# Swiggy uses Config Driven UI

# Don't use Index as key

# Hooks are normal JS Functions given to us by React.

-> useState() -> Superpowerful state variable in React.
-> const [listOfThings] = useState(restaurantData); = let listOfThings;

-> Reconciliation Algorithm(React Fiber)
-> React Reconciliation -> https://github.com/acdlite/react-fiber-architecture
-> React Rendering in more deep - https://blog.isquaredsoftware.com/2020/05/blogged-answers-a-mostly-complete-guide-to-react-rendering-behavior/
-> Another One - https://www.developerway.com/posts/react-re-renders-guide
