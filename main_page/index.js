$('#btn').click(function(event){
    event.preventDefault();
    let selectedDate = $('#date').val();
    const serverKey = 'aT1LRxrFFc2ggV3gXlcENwmFDfTq3ueFbmMXl9pa&date='
    try{
       $.ajax({
        url: `https://api.nasa.gov/planetary/apod?api_key=${serverKey}${selectedDate}`,
        success: function (result){
            showToUser(result)
            $('#return').click(function(){
                document.location.reload(true);
            })
        }  
    })
    } catch (erro) {
        console.log(erro)
    }
})

//Essa função é para mostrar ao usuário os valores pegos pela requisição

function showToUser(result){
    //Estrutura condicional para apresentar elemento html para imagem ou vídeo a depender do media_type
    if(result.media_type == 'image'){
        $('main').html(`<picture><img id="image" src="${result.url}" alt="${result.title}"></picture><h2>${result.title}</h2><p id="explanation">${result.explanation}</p><input type="button" id="return" value="Return">`)
    } else {
        $('main').html(`<picture><iframe src="${result.url}" id="video"></iframe></picture><h2>${result.title}</h2><p id="explanation">${result.explanation}</p><input type="button" id="return" value="Return">`)
    }
}



/*

Linhas 19 até 23:

Realizei teste e com a operação ternária funciona perfeitamente, da seguinte forma:

$('#video_image').html(result.media_type == 'image'? `<img id="image" src="${result.url}" alt="${result.title}">` : `<iframe src="${result.url}" id="video"></iframe>`)

Ocorre que achei que fica bem mais explicativa a leitura da forma como deixei

*/