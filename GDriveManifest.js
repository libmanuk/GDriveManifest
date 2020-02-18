// Adapted from Code written https://www.acrosswalls.org/ortext-datalinks/list-google-drive-folder-file-names-urls/ - accessed 2020-02-18
// Above code designated CCO 1.0 Universal Public Domain https://www.acrosswalls.org/about/ - accessed 2020-02-18
// Replace the text target-folder below with the folder for which you want a listing
// -----  copy the code below this line to insert in Google Sheet code editor  ----- 

function gdrivemanifest() {
  var gdrive_folder_name = 'target-folder';
  var gdrive_folder_list = 'manifest for folder ' + gdrive_folder_name;
  var folders = DriveApp.getFoldersByName(gdrive_folder_name)
  var folder = folders.next();
  var contents = folder.getFiles();
  
  var ss = SpreadsheetApp.create(gdrive_folder_list);
  var sheet = ss.getActiveSheet();
  sheet.appendRow( ['filename', 'gdrivelink'] );
  
  var file;
  var filename;
  var gdrivelink;
  var row;
  while(contents.hasNext()) {
    file = contents.next();
    name = file.getName();
    link = file.getUrl();
    sheet.appendRow( [name, link] );     
  }  
};
