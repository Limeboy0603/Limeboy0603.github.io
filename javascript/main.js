var errortext="Command not found.<br>Type \"help\" for a list of commands.";

var helptext=
"help: displays this help message.<br>"+
"info: displays the information of myself.<br>"+
"github: opens my GitHub profile on a new tab.<br>";

var infotext=
"My username is Limeboy0603. I am currently a year 1 university student in City University of Hong Kong, studying computer science. <br>"+
"My interests are programing and gaming.<br><br>"+
"My projects:<br><ul>"+
"<li>KTaNE modded module: osu! <a href=\"https://github.com/Limeboy0603/ktaneOsu--master\" target=\"_blank\">GitHub</a></li>"+
"<li>KTaNE modded module: Minecraft Cipher <a href=\"https://github.com/Limeboy0603/ktaneMinecraftCipher-master\" target=\"_blank\">GitHub</a></li>"+
"<li>KTaNE modded module: Minecraft Parody <a href=\"https://github.com/Limeboy0603/ktaneMinecraftParody-master\" target=\"_blank\">GitHub</a></li></ul>"+
"My Education:<br><ul>"+
"<li>2015-2021: Po Leung Kuk Laws Foundation College. Electives: Physics, Chemistry, Information and Communication Technology, Mathematics Module 2 (Algebra and Calculus).</li>"+
"<li>2021-2022: Year 1 in City University of Hong Kong, Major in Computer Science. GPA: 3.62</li></ul>"+
"My Academic Achievements: (note: all achievements on or before academic year 2020-2021 are achieved during secondary school education)<br><ul>"+
"<li>2018-2019 Hong Kong & Macao Mathematical Olympiad Open Contest: Gold Award</li>"+
"<li>2018-2019 VTC STEM Challenge Cup 2019: STEM Innovation Award</li>"+
"<li>2018-2019 The Hong Kong Polytechnic University Secondary School Mathematics and Science Competition: Credit</li>"+
"<li>2019-2020 Asia International Mathematical Olympiad Open Contest: Silver Award</li>"+
"<li>2020-2021 Hong Kong Olympaid in Informatics: Silver Award</li>"+
"</ul>"+
"Job Experience:<br><ul>"+
"<li>July-Aug 2021: Data Entry Operator, Toppan Forms (HK) Limited </li>"+
"</ul>"+
"My Gaming Achievements:<br><ul>"+
"<li>Top 5K osu!catch player</li>"+
"<li>Former Top 1K modern Tetris player</li>"+
"</ul>";

const text = {
    help: helptext,
    info: infotext,
    github: "GitHub profile has been opened in a new tab.",
    web: "Website version: 1.0. Repository: "
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
