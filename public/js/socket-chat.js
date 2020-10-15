const socket = io();

const $formEnviar = $("#formEnviar");
const $txtMensaje = $("#txtMensaje");

socket.on("connect", () => {
  console.log("Conneted to Server");
});

socket.on("disconnect", () => {
  console.log("Disconnected to Server");
});

// send

$formEnviar.submit(function (e) {
  e.preventDefault();
  socket.emit("initChat", $txtMensaje.val(), (data) => {
    console.log(data);
  });
  $txtMensaje.val("");
});
