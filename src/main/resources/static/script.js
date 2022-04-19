var stompClient=null;


function sendMessgae(){

let jOb={
name:localStorage.getItem("name"),
Contact:$("#message-value").val()
}
        stompClient.send("/app/message",{},JSON.stringify(jOb));


}
function connect(){

        let socket=new SockJS("/server1")
        stompClient=Stomp.over(socket)
        stompClient.connect({},function(frame){

        console.log("connected"+frame)

        $("#name-from").addClass('d-none')
        $("#chat-room").removeClass('d-none')

        //Subscribe(reviver)

        stompClient.subscribe("/topic/return-to",function(response){
        showMessage(JSON.parse(response.body))

        })
})
}

function showMessage(message){

$("#message-container").prepend( `<tr><td> <b>${message.name}: </b>${message.Contact}</td></tr>`)


}



$(document).ready((e)=>{
        $("#login").click(()=>{

        let name=$("#name-value").val()
        localStorage.setItem("name",name)
        connect();


})


$("#btns").click(()=>{
sendMessgae()
})

})