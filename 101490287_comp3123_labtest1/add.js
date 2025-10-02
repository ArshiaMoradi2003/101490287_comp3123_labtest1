const fs = require("fs");
const path = require("path");

const logsDir = path.join(__dirname, "Logs");

if (!fs.existsSync(logsDir)){
    fs.mkdirSync(logsDir);
    console.log("Created Directory: Logs");
}

process.chdir(logsDir);

for (let i = 1; i <= 10; i++){
    const fileName = `log${i}.txt`;
    fs.writeFileSync(fileName, `Log file ${i} - ${new Date().toISOString()}\n`);
    console.log(fileName);
}