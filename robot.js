robot = {
    info: {
        name: "Aimishan: iRobot",
        version: "0.1",
        mail: "aimishan@163.com",
        greeting: "Welcome"
    },
    robotResponse: function(text) {
        var wordsConsequences = text.split(" ")
        if(wordsConsequences[0].charAt(0) == ":")
            switch(wordsConsequences[0]){
            case ":n":
            case ":name":
                return this.info.name;
            case ":v":
            case ":version":
                return this.info.version;
            case ":m":
            case ":mail":
                return this.info.mail;
            case ":g":
            case ":greeting":
                return this.info.greeting;
            case ":background":
            case ":bg": {
                $("#chat-container").css("background-color", wordsConsequences[1])
                return "Background Color has been changed: "+wordsConsequences[1]
            }
            case ":help":
            case ":h": {
                return "help page has been open"
            }
            case ":endhelp":
            case ":end": {
                return "help page has been closed"
            }
            default:
                return "\"" + wordsConsequences[0] + "\" unrecognized command"
            }
        else return "Unable to understand human being's language"
    }
}