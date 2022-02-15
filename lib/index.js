"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateID = void 0;
class UpdateID {
    getId() {
        const documentForm = document.forms;
        const formTitle = document.getElementsByClassName("title");
        const title = [];
        for (let i = 0; i < documentForm.length; i++) {
            const inputs = documentForm[i].getElementsByTagName('input');
            const inputData = [];
            const savetitle = formTitle[i].innerHTML;
            for (let j = 0; j < inputs.length; j++) {
                inputData[j] = inputs[j].id;
            }
            localStorage.setItem(savetitle, JSON.stringify(inputData));
        }
        for (let j = 0; j < formTitle.length; j++) {
            title[j] = formTitle[j].innerHTML;
        }
        localStorage.setItem("title", JSON.stringify(title));
    }
}
exports.UpdateID = UpdateID;
exports.default = UpdateID;
