$(function()
{
    var playerTrack = $("#player-track");
	var bgArtwork = $('#bg-artwork');
	var bgArtworkUrl;
	var albumName = $('#album-name');
	var trackName = $('#track-name');
	var albumArt = $('#album-art'),
		sArea = $('#s-area'),
		seekBar = $('#seek-bar'),
		trackTime = $('#track-time'),
		insTime = $('#ins-time'),
		sHover = $('#s-hover'),
        playPauseButton = $("#play-pause-button"),
        i = playPauseButton.find('i'),
		ShuffleButton = $("#shuffle-button"),
		iShuffle = ShuffleButton.find('i'),
        playLoopButton = $("#play-loop-button"),
        iLoop = playLoopButton.find('i'),
        addPlayListButton = $("#add-playlist-button"),
        inputFile = $("#input"),
		tProgress = $('#current-time'),
		tTime = $('#track-length'),
		seekT, seekLoc, seekBarPos, cM, ctMinutes, ctSeconds, curMinutes, curSeconds, durMinutes, durSeconds, playProgress, bTime, nTime = 0,
		buffInterval = null, tFlag = false, repeatAll = false;
	
	var playPreviousTrackButton = $('#play-previous'), playNextTrackButton = $('#play-next'), currIndex = -1;
	
	const song = [];
song[01]= {
	artist: "Bao",
			name: "52 Hearts",
			url: "Musics/02/Bao-52-Hearts-_Original-Song_.mp3 ",
	picture: "https://i.pinimg.com/originals/8e/fb/ae/8efbae871f6792ba76d7ae3b6e422408.jpg"
	};
	song[02]={
		artist: "Sơn Tùng MT-P",
				name: "THERE'S NO ONE AT ALL",
				url: "Musics/02/THERE'S NO ONE AT ALL.mp3 ",
		picture: "https://i.pinimg.com/originals/8e/fb/ae/8efbae871f6792ba76d7ae3b6e422408.jpg"
		};
	song[03]={
		artist: "02",
				name: "Fly me to the moon",
				url: "Musics/A. Lofi/7. 02 - FLY ME TO THE MOON.mp3 ",
		picture: "https://i.pinimg.com/originals/8e/fb/ae/8efbae871f6792ba76d7ae3b6e422408.jpg"
		};
	song[04]={
		artist: "yunghuy",
				name: "musiqué 01",
				url: "Musics/A. Lofi/yunghuy/9. MUSIQUE 01 - YUNGHUY.mp3",
		picture: "https://i.pinimg.com/originals/8e/fb/ae/8efbae871f6792ba76d7ae3b6e422408.jpg"
		};
	song[05]={
		artist: "1 n G",
		name: "Anh không muốn quên em",
		url: "Musics/A. Lofi/1nG/Anh khong muon quen em.mp3",
		picture: "https://i.pinimg.com/originals/8e/fb/ae/8efbae871f6792ba76d7ae3b6e422408.jpg"
	};
	song[06]={
		artist: "Kat Penkin",
		name: "Fight Another Day",
		url: "Musics/02/KAT PENKIN - FIGHT ANOTHER DAY (lyrics).mp3",
		picture: "https://i.pinimg.com/originals/8e/fb/ae/8efbae871f6792ba76d7ae3b6e422408.jpg"
	};
	song[07]={
		artist: "Louise Penman",
		name: "Baptism of Fire",
		url: "Musics/02/Cytus ll PaffCliqTrack remixLouise PenmanBaptism of fire戰火的洗禮   中英字幕.mp3",
		picture: "https://i.pinimg.com/originals/8e/fb/ae/8efbae871f6792ba76d7ae3b6e422408.jpg"
	};	
		var songs = 
		[song[01], song[02], song[03],song[04],song[05],song[06],song[07]
,{
artist: "whisky",
		name: "Can you give me a change?",
		url: "Musics/A. Lofi/whisky/274. can you give me a change - whisky.mp3",
picture: "https://i.pinimg.com/originals/8e/fb/ae/8efbae871f6792ba76d7ae3b6e422408.jpg"
},{
artist: "whisky",
		name: "Winter wind, I hug u",
		url: "Musics/A. Lofi/whisky/301. winter wind i hug u - whisky.mp3",
picture: "https://i.pinimg.com/originals/8e/fb/ae/8efbae871f6792ba76d7ae3b6e422408.jpg"
},{
artist: "whisky",
		name: "Nỗi buồn mang tên em",
		url: "Musics/A. Lofi/whisky/Noi buon mang ten em. - whisky (sad lo-fi).mp3",
picture: "https://i.pinimg.com/originals/8e/fb/ae/8efbae871f6792ba76d7ae3b6e422408.jpg"
},{
artist: "Pixel Neko",
		name: "Cà phê đêm",
		url: "Musics/A. Lofi/Pixel Neko/16. CA PHE DEM (FT. NAUQ).mp3",
picture: "https://i.pinimg.com/originals/8e/fb/ae/8efbae871f6792ba76d7ae3b6e422408.jpg"
},
{
artist: "j^p^n",
		name: "Springtime",
		url: "Musics/A. Lofi/j^p^n/j^p^n - springtime. [].mp3",
picture: "https://i.pinimg.com/originals/8e/fb/ae/8efbae871f6792ba76d7ae3b6e422408.jpg"
},
{
artist: "zoth",
		name: "Dành cho em",
		url: "Musics/A. Lofi/Various Artist/218. ZOTH - D A N H  C H O  E M.mp3",
picture: "https://i.pinimg.com/originals/8e/fb/ae/8efbae871f6792ba76d7ae3b6e422408.jpg"
},{
artist: "kudasai",
		name: "A light of mine",
		url: "Musics/A. Lofi/kudasai/kudasai - a light of mine.mp3",
picture: "https://i.pinimg.com/originals/8e/fb/ae/8efbae871f6792ba76d7ae3b6e422408.jpg"
},
{
artist: "kudasai",
		name: "Dream of her",
		url: "Musics/A. Lofi/kudasai/kudasai - dream of her.mp3",
picture: "https://i.pinimg.com/originals/8e/fb/ae/8efbae871f6792ba76d7ae3b6e422408.jpg"
},{
artist: "kudasai",
		name: "Oh darling",
		url: "Musics/A. Lofi/kudasai/kudasai - oh darling.mp3",
picture: "https://i.pinimg.com/originals/8e/fb/ae/8efbae871f6792ba76d7ae3b6e422408.jpg"
},{
artist: "kudasai",
		name: "Technicolor",
		url: "Musics/A. Lofi/kudasai/kudasai - technicolor.mp3",
picture: "https://i.pinimg.com/originals/8e/fb/ae/8efbae871f6792ba76d7ae3b6e422408.jpg"
},{
artist: "kudasai",
		name: "The girl I haven't met",
		url: "Musics/A. Lofi/kudasai/kudasai - the girl i haven't met.mp3",
picture: "https://i.pinimg.com/originals/8e/fb/ae/8efbae871f6792ba76d7ae3b6e422408.jpg"
},{
artist: "kudasai",
		name: "When I see you",
		url: "Musics/A. Lofi/kudasai/kudasai - when i see you.mp3",
picture: "https://i.pinimg.com/originals/8e/fb/ae/8efbae871f6792ba76d7ae3b6e422408.jpg"
},{
artist: "LØFTT // 流体 (feat. shiloh)",
		name: "Rest My Bones",
		url: "Musics/A. Lofi/shiloh/Rest My Bones (feat. shiloh).mp3",
picture: "https://i.pinimg.com/originals/8e/fb/ae/8efbae871f6792ba76d7ae3b6e422408.jpg"
},
{
		artist: "1 n G",
		name: "Khi nào mới quên 1 người",
		url: "Musics/A. Lofi/1nG/228. KHI NAO MOI QUEN 1 NGUOI  - 1 N G.mp3",
		picture: "https://i.pinimg.com/originals/8e/fb/ae/8efbae871f6792ba76d7ae3b6e422408.jpg"
	},


{
artist: "Burbank",
		name: "Sorry I like you",
		url: "Musics/A. Lofi/Burbank/79. BURBANK - SORRY I LIKE YOU.mp3",
picture: "https://i.pinimg.com/originals/8e/fb/ae/8efbae871f6792ba76d7ae3b6e422408.jpg"
},
	{
artist: "Burbank",
		name: "Seeing your name makes me happy",
		url: "Musics/A. Lofi/Burbank/Burbank - Seeing your name makes me happy.mp3 ",
picture: "https://i.pinimg.com/originals/8e/fb/ae/8efbae871f6792ba76d7ae3b6e422408.jpg"
},
{
artist: "g y o k i n",
		name: "Anh chưa bao giờ vượt qua được",
		url: "Musics/A. Lofi/g y o k i n/271. Anh chưa bao giờ vượt qua được - ｇｙｏｋｉｎ.mp3",
picture: "https://i.pinimg.com/originals/8e/fb/ae/8efbae871f6792ba76d7ae3b6e422408.jpg"
},
{
artist: "g y o k i n",
		name: "Hôm nay là ngày cuối cùng anh nhớ tới em",
		url: "Musics/A. Lofi/g y o k i n/273.Hôm nay là ngày cuối cùng anh nhớ tới em - Gyökin.mp3",
picture: "https://i.pinimg.com/originals/8e/fb/ae/8efbae871f6792ba76d7ae3b6e422408.jpg"
},{
artist: "g y o k i n",
		name: "Những mảnh kí ức còn sót lại",
		url: "Musics/A. Lofi/g y o k i n/35. NHUNG MANH KI UC CON SOT LAI ..mp3",
picture: "https://i.pinimg.com/originals/8e/fb/ae/8efbae871f6792ba76d7ae3b6e422408.jpg"
},{
artist: "g y o k i n",
		name: "Anh không còn tin vào tình yêu, cho đến khi...",
		url: "Musics/A. Lofi/g y o k i n/14. ANH KHONG CON TIN VAO TINH YEU CHO DEN KHI ..mp3",
picture: "https://i.pinimg.com/originals/8e/fb/ae/8efbae871f6792ba76d7ae3b6e422408.jpg"
},
{
artist: "In love with a ghost",
		name: "Comet",
		url: "Musics/A. Lofi/In love with a ghost/17. COMET - IN LOVE WITH A GHOST.mp3",
picture: "https://i.pinimg.com/originals/8e/fb/ae/8efbae871f6792ba76d7ae3b6e422408.jpg"
},
{
artist: "In love with a ghost",
		name: "Flowers (feat. Nori)",
		url: "Musics/A. Lofi/In love with a ghost/19. FLOWERS FEAT. NORI.mp3",
picture: "https://i.pinimg.com/originals/8e/fb/ae/8efbae871f6792ba76d7ae3b6e422408.jpg"
},
{
artist: "In love with a ghost",
		name: "Let's walk across this forest, I can feel that everything is real again",
		url: "Musics/A. Lofi/In love with a ghost/20. TQ2IXWJPR2NM.128.mp3",
picture: "https://i.pinimg.com/originals/8e/fb/ae/8efbae871f6792ba76d7ae3b6e422408.jpg"
},
{
artist: "In love with a ghost",
		name: "We've never met but, can we have a coffee pr spmething?",
		url: "Musics/A. Lofi/In love with a ghost/We've never met, but can have a coffee or something.mp3",
picture: "https://i.pinimg.com/originals/8e/fb/ae/8efbae871f6792ba76d7ae3b6e422408.jpg"
},
{
artist: "In love with a ghost",
		name: "Sorry for not answering the phone, I'm too busy trying to fly away",
		url: "Musics/A. Lofi/In love with a ghost/62. IN LOVE WITH A GHOST  SORRY FOR NOT ANSWERING THE PHONE IM TOO BUSY TRYING TO FLY AWAY.mp3",
picture: "https://i.pinimg.com/originals/8e/fb/ae/8efbae871f6792ba76d7ae3b6e422408.jpg"
},
{
artist: "j^p^n",
		name: "Roll",
		url: "Musics/A. Lofi/j^p^n/63. J^P^N - ROLL. [].mp3",
picture: "https://i.pinimg.com/originals/8e/fb/ae/8efbae871f6792ba76d7ae3b6e422408.jpg"
},
{
artist: "j^p^n",
		name: "Bloom",
		url: "Musics/A. Lofi/j^p^n/64. J^P^N - BLOOM. [].mp3",
picture: "https://i.pinimg.com/originals/8e/fb/ae/8efbae871f6792ba76d7ae3b6e422408.jpg"
},	
{
artist: "j^p^n",
		name: "Amend",
		url: "Musics/A. Lofi/j^p^n/65. J^P^N - AMEND.mp3",
picture: "https://i.pinimg.com/originals/8e/fb/ae/8efbae871f6792ba76d7ae3b6e422408.jpg"
},
{
artist: "karrot",
		name: "Could you help me live?",
		url: "Musics/A. Lofi/karrot/266. itsalwaysyou.mp3",
picture: "https://i.pinimg.com/originals/8e/fb/ae/8efbae871f6792ba76d7ae3b6e422408.jpg"
},
{
artist: "karrot",
		name: "Nghe mây khóc những chiều mưa lâu tạnh",
		url: "Musics/A. Lofi/karrot/33. NGHE MAY KHOC NHUNG CHIEU MUA LAU TANH.mp3",
picture: "https://i.pinimg.com/originals/8e/fb/ae/8efbae871f6792ba76d7ae3b6e422408.jpg"
},
{
artist: "karrot",
		name: "Em có muốn nghe nỗi buồn của anh?",
		url: "Musics/A. Lofi/karrot/53. EM CO MUON NGHE NOI BUON CUA ANH _.mp3",
picture: "https://i.pinimg.com/originals/8e/fb/ae/8efbae871f6792ba76d7ae3b6e422408.jpg"
},
{
artist: "karrot",
		name: "My jourey is no longer lonely because of your company",
		url: "Musics/A. Lofi/karrot/190. MY JOURNEY IS NO LONGER LONELY BECAUSE OF YOUR COMPANY,.mp3",
picture: "https://i.pinimg.com/originals/8e/fb/ae/8efbae871f6792ba76d7ae3b6e422408.jpg"
},
{
artist: "karrot",
		name: "I love those days",
		url: "Musics/A. Lofi/karrot/233. I LOVE THOSE DAYS - KARROT.mp3",
picture: "https://i.pinimg.com/originals/8e/fb/ae/8efbae871f6792ba76d7ae3b6e422408.jpg"
},
{
artist: "karrot",
		name: "It's sad that I don't have any feelings like I used to",
		url: "Musics/A. Lofi/karrot/300. karrot - its sad that i dont have any feelings like i used to.mp3",
picture: "https://i.pinimg.com/originals/8e/fb/ae/8efbae871f6792ba76d7ae3b6e422408.jpg"
},
{
artist: "Kofabe",
		name: "Ngoài em đâu ai hiểu anh",
		url: "Musics/A. Lofi/Kofabe/32. NGOAI EM DAU AI HIEU ANH - KOFABE.mp3",
picture: "https://i.pinimg.com/originals/8e/fb/ae/8efbae871f6792ba76d7ae3b6e422408.jpg"
},
{
artist: "Kofabe",
		name: "Thà làm hạt mưa bay, ướt tóc em một ngày",
		url: "Musics/A. Lofi/Kofabe/46. THA LAM HAT MUA BAY UOT TOC EM MOT NGAY - KOFABE.mp3",
picture: "https://i.pinimg.com/originals/8e/fb/ae/8efbae871f6792ba76d7ae3b6e422408.jpg"
},
{
artist: "Kofabe",
		name: "Trộm nhìn em khẽ cười...",
		url: "Musics/A. Lofi/Kofabe/277. Trộm nhìn em khẽ cười ... - Kofabe.mp3",
picture: "https://i.pinimg.com/originals/8e/fb/ae/8efbae871f6792ba76d7ae3b6e422408.jpg"
},
{
artist: "New $oulz",
		name: "Đó chỉ là cái cớ của anh thôi",
		url: "Musics/A. Lofi/New_$oulz/25. DO CHI LA CAI CO CUA ANH THOI - NEW$OULZ.mp3",
picture: "https://i.pinimg.com/originals/8e/fb/ae/8efbae871f6792ba76d7ae3b6e422408.jpg"
},{
artist: "New $oulz",
		name: "l o s t",
		url: "Musics/A. Lofi/New_$oulz/29. ＬＯＳＴ.mp3",
picture: "https://i.pinimg.com/originals/8e/fb/ae/8efbae871f6792ba76d7ae3b6e422408.jpg"
},{
artist: "Pixel Neko",
		name: "#hanoi",
		url: "Musics/A. Lofi/Pixel Neko/Hà Nội.mp3",
picture: "https://i.pinimg.com/originals/8e/fb/ae/8efbae871f6792ba76d7ae3b6e422408.jpg"
},{
artist: "Pixel Neko",
		name: "Không ngủ",
		url: "Musics/A. Lofi/Pixel Neko/205. PIXEL NEKO - KHONG NGU.mp3",
picture: "https://i.pinimg.com/originals/8e/fb/ae/8efbae871f6792ba76d7ae3b6e422408.jpg"
},{
artist: "Pixel Neko",
		name: "Tớ yêu cậu",
		url: "Musics/A. Lofi/Pixel Neko/222. TOYEUCAU - PIXEL NEKO.mp3",
picture: "https://i.pinimg.com/originals/8e/fb/ae/8efbae871f6792ba76d7ae3b6e422408.jpg"
},{
artist: "saib.",
		name: "Spike Spiegel.",
		url: "Musics/A. Lofi/saib/none.mp3",
picture: "https://i.pinimg.com/originals/8e/fb/ae/8efbae871f6792ba76d7ae3b6e422408.jpg"
},{
artist: "saib.",
		name: "in your arms.",
		url: "Musics/A. Lofi/saib/206. IN YOUR ARMS..mp3",
picture: "https://i.pinimg.com/originals/8e/fb/ae/8efbae871f6792ba76d7ae3b6e422408.jpg"
},
{
artist: "saib.",
		name: "Space Cowboy",
		url: "Musics/A. Lofi/saib/44. SAIB. - SPACE COWBOY.mp3",
picture: "https://i.pinimg.com/originals/8e/fb/ae/8efbae871f6792ba76d7ae3b6e422408.jpg"
},{
artist: "saib.",
		name: "Smooth",
		url: "Musics/A. Lofi/saib/43. SAIB. - SMOOTH.mp3",
picture: "https://i.pinimg.com/originals/8e/fb/ae/8efbae871f6792ba76d7ae3b6e422408.jpg"
},
{
artist: "T-Rex",
		name: "Đóa hoa đó, không thuộc về tôi...",
		url: "Musics/A. Lofi/T-rex/24. DOA HOA DO, KHONG THUOC VE TOI - TREX.mp3",
picture: "https://i.pinimg.com/originals/8e/fb/ae/8efbae871f6792ba76d7ae3b6e422408.jpg"
},
{
artist: "T-Rex",
		name: "Em đang ngủ, hay là đang...",
		url: "Musics/A. Lofi/T-rex/28. EM DANG NGU, HAY LA DANG....mp3",
picture: "https://i.pinimg.com/originals/8e/fb/ae/8efbae871f6792ba76d7ae3b6e422408.jpg"
},{
artist: "T-Rex",
		name: "Tôi có ngu, vì đã yêu em?",
		url: "Musics/A. Lofi/T-rex/45. TOI CO NGU, VI DA YEU EM _.mp3",
picture: "https://i.pinimg.com/originals/8e/fb/ae/8efbae871f6792ba76d7ae3b6e422408.jpg"
},
{
artist: "VoVanDuc",
		name: "Ai  rồi cũng bỏ anh đi",
		url: "Musics/A. Lofi/VoVanDuc/13. AI ROI CUNG BO ANH DI..mp3",
picture: "https://i.pinimg.com/originals/8e/fb/ae/8efbae871f6792ba76d7ae3b6e422408.jpg"
},{
artist: "VoVanDuc",
		name: "Cô ấy sẽ chẳng bao giờ biết được đâu...",
		url: "Musics/A. Lofi/VoVanDuc/52. CO AY SE CHANG BAO GIO BIET DAU..mp3",
picture: "https://i.pinimg.com/originals/8e/fb/ae/8efbae871f6792ba76d7ae3b6e422408.jpg"
},
{
artist: "yunghuy",
		name: "Có ai đó nhớ ai ướt mi",
		url: "Musics/A. Lofi/yunghuy/276. Có ai đó nhớ ai ướt mi - yunghuy.mp3",
picture: "https://i.pinimg.com/originals/8e/fb/ae/8efbae871f6792ba76d7ae3b6e422408.jpg"
},{
artist: "Shiloh",
		name: "Ocean 17",
		url: "Musics/A. Lofi/shiloh/37. OCEAN - 17 (SHILOH REMIX).mp3",
picture: "https://i.pinimg.com/originals/8e/fb/ae/8efbae871f6792ba76d7ae3b6e422408.jpg"
},
{
artist: "WEAN",
		name: "Ai biết",
		url: "Musics/1. Rap/259. WEAN - AI BIET (OFFICIAL MUSIC VIDEO).mp3",
picture: "https://i.pinimg.com/originals/8e/fb/ae/8efbae871f6792ba76d7ae3b6e422408.jpg"
},{
artist: "Phúc Du",
		name: "Anh không thề gì đâu anh làm",
		url: "Musics/1. Rap/A.mp3",
picture: "https://i.pinimg.com/originals/8e/fb/ae/8efbae871f6792ba76d7ae3b6e422408.jpg"
},{
artist: "TeA ft. PC",
		name: "Thôi trễ rồi, chắc anh phải về đây (Prod. TaKu)",
		url: "Musics/1. Rap/Thôi Trễ Rồi, Chắc Anh Phải Về Đây - TeA ft. PC (Prod. TaKu) [Official Video].mp3",
picture: "https://i.pinimg.com/originals/8e/fb/ae/8efbae871f6792ba76d7ae3b6e422408.jpg"
},{
artist: "prettyxix, hairan (prod.Taku/9)",
		name: "Stay (prod.Taku/9)",
		url: "Musics/1. Rap/198. STAY (W_ PRETTYXIX, HAIRAN) (PROD.TAKU_9).mp3",
picture: "https://i.pinimg.com/originals/8e/fb/ae/8efbae871f6792ba76d7ae3b6e422408.jpg"
},{
artist: "Neddee x Sou ( Prod. iam B )",
		name: "Người ta nói - RnB version",
		url: "Musics/A. Lofi/Various Artist/204. NGUOI TA NOI.mp3",
picture: "https://i.pinimg.com/originals/8e/fb/ae/8efbae871f6792ba76d7ae3b6e422408.jpg"
},
{
artist: "Minh Hải Trần",
		name: "Hẹn em vào một ngày nào đó",
		url: "Musics/A. Lofi/Various Artist/12. HEN EM VAO MOT NGAY NAO DO - MINHHAITRAN.mp3",
picture: "https://i.pinimg.com/originals/8e/fb/ae/8efbae871f6792ba76d7ae3b6e422408.jpg"
},{
artist: "east.",
		name: "T h a n h  S p r i n g ",
		url: "Musics/A. Lofi/Various Artist/18. T H A N H  S P R I N G.mp3",
picture: "https://i.pinimg.com/originals/8e/fb/ae/8efbae871f6792ba76d7ae3b6e422408.jpg"
},{
artist: "nân x Ngơ",
		name: "Tình đắng như ly cà phê",
		url: "Musics/A. Lofi/Various Artist/21. ＴＩＮＨ ＤＡＮＧ ＮＨＵ ＬＹ ＣＡ ＰＨＥ.mp3",
picture: "https://i.pinimg.com/originals/8e/fb/ae/8efbae871f6792ba76d7ae3b6e422408.jpg"
},{
artist: "Tz",
		name: "Chuyện tình yêu 1997",
		url: "Musics/A. Lofi/Various Artist/23. ＣＨＵＹＥＮ ＴＩＮＨ ＹＥＵ １９９７.mp3",
picture: "https://i.pinimg.com/originals/8e/fb/ae/8efbae871f6792ba76d7ae3b6e422408.jpg"
},{
artist: "DJ Okawari",
		name: "Flower Dance",
		url: "Musics/A. Lofi/Various Artist/27. DJ OKAWARI - FLOWER DANCE ダンスの花.mp3",
picture: "https://i.pinimg.com/originals/8e/fb/ae/8efbae871f6792ba76d7ae3b6e422408.jpg"
},{
artist: "Vietnam Lofi Community - Unknown Artist",
		name: "I need you baby",
		url: "Musics/A. Lofi/Various Artist/30. LOFI - I NEED YOU BABY.mp3",
picture: "https://i.pinimg.com/originals/8e/fb/ae/8efbae871f6792ba76d7ae3b6e422408.jpg"
},{
artist: "Marquinch Mogule",
		name: "Going out for dinner",
		url: "Musics/A. Lofi/Various Artist/31. MARQUINCH MOGULE - GOING OUT FOR DINNER.mp3",
picture: "https://i.pinimg.com/originals/8e/fb/ae/8efbae871f6792ba76d7ae3b6e422408.jpg"
},{
artist: "NTR.MND",
		name: "Decisions",
		url: "Musics/A. Lofi/Various Artist/36. NTR.MND(네이쳐마인드) - DECISIONS.mp3",
picture: "https://i.pinimg.com/originals/8e/fb/ae/8efbae871f6792ba76d7ae3b6e422408.jpg"
},{
artist: "ON TOP",
		name: "The girl next door",
		url: "Musics/A. Lofi/Various Artist/41. ON TOP - THE GIRL NEXT DOOR.mp3",
picture: "https://i.pinimg.com/originals/8e/fb/ae/8efbae871f6792ba76d7ae3b6e422408.jpg"
},{
artist: "Duckie",
		name: "Rain, you and me...",
		url: "Musics/A. Lofi/Various Artist/42. RAIN, YOU AND ME....mp3",
picture: "https://i.pinimg.com/originals/8e/fb/ae/8efbae871f6792ba76d7ae3b6e422408.jpg"
},{
artist: "Lee",
		name: "I need a girl",
		url: "Musics/A. Lofi/Various Artist/48. (FREE) LO-FI TYPE BEAT - I NEED A GIRL.mp3",
picture: "https://i.pinimg.com/originals/8e/fb/ae/8efbae871f6792ba76d7ae3b6e422408.jpg"
},{
artist: "Pxzvc (feat. Shiloh Dynasty)",
		name: "bad idea",
		url: "Musics/A. Lofi/Various Artist/49. BAD IDEA (READ DESCRIPTION) (AVAILABLE ON SPOTIFY BABY).mp3",
picture: "https://i.pinimg.com/originals/8e/fb/ae/8efbae871f6792ba76d7ae3b6e422408.jpg"
},{
artist: "Nom",
		name: "Beneath the rain",
		url: "Musics/A. Lofi/Various Artist/50. BENEATH THE RAIN.mp3",
picture: "https://i.pinimg.com/originals/8e/fb/ae/8efbae871f6792ba76d7ae3b6e422408.jpg"
},{
artist: "J.Cole",
		name: "Missing you",
		url: "Musics/A. Lofi/Various Artist/54. FREE FOR PROFIT MISSING YOU J. COLE LOFI PIANO TYPE BEAT  RAP INSTRUMENTAL 2018.mp3",
picture: "https://i.pinimg.com/originals/8e/fb/ae/8efbae871f6792ba76d7ae3b6e422408.jpg"
},{
artist: "Unknown Artist",
		name: "Giai điệu này là lời xin lỗi muộn màng của anh",
		url: "Musics/A. Lofi/Various Artist/57. GIAI DIEU NAY LA LOI XIN LOI MUON MANG CUA ANH.mp3",
picture: "https://i.pinimg.com/originals/8e/fb/ae/8efbae871f6792ba76d7ae3b6e422408.jpg"
},{
artist: "Christophermorrow",
		name: "Crying over you",
		url: "Musics/A. Lofi/Various Artist/560. HIP HOP RAP INSTRUMENTAL (CRYING OVER YOU).mp3",
picture: "https://i.pinimg.com/originals/8e/fb/ae/8efbae871f6792ba76d7ae3b6e422408.jpg"
},{
artist: "Noble",
		name: "I know you're somewhere",
		url: "Musics/A. Lofi/Various Artist/61. Ｉ ＫＮＯＷ ＹＯＵ＇ＲＥ ＳＯＭＥＷＨＥＲＥ.mp3",
picture: "https://i.pinimg.com/originals/8e/fb/ae/8efbae871f6792ba76d7ae3b6e422408.jpg"
},{
artist: "fujishen",
		name: "The girl I have a crush on",
		url: "Musics/A. Lofi/Various Artist/68. THE GIRL I HAVE A CRUSH ON (OUT ON SPOTIFY).mp3",
picture: "https://i.pinimg.com/originals/8e/fb/ae/8efbae871f6792ba76d7ae3b6e422408.jpg"
},{
artist: "frad",
		name: "She's as beautiful as the flower in their garden",
		url: "Musics/A. Lofi/Various Artist/69. SHE'S AS BEAUTIFUL AS THE FLOWER IN THEIR GARDEN.mp3",
picture: "https://i.pinimg.com/originals/8e/fb/ae/8efbae871f6792ba76d7ae3b6e422408.jpg"
},{
name: "Rain outside the window (Original)",
		artist: "DXY",
		url: "Musics/A. Lofi/Various Artist/70. RAIN OUTSIDE THE WINDOW (ORIGINAL).mp3",
picture: "https://i.pinimg.com/originals/8e/fb/ae/8efbae871f6792ba76d7ae3b6e422408.jpg"
},{
artist: "Jou Beats",
		name: "Brasil",
		url: "Musics/A. Lofi/Various Artist/77. JOU BEATS. - BRASIL.mp3",
picture: "https://i.pinimg.com/originals/8e/fb/ae/8efbae871f6792ba76d7ae3b6e422408.jpg"
},{
artist: "S U B W A Y S ",
		name: "アイスクリーム",
		url: "Musics/A. Lofi/Various Artist/83. S U B W A Y S.mp3",
picture: "https://i.pinimg.com/originals/8e/fb/ae/8efbae871f6792ba76d7ae3b6e422408.jpg"
},{
artist: "Vinafountain",
		name: "North Vietnam",
		url: "Musics/A. Lofi/Various Artist/111. V I N A F O U N T A I N. - NORTH VIETNAM ♪.mp3",
picture: "https://i.pinimg.com/originals/8e/fb/ae/8efbae871f6792ba76d7ae3b6e422408.jpg"
},{
artist: "Samashi",
		name: "Warmth Feeling",
		url: "Musics/A. Lofi/Various Artist/184. SAMASHI - WARMTH FEELING.mp3",
picture: "https://i.pinimg.com/originals/8e/fb/ae/8efbae871f6792ba76d7ae3b6e422408.jpg"
},{
artist: "ナニダトNANIDATO",
		name: "Doki doki no disco",
		url: "Musics/A. Lofi/Various Artist/195. ナニダトNANIDATO - DOKI DOKI NO DISCO.mp3",
picture: "https://i.pinimg.com/originals/8e/fb/ae/8efbae871f6792ba76d7ae3b6e422408.jpg"
},{
artist: "ビクター ＭＫＩＩ",
		name: "⌜He's my Music⌟",
		url: "Musics/A. Lofi/Various Artist/197. Z8UVHYR7QMB6.128.mp3",
picture: "https://i.pinimg.com/originals/8e/fb/ae/8efbae871f6792ba76d7ae3b6e422408.jpg"
},{
artist: "K a i n (カイン)",
		name: "Ước Muốn",
		url: "Musics/A. Lofi/Various Artist/201. UOC MUON.mp3",
picture: "https://i.pinimg.com/originals/8e/fb/ae/8efbae871f6792ba76d7ae3b6e422408.jpg"
},{
artist: "L Y M (LyYongMinh)",
		name: "xin lỗi... em trả nước mắt cho anh đi",
		url: "Musics/A. Lofi/Various Artist/207. XIN LOI...EM TRA NUOC MAT CHO ANH DI (PROD BY LYM).mp3",
picture: "https://i.pinimg.com/originals/8e/fb/ae/8efbae871f6792ba76d7ae3b6e422408.jpg"
},{
artist: "m a r l b o r o",
		name: "Thôi đừng nói chuyện trăm năm",
		url: "Musics/A. Lofi/Various Artist/208. THOI DUNG NOI CHUYEN TRAM NAM - M A R L B O R O.mp3",
picture: "https://i.pinimg.com/originals/8e/fb/ae/8efbae871f6792ba76d7ae3b6e422408.jpg"
},{
artist: "Lund",
		name: "破碎 (BROKEN)",
		url: "Musics/A. Lofi/Various Artist/210. 破碎 (BROKEN).mp3",
picture: "https://i.pinimg.com/originals/8e/fb/ae/8efbae871f6792ba76d7ae3b6e422408.jpg"
},{
artist: "Trịnh Công Sơn x Artboi",
		name: "Giọt thời gian",
		url: "Musics/A. Lofi/Various Artist/229. GIOT THOI GIAN - TRINH CONG SON X ARTBOI.mp3",
picture: "https://i.pinimg.com/originals/8e/fb/ae/8efbae871f6792ba76d7ae3b6e422408.jpg"
},{
artist: "hi i'm nevatrash :>",
		name: "Anh là người mà em đã từng nói là tất cả",
		url: "Musics/A. Lofi/Various Artist/241. ANH LA NGUOI MA EM DA TUNG NOI LA TAT CA.mp3",
picture: "https://i.pinimg.com/originals/8e/fb/ae/8efbae871f6792ba76d7ae3b6e422408.jpg"
},
{
artist: "Ｔｏｏ",
		name: "It's raining outside and I miss you",
		url: "Musics/A. Lofi/Various Artist/275. it's raining outside and i miss you - Ｔｏｏ.mp3",
picture: "https://i.pinimg.com/originals/8e/fb/ae/8efbae871f6792ba76d7ae3b6e422408.jpg"
},{
artist: "Nom",
		name: "Beneath the rain - Edited version",
		url: "Musics/A. Lofi/Various Artist/287. Beneath The Rain - Nom.mp3",
picture: "https://i.pinimg.com/originals/8e/fb/ae/8efbae871f6792ba76d7ae3b6e422408.jpg"
},{
artist: "Levi",
		name: "She said no",
		url: "Musics/A. Lofi/Various Artist/297. She Said No. - Levi.mp3",
picture: "https://i.pinimg.com/originals/8e/fb/ae/8efbae871f6792ba76d7ae3b6e422408.jpg"
},{
artist: "AquaSkye",
		name: "sweden by c418 - lofi version",
		url: "Musics/A. Lofi/Various Artist/327. sweden by c418 except it's kind of sad and very nostalgic.mp3",
picture: "https://i.pinimg.com/originals/8e/fb/ae/8efbae871f6792ba76d7ae3b6e422408.jpg"
},{
artist: "jensen",
		name: "ｈｏｍｅｗｏｒｋ",
		url: "Musics/A. Lofi/Various Artist/ｈｏｍｅｗｏｒｋ.mp3",
picture: "https://i.pinimg.com/originals/8e/fb/ae/8efbae871f6792ba76d7ae3b6e422408.jpg"
},{
artist: "east",
		name: "Một người từng thương nhiều thế",
		url: "Musics/A. Lofi/Various Artist/Một người từng thương nhiều thế - east.mp3",
picture: "https://i.pinimg.com/originals/8e/fb/ae/8efbae871f6792ba76d7ae3b6e422408.jpg"
},{
artist: "Vietnam Lofi Community - TQM",
		name: "Ngày đó em đến nhưng...",
		url: "Musics/A. Lofi/Various Artist/Ngay do em den nhung....mp3",
picture: "https://i.pinimg.com/originals/8e/fb/ae/8efbae871f6792ba76d7ae3b6e422408.jpg"
},{
artist: "heiakim",
		name: "omae wa mou lofi desu 2.0",
		url: "Musics/A. Lofi/Various Artist/omae wa mou lofi desu 2.0.mp3",
picture: "https://i.pinimg.com/originals/8e/fb/ae/8efbae871f6792ba76d7ae3b6e422408.jpg"
},{
artist: "củ cải x chu x specter",
		name: "Nghe bài này đi em (prod.by rastz)",
		url: "Musics/1. Rap/283. nghe bài này đi em - củ cải x chu x specter (prod.by rastz).mp3",
picture: "https://i.pinimg.com/originals/8e/fb/ae/8efbae871f6792ba76d7ae3b6e422408.jpg"
}];
  
    
    
      function playPause()
    {
        setTimeout(function()
        {
            if(audio.paused)
            {
                playerTrack.addClass('active');
                albumArt.addClass('active');
                checkBuffering();
                i.attr('class','fas fa-pause');
                audio.play();
            }
            else
            {
                playerTrack.removeClass('active');
                albumArt.removeClass('active');
                clearInterval(buffInterval);
                albumArt.removeClass('buffering');
                i.attr('class','fas fa-play');
                audio.pause();
            }
        },300);
    }

    function playLoop(){
        setTimeout(function()
        {
            if (playLoopButton.hasClass('chosenButtonBackground')){
                playLoopButton.removeClass('chosenButtonBackground');
                iLoop.removeClass('chosenButtonIcon');
            }
            else{
                playLoopButton.addClass('chosenButtonBackground');
                iLoop.addClass('chosenButtonIcon');
            }
            audio.loop = !audio.loop;
            repeatAll = !repeatAll;
        },100);
    }

	function showHover(event)
	{
		seekBarPos = sArea.offset(); 
		seekT = event.clientX - seekBarPos.left;
		seekLoc = audio.duration * (seekT / sArea.outerWidth());
		
		sHover.width(seekT);
		
		cM = seekLoc / 60;
		
		ctMinutes = Math.floor(cM);
		ctSeconds = Math.floor(seekLoc - ctMinutes * 60);
		
		if( (ctMinutes < 0) || (ctSeconds < 0) )
			return;
		
        if( (ctMinutes < 0) || (ctSeconds < 0) )
			return;
		
		if(ctMinutes < 10)
			ctMinutes = '0'+ctMinutes;
		if(ctSeconds < 10)
			ctSeconds = '0'+ctSeconds;
        
        if( isNaN(ctMinutes) || isNaN(ctSeconds) )
            insTime.text('--:--');
        else
		    insTime.text(ctMinutes+':'+ctSeconds);
            
		insTime.css({'left':seekT,'margin-left':'-21px'}).fadeIn(0);
		
	}

    function hideHover()
	{
        sHover.width(0);
        insTime.text('00:00').css({'left':'0px','margin-left':'0px'}).fadeOut(0);		
    }
    
    function playFromClickedPos()
    {
        audio.currentTime = seekLoc;
		seekBar.width(seekT);
		hideHover();
    }

    function updateCurrTime()
	{
        nTime = new Date();
        nTime = nTime.getTime();

        if( !tFlag )
        {
            tFlag = true;
            trackTime.addClass('active');
        }

		curMinutes = Math.floor(audio.currentTime / 60);
		curSeconds = Math.floor(audio.currentTime - curMinutes * 60);
		
		durMinutes = Math.floor(audio.duration / 60);
		durSeconds = Math.floor(audio.duration - durMinutes * 60);
		
		playProgress = (audio.currentTime / audio.duration) * 100;
		
		if(curMinutes < 10)
			curMinutes = '0'+curMinutes;
		if(curSeconds < 10)
			curSeconds = '0'+curSeconds;
		
		if(durMinutes < 10)
			durMinutes = '0'+durMinutes;
		if(durSeconds < 10)
			durSeconds = '0'+durSeconds;
        
        if( isNaN(curMinutes) || isNaN(curSeconds) )
            tProgress.text('00:00');
        else
		    tProgress.text(curMinutes+':'+curSeconds);
        
        if( isNaN(durMinutes) || isNaN(durSeconds) )
            tTime.text('00:00');
        else
		    tTime.text(durMinutes+':'+durSeconds);
        
        if( isNaN(curMinutes) || isNaN(curSeconds) || isNaN(durMinutes) || isNaN(durSeconds) )
            trackTime.removeClass('active');
        else
            trackTime.addClass('active');

        
		seekBar.width(playProgress+'%');
		
		if( playProgress == 100)
		{
			i.attr('class','fa fa-play');
			seekBar.width(0);
            tProgress.text('00:00');
            albumArt.removeClass('buffering').removeClass('active');
            clearInterval(buffInterval);
            if (repeatAll === true && currIndex == songs.length - 1){
                currIndex = -1;
                selectTrack(0);
                playPauseButton.click();
            }
            else
            {
                selectTrack(1);
            }
		}
    }
    
    function checkBuffering()
    {
        clearInterval(buffInterval);
        buffInterval = setInterval(function()
        { 
            if( (nTime == 0) || (bTime - nTime) > 1000  )
                albumArt.addClass('buffering');
            else
                albumArt.removeClass('buffering');

            bTime = new Date();
            bTime = bTime.getTime();

        },100);
    }

	function Shuffle()
		{let currentIndex = song.length,  randomIndex;
	  
		// While there remain elements to shuffle.
		while (currentIndex != 0) {
	  
		  // Pick a remaining element.
		  randomIndex = Math.floor(Math.random() * currentIndex);
		  currentIndex--;
	  
		  // And swap it with the current element.
		  [song[currentIndex], song[randomIndex]] = [
			song[randomIndex], song[currentIndex]];
		}
	  
		return song;
	  }
	  
	 
	  function playShuffle(){
        setTimeout(function()
        {
            if (playShuffleButton.hasClass('chosenButtonBackground')){
                playShuffleButton.removeClass('chosenButtonBackground');
                iLoop.removeClass('chosenButtonIcon');
            }
            else{
                playShuffleButton.addClass('chosenButtonBackground');
                iLoop.addClass('chosenButtonIcon');
            }
            audio.loop = !audio.loop;
            repeatAll = !repeatAll;
        },100);
    }

    function selectTrack(flag)
    {
        if( flag == 0 || flag == 1 )
            ++currIndex;
        else
            --currIndex;

        if( (currIndex > -1) && (currIndex < songs.length) )
        {
            if( flag == 0 )
                i.attr('class','fa fa-play');
            else
            {
                albumArt.removeClass('buffering');
                i.attr('class','fa fa-pause');
            }

            seekBar.width(0);
            trackTime.removeClass('active');
            tProgress.text('00:00');
            tTime.text('00:00');
			
			currAlbum = songs[currIndex].name;
            currTrackName = songs[currIndex].artist;
            currArtwork = songs[currIndex].picture;

            audio.src = songs[currIndex].url;
            
            nTime = 0;
            bTime = new Date();
            bTime = bTime.getTime();

            if(flag != 0)
            {
                audio.play();
                playerTrack.addClass('active');
                albumArt.addClass('active');
            
                clearInterval(buffInterval);
                checkBuffering();
            }

            albumName.text(currAlbum);
            trackName.text(currTrackName);
albumArt.find('img').attr('src', currArtwork);
            $('#album-art img').prop('src', bgArtworkUrl);
        }
        else
        {
            if( flag == 0 || flag == 1 )
                --currIndex;
            else
                ++currIndex;
        }
    }

    //function chooseFile(event) {
    //    event.stopPropagation();
    //
    //}

    function initPlayer()
	{	
        audio = new Audio();

		selectTrack(0);
		
		audio.loop = false;
		
        playPauseButton.on('click',playPause);
        
        playLoopButton.on('click',playLoop);

		ShuffleButton.on('click',Shuffle);

        // addPlayListButton.on('click', function(e){
        //     inputFile.get(0).click();
        // });

        // inputFile.change(function(){
        //     var uploadFiles = inputFile.prop('files');
        //     var directory = uploadFiles[0].webkitRelativePath;
        //     alert("Playlist is uploaded successfully");
            
        // })

		
		sArea.mousemove(function(event){ showHover(event); });
		
        sArea.mouseout(hideHover);
        
        sArea.on('click',playFromClickedPos);
		
        $(audio).on('timeupdate',updateCurrTime);

        playPreviousTrackButton.on('click',function(){ selectTrack(-1);} );
        playNextTrackButton.on('click',function(){ selectTrack(1);});
	}
    
	initPlayer();
});
