# Noom

Zoom Clone using NodeJS, WebRTC and Websockets.

[ setting before develop(NodeJS Server Setup) ]

1.  zoom > npm init -y
    zoom > git init
    zoom > npm i nodemon -D
    zoom > npm i @babel/core @babel/cli @babel/node -D
    zoom > touch .gitignore
2.  create and write 'nodemon.json', 'babel.config.json' file
    create folder 'src' and file 'server.js'(backend js file)
    'server.js' -> create express object and make listener. ex)app.listen(3000, handleListen);
3.  zoom > npm i @babel/preset-env -D
4.  zoom > npm i express
    zoom > npm i pug
5.  change 'package.json' > "scripts":{"dev": "nodemon"}
6.  zoom > npm run dev

[ front setting(Express) ]

1.  create directory: src>public>js>app.js (frontend js file)
    create directory: src>public>views>home.pug
2.  set 'server.js' :
    app.set("view engine", "pug");
    app.set("views", \_\_dirname + "/public/views");
    app.use("/public", express.static(\_\_dirname + "/public"));
3.  'server.js' > make router :
    app.get("/", (req, res) => {res.render("home");});
4.  'nodemon.json' > add "ignore" to not restart server at changing front codes :
    "ignore" : ["src/public/*"]
5.  'home.pug' > add mvp.css link to auto-decorate html

[ ws : WebSocket Library for nodeJS ]

1.  zoom > npm i ws

[ SocketIO : WebSocket Framework ]

1.  zoom > npm i socket.io

[ Admin UI(for SocketIO) ]

1.  zoom > npm i @socket.io/admin-ui
2.  server.js > import {instrument} from "@socket.io/admin-ui";
3.  server.js => change const ioServer :
    const ioServer = new Server(httpServer, {  
     cors: {
    origin: ["https://admin.socket.io"],
    credentials: true
    }
    });
    instrument(ioServer, {
    auth: false
    });
4.  zoom > npm run dev
5.  "https://admin.socket.io" => open in secret window
6.  Connection configuration:
    Server url = http://localhost:3000
    Admin Namespace = /admin
    Path = /socket.io
    Parser = Built-in parser
