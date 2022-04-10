const DICT = {"0":53,
              "1":52,"2":31,"3":49,"4":51,"5":38,"6":54,"7":48,"8":32,"9":55," ":0,"a":1,"b":2,"c":3,"d":4,"e":5,"f":6,"g":7,"h":8,"i":9,"j":10,"k":11,"l":12,"m":13,"n":14,"o":15,"p":16,"q":17,"r":18,"s":19,"t":20,"u":21,"v":22,"w":23,"x":24,"y":25,"z":26,"-":27,"‘":28,"’":29,".":30,"`":33,"ß":34,"ı":35,"ə":36,"đ":37,"о":39,"к":40,"т":41,"я":42,"б":43,"р":44,"ь":45,"с":46,"и":47,"œ":50,"ø":56,"æ":57,"س":58,"ي":59,"د":60,"ن":61,"و":62,"ð":63,"у":64,"е":65,"ł":66,"þ":67,"д":68,"н":69,"ч":70,"а":71,"г":72,"п":73,"ш":74,"л":75,"в":76,"ц":77,"ј":78,"м":79,"з":80,"ħ":81,"”":82,"ٍ":83,"ж":84,"ق":85,"ر":86,"ة":87,"ا":88,"ل":89,"م":90};
const NUMBER_OF_KEYS = 91//Object.keys(DICT).length;
function dfs (curr, len){
    //use stack for dfs.
    let stack = [curr];
    let res = [];
    while (stack.length > 0 && res.length < len){
      let child = stack.pop();
      if (child.city){
        for (var i = 0; i < child.city.length; i++){
          res.push(child.city[i]);
          if (res.length === len){
            return res;
          };
        };
      };
      for (let i = NUMBER_OF_KEYS - 1; i >= 0; i--){
        //Starting from the largest index for returning in alphabetical order
        if (i in child){
          stack.push(child[i]);
        };
      };
    };
    return res;
  };
function listNames (trie, searchString) {
    //Converting accents into english equivalents.
    let s = searchString.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
    let curr = trie;
    for (let i = 0; i < s.length; i++){
      let c = s.charAt(i);
      if (curr[DICT[c]] === undefined){
        //No such prefix
        return [];
      };
      curr = curr[DICT[c]];
    }
    let res = dfs(curr, 10);
    return res;
};
module.exports = {DICT, NUMBER_OF_KEYS, dfs, listNames};