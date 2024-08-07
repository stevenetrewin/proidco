// Define the sceneToJSON function (or variable) here
function sceneToJSON(scene) {
    // Implementation of the function that converts a scene object to JSON
    return JSON.stringify(scene);
}

// Export the sceneToJSON function so it can be used in other modules
//
// This line makes the sceneToJSON function available for import in other files.
// Example usage in another file:
// const { sceneToJSON } = require('./path/to/this/file');
exports.sceneToJSON = sceneToJSON;
