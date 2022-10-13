# Noom

Zoom Clone using NodeJS, WebRTC and Websockets.

\*\* common file:
'babel.config.json'
'nodemon.json'
'package-lock.json'
'package.json'
\*\* each set:
('app.js' + 'home.pug' + 'server.js') -->latest
('app02.js' + 'home02.pug' + 'server02wss.js')
('app03.js' + 'home03.pug' + 'server03SocketIO.js')
('app04.js' + 'home04.pug' + 'server04Video.js')
('app05.js' + 'home05.pug' + 'server05WebRTC.js')

#0 INTRODUCTION

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

[ Order of file config ]
nodemon.json -> src/server.js -> views/home.pug -> js/app.js

#1 CHAT WITH WEBSOCKETS

[ ws : WebSocket Library for nodeJS ]

1.  zoom > npm i ws

#2 SOCKETIO

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

#3 VIDEO CALL

1. install localtunnel to access with phone :
   !!! can get Just 1 url per 7 days !!!
   (localtunnel - share server with the world)
   zoom > npm i -g localtunnel
   zoom > lt
   zoom > npm run dev //localhost:3000
   zoom > lt --port 3000
   -> go to the localtunnel url and click continue
   -> you can access with mobile using same localtunnel url

<!-- -
2. Cloudflare Zero Trust Tunnel (Alternative way to start free tunnel) :

   1. Download & install Windows exe file :
      https://developers.cloudflare.com/cloudflare-one/connections/connect-apps/install-and-setup/installation/
      https://github.com/ViRb3/wgcf/releases
      windows_amd64.exe
      change file name to 'cloudflared.exe'
   2. open termianl(admin)
      download directory > cloudflared.exe --version

   3. Authenticate :
      > cloudflared tunnel login
   4. - go Cloudlare Zero Trust
      - enter team name
      - choose free plan(under 50 users)
      - register Payment
      - Settings > Devices > Certificates > Download certificate(.pem + .crt) -> place it in default cloudflared directory.
      install it with https://developers.cloudflare.com/cloudflare-one/connections/connect-devices/warp/install-cloudflare-cert/
       - Access > Tunnels > create a tunnel
   5. - cmd(admin) > cloudflared tunnel create <NAME>

   6. Install and run Connector :

      - Download
        https://github.com/cloudflare/cloudflared/releases/latest/download/cloudflared-windows-amd64.msi
      - Run the installer.
      - Open Command Prompt as Administrator.
      - Run the following command :
      cloudflared.exe service install eyJhIjoiZmYxNGM0NDVmOTJlYTAyODdlYmM3YTljMzFlMDBkZjciLCJ0IjoiMDEwNzEwNGUtY2EzMS00NWQ2LWJhMTAtOGVhYzY3NzllZTYyIiwicyI6IlpHUTBZemRoTXprdFpqSTNOeTAwWVRJM0xUazROelF0WkRjNE56WXpOMlJtWWpaayJ9
       - Click Next
      - Route Tunnel : Edit public hostname for new Tunnel

   7. > cloudflared update
      > https://developers.cloudflare.com/cloudflare-one/connections/connect-apps/run-tunnel/trycloudflare
   8.

   zoom > cloudflared tunnel
- -->

2. Google Stun Server : adjust STUN to get public IP address
   iceServers: [
   {
   urls: [
   "stun:stun.l.google.com:19302",
   "stun:stun1.l.google.com:19302",
   "stun:stun2.l.google.com:19302",
   "stun:stun3.l.google.com:19302",
   "stun:stun4.l.google.com:19302"
   ]
   }
   ]

3. XIRSYS - provides free STUN/TURN server

   - This is alternative way to get STUN/Tunnel.
     https://global.xirsys.net/dashboard/signin
   - Getting Started Guide :
     https://docs.xirsys.com/?pg=get-started
   - About TURN(ice):
     https://docs.xirsys.com/?pg=api-turn

   - Services > create channel > click 'Static TURN Credentials' > get iceServers > Paste it into app.js(RTCPeerConnection)
