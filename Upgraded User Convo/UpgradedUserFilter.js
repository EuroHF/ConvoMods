// Paste in console and Enjoy HF Convo at it's best!
// Donations Appreciated (BTC): bc1qspsj3rpl2l7au9t3q3y0m7mnqqr8hyjey0rhde

var dom = document, count = 0, bubbleCount = 0, totalBubbles, removed = 0;
Repeater();
async function Repeater(){
    await sleep(100);
    await Routine();
}
async function Routine(){
     var PurgedGroup = dom.getElementsByClassName("group2");
        var BubbleGroup = dom.getElementsByClassName("message-bubble message-bubble-message");
        for (let i = 0; i < PurgedGroup.length; i++){
            var parent = PurgedGroup[i].parentNode.parentNode;
            count ++;
        }
        for (let i = 0; i < BubbleGroup.length; i++){
            var parent = BubbleGroup[i];
            if (parent.parentNode.parentNode.children[0].children[0].children[0].children[0] != null){
            let str = parent.parentNode.parentNode.children[0].children[0].children[0].children[0].outerHTML; 
                var s = str;
                var LastChunk = s.slice(0, s.lastIndexOf(">"));
                var LastChunk2 = LastChunk.slice(0, LastChunk.lastIndexOf(">"));                
                var firstChunk = LastChunk2.substring(15);           
                if (firstChunk == `group2"`){
                    removed ++; console.log("Removed a total of "+removed+" user messages.");
                    parent.parentNode.parentNode.parentNode.remove();
                }
            }
            bubbleCount ++;
        }    
    await Repeater();
}
async function sleep(ms) { return new Promise(resolve => setTimeout(resolve, ms)); }