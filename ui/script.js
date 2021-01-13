const electron = require('electron');
const fs = window.require('fs');
const path = window.require('path');
// const {app, BrowserWindow} = require('electron')
// const  BrowserWindow  = require('electron')
//const BrowserWindow = electron.BrowserWindow;
let addContact = document.getElementById("addContact");
addContact.addEventListener('click', function () {
    let addWindow = new BrowserWindow({
        width: 380,
        height: 665,
        webPreferences: {
            nodeIntegration: true ,
            enableRemoteModule: true
        }
    });
    addWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'ui/onglet2.html'),
        protocol: 'file:',
        slashes: true
    }));
    console.log("work!!")
})

function show(id) {
    let num = document.getElementById(id).value;
    document.getElementById("show").value += num;
}

function del() {
    var a = document.getElementById("show").value;
    a.value.slice(0, -1)
    document.getElementById("show").value = a;
}