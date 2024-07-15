$(function () {
    window.setTimeout(function () {
      $('.preloader').addClass('hide-loader');
      $('.content').addClass('show-content');
    }, 1500);
    window.setTimeout(function () {
      $('.preloader').addClass('kill-loader');
    }, 2000);
  });
  let status_array = {
    "Получение сведений о сервере": 10,
    "Loading": 30,
    "Mounting Addons": 40,
    "Workshop Complete": 50,
    "Client info sent!": 70,
    "Starting Lua": 90,
    "Lua Started!": 100
}

function setBackgroundImage() {
    const req = new XMLHttpRequest();
    req.responseType = 'json';
    req.onreadystatechange  = () => {
        if( req.readyState == 4 && req.status == 200 ) {
            let base64 = req.response.base64;
            let description = req.response.description;
            if(description == "") {
                document.getElementById("screenshot_description").textContent = "[Без описания]"
            }
            else {
                document.getElementById("screenshot_description").textContent = description;
            }


            document.getElementById("bg_image").style.setProperty( "background-image", "url('" + base64 + "')" )
        }
    }
    req.open("GET", backend_url + "/getScreenshot" )
    req.send(null);
}
setBackgroundImage()

function changeDSMessages(channelId) {
    const req = new XMLHttpRequest();
    req.responseType = 'json';
    req.onreadystatechange = () => {
        if (req.readyState === 4 && req.status === 200) {
            let data = req.response;
            for (let i = 0; i < data.length; i++) {
                let content = data[i].authorContent;
                if (data[i].authorAttached === true) {
                    if (content.length > 0) content += "\n";
                    content += "[Вложение]";
                }
                document.getElementById("ds_avatar" + (data.length - i)).src = data[i].authorAvatar;
                document.getElementById("ds_nick" + (data.length - i)).textContent = data[i].authorNick;
                document.getElementById("ds_content" + (data.length - i)).textContent = content;
                document.getElementById("ds_date" + (data.length - i)).textContent = data[i].authorDate;
                if (data[i].authorBot) {
                    document.getElementById("ds_bot" + (data.length - i)).style.setProperty("display", "inline");
                } else {
                    document.getElementById("ds_bot" + (data.length - i)).style.setProperty("display", "none");
                }
            }
        }
    };
    req.open("GET", `${backend_url}/getDSMessages?channelId=${590553574648578061}`);
    req.send(null);
}

var req = new XMLHttpRequest();

var files = [
    "1.json",
    "2.json",
    "3.json",
    "4.json",
    "5.json",
    "6.json",
    "7.json",
    "8.json",
    "9.json"
];

var randomFile = files[Math.floor(Math.random() * files.length)];

function changeAddonArticle() {
    const req = new XMLHttpRequest();
    req.responseType = 'json';
    req.onreadystatechange  = () => {
        if( req.readyState == 4 && req.status == 200 ) {
            document.getElementById( "addon_subtitle").textContent = req.response.subtitle
            document.getElementById( "addon_content").textContent = req.response.content
        }
    }
    
  
req.open("GET", "./json/" + randomFile);
req.send(null);
}



var req = new XMLHttpRequest();

var files = [
    "1.json",
    "2.json",
    "3.json",
    "4.json",
    "5.json",
    "6.json",
    "7.json",
    "8.json",
    "9.json"
];

var randomFact = files[Math.floor(Math.random() * files.length)];

function changeFact() {
    const req = new XMLHttpRequest();
    req.responseType = 'json';
    req.onreadystatechange  = () => {
        if( req.readyState == 4 && req.status == 200 ) {
            document.getElementById( "fact_content").textContent = req.response.content
        }
    }
    req.open("GET", "./fact/" + randomFact);
req.send(null);
}

function changeProfile( steamid64 ) {
    const req = new XMLHttpRequest();
    req.responseType = 'json';
    req.onreadystatechange  = () => {
        if( req.readyState == 4 && req.status == 200 ) {
            document.getElementById("nick").textContent = req.response.nick;
            document.getElementById("avatar2").src = req.response.avatar_url;
            document.getElementById("steamid").textContent = req.response.steamid;
        }
    }
    req.open("GET", backend_url + "/getProfile?sid=" + steamid64 )
    req.send(null);
}

function changeServerInformation() {
    const req = new XMLHttpRequest();
    req.responseType = 'json';
    req.onreadystatechange  = () => {
        if( req.readyState == 4 && req.status == 200 ) {
            document.getElementById("server_name").textContent = req.response.server_name;
            document.getElementById("ip_address").textContent = req.response.ip;
            document.getElementById("players").textContent = req.response.numplayers + "/" + req.response.maxplayers;
        }
        if( req.readyState == 4 && req.status == 500 ) {
            document.getElementById("server_name").textContent = "Ошибка!";
            document.getElementById("ip_address").textContent = "Ошибка!";
            document.getElementById("players").textContent = "Ошибка!"
        }
    }
    req.open("GET", backend_url + "/getServerInfo" )
    req.send(null);
}






function SetStatusChanged( status ) {
    for( key in status_array ) {
        if( status.search( key ) != -1 ) {
            document.getElementById("progress-bar").style.setProperty('width', status_array[key] + "%" )
        }
    }
    document.getElementById("progress-text").textContent = status;
}

function GameDetails( servername, serverurl, mapname, maxplayers, steamid, gamemode, volume, language ) {
    document.getElementById("map").textContent = mapname;
    changeProfile( steamid );
}

setInterval( function() {
    changeServerInformation()
    changeDSMessages()
    
}, 5000 )

setInterval( function() {
    changeAddonArticle()
}, 30000 )

setInterval( function() {
    changeFact()
}, 15000 )

changeDSMessages()
changeServerInformation()
changeAddonArticle()
changeFact()




document.addEventListener('DOMContentLoaded', function(){ 
    /*let steamid64 = "76561198797861462"    
    changeProfile(steamid64)*/
    setInterval( function() { setBackgroundImage() }, 10000 )
    SetStatusChanged("Получение сведений о сервере")
    
})

