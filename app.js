// author(s):  Patrice-Morgan Ongoly
// version: 0.3.0
// last modified: Sunday, October 20, 2019 06:59 EST
// description:

// required modules
var bodyParser = require('body-parser');
var express = require('express');
var WhichBrowser = require('which-browser');
// main application instance

var app = express();

// main application settings

var config = {
    PORT: process.env.PORT || 8008,
    DIRECTORY: [
        './',           /* 0 */
        './css',        /* 1 */
        './js',         /* 2 */
        './media/texture',  /* 3 */
        './media/gifs', /* 4 */
        './media/pattern', /* 5 */
        './media/img',  /* 6 */
        './media/sounds',   /* 7 */
        './media/vid',    /* 8 */
        './media/model',    /* 9 */
        './uploads',        /* 10 */
        './drafts/docs',       /* 11 */
        './media/upload',       /* 12 */
        './media/room',         /* 13 */
        './media/img/bg',       /* 14 */
        './media/room/media/model', /* 15 */
        './board/',             /* 16 */
    ]
};

var deviceType = 'unknown';
let dir = config.DIRECTORY;

app.engine('html', require('ejs').renderFile);

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

app.use(express.static('/'));

app.get('/', function(req, res){
    var result = new WhichBrowser(req.headers);
    console.log(result.toString());
    if(result.isType('desktop')){
        console.log('This is a desktop computer.');
        deviceType = 'desktop';
    }
    else{
        console.log('This is a mobile device.');
        deviceType = 'mobile';
    }

    res.render('index.html',{root: dir[0]});
});

app.get('/ceo', function(req, res){
    var result = new WhichBrowser(req.headers);
    console.log(result.toString());
    if(result.isType('desktop')){
        console.log('This is a desktop computer.');
        deviceType = 'desktop';
    }
    else{
        console.log('This is a mobile device.');
        deviceType = 'mobile';
    }

    res.render('ceo.html',{root: dir[0]});
});

app.get('/guedalia', function(req, res){
    var result = new WhichBrowser(req.headers);
    console.log(result.toString());
    if(result.isType('desktop')){
        console.log('This is a desktop computer.');
        deviceType = 'desktop';
    }
    else{
        console.log('This is a mobile device.');
        deviceType = 'mobile';
    }

    res.render('guedalia.html',{root: dir[0]});
});

app.get('/eric', function(req, res){
    var result = new WhichBrowser(req.headers);
    console.log(result.toString());
    if(result.isType('desktop')){
        console.log('This is a desktop computer.');
        deviceType = 'desktop';
    }
    else{
        console.log('This is a mobile device.');
        deviceType = 'mobile';
    }

    res.render('eric.html',{root: dir[0]});
});

app.get('/noah', function(req, res){
    var result = new WhichBrowser(req.headers);
    console.log(result.toString());
    if(result.isType('desktop')){
        console.log('This is a desktop computer.');
        deviceType = 'desktop';
    }
    else{
        console.log('This is a mobile device.');
        deviceType = 'mobile';
    }

    res.render('noah.html',{root: dir[0]});
});

app.get('/cam', function(req, res){
    var result = new WhichBrowser(req.headers);
    console.log(result.toString());
    if(result.isType('desktop')){
        console.log('This is a desktop computer.');
        deviceType = 'desktop';
    }
    else{
        console.log('This is a mobile device.');
        deviceType = 'mobile';
    }

    res.render('cam.html',{root: dir[0]});
});

app.get('/css/:stylesheet_id', function(req, res){
    let stylesheet_id = req.params.stylesheet_id;
    res.sendFile(stylesheet_id, {root: dir[1]} );
});

app.get('/js/:script_id', function(req, res){
    let script_id = req.params.script_id;
    res.sendFile(script_id, {root: dir[2]} );
});

app.get('/media/img/:img_id', function(req, res){
    let img_id = req.params.img_id;
    res.sendFile(img_id, {root: dir[6]} );
});

var io = require('socket.io').listen(app.listen(config.PORT, function(){
    console.log('connecting \n . \n .. \n ... \n .... \n ..... \n ------------------------------------------');
    console.log('    ORM 0.3.0');
    console.log('------------------------------------------');
    console.log(`[0] listening on port ${config.PORT}`);
    console.log('------------------------------------------');

}));

var profiles = {
  "ceo" : {
    name: "Patrice-Morgan Ongoly",
    profilepic: "../media/img/pamo_profile.jpeg",
    content: {
      youtube : "https://www.youtube.com/channel/UCGbhZq-wHMPHgg-Zdt9hfWw",
      linkedin: "https://www.linkedin.com/in/patrice-morgan-ongoly-8841b318a/",
      instagram: "https://www.instagram.com/ceo.hov/",
      whatsapp: "+1 617 855 9966"
    }
  },
  "guedalia" : {
    name: "Guedalia Dina-Lenda",
    profilepic: "../media/img/gue_profile.png",
    content: {
      youtube : "https://www.youtube.com/channel/UCGbhZq-wHMPHgg-Zdt9hfWw",
      linkedin: "https://www.linkedin.com/",
      instagram: "https://www.instagram.com/",
      whatsapp: "+1 617 855 9966"
    }
  },
  "eric" : {
    name: "Eric Romano",
    profilepic: "../media/img/eric_profile.png",
    content: {
      youtube : "https://www.youtube.com/",
      linkedin: "https://www.linkedin.com/",
      instagram: "https://www.instagram.com/",
      whatsapp: "+1 617 855 9966"
    }
  },
  "noah" : {
    name: "Noah Dagne",
    profilepic: "../media/img/noah_profile.png",
    content: {
      youtube : "https://www.youtube.com/",
      linkedin: "https://www.linkedin.com/",
      instagram: "https://www.instagram.com/",
      whatsapp: "+1 617 855 9966"
    }
  },
  "cam" : {
    name: "Cameron Reed",
    profilepic: "../media/img/cam_profile.jpg",
    content: {
      youtube : "https://www.youtube.com/",
      linkedin: "https://www.linkedin.com/",
      instagram: "https://www.instagram.com/",
      whatsapp: "+1 617 855 9966"
    }
  }
};

io.sockets.on('connection', function(socket){
    console.log('client connected.');
    //var conn = socket;

    // applicationClient sockets


    // client sockets
    socket.on("CLIENTidentifyNodeAsViewerSERVER", function(data){
        if(data.status){
            console.log(`node connected to network...`);
            socket.emit("SERVERnodeIdentifiedCLIENT", {status: true});
        }
    });

    socket.on("CLIENTrequestUserProfileSERVER", function(data){
        if(data.status){
            console.log(`requesting profile for ${data.name}...`);
            console.log(profiles[data.name]);
            socket.emit("SERVERsendUserProfileCLIENT", {status: true, user: profiles[data.name]});
        }
    });

    socket.on('disconnect', function(){
        console.log(`socket ${socket.id} disconnected.`);
    });
});
