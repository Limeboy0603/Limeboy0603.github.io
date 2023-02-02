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
"<li>KTaNE modded module: Minecraft Parody <a href=\"https://github.com/Limeboy0603/ktaneMinecraftParody-master\" target=\"_blank\">GitHub</a></li></ul>"+
"My Education:<br><ul>"+
"<li>2015-2021: Po Leung Kuk Laws Foundation College. Electives: Physics, Chemistry, Information and Communication Technology, Mathematics Module 2 (Algebra and Calculus).</li>"+
"<li>2021-present: Year 1 in City University of Hong Kong, Major in Computer Science. GPA: 3.59 (Achieved Dean's List in Semester B)</li></ul>"+
"My Academic Achievements: (note: all achievements on or before academic year 2020-2021 are achieved during secondary school education)<br><ul>"+
"<li>2018-2019 Hong Kong & Macao Mathematical Olympiad Open Contest: Gold Award</li>"+
"<li>2018-2019 VTC STEM Challenge Cup 2019: STEM Innovation Award</li>"+
"<li>2018-2019 The Hong Kong Polytechnic University Secondary School Mathematics and Science Competition: Credit in Mathematics</li>"+
"<li>2019-2020 Asia International Mathematical Olympiad Open Contest: Silver Award</li>"+
"<li>2020-2021 Hong Kong Olympiad in Informatics: Silver Award</li>"+
"<li>2022: Entered HK TECH TIGER of City University of Hong Kong.</li></ul>"+
"Job Experience:<br><ul>"+
"<li>July-Aug 2021: Data Entry Operator, Toppan Forms (HK) Limited </li>"+
"<li>July-Aug 2022: Summer Intern in Administrative Department, LPC Insurance Brokers Limited</li>"+
"<li>Sep-Dec 2022: PALSI Leader of course MA1200 Calculus and Basic Linear Algebra, City University of Hong Kong. (Job description: teaching year 1 students Mathematics to help them get better grades)</li>";

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
