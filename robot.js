robot = {
    info: {
        name: "Aimishan: iRobot",
        version: "0.1",
        mail: "aimishan@163.com",
        greeting: "Welcome",
        letters: ["如果是想要埋起来的心情，那就埋起来。不过我的好心情和坏心情，以前就都会告诉你了。我在哪，我在做什么，我要改变什么，老早老早以前就有告诉你的习惯了。你的想藏起来的小小世界，那就藏好吧:)",
            "你呀，就是最好最好的礼物。我说我们交往一年多了，这是正确的。然后我说，其实喜欢上你，也有一年多了。这是被兑现的喜欢，这是被幸运砸中的喜欢，这是被祝福的喜欢。",
            "大概就是全世界都已经知道我在喜欢你，我却不敢让你知道。",
            "好，我知道，其实我也很幼稚——在很多很多的时候。这些天里面，包括我的感冒都在慢慢好转——别的，也都在升温。我哪会觉得你啰嗦呀，有时候想想，能听到你说话就特别高兴——况且，还有以后的一生。",
            "当我意识到我的下半生是你的时候，我便迫切地希望下半生马上开始。",
            "当我承认了、默许了自己差劲的时候，你上来安慰，会让人更提不起精神的。碰到我这样的情况就是，你听我抱怨完了，回复一个“~”表示你知道就行了，不用绞尽脑汁想什么安慰的话。",
            "有一句话：“因为最好的人就值得最好的结果。”这句话，说给你听，也好。",
            "人生嘛，就是不停地发现问题，然后解决问题。而不是像高中数学题，发现问题，放弃解答，然后被踹出局。",
            "曾经能和你一起去都江堰，我很庆幸。那时候走在路上，我突然发现，当我的身边只有你的时候，我总想告诉你自己的心迹。可我害怕最后的你的答案。我说：“其实最重要的事情，不是我们要去哪，不是我们要做什么，而是我们和谁在一起。”我想你知道，只要和你在一起，不论去哪里，不论做什么，都很有意义，都让人无法忘记。",
            "“当你想折什么的时候，先剪出一张正方形的纸来，然后对折，对角对折，总是不会错的。不管是千纸鹤，心形还是玫瑰花，都要经过这样的步骤。光听我说当然没有用，你得跟着我一步一步，把过程都记住。一旦学会了，再仔细琢磨琢磨怎么折得好看，你就算真正学会它了。”",
            "我等你。你慢慢来。让我先把生活中的很多问题经历过去，然后我就能看着你朝我跑来了。因为你可是要和我共同度过一生的人。",
            "听歌的时候，总感觉我追你还没有追够。我只追了你一年。可是如果还没有追到你，等到，好比说你要去比利时了，我就不能在你耳边说“等你回来，我们就结婚”这种话了。",
            "那些伤心的，难过的曲子里，评论都是没有追到梦想的那个人。我追到了，但还是有一股触动——可能是突然缅怀起以往那个，喜欢你，却又不敢告诉你喜欢你这件事情的自己吧。",
            "想想看，好像一直以来给自己希望的都不是自己，而是一个特别特别美妙的那个人的存在。在这个时候和以后，那个人就是你。",
            "和你说哦，你的存在就是希望，是那种真实的自己的你的存在——虽然我们都会改变——但总有不变的东西。",
            "以前老觉得柏拉图式恋爱才是最完美，然后发现，都是一派俗人，谈个恋爱，爱咋整咋整，爱咋宠咋宠，只要一直在就好了。什么人生啊理想啊，都不重要。我就是天天能和你说说豆腐多少钱一斤，哪哪房价涨得厉害，这种琐碎，都浪漫得不得了。是吧，无聊就玩玩游戏，学习的时候就迸发学习的热情，总有消磨时间的点。不用老纠结自己的存在什么玩意，那都是虚的，活着的时候用这个折磨自己，不自在，还是庸俗好。",
            "喜欢你这句话，说多了可是会变质的欸，所以以后的话，我都得找到那样一个认真的机会，然后认真地告诉你。",
            "毕竟，你可是我眼中的苹果"]
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
            case ":random":
            case ":r":
                return this.info.letters[Math.floor(Math.random() * this.info.letters.length)]
            default:
                return "\"" + wordsConsequences[0] + "\" unrecognized command"
            }
        else return "Unable to understand human being's language"
    }
}