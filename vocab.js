vocab = {
  patternsCSV: [
    // "what will the [animal] do,ka aha te [animal],the [animal] will [verb1],ka [verb1] te [animal]",
    // "what is the [animal] doing,kei te aha te [animal],the [animal] is [verb2],kei te [verb2] te [animal]",
    // "what has the [animal] done,kua aha te [animal],the [animal] has [verb3],kua [verb3] te [animal]",
    // "what did the [animal] do,i aha te [animal],the [animal] [verb4] -ed,i [verb4] te [animal]",
    // "what was the [animal] doing,i te aha [animal],the [animal] was [verb5] -ing,i te [verb5] te [animal]",

    // 1 BOOK 1 AOTEAROA
    "what is your name,ko wai tōu ingoa{specifically (ko)+ who or what (wai) + N-pronoun + name (ingoa)},my name is [maleName1],ko [maleName1] tōku ingoa",
    "where are you from,nō hea koe,I am from [place],nō [place] ahau",
    "how are you feeling (KT form),kei te pēhea koe,I am feeling [stateOfMind],kei te [stateOfMind] ahau",
    "how are you feeling (EA form),e pēhea ana koe,I am feeling [stateOfMindGood],e [stateOfMindGood] ana ahau",
    "how are you all feeling (EA form),e pēhea ana koutou,we are feeling [stateOfMindBad],e [stateOfMindBad] ana mātou",

    // 6 BOOK 2 WHAKAPAPA
    "who is [femaleName1] 's [femaleRelationOfFemale],ko wai [femaleRelationOfFemale] a [femaleName1],the [femaleRelationOfFemale] of [femaleName1] is [femaleName2],ko [femaleName2] te [femaleRelationOfFemale] o [femaleName1]",
    "who is [femaleName1] 's [maleRelationOfFemale],ko wai [maleRelationOfFemale] a [femaleName1],the [maleRelationOfFemale] of [femaleName1] is [maleName2],ko [maleName2] te [maleRelationOfFemale] o [femaleName1]",
    "who is [maleName1] 's [femaleRelationOfmale],ko wai [femaleRelationOfmale] a [maleName1],the [femaleRelationOfmale] of [maleName1] is [femaleName2],ko [femaleName2] te [maleRelationOfFemale] o [maleName1]",
    "who is [maleName1] 's [maleRelationOfmale],ko wai [maleRelationOfmale] a [maleName1],the [maleRelationOfmale] of [maleName1] is [maleName2],ko [maleName2] te [maleRelationOfFemale] o [maleName1]",
    "who are your [relation]s,ko wai o [relation],my [relation]s are [maleName1] and [maleName2],ko [maleName1] rāua ko [femaleName1] ōku [relation]",
    "who are your [relation]s,ko wai o [relation],my [relation]s are [maleName1] [maleName2] and [femaleName2],ko [maleName1] rātou ko [maleName2] ko [femaleName2] ōku [relation]",
    "how many [relation] do you have,tokohia āu [relation],I have [numberRelations] [relation],[numberRelations] [relation]",

    // 11 BOOK 3 WAHI
    "what is that,he aha tēnā,this is a [animal],he [animal] tēnei",
    "what is that over there,he aha tērā,that over there is a [house],he [house] tērā",
    "what is this thing by me,he aha tēnei,that thing by you is a [transport],he [transport] tēnā",
    "what are these things by me,he aha ēnei,those things by you are [household1]-s,he [household1] ēnā",
    "what are those things,he aha ēnā,these are [food]-s,he [food] ēnei",
    "what are those over there,he aha ērā,those are [house]-s,he [house] ērā",
    "is that a [household],he [household] tēnā,[affirmation],[affirmation]",
    "what type of [animal] is this,he [animal] aha tēnei,that is a [colour] [animal],he [animal] [colour] tēnā",
    "where is [maleName1],kei hea a [maleName1],[maleName1] is [locative] the [house],kei [locative] a [maleName1] i te [house]",
    "where is the [food],kei hea te [food],the [food] is [locative] the [household1],kei [locative] te [food] i te [household1]",
    "where is your [household1],kei hea tōu [household1],my [household1] is [locative] the [household2],kei [locative] te [household2] tōku [household1]",
    "how many [kitchen]-s are there,e hia ngā [kitchen],there are [cardinal] [kitchen],[cardinal] ngā [kitchen]",

    // 23 BOOK 4 TE WA
    "what is the time,ko te aha te wa,the time is [time],ko te [time] te wa",
    "what day is it,ko te aha tēnei rā,the day is [day],ko te [day] tēnei rā",
    "what month is this,ko te aha tēnei marama,the month is [month],ko [month] tēnei marama",

    // 26 BOOK 5 MAHI NGAHAU
    "what are you doing,kei te aha koe,I am [moving],kei te [moving] ahau",
    "what are you two doing,kei te aha korua,we are [working],kei te [working] māua",
    "what are you three doing,kei te aha koutou,we are [exercising],kei te [exercising] mātou",
    "what are those 3 doing,kei te aha rātou,they are [meeting] in the [room],kei te [meeting] ki te [room]",
    "what are you and me going to do,ka aha māua,we will [moving],ka [moving] māua",
    "what did you two and me just do,kua aha mātou,we were [housekeeping],kua [housekeeping] mātou",
    "what did you do,i aha koe,I [functioning] -ed,i [functioning] ahau",
    "what were you two doing,i te aha kōrua,we were [learning],i te [learning]",
    "what will the [animal] do,ka aha te [animal],the [animal] will [communicating],ka [communicating] te [animal]",
    "what did [femaleName1] do,i aha [femaleName1],[femaleName1] [housekeeping] -ed the [room]",
    "how much does a [food] cost,e hia te utu mō te [food],[cost] is the cost of the [food],[cost] te utu mō te [food]",
    "how much does a [animal] cost,e hia te utu mō te [animal],[cost] is the cost of the [animal],[cost] te utu mō te [animal] ",

    // 39 BOOK 6 HAERENGA

    "where is he going,kei te haere ia ki hea,he is going to the [room],kei te haere ia ki [room]",
    "where will you go,ka haere koe ki hea,i will go to [place],ka haere ahau ki [place]",
    "where will you go and why are you going,ka haere ana koe ki hea ki te aha,I will go to [country] to [compoundNoun],ka haere ana ahau ki [country] ki te [compoundNoun]",
    "where will you go and why are you going,ka haere ana koe ki hea ki te aha,I will go to [room] to [compoundNoun],ka haere ana ahau ki [room] ki te [compoundNoun]",
    "how will you travel,mā hea koe haere ai,i will travel by [transport],mā runga [transport] ahau haere ai",

    // 45 BOOK 7 TIKANGA MARAE
    "the [maraePeople1] [welcoming1],ka [welcoming1] te [maraePeople1],then the [maraePeople2] [welcoming2],kātahi ka [welcoming2] te [maraePeople2]",
    "the [maraePeople1] [welcoming1],ka [welcoming1] te [maraePeople1],after that the [maraePeople2] [welcoming2],a muri i tērā ka [welcoming2] te [maraePeople2]",

    //Maori Made Easy Week ?
    "will he [moving] tomorrow,ka [moving] āpōpō,he will not [moving] tomorrow,kāore ia e [moving]",
    //Maori Made Easy Week 12 a
    "who will [moving] the [household1],mā wai te [household1] e [moving]{agent indicated by mā + who or what (wai) + e + verb},[mpronoun] will [moving] the [household1],[mpronoun] te [household1] e [moving]{agent indicated by mā + object or person affected + e + verb}",
    //Maori Made Easy Week 12 b
    "who will [moving] the [household1],mā wai te [household1] e [moving]{agent indicated by mā + who or what (wai) + e + verb},ehara i te mea [mpronoun] will [moving] the [household1],[mpronoun] te [household1] e [moving]{negative phrase + agent indicated by mā + object or person affected + e + verb}",
    //Maori Made Easy Week 12 c
    "who will [moving] the [household1],mā wai te [household1] e [moving]{agent indicated by mā + who or what (wai) + e + verb},kaua [mpronoun] will [moving] the [household1],[mpronoun] te [household1] e [moving]{negative phrase + agent indicated by mā + object or person affected + e + verb}",
    //Maori Made Easy Week 13 a
    "who [moving]-ed the [household1],nā wai te [household1] i [moving]{agent indicated by nā + who or what (wai) + i + verb},[mpronoun] will [moving] the [household1],[mpronoun] [household1] i [moving]{agent indicated by nā + object or person affected + i + verb}",
    //Maori Made Easy Week 13 b
    "who [moving]-ed the [household1],nā wai te [household1] i [moving]{agent indicated by nā + who or what (wai) + i + verb},ehara i te mea [mpronoun] will [moving] the [household1],[mpronoun] [household1] i [moving]{negative phrase + agent indicated by nā + object or person affected + i + verb}",
    //Maori made easy week 15
    "where is the [animal],kei hea te [animal],the [animal] is [locative] the [room] [communicating]ing,kei [locative] te [animal] i te [room] e [communicating] ana{locative phrase + action phrase}",
    //Maori made easy week 15
    "where was the [animal],i hea te [animal],the [animal] was [locative] the [room] [communicating]ing,i [locative] te [animal] i te [room] e [communicating] ana{locative phrase + action phrase}",
    //Maori made easy week 15
    "where was the [animal],i hea te [animal],the [animal] was [locative] the [room] [communicating]ing,i [locative] te [animal] i te [room] e [communicating] ana{locative phrase + action phrase}",
    //MME week 17



  ],

  tupuCSV: [

    //PRONOUNS

    "household2,mat,whāriki",
    "feeling,warm,mahana",
    "adjective,high,teitei",
    "learning,training,whakangungu",
    "adjective,useless,koretake",
    "adjective,intelligent,atamai",
    "noun,plan,mahere",
    "food,mushroom,harore",
    "verb,win,toa",
    "noun,present,perehana",
    "verb,start,timata",
    "verb,spill,maringi",
    "feeling,lonely,mokemoke",



    "adjective,tired,ngenge",
    "adjective,wet,mākū",
    "noun,hurt,mamae",





    "pronoun,I/me,ahau",
    "pronoun,you,koe",
    "pronoun,him/her,ia",
    "pronoun,us (2),tāua",
    "pronoun,us (3+),tātou",
    "pronoun,we (2 but not you),māua",
    "pronoun,we (3+ but not you),mātou",
    "pronoun,you (2),kōrua",
    "pronoun,you (3+),koutou",
    "pronoun,them (2),rāua",
    "pronoun,them (3+),rātou",

    "possessiveSingluar,my,tōku",
    "possessiveSingluar,your,tōu",
    "possessiveSingluar,their,tōna",

    "possessivePlural,my,ōku",
    "possessivePlural,your,ōu",
    "possessivePlural,their,ōna",

    "npronoun,I,nāku",
    "npronoun,you,nāu",
    "npronoun,he or she,nāna",

    "mpronoun,I,māku",
    "mpronoun,you,māu",
    "mpronoun,he or she,māna",
    "mpronoun,you and I,mā tāua",
    "mpronoun,we all,mā tātou",
    "mpronoun,he and I,mā māua",
    "mpronoun,they and I,mā mātou",
    "mpronoun,you two,mā kōrua",
    "mpronoun,they,mā rāua",
    "mpronoun,they three,mā rātou",

    //NOUNS PROPER

    "name,fred,fred",

    "maleName1,Mikaere,Mikaere",
    "maleName1,Hoani,Hoani",
    "maleName1,Pita,Pita",
    "maleName1,Matiu,Matiu",

    "maleName2,Hemi,Hemi",
    "maleName2,Wiremu,Wiremu",
    "maleName2,Rawiri,Rawiri",
    "maleName2,Nikau,Nikau",
    "maleName2,Ihaka,Ihaka",

    "femaleName1,Mere,Mere",
    "femaleName1,Hine,Hine",
    "femaleName1,Aroha,Aroha",
    "femaleName1,Kara,Kara",

    "femaleName2,hinemoa,hinemoa",
    "femaleName2,Kahurangi,Kahurangi",
    "femaleName2,Ngaio,Ngaio",
    "femaleName2,Rehua,Rehua",

    "genderNeutralName,Mikaere,Mikaere",

    "place,Dunedin,Onetāhi",
    "place,Auckland,Tamaki Makaurau",
    "place,One Tree Hill,Maungakiekie",
    "place,New Plymouth,Ngāmotu",
    "place,Christchurch,Ōtautahi",
    "place,Taupō,Taupō nui a Tia",
    "place,Tauranga,Tauranga moana",
    "place,Kaikoura,Te Ahi kai kōura a Tama ki te rangi",
    "place,Hokianga,Te Hokianga a Kupe",
    "place,Wellington,Te Whanga nui a Tara",
    "place,Nelson,Whakatū",
    "place,Gisborne,Tūranga nui a Kiwa",
    "place,Napier,Ahuriri",
    "place,Palmerston North,Te Papaioea",
    "place,Otago,Ōtakou",


    "country,australia,ahitereiria",
    "country,england,ingarangi",
    "country,america,amerika",
    "country,south africa,āwherika ki te tonga",
    "country,africa,āwherika",
    "country,italy,itāria",
    "country,china,haina",
    "country,france,wīwī",
    "country,asia,āhia",
    "country,europe,ūropi",

    //NOUNS COMMON


    "maleRelationOfMale,father,matua",
    "maleRelationOfMale,younger brother,teina",
    "maleRelationOfMale,son,tama",
    "maleRelationOfMale,older brother,tuakana",
    "maleRelationOfMale,grandfather,matua tūpuna",

    "femaleRelationOfMale,girl friend,hoa wahine",
    "femaleRelationOfMale,aunty,whaea kēkē",
    "femaleRelationOfMale,grandmother,whaea tūpuna",
    "femaleRelationOfMale,mother,whaea",
    "femaleRelationOfMale,sister,tuāhine",

    "femaleRelationOfFemale,mother,whaea",
    "femaleRelationOfFemale,daughter,tamāhine",
    "femaleRelationOfFemale,girl friend,hoa wahine",
    "femaleRelationOfFemale,aunty,whaea kēkē",
    "femaleRelationOfFemale,grandmother,whaea tūpuna",
    "femaleRelationOfFemale,younger sister,teina",
    "femaleRelationOfFemale,older sister,tuakana",

    "maleRelationOfFemale,brother,tungāne",
    "maleRelationOfFemale,uncle,matua kēkē",
    "maleRelationOfFemale,grandfather,matua tūpuna",
    "maleRelationOfFemale,father,matua",

    "relation,grandchildren,mokopuna",
    "relation,children,tamariki",
    "relation,child,tamaiti",
    "relation,niece or nephew,irāmutu",
    "relation,cousin,kaihanga",

    "people,child,tamaiti",
    "people,man,tane",
    "people,woman,wahine",
    "people,teacher,kaiako",
    "people,student,tauira",
    "people,old woman,kuia",
    "people,old man,korua",
    "people,girl,kōtiro",
    "people,boy,tama",

    "marae,shake hands,harirū",
    "marae,is that so,meinga meinga",
    "marae,carving,whakairo",
    "marae,carving on roof,tekoteko",
    "marae,carving,whakairo",
    "marae,formal speech,whaikõrero",

    "maraePeople1,old lady,kuia",
    "maraePeople1,old man,korua",
    "maraePeople1,hosts,tangata whenua",
    "maraePeople1,visitors,manuhire",

    "maraePeople2,man,tane",
    "maraePeople2,girl,kōtiro",
    "maraePeople2,cooks,ringawera",
    "maraePeople2,speaker,kaikōrero",

    "animal,dog,kurī",
    "animal,sheep,hipi",
    "animal,chicken,heihei",
    "animal,duck,rakiraki",
    "animal,pig,poaka",
    "animal,cat,ngeru",
    "animal,cow,kau",
    "animal,horse,hōiho",
    "animal,goat,nanekoti",

    "classroom,science,pūtaiao",
    "classroom,stories,pakiwaitara",

    "transport,canoe,waka",
    "transport,bus,pahi",
    "transport,train,tereina",
    "transport,helicopter,wakatopatopa",
    "transport,truck,taraka",
    "transport,bicycle,paihikara",
    "transport,car,motoka",
    "transport,horse,hōiho",
    "transport,boat,waka poti",
    "transport,plane,waka rererangi",
    "transport,scooter,huta",

    "food,egg,hēki",
    "food,pen,pene",
    "food,seafood,kaimoana",
    "food,vegetables,hua whenua",
    "food,fruit,hua rākau",
    "food,butter,pata",
    "food,cream,kirīmi",
    "food,apple,āporo",
    "food,milk,miraka",
    "food,bread loaf,paraoa",
    "food,banana,panana",
    "food,lolly,rare",

    "clothing,clothes,kākahu",
    "clothing,T-shirt,tihāte",
    "clothing,hat,potae",
    "clothing,shoes,hū",
    "clothing,skirt,panekoti",
    "clothing,pants,tarau",
    "clothing,socks,tōkena",
    "clothing,dress,kaka",
    "clothing,glasses,mōwhiti",
    "clothing,togs,kākahu kaukau",
    "clothing,jandals,hanara",
    "clothing,bag,pēke",
    "clothing,shorts,tarau poto",

    "house,floor,papa",
    "house,ceiling,tuanui",
    "house,wall,pakitara",
    "house,window,matapihi",
    "house,door,kuaha",
    "house,home,kāinga",
    "house,tree,rākau",


    "room,kitchen,kīhini",
    "room,lounge,rūma noho",
    "room,bedroom,rūma moe",
    "room,bathroom,rūma horoi tinana",
    "room,shed,wharau",

    "bathroom,bathtub,kauranga",
    "bathroom,shower,uwhiuwhi",
    "bathroom,plughole,waiputa",
    "bathroom,plug,puru",
    "bathroom,basin,oko horoi",
    "bathroom,toilet,heketua",
    "bathroom,cabinet,kāpata kaumanga",

    "bathroom2,soap,hopi",
    "bathroom2,toothpaste,paniaku niho",
    "bathroom2,toothbrush,taitai niho",
    "bathroom2,towel,tauwera",
    "bathroom2,toilet paper,whēru",
    "bathroom2,comb,heru",
    "bathroom2,deodorant,whakakakara",


    "household1,broom,paruma",
    "household1,chair,tūru",
    "household1,table,tēpu",
    "household1,lamp,rama",
    "household1,phone,waea kōrero",
    "household1,bed,moenga",
    "household1,pen,pene",
    "household1,book,pukapuka",


    "household2,TV,pouaka whakaata",
    "household2,bag,kete",
    "household2,freezer,pouaka tio",
    "household2,fridge,poaka makariri",
    "household2,bathtub,tāpu",
    "household2,shower,uwhi",
    "household2,cup,kapu",
    "household2,drawer,toroa",
    "household2,washing machine,mīhini horoi kakahu",

    "body,nose,ihu",
    "body,neck,kakī",
    "body,tongue,arero",
    "body,chin,kauae",
    "body,hair,māhunga",
    "body,heart,manawa",
    "body,teeth,niho",
    "body,chest,poho",
    "body,belly,puku,",
    "body,hand,ringa",
    "body,head,upoko",
    "body,leg,waewae",
    "body,breast,ū",
    "body,penis,ure",
    "body,vagina,tenetene",
    "body,knee,turi",

    "kitchen,frying pan,parai",
    "kitchen,knife,ripi",
    "kitchen,oven,umu",
    "kitchen,ladle,kōtutu",
    "kitchen,pot,kōhua",
    "kitchen,bowl,oko",
    "kitchen,plate,pereti",
    "kitchen,serviette,parehūhare",
    "kitchen,spoon,koko",
    "kitchen,tea towel,tītaora",
    "kitchen,tongs,pīnohi",

    "kitchen2,serving platter,paepae mahora",
    "kitchen2,plastic wrap,takai kirihou",
    "kitchen2,hob,mura",
    "kitchen2,cupboard,kāpata",
    "kitchen2,stove,tū",
    "kitchen2,microwave,umu tira",
    "kitchen2,kettle,tikera",
    "kitchen2,sink,puoto",
    "kitchen2,tap,kōrere wai",

    //ADJECTIVES

    "adjectives1,beautiful,ātaahua",
    "adjectives1,big,nui",
    "adjectives1,long,roa",
    "adjectives1,small,iti",
    "adjectives1,old,tawhito",
    "adjectives1,new,hōu",
    "adjectives1,ugly,anuhea",
    "adjectives1,scared,mataku",
    "adjectives1,sad,pouri",
    "adjectives1,lonely,mokemoke",
    "adjectives1,hot,wera",
    "adjectives1,warm,mahana",
    "adjectives1,cold,makariri",

    "adjectives2,quick,horo",
    "adjectives2,fast,tere",
    "adjectives2,slow,pōturi",
    "adjectives2,fat,mōmona",
    "adjectives2,skinny,tūpuhi",
    "adjectives2,tall,tāroroa",
    "adjectives2,thin,angiangi",
    "adjectives2,wide,whānui",
    "adjectives2,thick,mātotoru",
    "adjectives2,few,torutoru",
    "adjectives2,many,maha",
    "adjectives2,shiny,pīata",
    "adjectives2,dull,pūhuki",

    "personalQualities1,lazy,māngere",
    "personalQualities1,expert,tohunga",
    "personalQualities1,knowledgeable,mātau",
    "personalQualities1,brave,toa",
    "personalQualities1,entertaining,ngahau",
    "personalQualities1,weak,ngoikore",
    "personalQualities1,all right,āhau pai",
    "personalQualities1,pleasant person,ngākau māhaki",
    "personalQualities1,quiet,nohopuku",

    "personalQualities2,faithful,ngākau nui",
    "personalQualities2,amusing,hātakēhi",
    "personalQualities2,quick,kakama",
    "personalQualities2,industrious,pukumahi",
    "personalQualities2,intelligent,koi te hinengaro",
    "personalQualities2,ignorant,kūare",
    "personalQualities2,very good,tino pai",
    "personalQualities2,generous,marae",
    "personalQualities2,fabulous,tino rawe",
    "personalQualities2,serene,mauritau",

    //VERBS ACTION

    "moving,run,oma",
    "moving,come,haere",
    "moving,walking,hīkoi",
    "moving,dance,kanikani",
    "moving,climb,piki",
    "moving,stand,tū",
    "moving,come,kuhu",
    "moving,come down,heke",
    "moving,exit,puta",
    "moving,wait,taihoa",
    "moving,jump,peke",
    "moving,return,hoki",
    "moving,sit,noho",
    "moving,swim,kauhoe",
    "moving,rest,whakatā",

    "performing,singing,waiata",
    "performing,talk,kōrero",
    "performing,clap,pakipaki",
    "performing,paint,peita",
    "performing,weave,raranga",
    "performing,carve,whakairo",

    "learning,read,pānui",
    "learning,learn,ako",
    "learning,understand,mārama",
    "learning,remember,māharahara",
    "learning,answer,whakautu",
    "learning,teach,akona",
    "learning,think,whakaaro",
    "learning,question,patai",
    "learning,know,mōhio",
    "learning,write,tuhi",

    "meeting,cry,tangi",
    "meeting,laugh,katakata",
    "meeting,smile,menemene",
    "meeting,embrace,awhiawhi",
    "meeting,greet,mihi",
    "meeting,call,karanga",
    "meeting,kiss,kihi",

    "functioning,eating,kai",
    "functioning,sleeping,moe",
    "functioning,drink,inu",
    "functioning,feed,whāngai",
    "functioning,snore,ngōngoro",
    "functioning,yawn,hītako",
    "functioning,sneeze,matihe",
    "functioning,burp,kūpa",
    "functioning,cough,mapu",
    "functioning,dream,moemoeā",
    "functioning,lie down,tāpapa",
    "functioning,fart,patero",

    "working,work,mahi",
    "working,carry,hari",
    "working,purchase,hoko",
    "working,build,hanga",
    "working,lift,hiki",
    "working,fix,whakatika",
    "working,take off,tango",

    "communicating,shout,ūmere",
    "communicating,pray,inoi",
    "communicating,argue,whawhai",
    "communicating,write,tuhi",
    "communicating,listen,whakarongo",
    "communicating,look,titiro",
    "communicating,watch,mātakitaki",
    "communicating,see,kite",
    "communicating,bark,auau",

    "housekeeping,cook,tunu",
    "housekeeping,gather,tiki",
    "housekeeping,buy,utu",
    "housekeeping,cut,tapahi",
    "housekeeping,wash,horoi",
    "housekeeping,tidy,whakapai",
    "housekeeping,dry,whakamaroke",
    "housekeeping,sweep,tahitahi",
    "housekeeping,pull weeds,huhuti taru",
    "housekeeping,mow,tapahi karaehe",
    "housekeeping,vacuum,whakangote puehu",
    "housekeeping,hang up,whakairi",

    "exercising,throw,whiu",
    "exercising,chase,whai",
    "exercising,stretch,whātoro",
    "exercising,pull,kukume",
    "exercising,touch,pā",
    "exercising,push,pana",
    "exercising,shake,rūrū",
    "exercising,bend,piko",
    "exercising,wait,tatari",


    "welcoming1,gift,koha",
    "welcoming1,gathering,hui",
    "welcoming1,support sing,waiata tautoko",
    "welcoming1,greet,mihi",
    "welcoming1,dance,haka pōhiri",

    "welcoming2,handshake,hariru",
    "welcoming2,call,karanga",
    "welcoming2,challenge,wero",
    "welcoming2,call for food,karanga mō te kai",
    "welcoming2,prayer for food,karakia mō te kai",
    "welcoming2,food,kai",

    //reasons for travel
    "compoundNoun,get food,tiki kai",
    "compoundNoun,sight seeing,titiro haere",
    "compoundNoun,buy food,hoko kai",
    "compoundNoun,buy presents,hoko taonga",
    "compoundNoun,play sports,tākaro hākinakina",
    "compoundNoun,meet relations,tūtaki whanaunga",
    "compoundNoun,find work,kimi mahi",


    "verb5,send,tono",

    "verb6,rip,tīhae",



    "verb6,search,kimi/rapu",
    "verb6,point,tohu",

    "verb6,erase,ūkui",
    "verb6,turn off,whakaweto",
    "verb6,fall off,taka",
    "verb6,hurt,whakamāmae",
    "verb6,slap,paki",

    //VERBS STATIVES

    "stateOfBody,sleepy,hiamoe",
    "stateOfBody,hot,wera",
    "stateOfBody,cold,makariri",
    "stateOfBody,good,pai",
    "stateOfBody,tired,ngēngē",
    "stateOfBody,thirsty,hiainu",
    "stateOfBody,well,ora",
    "stateOfBody,hungry,hiakai",
    "stateOfBody,tired out,pau",

    "feeling,sharp,koi",

    "stateOfMind,bored,hōhā",
    "stateOfMind,surprised,ohorere",
    "stateOfMind,confused,rangirua",
    "stateOfMind,sad,pōuri",
    "stateOfMind,lazy,māngere",
    "stateOfMind,scared,mataku",
    "stateOfMind,confused,kutekute",

    "stateOfMindGood,pleased,waingohia",
    "stateOfMindGood,correct,tika",
    "stateOfMindGood,overjoyed,harikoa",
    "stateOfMindGood,happy,hari",

    "stateOfMindBad,furious,pukuriri",
    "stateOfMindBad,lost,ngaro",
    "stateOfMindBad,arrogant,whakahīhī",
    "stateOfMindBad,angry,riri",
    "stateOfMindBad,worried,āwangawanga",
    "stateOfMindBad,bad,kino",
    "stateOfMindBad,wrong,kutohe",
    "stateOfMindBad,annoyed,whakahohā",

    "cardinal,none,kāore",
    "cardinal,one,kotahi",
    "cardinal,two,e rua",
    "cardinal,three,e toru",
    "cardinal,four,e wha",
    "cardinal,five,e rima",
    "cardinal,six,e ona",
    "cardinal,seven,e whitu",
    "cardinal,eight,e waru",
    "cardinal,nine,e iwa",

    "numberRelations,none,kāore āku",
    "numberRelations,one,kotahi tāku",
    "numberRelations,two,tokorua āku",
    "numberRelations,three,tokotoru āku",

    "affirmation,yes,ae",
    "affirmation,no,kahore",

    "colour,white,mā",
    "colour,red,whero",
    "colour,orange,karaka",
    "colour,yellow,kōwhai",
    "colour,green,kākāriki",
    "colour,black,mangu",
    "colour,blue,kikorangi",
    "colour,purple,waiporoporo",
    "colour,brown,parauri",
    "colour,grey,kiwikiwi",

    "time,2:10,tekau mai i te rua",
    "time,3:30,haurua mai i te toru",
    "time,12:45,hauwha ki te tahi",
    "time,4:50,tekau ki te rima",
    "time,8:24,rua tekau mai i te waru",

    "day,Monday,Rāhina",
    "day,Tuesday,Rātū",
    "day,Wednesday,Rāapa",
    "day,Thursday,Rāpare",
    "day,Friday,Rāmere",
    "day,Saturday,Rāhoroi",
    "day,Sunday,Rātapu",

    "month,January,Kohitātea",
    "month,February,Hui tanguru",
    "month,March,Poutū te rangi",
    "month,April,Paenga whāwhā",
    "month,May,Haratua",
    "month,June,Pipiri",
    "month,July,Hōngongoi",
    "month,August,Here turi kōkā",
    "month,September,Mahuru",
    "month,October,Whiringa ā nuku",
    "month,November,Whiringa ā rangi",
    "month,December,Hakihea",

    "locative,under,raro",
    "locative,on,runga",
    "locative,outside,waho",
    "locative,inside,roto",
    "locative,behind,muri",
    "locative,in front,mua",

    "locative2,between,waenganui",
    "locative2,here by me,konei",
    "locative2,there by you,konā",
    "locative2,over there by them,korā",
    "locative2,overseas,tāwāhi",
    "locative2,right side,taha matau",
    "locative2,left side,taha mauī",

    "command,stand up,e tū",
    "command,sit down,e noho",
    "command,give back,homai",



    "tense,am/are,kei te",
    "tense,will,ka",
    "tense,has just,kua",
    "tense,had,i",
    "tense,was,i te",


    "cost,$3.25,toru tāra e rua tekau mā rima hēneti",
    "cost,$1.73,kotahi tāra e whitu tekau mā toru hēneti",
    "cost,$38.69,e toru tekau mā waru tāra e ona tekau mā iwa hēneti",
    "cost,$403.52,e wha rau e toru tāra e rima tekau mā rua hēneti",

  ],
  makeObject: (array, names) => {
    o = {}
    names.map((v, i) => o[v] = array[i])
    return o
  },

  setup: function() {
    this.patterns = []
    this.patternsCSV.forEach(v => this.patterns.push(this.makeObject(v.split(","), ["englishQ", "maoriQ", "englishA", "maoriA"])))
    this.tupus = []
    this.tupuCSV.forEach(v => this.tupus.push(this.makeObject(v.split(","), ["topic", "english", "maori"])))
    this.topics = []
    //this.tupus.
  }
}
