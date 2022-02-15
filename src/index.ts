class UpdateID {
    getId() {


        const documentForm = document.forms
        const formTitle = document.getElementsByClassName("title")
        const title :any= []
        for (let i: any = 0; i < documentForm.length; i++) {
            const inputs = documentForm[i].getElementsByTagName('input');
            const inputData = []
            const savetitle = formTitle[i].innerHTML
            for (let j: any = 0; j < inputs.length; j++) {

                inputData[j] = inputs[j].id

            }

            localStorage.setItem(savetitle, JSON.stringify(inputData))
          

        }
        for(let j:any=0;j<formTitle.length;j++){
            title[j]=formTitle[j].innerHTML
        }
        localStorage.setItem("title", JSON.stringify(title))

    }
}
export default UpdateID;
export { UpdateID };