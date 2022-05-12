$('#btn').click(function(event){
    event.preventDefault();
    let selectedDate = $('#date').val();
    const serverKey = 'aT1LRxrFFc2ggV3gXlcENwmFDfTq3ueFbmMXl9pa&date='
    $.ajax({
        url: `https://api.nasa.gov/planetary/apod?api_key=${serverKey}${selectedDate}`,
        success: function (result){
            console.log(this.url)
            showToUser(result)
        }
    })
})

function showToUser(result){
    if(result.media_type == 'image'){
        $('#video_image').html(`<img id="image" src="${result.url}" alt="${result.title}">`)
    } else {
        $('#video_image').html(`<video>
        <source src='${result.url}'></video>`)
    }
    
    $('#explanation').html(`<strong>Texto de explicação da imagem (em inglês):</strong> ${result.explanation}`)
}