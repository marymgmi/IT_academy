const fs = require('fs-extra');

const FOLDER_1 = './folder1';
const FOLDER_2 = './folder2';
const FOLDER_3 = './folder3';

const FILE_1 = 'file1.txt';
const DELIMITER = '/';

fs.emptyDirSync(FOLDER_1);

fs.ensureFileSync(FOLDER_1 + DELIMITER + FILE_1); 

fs.emptyDirSync(FOLDER_2);

fs.moveSync(FOLDER_1 + DELIMITER + FILE_1, FOLDER_2 + DELIMITER + FILE_1);

fs.emptyDirSync(FOLDER_3);

fs.copySync(FOLDER_2 + DELIMITER + FILE_1, FOLDER_3 + DELIMITER + FILE_1);

fs.removeSync(FOLDER_2 + DELIMITER + FILE_1);

fs.removeSync(FOLDER_3 + DELIMITER + FILE_1);

fs.removeSync(FOLDER_1);

fs.removeSync(FOLDER_2);

fs.removeSync(FOLDER_3);