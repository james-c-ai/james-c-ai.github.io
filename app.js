//timer code
let timer = null;
let timeElapsed = 0; // in seconds
const oneHourInSeconds = 3600;
const timerElement = document.getElementById('timer');
let isTimerActive = false;

function startTimer() {
    if (isTimerActive) {
        return;
    }

    isTimerActive = true;

    timer = setInterval(function () {
        timeElapsed++;

        const seconds = ('0' + (timeElapsed % 60)).slice(-2);
        const minutes = ('0' + Math.floor(timeElapsed / 60 % 60)).slice(-2);
        const hours = ('0' + Math.floor(timeElapsed / 3600)).slice(-2);

        timerElement.textContent = `${minutes}:${seconds}`;

        if (timeElapsed >= oneHourInSeconds) {
            stopTimer();
            timerElement.textContent = '⏰ Congratulations! 🥳 You\'ve hit your daily goal of 1 hour. 🏆 You are amazing!';
            pauseButton.style.display = 'none';
        }
    }, 1000);
}

function stopTimer() {
    if (timer) {
        clearInterval(timer);
        timer = null;
        isTimerActive = false;
    }
}

const pauseButton = document.getElementById('pause-timer');
pauseButton.addEventListener('click', function() {
    if (isTimerActive) {
        stopTimer();
        pauseButton.textContent = 'Resume Timer';
    } else {
        startTimer();
        pauseButton.textContent = 'Pause Timer';
    }
});

//round code
const dailyPracticeStepEl = document.getElementById('daily-practice-step');
const nextStepBtn = document.getElementById('next-step');
const progressCountEl = document.getElementById('progress-count');
const resetButton = document.getElementById('reset-button');

let currentRotation = 0;

window.addEventListener('resize', function() {
    const step = dailyPractices.find(p => p.step === currentStep);
    updateTrianglePosition(`circle-${step.circle}`, currentRotation);
});

const dailyPractices = [
    { step: 1, circle: 1, text: 'Limbic system. Stop, stop, stop. 🙂' },
    { step: 2, circle: 2, text: 'My brain 🧠 is stuck in a rut, and is sending my mind and body false messages. ❌🤯' },
    { step: 3, circle: 3, text: 'Over-firing of the protective mechanisms in my limbic system, in the past, resulted in fear, fatigue, anxiety and food intolerances, which led to unhelpful coping behaviours. 😌' },
    { step: 4, circle: 4, text: '☝️ But, now I know, that these symptoms are a result of cross-wiring in my limbic system, and I choose to rewire my brain! 😊' },
    { step: 5, circle: 5, text: 'Way to go James, great choice! Well done! I love you and I am so proud of you. 😄' },
    { step: 6, circle: 5, text: 'Hey limbic system, thank you so much for protecting me, in the best way that you knew how. But, my friend, you didn\'t have all the information. You have been working overtime, but you can let go and relax now, because we have a new program that we\'re running. 😌' },
    { step: 7, circle: 5, text: '🤔 So James, what state are you choosing now? 😃' },
    { step: 8, circle: 4, text: '☝️ I am healthy, strong, 💪😁 energetic ⚡ and confident. 😎'},
    { step: 9, circle: 6, text: [
      "🌳 Picnic under a tree by a mountain stream 🏞️",
      "🍂 Swinging on a tree swing in the fall 🍁",
      "🚲 Riding bikes along a trail in the fall 🍁",
      "🍲 Warm soup and bread or cheese and crackers on a winter evening 🌨️",
      "🍕 Luxury cabin pizza and movie night 🎥 after a long day of hiking 🥾 and baths 🛁",
      "🏕️ Luxury cabin firepit and grilled sandwiches over the fire with friends 👫",
      "🔥 Bonfire on the beach with roasted marshmallows, sound of ocean 🌊, stars overhead 🌌",
      "🛀 Relaxing bath with a book 📚 and candles 🕯️",
      "🚐 Van camping and waking up to a view of the mountains 🏞️ - sipping coffee ☕ watching the sunrise 🌅",
      "🏞️ Cooling off in a clear mountain stream mid-hike - a bridge and mountains as a backdrop 🏞️",
      "🐠 Snorkeling in crystal clear shallow water on a beautiful summer day. Feeling calm and weightless. Seeing so many colorful fish darting amongst the coral. 🐟",
      "📖 Cuddled up in a cozy library chair with the best book during a thunderstorm ⛈️",
      "🌅 Waking up at the beach and going out to a fun breakfast place 🍳",
      "🏖️ An evening at the beach watching the sunset, flying a kite, catching sandcrabs, stargazing 🌅",
      "🌳 Cuddling in a hammock on a beautiful spring day 🌼",
      "📖 Reading a favorite book in a hammock on the beach as the sun sets 🌅",
      "🥧 Making Thanksgiving pies in Grandma's kitchen for a big family party 👨‍👩‍👧‍👦",
      "🍪 Baking lots of different kinds of Christmas cookies while Christmas music 🎵 plays in the background 🎄",
      "🏮 Watching a release of Chinese lanterns on a dark, cool night 🌃",
      "🏊‍♀️ Floating on a float in a crystal clear pool on a warm summer day - wind chimes, dragonflies, butterflies in the garden, a summer cookout and ice cream later in the day 🍦",
      "🚗 A road trip as a child with all the fun snacks and audio dramas and the goodie bag mom packed for the trip 🎒",
      "🍑 Picking fruit from grandparents trees in the summer. Being around grandparents, eating a meal, watching TV. 🌳",
      "🌳Immersed in the tender warmth of summer, handpicking fruits🍏 from my grandparents' trees, enjoying a lovingly prepared meal, in the comfort of their company while watching television together. 👵👴📺",
      "🛏️ Laying in bed as a kid at night listening to parents and grandparents play dominoes or a card game and feeling so cozy and content 🌙",
      "🔥 Campground campfires, strings of white lights, smores, reading a favorite book aloud to the kids 🏕️",
      "🌌 Laying on the trampoline on a warm summer night to stargaze while crickets sing in the background 🦗",
      "🍵 Tomato soup and grilled cheese sandwiches with a friend on a winter night. Talk and laugh the night away and feel so loved and connected ❄️",
      "🚠 Riding a gondola up a ski slope just for the magnificent view and the feel of the beautiful air and sunshine on face 🌄",
      "🎡 A relaxing ferris wheel ride with someone you love that allows for the most magical nighttime view of the fair grounds and beyond 🌃",
      "🐶 Sitting in a comfy chair outside with a cool drink and sleeping puppy on lap 🍹",
      "🌳 Laying in a backyard hammock on a spring day watching sunlight, birds, tree branches dancing, clouds passing by ☁️",
      "🎈 Watching hot air balloons take off as the sun rises and you sit on a high vantage point outdoors and sip coffee from a thermos and listen to the sweetest song in ear buds 🌅",
      "🍫 Baking brownies in a winter cabin, while the snow is falling just outside your window. ❄️",
      "🌲 Riding in the back of dad's pickup truck through a state park as the sun sets or after dark. Blankets and pillows in the back, wind in face, smells and sights of the campground 🚚",
      "☕ An early morning walk on the beach with coffee with a loved one 🌅",
      "🍰 Eating cheesecake you ordered late at night in bed with a loved one 🌜",
      "🏖️ Laying in bed in a beachhouse that sits on stilts with the windows open and a fresh breeze blowing through, crisp cool sheets, rhythmic sound of waves, thinking with great contentment about all the fun had that day 🌊",
      "🧸 Having a tea party with toys as a child 🍵",
      "🌅 A sunset cruise along a beautiful coast on a boat with white string lights and fun drinks and company - breeze on skin, colors filling the sky 🛳️",
      "✉️ Writing a letter to a loved one as a child, decorating it, putting stickers in it, walking down a long driveway to lovingly deposit it in the mailbox 📮",
      "🎄 Building the christmas tree with family or friends. Hanging up christmas deceorations and lights around the house. Staying up to enjoy the fireplace and the magical glow of the Christmas lights and tree 🎅",
      "🎄 Laying under the Christmas tree while loved one plays the piano - a room full of lights and ornaments and magic 🎹",
      "🔥 Singing songs around a campfire to guitar music. Glow of firelight on faces. Stillness of the night all around. Comfort of the cozy fire. Gratitude of companionship 🎸",
      "🍁 Taking a walk through a park on a beautiful fall day. Warm light, dancing leaves, colors of fall, light breeze, people out enjoying the changing season 🍂",
      "📚 Browsing through a bookstore on a rainy day with a coffee in hand and all the time in the world ☕",
      "🐑 Visiting a petting zoo filled with baby animals on a spring day. Fluffy little lambs, dancing goats that make you laugh, chubby little piglets, baby ducks waddling around, butterflies and sunshine and fluffy clouds in the sky 🌞",
      "🍦 Eating the most delicious ice cream from your favorite local shop in the summer 🌞",
      "🥖 Baking bread, pies, cookies and giving to people and/or neighbours 👨‍👩‍👧‍👦",
      "👗 Going as a child to buy a favorite piece of clothing and being proud to wear it 🛍️",
      "📼 Going to Blockbuster as a kid to rent a movie and getting some pizza 🍕",
      "🥘 Favorite childhood foods at grandparents houses, parties, events 🎉",
      "🎒 Happy memories from school, eating lunch with friends, favorite foods, school parties, sports events 🏫",
      "🎃 Dressing up as your favorite character for Halloween, the excitement of trick-or-treating, the joy of trading candy with friends, and the creativity of pumpkin carving 🍭",
      "🚵 Taking a scenic bike ride, feeling the fresh air on your face, hearing the birds chirping, stopping to appreciate the view and enjoying a picnic on the trail 🍴",
      "🏕️ Gathering around a campfire, roasting marshmallows for s'mores, sharing ghost stories, gazing up at the stars, and feeling the cool breeze in your hair 🌠",
      "🐝 Gardening at home, watching butterflies flutter around, admiring the vibrant flowers you've grown, and appreciating the tranquility of nature 🌼",
      "📼 Watching your favorite TV show with family, laughing at the same jokes, and staying up late during sleepovers 📺",
      "🍿 Going to the movie theater, the smell of fresh popcorn, the excitement of a new release, the thrill of the plot twists, and chatting about the movie afterward 🎬",
      "🚢 Setting sail on a cruise ship, waking up to a new destination each day, dressing up for fancy dinners, attending live shows, and taking in the endless ocean views 🌊",
      "👪 Spending a day at Disneyland or theme park with family, meeting beloved characters and watching parades 🎠",
      "🌲 Exploring a National Park, camping under the stars, hiking to a beautiful waterfall, spotting wildlife, and taking countless pictures 📷",
      "🌊 Touring a historic lighthouse, climbing to the top for a stunning ocean view, learning about maritime history, and appreciating the peaceful coastal town 🏖️",
      "🛍️ Shopping at a mall with a friend, trying on trendy clothes, having lunch at the food court, and spending a fun day together 👭",
      "🍷 Going on a romantic date, trying a new restaurant, having a meaningful conversation, sharing a decadent dessert, and toasting to love with a glass of wine 🥂",
      "🏇 Horseback riding on a beautiful trail, feeling the wind in your hair, experiencing the thrill of galloping, and connecting with nature 🌳",
      "🍎 Growing your own vegetables, feeling the excitement of the first sprout, caring for your plants, and finally harvesting and cooking a meal with your own produce 🍅",
      "🍹 Enjoying a pool day, splashing in the water, relaxing on a sun lounger, sipping a fruity cocktail, and feeling the sun on your skin 🌞",
      "🌅 Swimming in the sea, riding the waves, building sandcastles, collecting seashells, and watching the mesmerizing sunset 🌴",
      "💆‍♂️ Booking a spa day, getting a soothing massage, relaxing in a hot tub, feeling rejuvenated, and leaving all your worries behind 🧖‍♀️",
      "🏺 Hunting for treasures in a thrift shop, finding a vintage dress or a rare book, feeling the thrill of a bargain, and giving a second life to pre-loved items 📚",
      "🎅 Being excited on Christmas Eve to get a visit from santa. Waking up in the morning, opening presents, being with family, singing carols, baking cookies, and feeling the magic of the holiday season 🎄",
      "🐷 Visiting a farm, feeding animals, going on a tractor ride, learning about farming, and enjoying a day in the countryside 🚜",
      "👴 Catching up with relatives at a family reunion, reminiscing about old times, playing games, laughing together, and making new memories 👪",
      "🍽️ Attending a graduation ceremony, cheering for the graduates, feeling proud of their accomplishments, and celebrating with a special dinner 🎓",
      "🛬 Boarding an airplane, watching movies, enjoying in-flight meals, looking out the window at the clouds, and feeling the anticipation of arriving at a new destination ✈️",
      "🌲 Camping in the woods, setting up tents, fishing in a nearby lake, cooking dinner on the campfire, and sleeping under the stars 🌠",
      "🚣 Paddling a canoe on a tranquil lake, spotting wildlife, picnicking on the shore, and feeling at peace with nature 🌿",
      "🏞️ Swimming in a clear lake, playing water games, jumping off the dock, enjoying a refreshing ice cream, and feeling free and happy 🏊‍♀️",
      "🌞 Relaxing on a sandy beach, reading a good book, swimming in the sea, playing beach volleyball, and watching the sun go down 🌅",
      "🤠 Spending a week on a ranch, learning to ride a horse, going on a hayride, making s'mores, and falling asleep to the sound of crickets 🌾",
      "🍴 Dining by the water, trying fresh seafood, watching the sunset, listening to the waves, and feeling the romance in the air 🌊",
      "🏞️ Visiting a waterfall, hiking through the forest, taking a dip in the natural pool, having a picnic, and feeling amazed by nature's beauty 🌿",
      "🍲 Eating at your favorite restaurant, ordering your go-to dish, enjoying the ambiance, celebrating a special occasion, and creating unforgettable memories 🥘",
      "🧩 Completing a challenging puzzle, feeling the satisfaction of each piece falling into place and the accomplishment that comes with the finished image. 🧸🎯",
      "🛀 Soaking in a warm, fragrant bath after a long day, allowing the calming sensation of the water to wash away your worries and rejuvenate your spirits. 🌹🕯️",
      "👨‍👩‍👧‍👦 Planning a family game night, enjoying the lighthearted competition, shared laughter, and the strengthening of bonds that such moments foster. 🎲🃏",
      "🏞️ Capturing nature's breathtaking beauty through photography, feeling excitement each time you discover a new picturesque view to immortalize. 📷⛰️",
      "🏝️ Building sandcastles on a sunny beach, feeling the warmth of the sand beneath your fingers and the cool sea breeze against your skin. 🏖️🌞",
      "🐾 Volunteering at a local animal shelter, spending time with loving animals, and experiencing the pure, unconditional affection they offer. 🐱🐕",
      "🌠 Stargazing on a clear, cool night, marvelling at the cosmic dance of twinkling stars and shooting comets, and feeling humbled by the universe's infinite beauty. 🌌🔭",
      "🎵 Playing a musical instrument, letting the harmonious notes flow from your fingertips and fill the room with a melody that echoes your mood. 🎹🎼",
      "☕ Indulging in a peaceful afternoon, sipping on your favorite tea or coffee, gazing out at the world from your window and enjoying the comforting warmth of the beverage. 🍵🖼️",
      "🧁 Baking your favorite treats, filling your home with delightful aromas, and feeling a comforting sense of nostalgia with each delicious bite. 🍪🥮",
      "🎄 Christmas Eve candlelit service singing silent night - energy of the peace and joy of the season all around 🕯️🎶",
      "🌸 Taking a mindful walk through a botanical garden, feeling the anxiety ebb away with each step, as the serene beauty of the environment helps you relax and find peace. 🚶‍♂️🌼",
      "🐾 Visiting an animal shelter and spending time with the adorable pets, finding comfort in their unconditional love, and witnessing their positive effect on your mood. 🐶😺",

    ]},
    { step: 10, circle: 7, text: [
      "🍇 Tasting exquisite wines during a vineyard tour in the rolling countryside, paired with a selection of locally-produced cheese 🍷",
      "🌕 Watching a lunar eclipse from a secluded spot in the countryside, the world seeming to hold its breath as the moon is gently veiled by shadow 🌘",
      "🎼 Attending a spontaneous jazz night in a bustling city, immersing in the irresistible rhythms and vibrant energy around you 🎷",
      "🧺 Spending an entire day making homemade jam and preserves with fresh, locally-sourced fruit. The sweet and tangy scent filling up the kitchen 🍓",
      "⛸️ Gliding across a frozen lake on a clear winter's day, the world silent except for the sound of your skates cutting through the ice ❄️",
      "🚲 Cycling down a long winding road in the countryside, feeling the fresh breeze and the warm sun on your skin as you pass by fields of golden wheat 🌾",
      "🌻 Planting sunflowers in the spring and watching them grow taller every day, finally blooming into bright, cheerful flowers by the end of summer ☀️",
      "📸 Taking a photography tour through a historic city, capturing its unique architecture, vibrant street life, and beautiful sunset panoramas 🏛️",
      "🎂 Baking a cake from scratch for a friend's surprise birthday party, delighting in their surprise as they blow out the candles 🎉",
      "🌸 Experiencing the magical spectacle of cherry blossom season in Japan, walking under a canopy of delicate pink flowers as petals gently rain down around you 🌸",
      "🛤️ Traveling on a scenic train journey through the Swiss Alps, marvelling at the majestic snow-capped peaks, pristine lakes, and picturesque villages 🏔️",
      "🏞️ Exploring the natural beauty of a geothermal park, with geysers erupting, mud pools bubbling, and the fascinating colors created by mineral deposits 🌋",
      "🍵 Experiencing a traditional tea ceremony in an ancient garden, tasting the subtle flavors of the tea and appreciating the tranquillity of the surroundings 🌿",
      "🎣 Going fishing on a peaceful lake at dawn, the world hushed and still, waiting patiently for the fish to bite as the sun rises over the water 🌅",
      "🏰 Exploring a historic castle, getting lost in the grandeur and elegance of the past, while imagining the stories that took place within its walls 👑",
      "💃 Dancing at a lively salsa club, the music filling the room and setting your feet in motion as you lose yourself in the rhythm and excitement 🎶",
      "🎠 Riding an antique carousel at a charming fairground, the world blurring around you as you go round and round, the music and laughter creating a sense of timeless joy 🎪",
      "🍣 Taking a sushi-making class in Tokyo, learning the delicate art of creating this traditional Japanese dish, and then savoring your handmade sushi 🇯🇵",
      "📖 Spending an afternoon lost in an enchanting old bookstore, discovering forgotten classics and uncovering hidden gems among the dusty shelves 📚",
      "🚗 Going on a cross-country road trip, the open road stretching out in front of you, stopping at interesting sights along the way, and singing along to your favorite songs 🎵",
      "🍽️ Learning to cook a traditional dish from a local chef while traveling abroad, bringing the flavors and memories of your trip back home with you 🌍",
      "🎆 Watching the sky light up with fireworks during a New Year's celebration in a big city, the excitement and hope for the new year palpable in the air 🎉",
      "🔺 Visiting the awe-inspiring pyramids of Egypt, marveling at the scale and craftsmanship, and feeling the weight of history around you 🐫",
      "🏊‍♀️ Diving into a natural cenote in Mexico, exploring the underwater caves and marveling at the clear, blue water 🇲🇽",
      "🚁 Taking a helicopter tour over a city or a natural landmark, feeling the thrill of seeing the world from a new perspective from above 🌍",
      "⛩️ Walking along the ancient pilgrimage routes in the mountains, stopping at temples along the way, and feeling a deep sense of peace and connection with nature 🌲",
      "🚣‍♀️ Canoeing down a gentle river, surrounded by lush greenery and wildlife, the only sounds the gentle lapping of the water and the calls of the birds 🦆",
      "🏂 Standing at the peak of a towering snow-capped mountain, taking in the panoramic views of the white expanse ahead before strapping on your snowboard 🗻",
      "🖼️ Walking through the hallowed halls of the Louvre in Paris, entranced by the wealth of artistry from centuries past, stopping to ponder the enigmatic smile of the Mona Lisa 🇫🇷",
      "🍕 Travelling through Italy, from the ancient, awe-inspiring ruins of Rome, to the captivating canals of Venice, and finally to the rich culinary heritage of Naples, the birthplace of pizza 🇮🇹",
      "🍺 Journeying through Germany, experiencing the old-world charm of its quaint villages, the grandeur of its castles, and the lively atmosphere of a traditional Bavarian beer hall 🇩🇪",
      "🍀 Wandering through the lush, green landscapes of Ireland, from the dramatic cliffs of Moher, to the bustling streets of Dublin, and finally to the serene tranquillity of the countryside, where you stumble upon an ancient, moss-covered stone circle 🇮🇪",
      "🦘 Embarking on an adventure in Australia, diving into the vibrant world of the Great Barrier Reef, exploring the bustling city life in Sydney, then venturing into the outback, where you witness the awe-inspiring vastness of the landscape and the majesty of Ayers Rock at sunset 🇦🇺",,
      "🎑 Enjoying a peaceful full moon night at a traditional Japanese ryokan, soaking in a warm onsen bath and listening to the distant hoot of an owl, creating a sense of tranquility and timelessness 🇯🇵",
      "🌆 Taking a leisurely walk along the beautifully lit streets of the city at Christmas time, with the scent of roasted chestnuts in the air and the sound of carols echoing around the skyscrapers 🏙️",
      "🏖️ Lounging on a hammock in a beach hut in the Maldives, with the clear turquoise ocean at your feet and a coconut drink in your hand, feeling the gentle sea breeze and listening to the soothing sound of the waves 🏝️",
      "🚂 Experiencing the old-world charm of a luxury train journey through the heart of India, witnessing the diverse landscapes, vibrant colors, and historic landmarks from your window, while enjoying the exquisite regional cuisines served on board 🇮🇳",
      "🍇 Strolling through the vineyards on a crisp autumn day, learning about the winemaking process and sampling the local wines, their rich flavors leaving a lasting impression on your palate 🍷",
      "🛀 Soaking in a hot springs pool in a secluded Icelandic retreat, surrounded by snow and the northern lights dancing in the sky above, creating a surreal and magical experience 🇮🇸",
      "🚶‍♀️ Walking down a favorite back country road to catch the sun setting over your favorite field of wildflowers in the springtime 🌼🌄",
      "🌆 Watching the most incredible sunrise from a friends luxury high rise apartment in the city while you petsit for them (and lovingly pet their adorable dog cuddled up next to you) 🐶🌇",
      "🔥 Making a cozy nest of blankets and pillows in front of the crackling fireplace on the floor in front of the fireplace and bringing out snacks to eat on it 🥨🍪",
      "🥣 Eating a favorite bowl of soup while cuddled on the couch with the softest blanket watching a favorite TV show 📺🛋️",
      "💑 Cuddling with a loved one during a rainstorm with a couple windows open to catch a crossbreeze and listen to the falling rain. Warmth of their body, beat of their heart, comfort of the bedding. 💖🌧️",
      "🛍️ Browsing a gift shop on vacation with a fun drink from a local shop in hand. Picking out something purely for fun. 🎁🥤",
      "🏖️ Sitting under a beach umbrella with a fun book and the sound of the waves of crystal clear water and a cooler full of snacks and drinks for the day. A refreshing breeze and nourishing sunshine and powder-fine sand underfoot. 📚🌊",
      "🌱 Planting a garden on a sunny spring day with a loved one. Feel of cool soil on hands, planting seeds, watering them, feel of sunshine and satisfaction. An ice cold drink and cookie when it's finished. 🌿🍹",
      "🐮 Taking a nap laying against a cow who is laying down. Scent of grass/hay, warmth of sunshine, feel of great gentle friend's tummy rising and falling against your back as you lay against it feeling so happy and relaxed 🌾☀️",
      "🍞 Baking fresh bread, the way its scent fills the house, the joy of eating it with loved ones 🏠❤️",
      "🦞 Eating dinner on a deck on the beach while the sun sets in the background - fresh seafood, white lights, laughter and friendship 🌅🍽️",
      "🌅 Waking up in a beautiful beachouse with the most wonderful view of the sunrise - coffee on the deck with the ocean breeze ☕🏝️",
      "🚴‍♀️ Bike riding through a charming little Beach Town - stopping at fun shops and food trucks and ending on the beach to eat a nice treat 🍦🏖️",
      "🍪 Snuggled up next to a loved one, being read to, eating a freshly made chocolate chip cookie with milk 📖🥛",
      "🏔️ Enjoying hot chocolate and a croissant cuddled up on the couch in a mountain cabin while big flakes of snow fall outside ❄️☕",
      "💆‍♀️ A massage at a luxurious spa that includes face and whole body - relaxing music, light refreshing scent, skilled touch that feels so calming and nurturing, total relaxation 🧖‍♀️🕯️",
      "🌌 Laying on a picnic blanket on a hilltop on a spring evening next to someone you love while you stargaze, talk, dream, feel the cool grass under your feet and the solid ground under your back, stars that look close enough to reach up and scoop a handful out of the sky 🌠🌱",
      "☕ A day date at a French Cafe and bakery. Sit by the inside stone fireplace and enjoy the richest hot chocolate and a freshly baked pastry while people watching and writing, reading, planning, etc. 🥐🔥",
      "💆‍♀️ Reveling in an opulent spa pedicure, complete with all the trimmings, as a luxurious massage chair kneads away your tension. Sipping on a delightful drink, engrossed in an absorbing book or losing yourself in soothing music, and feeling utterly cherished and pampered. 🍹💅",
      "✈️ Embarking on a fascinating journey to another country, imagining the architectural splendour of Rome, the romantic aura of Paris, the historic charm of London, or the breathtaking landscapes of Ireland. 🌍🏛️",
      "👭 Immersing in a lively shopping spree at the mall with a dear friend or relative, exchanging fashion tips, sharing laughter, and bonding over the thrill of finding perfect pieces. 🛍️👗",
      "💕 Indulging in a romantic date with someone special, caught up in the excitement of shared laughter, intimate conversation, and the delightful clink of glasses. 🥂🍷",
      "🍃 Embracing the thrill of horse riding along a scenic trail with friends or family, feeling the steady rhythm beneath you and breathing in the crisp, fresh air of the outdoors. 🏇🌄",
      "🌿 Cultivating life in your garden, watching with fascination as seeds sprout, grow, and bear fruit, basking in the gratifying rhythm of nature's cycle. 🌱🍎",
      "💦 Sweating it out in an energizing exercise class, following along with an app or participating in a group, feeling the satisfying burn of hard work and the exhilaration of achieving your fitness goals. 🏋️‍♀️📱",
      "🍕 Savoring a delicious meal on the beach with a loved one, all the while watching the sun paint a dazzling spectacle across the sky as it sets. 🏖️🌅",
      "🧘‍♀️ Immersing in the tranquility of a Yoga or relaxation class, flowing through poses and deep breaths, feeling your body and mind align in a serene harmony. 🕉️🌼",
      "💒 Experiencing the joy and splendor of a beautiful wedding, surrounded by love and celebration, and sharing in the couple's precious moments. 👰💐",
      "🥪 Enjoying a leisurely picnic in a picturesque location by a lake or in a meadow, soaking in the breathtaking views and relishing the simple joy of good food and nature's beauty. 🍉🌳",
      "📚 Curling up with an engaging book near a crackling fireplace, while you can see and hear the soft rain pouring down outside through your window. The perfect soothing backdrop to your literary adventure. 💧☔",
      "🎨 Unleashing your creativity in a tranquil painting session, feeling the gentle brush strokes come alive on the canvas as a calming sense of accomplishment fills you. 🖌️🌄",
      "🐶 Taking your furry friend on a peaceful walk at sunrise, basking in the early morning hues, and the simple joy your pet's enthusiasm brings. 🌅🦮",
      "🌸 Meditating in a serene garden, taking deep breaths as you tune into the symphony of chirping birds and rustling leaves, finding inner peace amid nature's embrace. 🍃🧘‍♀️",
      "🏝️ Taking a boat tour, snorkeling in clear waters, having a beach picnic, exploring a secluded island, and feeling the sense of adventure 🌴",
      "💛 Volunteering at a local charity, helping others, making a positive impact, meeting new people, and feeling the joy of giving back 🤝",
      "🎾 Picking up a tennis racket and playing a friendly match, feeling joy in your heart with every successful volley and score.👟🏸",
      "📚 At a library, asking a stranger for a book recommendation, exchanging ideas about your favorite authors, and feeling a connection over shared literary tastes. 📖👥",
      "🐕 At a dog park, striking up a conversation with a fellow pet owner, bonding over your love for dogs, and feeling a sense of belonging. 🐶👫",
      "🏞️ Enjoying an outdoor jacuzzi at a luxury air b&b on a cool night. White string lights, steam from the jacuzzi, delightful massaging of the jets, a fun drink in hand, relaxation 🍹",
      "🌳 At a community garden, chatting with a fellow gardener about plant care tips, finding camaraderie in shared passion, and the peace of nature around you. 🌻👩‍🌾",
      "🍜 At a local food festival, engaging with a vendor about their culinary techniques, learning something new, and feeling your confidence grow with each interaction. 🍲👨‍🍳",
      "🌹 Asking someone on a date during a calm, moonlit evening, feeling your heart flutter as you take the brave step, and the gentle moon providing you comfort. 🌙🥂",
      "💐 Gathering the courage to ask for someone's number at a coffee shop, feeling a sense of achievement as they write it down for you, and the cozy atmosphere of the café surrounding you. ☕📱",
      "🎡 On a fun fair date, offering to win a plush toy for your date, feeling a thrill when you succeed, and their smile providing a sense of joy and comfort. 🎠🧸",
      "🏖️ On a beach date, building a sandcastle together, playfully teasing each other, and the sound of waves providing a soothing backdrop to the day. 🌊🏰",
      "🍽️ Making a home-cooked dinner for a date, pouring your heart into the meal, and feeling a sense of contentment when they appreciate your efforts. 🏠🍷",
      "☕ Gathering up the courage to ask for someone's phone number at a café, exchanging a smile and a laugh, and feeling a warm sense of accomplishment when they hand it to you. 📞😄",
      "🍽️ Embarking on a cooking class date, laughing and sharing stories while you both fumble through new recipes, and enjoying the delicious meal you've prepared together. 🥘👩‍🍳👨‍🍳",
      "📚 Visiting a local library or bookstore, striking up a conversation about a mutual favorite book, and feeling an immediate connection with a stranger. 📖👥",
      "🌲 Going camping in the woods, surrounded by the soothing sounds of nature, and letting go of your worries as you lose yourself in the tranquility of the great outdoors. ⛺🔥",
      "🚴‍♀️ Participating in a group bike ride, feeling the rush of the wind and the camaraderie of your fellow riders, helping to dispel feelings of isolation and anxiety. 🌳🚴‍♂️",
      "🧘 Joining a group meditation session in a peaceful park, letting the calming environment and shared sense of peace bring relief from anxiety and stress. 🌳🌼",
      "🌄 Going on a hike with friends or family, the sense of accomplishment at reaching the summit, the peacefulness of nature, and the breathtaking panoramic views 🏞️",
      "🎪 Exploring a city fair, trying different street foods, winning prizes at games, enjoying the lively atmosphere and colorful lights, and capturing the perfect selfie 📸",
      "🍏 Visiting a Farmers' Market, sampling fresh produce, buying handmade crafts, feeling the warm community spirit, and enjoying the live music 🎵",
      "🏃 Running a marathon, feeling the sense of achievement, celebrating with friends, and wearing the medal with pride 🏅",
    ]},
    { step: 11, circle: 5, text: '🥳 Well done, James, great job on completing another round! 🎉 This is a fantastic step forward and is exactly what you need to change your life. Thank you for practicing! 😄' },
    { step: 12, circle: 1, text: 'Start a new round? Remember to think of a challenge.'},
];

let currentStep = 11;
let practiceCount = -1;
const triangle = document.getElementById('triangle');
function updateTrianglePosition(circleId, rotation = 0) {
    const circle = document.getElementById(circleId);
    const circleRect = circle.getBoundingClientRect();
    const parentRect = circle.parentElement.getBoundingClientRect();

    triangle.style.left = circleRect.left - parentRect.left + (circle.offsetWidth / 2) - 10 + 'px';
    triangle.style.top = circleRect.top - parentRect.top + (circle.offsetHeight / 2) - 7.5 + 'px';
    triangle.style.transform = `rotate(${rotation}deg)`;
}

// Custom inputs
const nameInput = document.getElementById('name-input');
const symptomsInput = document.getElementById('symptoms-input');
const behavioursInput = document.getElementById('behaviours-input');
const proclamationInput = document.getElementById('proclamation-input');
const updateInputsBtn = document.getElementById('update-inputs');

// Load saved inputs from local storage
nameInput.value = localStorage.getItem('userName') || '';
symptomsInput.value = localStorage.getItem('symptoms') || '';
behavioursInput.value = localStorage.getItem('behaviours') || '';
proclamationInput.value = localStorage.getItem('proclamation') || '';

// Update when the button is clicked.
updateInputsBtn.addEventListener('click', function() {
    const userName = nameInput.value;
    const symptoms = symptomsInput.value;
    const behaviours = behavioursInput.value;
    const proclamation = proclamationInput.value;

    // Save inputs to local storage
    localStorage.setItem('userName', userName);
    localStorage.setItem('symptoms', symptoms);
    localStorage.setItem('behaviours', behaviours);
    localStorage.setItem('proclamation', proclamation);

    updateStepText();
});

// Function to replace custom inputs in text
function replaceCustomInputsInText(text) {
    let newText = text.replace(/James/g, nameInput.value);
    newText = newText.replace(/fear, fatigue, anxiety and food intolerances/g, symptomsInput.value);
    newText = newText.replace(/unhelpful coping behaviours/g, behavioursInput.value);
    newText = newText.replace(/☝️ I am healthy, strong, 💪😁 energetic ⚡ and confident. 😎/g, proclamationInput.value);
    return newText;
}

//step by step
const changeTextBtn = document.getElementById('change-text');
changeTextBtn.addEventListener('click', function() {
    updateStepText();
});
function updateStepText() {
    const step = dailyPractices.find(p => p.step === currentStep);

    if (Array.isArray(step.text)) {
        const newText = replaceCustomInputsInText(step.text[Math.floor(Math.random() * step.text.length)]);
        dailyPracticeStepEl.innerHTML = `<strong>Step ${step.step}:</strong> ${newText}`;
    } else {
        const newText = replaceCustomInputsInText(step.text);
        dailyPracticeStepEl.innerHTML = `<strong>Step ${step.step}:</strong> ${newText}`;
    }
}

function nextStep() {
    currentStep++;

    if (currentStep > dailyPractices.length) {
        currentStep = 1;
    }

    let timedsteps = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    if (timedsteps.includes(currentStep)) {
      startTimer();
      pauseButton.style.display = 'inline-block'; // Show the pause button
      pauseButton.textContent = 'Pause Timer';
}

    if (currentStep === 12) {
        stopTimer();
        practiceCount++;
        progressCountEl.textContent = practiceCount;
        pauseButton.style.display = 'none'; // Hide the pause button
} else {
        // Show the pause button for all steps other than 12
        pauseButton.style.display = 'inline-block';
    }

    const step = dailyPractices.find(p => p.step === currentStep);

    // Show the change button
    if (currentStep === 9 || currentStep === 10) {
        changeTextBtn.style.display = 'block';
    } else {
        changeTextBtn.style.display = 'none';
    }

    let stepText = step.text;
      if (Array.isArray(stepText)) {
        stepText = replaceCustomInputsInText(stepText[Math.floor(Math.random() * stepText.length)]);
      } else {
        stepText = replaceCustomInputsInText(stepText);
      }

        if (currentStep !== 12) {
               dailyPracticeStepEl.innerHTML = `<strong>Step ${step.step}:</strong> ${stepText}`;
               nextStepBtn.textContent = currentStep === 11 ? '✅ Complete Round' : '➡️ Next Step';
           } else {
               dailyPracticeStepEl.innerHTML = stepText;
               nextStepBtn.textContent = '↗️ Begin New Round';
           }

           if (currentStep !== 12) {
                   switch (step.step) {
                       case 1:
                           currentRotation = 0;
                           updateTrianglePosition(`circle-${step.circle}`, currentRotation);
                           break;
                       case 2:
                       case 3:
                       case 4:
                       case 9:
                       case 10:
                       case 11:
                           currentRotation = 0;
                           updateTrianglePosition(`circle-${step.circle}`, currentRotation);
                           break;
                       case 5:
                           currentRotation = 110;
                           updateTrianglePosition(`circle-${step.circle}`, currentRotation);
                           break;
                       case 6:
                           currentRotation = 180;
                           updateTrianglePosition(`circle-${step.circle}`, currentRotation);
                           break;
                       case 7:
                           currentRotation = 110;
                           updateTrianglePosition(`circle-${step.circle}`, currentRotation);
                           break;
                       case 8:
                           currentRotation = 0;
                           updateTrianglePosition(`circle-${step.circle}`, currentRotation);
                           break;
                   }

        triangle.style.display = 'block';
    } else {
        // If the step is 12, hide the triangle
        triangle.style.display = 'none';
    }
}

nextStepBtn.addEventListener('click', nextStep);
nextStep();
