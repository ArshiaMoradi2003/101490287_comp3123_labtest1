function resolvedPromise() {
    return new Promise((resolve) =>{
        setTimeout(() => resolve("resolvedPromise: success after 500ms"), 500);
    });
}
function rejectedPromise(){
    return new Promise((_, reject) => {
        setTimeout(() => reject(new Error("rejectedPromise: failure after 500ms")), 500);

    });
}

resolvedPromise()
.then((msg) => console.log(msg))
.catch((err) => console.error(err.message))
.finally(() => console.log("resolvedPromise done"));

rejectedPromise()
.then((msg) => console.log(msg))
.catch((err) => console.error(err.message))
.finally(() => console.log("rejectionPromise done"))