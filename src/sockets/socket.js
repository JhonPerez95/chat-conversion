const { io } = require("../server");
const Chat = require("../models/chat");
const request = require("request-promise");

io.on("connect", (client) => {
  //listen
  client.on("initChat", async (data, callback) => {
    const endPoint = `http://api.currencylayer.com/live?access_key=9a246979ac6ca72783780a12b8540edc&convert?from=COP&to=USD&amount=${+data}`;

    const resApi = await request({
      uri: endPoint,
      json: true,
    });
    console.log(resApi);

    // save db
    const newChat = new Chat({
      msg: data,
    });
    const resDb = await newChat.save();
    console.log(resDb);

    // Res to Frontend
    callback(`Valor convertido a dolar:  ${+data} `);
  });
});
