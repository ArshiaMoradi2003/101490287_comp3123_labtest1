const fs = require("fs");
const path = require("path");

const logsDir = path.join(__dirname,"Logs");

if (fs.existsSync(logsDir)){
    const files = fs.readdirSync(logsDir);

    if (files.length === 0){
        console.log("Log directory is  Empty")
    } else {
        for (const file of files){
            const filepath = path.join(logsDir, file);
            fs.unlinkSync(filepath);
            console.log(`deleted: ${file}`);
        }
    }
    fs.rmdirSync(logsDir)
    console.log("Removed Logs directory");
} else {
    console.log("Logs directory does not exist");
}