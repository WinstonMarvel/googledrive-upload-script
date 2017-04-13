/* The script is deployed as a web app and renders the form */
function doGet(e) {

  var output= HtmlService.createTemplateFromFile('form')
      .evaluate();
  output.setTitle('A simple ulpoad script');
  return output;
}



 /* Google Drive File Upload */
function uploadFileToGoogleDrive(data, file, name, taskid) {
 
  try {
 
    var dropbox = "dropbox for app";
    var folder, folders = DriveApp.getFoldersByName(dropbox);
 
    if (folders.hasNext()) {
      folder = folders.next();
    } else {
      folder = DriveApp.createFolder(dropbox);
    }
 
    var contentType = data.substring(5,data.indexOf(';')),
        bytes = Utilities.base64Decode(data.substr(data.indexOf('base64,')+7)),
        blob = Utilities.newBlob(bytes, contentType, file);
 
    folder.createFolder([name, taskid].join(" ")).createFile(blob);
 
    return "Your File Was Uploaded Successfully";
 
  } catch (f) {
    return f.toString();
  }
 
}



/* Google script include functions */ 
function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename)
      .getContent();
}
