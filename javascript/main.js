var errortext="Command not found.<br>Type \"help\" for a list of commands.";

var hometext="Limeboy.github.io v1.0.1<br><br>This is a personal website done in the style of a console.<br>"+
"Type \"help\" for a list of commmands. Press Enter to execute the command.<br><br>"+
"<p style=\"font-style: italic; font-size: 15px;\">I have no idea what I am doing, and at this point I am too afraid to ask.</p>";

var helptext=
"home: displays home message that is also displayed when the website is loaded.<br>"+
"help: displays this help message.<br>"+
"info: displays the information of myself.<br>"+
"github: opens my GitHub profile on a new tab.<br>";

var infotext=
"My username is Limeboy0603. I am currently a year 2 university student in City University of Hong Kong, major in computer science. <br>"+
"My interest is programing.<br><br>"+
"My projects:<br><ul>"+
"<li>KTaNE modded module: osu! <a href=\"https://github.com/Limeboy0603/ktaneOsu--master\" target=\"_blank\">GitHub</a></li>"+
"<li>KTaNE modded module: Minecraft Cipher <a href=\"https://github.com/Limeboy0603/ktaneMinecraftCipher-master\" target=\"_blank\">GitHub</a></li>"+
"<li>KTaNE modded module: Minecraft Parody <a href=\"https://github.com/Limeboy0603/ktaneMinecraftParody-master\" target=\"_blank\">GitHub</a></li></ul>";

const text = {
    help: helptext,
    info: infotext,
    github: "GitHub profile has been opened in a new tab.",
    web: "Website version: 1.0.2    <a href=\"https://github.com/Limeboy0603/Limeboy0603.github.io\">Website Repository</a>",
    home: hometext
};

function setrespond()
{
    var command = document.getElementsByTagName("input")[0].value.toLowerCase();
    if(text[command]===undefined)
        document.getElementById("console-output").innerHTML=errortext;
    else {
        document.getElementById("console-output").innerHTML=text[command];
        if(command === "github")
            window.open("https://github.com/Limeboy0603");
    }
    document.getElementsByTagName("input")[0].value="";
}

document.addEventListener("keypress",function(event)
{
    if(event.key === "Enter")
    {
        event.preventDefault();
        setrespond();
    }
});

function main()
{
    document.getElementById("console-output").innerHTML=text["home"];
}
