const socket = io();

socket.emit("Apple");

socket.on("Apple Pie", function () {
  console.log("Apple Pie recieved");
});
