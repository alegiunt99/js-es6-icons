function createIconBox(element) {
    //creo il box dove inserire le icone e il nome 
    const IconBox = document.createElement('div');
    IconBox.className = "icon-box";

    IconBox.innerHTML =`
        <div id="icon">
            <i class="${element.family} ${element.prefix}${element.name}" style="color: ${element.color};"></i>
        </div>
        <div id="icon-name">
            <p>${element.name}</p>
        </div>
        `;
    
    return IconBox;
}