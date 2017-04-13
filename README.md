# googledrive-upload-script
A Google App Script that can drop files into a Google Drive folder.

In this script, I have placed all the files within the project. However, using JSON and a few modifications, we can use the same script to upload files from another website or form. Data should be sent using the POST action in the html. On the server side(code.gs) the data can be recieved in JSON with the help of doPost() function.

All the files except code.gs(which acts somewhat like the server) deliberately have a .html extension as Google App Scripts do not recognize .js , .css or other extensions.
