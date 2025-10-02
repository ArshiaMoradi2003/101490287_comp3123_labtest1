// Question1
function lowerCaseWords(mixedArray){
    return new Promise((resolve, reject) => {
        if (!Array.isArray(mixedArray)) {
            return reject(new Error("Input must be an array"));
        }
        const stringsOnly = mixedArray.filter((x) => typeof x === "string");
        if (stringsOnly.length === 0){
            return reject(new Error("No string values found to lowercase"));
        }
        const lowered = stringsOnly.map((s) => s.toLowerCase());
        resolve(lowered);
    });
}
const input = ["HELLO", 42, true, 25, false, "WORLD"];
lowerCaseWords(input)
.then((result) => {
    console.log("Input:", input);
    console.log("Output:", result);

})
.catch((err) => console.error("Error:", err.message));