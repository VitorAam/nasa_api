$('#btn').click(function(event){
    event.preventDefault();
    let selectedDate = $('#date').val();
    const serverKey = 'aT1LRxrFFc2ggV3gXlcENwmFDfTq3ueFbmMXl9pa&date='
    try{
       $.ajax({
        url: `https://api.nasa.gov/planetary/apod?api_key=${serverKey}${selectedDate}`,
        success: function (result){
            showToUser(result)
        }
    }) 
    } catch (erro) {
        console.log(erro)
    }
    
})

function showToUser(result){
    if(result.media_type == 'image'){
        $('#video_image').html(`<img id="image" src="${result.url}" alt="${result.title}">`)
    } else {
        $('#video_image').html(`<iframe src="${result.url}" id="video"></iframe>`)
    }
    
    $('#explanation').html(`<strong>Text:</strong> ${result.explanation}`)
}