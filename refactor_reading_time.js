const fs = require('fs');
const path = require('path');

const dir = 'e:/GSsoc contribution/openCSE/app';

function findFiles(dir, filter, fileList = []) {
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const fileStat = fs.statSync(filePath);
    if (fileStat.isDirectory()) {
      findFiles(filePath, filter, fileList);
    } else if (filter.test(filePath)) {
      fileList.push(filePath);
    }
  });
  return fileList;
}

const pageFiles = findFiles(dir, /page\.tsx$/);

pageFiles.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  if (content.includes('<ReadingTime chapterKey={chapter.id} />')) {
    
    // Check if it already has the new format to prevent double running
    if (content.includes('gap-x-4')) {
        return;
    }

    let newContent = content.replace(
      /<div className="flex items-center justify-between">\s*<p className=\{`text-2xl mt-\[-8px\] \$\{righteous\.className\}`\}>\s*\{chapter\.title\}\s*<\/p>/g,
      `<div className="flex flex-wrap items-start justify-between gap-y-2">\n          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-[-8px]">\n            <p className={\`text-2xl \${righteous.className}\`}>\n              {chapter.title}\n            </p>\n            <ReadingTime chapterKey={chapter.id} />\n          </div>`
    );

    newContent = newContent.replace(
      /<\/div>\s*<ReadingTime chapterKey=\{chapter\.id\} \/>/g,
      `</div>`
    );
    
    if (content !== newContent) {
        fs.writeFileSync(file, newContent, 'utf8');
        console.log('Updated:', file);
    }
  }
});
