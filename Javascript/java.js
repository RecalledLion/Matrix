// ID of HTML container.
const el = document.getElementById("matrix");

const ctx = el.getContext("2d");

el.height = window.innerHeight;
el.width = window.innerWidth;

// Characters that can randomly scroll down.
var matrix = "マリー大タコスにしマリー大タコスにしマリー大タコスにしaABbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz!@#$%^&*()_+1234567890-=";

matrix = matrix.split("");

// How big the characters should be.
var font_size = 10;

var drops = new Array(Math.floor(window.innerWidth/font_size)); 
drops.fill(window.innerHeight);

function draw()
{
    // rgba value for the background of the container. Leave the 4th input alone.
    ctx.fillStyle = "rgba(0, 0, 0, 0.04)";
    
    ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);

    // color of the text
    ctx.fillStyle = "#00ff00";

    ctx.font = font_size + "px arial";

    for(var i = 0; i < drops.length; i++)
    {
        var text = matrix[Math.floor(Math.random()*matrix.length)];
        ctx.fillText(text, i*font_size, drops[i]*font_size);

        drops[i] = drops[i]*font_size > window.innerHeight && Math.random() > 0.975 ? 1 : drops[i] + 1;
    }
}

// Second parameter is how often to update. Smaller number -> faster updates
setInterval(draw, 35);
