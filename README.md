# DyCon: a Dynamic Favicon

DyCon.js is a JavaScript plugin that allows you to dynamically change the favicon of a webpage based on the user's color scheme preference.

## Usage
1. Download and include the `dycon` folder, and include the minified js file in your HTML code.:
    ```html
    <script src="/path/to/dycon/dycon.min.js"></script>
    ```
    Alterntively, you can also use the `dycon.js` file, which is not minified.

2. Create an instance of DyCon and call the `faviconUpdate` method:
    ```javascript
    const dyCon = new DyCon();

    const darkFavicon = 'path/to/darkPage-favicon.ico';
    const lightFavicon = 'path/to/lightPage-favicon.ico';
    const faviconID = 'favicon';
    const updateInterval = 5000; //example update time of 5 seconds

    dyCon.faviconUpdate(faviconID, darkFavicon, lightFavicon, updateInterval);
    ```

    Replace `faviconID` with the ID of your favicon element, and provide the paths to your dark and light favicons.
    If the updateInterval is set to false, the favicon will only be updated once when the page is loaded. Otherwise, the favicon will be updated every `updateInterval` milliseconds.

3. Update the darkFavicon and lightFavicon paths to match your project's file structure.
    Keep in mind the darkFavicon referrs to the favicon that will be displayed when the user's color scheme preference is set to dark, and the lightFavicon refers to the favicon that will be displayed when the user's color scheme preference is set to light.

    ```javascript

    const darkFavicon = './images/black-square.webp';
    const lightFavicon = './images/yellow-square.jpeg';
    ```

4. Demo + Testing
    A demo is available in the `demo` folder. To test the demo, open the `demo.html` file in your browser and toggle your color scheme preference between light and dark. This can be done on a Mac, in Settings > Appearance, or directly in the browser, if you are using OperaGX for example. The favicon should change accordingly.