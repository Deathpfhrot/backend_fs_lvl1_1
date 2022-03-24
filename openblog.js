const fs = require("fs")

fs.open("./blog1.txt", 'r+', (err, fd) => {
    if (err) {
        console.log("Fehler beim auslesen");
        return
    }
    console.log(fd)
    fs.writeFile(fd, "All must die together", () => {
        console.log('file overwritten');
    })

    fs.close(fd, () => {
        console.log('file closed');
    })
})

fs.writeFile("blog2.txt", "some random shit", (err, dd) => {
    if (err) {
        console.log("Not working");
        return
    }
    console.log(dd);
})

fs.mkdir("assets", (err, dd) => { //erstellen eines ordners
    if (err) {
        console.log("no folder");
    }
    console.log(dd);
})

fs.rmdir("assets", (err, dd) => { //löschen eines ordners
    if (err) {
        console.log("delete folder");
    }
    console.log(dd);
})

fs.writeFile("delete.txt", "", (err, dd) => { //zum erstellen von datein
    if (err) {
        console.log("Created file");
        return
    }
    console.log(dd);
})

fs.unlink("delete.txt", (err, dd) => { //zum löschne von datein
    if (err) {
        console.log("Not deleted");
    }
    console.log(dd);
})

fs.open("delete1.txt", "w+", (err, mm) => {
    if (err) {
        console.log("NotCreated second delete");
    }

    fs.close(mm);
    console.log("Created second delete");
})

fs.writeFile('Hello.txt', 'fuc.king shit', (err, II) => {
    if (err) {
        console.log("no pressure");
    }
    console.log(II);
})

fs.rename('Hello.txt', 'HelloWorld.txt', (err, QQ) => { // umschreiben des files
    if (err) {
        console.log("no rename");
    }
    console.log(QQ);
})