/* READ ME ABOUT */

/* What would your life be like if you could take all the negative emotions you ever felt and lower their intensity so they didn't impact you as powerfully, so you were always in charge? What would your life be like if you could taie the most positive emotions and intensify them, thereby taking your life to a higher level? You can both of these in a hearbeat. */

/* depressed is a word that came up with many definitions. I am trying to figure out a way to call this array in my associative array below */
var depressed = new Array();

depressed.push("calm before action");
depressed.push("not on top of it");
depressed.push("on the road to a turn around");

var x = Math.floor((Math.random() * 3));
console.log(depressed[x]);


  var negative = {
    "angry": "disenchanted",
    "afraid": "uncomfortable",
    "anxious": "a little concerned",
    "confused": "curious",
    "destroyed": "set back",
    "that stinks": "thats a little aromatic",
    "destroyed": "set back",
    "pissed off": "tinkled",
    "disgusted": "surprised",
    "dread": "challenge",
    "fear": "wonderment",
    "fearful": "curious",
    "frightened": "inquiring",
    "furious": "passionate",
    "I hate": "I prefer",
    "impatient": "anticipating",
    "insecure": "questioning",
    "jealous": "overloving",
    "lazy": "storing energy",
    "lost": "searching",
    "nervous": "energized",
    "overloaded": "stretching",
    "painful":"challenged",
    "petrified": "deflected",
    "sad": "sorting my thoughts out",
    "scared": "excited",
    "oh, shit": "oh, poo",
    "sick": "cleansing",
    "terrible": "different"
};

/* WORDS THAT NEED TO BE ADDED -- haven't figured out a way to generate a random definition with one property in an associate array /*
/*
anxious: a little concerned
anxious: expectant
depressed: calm before action
depressed: not on top of it
depressed: on the road to a turn around
disappointed: underwhelmed
disappointed: delayed
embarrassed: aware
embarrassed: stimulated
exhausted: recharging
exhausted: a little droopy
failure: learning
failure: getting educated
failure: stumble
frustrated: challenged
frustrated: fascinated
humiliated: uncomfortable
humiliated: surprised
hurt: bothered
hurt: dinged
insulted: misunderstood
insulted: misinterpreted
irritated: stimulated
irritated: ruffled
lonely: available
lonely: temporarily on my own
overwhelmed: some imbalance
overwhelmed: busy
overwhelmed: challenged
overwhelmed: in demand
overwhelmed: many opportunities
overwhelmed: maximized
overwhelmed: moving and shaking
rejected: deflected
rejected: learning
rejected: overlooked
rejected: underappreciated
rejected: misunderstood
stressed: busy
stressed: blessed
stressed: energized
stupid: discovering
stupid: unresourceful
stupid: learning
*/

var good ={
  "alert": "energized",
  "all right": "superb",
  "attractive": "gorgeous",
  "awake": "raring to go",
  "comfortable": "smashing",
  "confident": "unstoppable",
  "content": "serene",
  "cool": "outrageous",
  "curious": "fascinated",
  "determined": "unstoppable",
  "energized": "turbo-charged!",
  "enthusiastic": "excited",
  "excited": "ecstatic",
  "fantastic": "fabulous",
  "fast": "ballistic",
  "fine": "awesome",
  "focused": "energized",
  "fortunate": "unbelievably blessed",
  "full": "replete",
  "fun": "vivacious",
  "glad": "over the moon",
  "intense": "laser-like",
  "interested": "enthralled",
  "interesting": "captivating",
  "loved": "adored",
  "moving forward": "moving at warp speed",
  "no problem": "happy to",
  "not bad": "could not be better",
  "paying attention": "focused",
  "peaceful": "serene",
  "perfect": "extraordinary",
  "pleasant": "monumental",
  "powerful": "invincible",
  "pumped up": "soaring",
  "quick": "explosive",
  "resourceful": "brilliant",
  "satisfied": "satiated",
  "smart": "gifted",
  "stimulated": "charged up",
  "strong": "invincible",
  "super": "booming",
  "tasty": "sumptuous",
  "terrific": "ecstatic"
}

/* WORDS THAT NEED TO BE ADDED -- I haven't figured out a way to generate a random definition from these repeated words in the original book

 excited: ecstatic
 excited: impassioned
 excited: outrageous
 feeling good: cosmically charged
 feeling good: just tremendous
 good: better than excellent
 good: dynamite
 good: just does not get any better
 good: magic
 good: vibrant
 great: exuberant
 great: exhilarated
 great: killer
 great: incredible
 great: phenomenal
 happy: ecstatic
 happy: jazzed
 happy: totally blissed
 happy: stoked, exuberant, and hyped
 like: enraptured
 like: idolized
 like: captivating
 loving: exuding love
 loving: passionate
 motivated: compelled
 motivated: driven to
 motivated: juiced
 nice: fantastic
 nice: spectacular
 okay: energized
 okay: fantastic
 okay: perfect
 pretty good: coolamundo
 pretty good: great
 secure: confident
 secure: emboldened
 secure: empowered
 secure: centered



/* NEGATIVE SEARCH MECHANISM */
var negSearch = function(word){
  var theWord = negative[word];
  console.log(theWord);
};

/* GOOD-TO-GREAT SEARCH MECHANISM */

var goodSearch = function(word){
  var theWord = good[word];
  console.log(theWord);
}
