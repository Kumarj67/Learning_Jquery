// let para1=document.getElementById('para1');
// para1.innerHTML="welcome to Jquery";

// $('#para1').hide();
// $('p').html('x-factor')
// $('p').css('color','red')
$("p").css({
    fontSize:'30px',
    color:'blue',
});
$('div').css({
    height:'100px',
    width:'50px',
    backgroundColor:'cyan',
})

$("body").css("backgroundColor","black");
// $('div').click(function(){
// alert('div clicked')
// })
$('div').on('click',function(){
    var element=$(this);
    element.width(element.width()+10+"px")
    alert('div clicked')
    })
    $('a').on('click',function(event){
        event.preventDefault()
        alert('anchor tag  clicked')
        })