//#region 
// ALDRI ENDRE NOE INNEN FOR Regionen
import * as Blocks from "./barneprat/blocks.mjs";
import * as Actions from "./barneprat/actions.mjs";
import * as Utils from "./barneprat/utils.mjs";
import { removeAll } from "./barneprat/globalTimer.mjs";

import LYKKE_KORT from "./lykkekort.mjs"; //Har med kort å gjøre
import utfkort from "./utfkort.mjs";
import spmkort from "./spmkort.mjs";

const GaaTil = (maal) => {
    document.body.innerHTML = "";
    removeAll();
    maal();
}

const Start = (maal) => {
    if (window.location.hash) {
        maal = window.location.hash.replace("#", "")
        eval(maal)();
    } else {
        GaaTil(maal);
    }
}
//#endregion



const bakgrunnsbilde = "bilder/bakgrunn.png";
const breddeIpad = 1080;
const høydeIpad = 818;


Start(Velkommen);
// Disse scenene er her som eksempler. Du kan ta dem bort eller endre dem. 

function Velkommen() {
    const image = new Blocks.Image(bakgrunnsbilde, { x: 0, y: 0, width: breddeIpad, height: høydeIpad })
    const start = new Blocks.Text("Start", { style: "overskrift", x: 400, y: 500, width: 100, height: 100 });
    const Text = new Blocks.Text("Yldra`s", { style: "overskrift4", x: 375, y: 100, width: 200, height: 100 });
    const Text2 = new Blocks.Text("øy", { style: "overskrift4", x: 625, y: 100, width: 200, height: 100 });
    const image1 = new Blocks.Image("bilder/yldra.png", { x: 525, y: 190, width: 350, height: 350 })
    const lyd = new Blocks.Sound("", {loop:false, auto:true})
    Actions.Click(start, () => {
        GaaTil(Regler);
    })

    Actions.Click(image, () => {
        GaaTil(Regler);
    })


}
function Regler() {
    const lyd = new Blocks.Sound("lydfiler/Yldraintroogregler.mp3", {loop:false, auto:true})
    const image = new Blocks.Image(bakgrunnsbilde, { x: 0, y: 0, width: breddeIpad, height: høydeIpad })
    const start = new Blocks.Text("Regler", { style: "overskrift", x: 400, y: 500, width: 100, height: 100 });
    const image1 = new Blocks.Image("bilder/yldra.png", { x: 300, y: 70, width: 500, height: 500 })
    
    Actions.Click(start, () => {
        lyd.stop();
        GaaTil(scene2);
    })

    Actions.Click(image, () => {
        lyd.stop();
        GaaTil(scene2);
    })

    Actions.Click(image1, () => {
        lyd.start();
        //GaaTil(lyd);
    })
   
}

function scene2() {

    const image1 = new Blocks.Image(bakgrunnsbilde, { x: 0, y: 0, width: breddeIpad, height: høydeIpad })
  
    new Blocks.Text("Lykkekort", { style: "overskrift2", x: 150, y: 450, width: 10, height: 10 });
    new Blocks.Text("Spørsmålskort", { style: "overskrift2", x: 410, y: 450, width: 10, height: 10 });
    new Blocks.Text("Utfordringskort", { style: "overskrift2", x: 710, y: 450, width: 10, height: 10 });

    const image = new Blocks.Image("bilder/lykkekort.jpg", { x: 150, y: 200, width: 200, height: 200 }) //Har med kort å gjøre
    const bilder = new Blocks.Image("bilder/sporsmalskort.jpg", { x: 450, y: 200, width: 200, height: 200 })
    const bilde1 = new Blocks.Image("bilder/yldra.png", { x: 750, y: 100, width: 200, height: 200 })
    const bilde = new Blocks.Image("bilder/utfordringskort.jpg", { x: 750, y: 200, width: 200, height: 200 })

    

    Actions.Click(image, () => { //Har med kort å gjøre

        GaaTil(LykkeKortScene);
    })

    Actions.Click(bilder, () => {
        GaaTil(Sporsmalsscene);
    })

    Actions.Click(bilde, () => {
        GaaTil(utfordringsscene);
    })

}


function LykkeKortScene() {
    //Har med kort å gjøre
   visKort(LYKKE_KORT);
}

function visKort(kortstokk){

    let kortNummer = Math.floor(Math.random() * kortstokk.length);
    let tilfeldigKort = kortstokk[kortNummer]
    const bildeUrl = tilfeldigKort.bilde;
    const lydUrl = tilfeldigKort.lyd;
    const tekstRandom = tilfeldigKort.tekst
    const lyd = new Blocks.Sound(lydUrl, {loop:false, auto:true})
    const image = new Blocks.Image(bildeUrl, { x: 0, y: 0, width: breddeIpad, height: høydeIpad })
    const tekst = new Blocks.Text(tekstRandom, { style: "overskrift3", x: 375, y: 600, width: 500, height: 500 });
    const image1 = new Blocks.Image("bilder/tilbake.png", { x: 25, y: 25, width: 100, height: 100 })
    Actions.Click(image1, () => {
        GaaTil(scene2);
    })
    Actions.Click(tekst, () => {
        GaaTil(scene2);
    })
}

/* 
function TrekkTilfeldigKort(etKort) { //bruk annet navn siden den skal brukes flere ganger

    let kortNummer = Math.floor(Math.random() * etKort.length);
    return etKort[kortNummer] ;
}
*/
function Sporsmalsscene() {

visKort(spmkort);
const tekst = new Blocks.Text(tekstRandom, { style: "overskrift3", x: 375, y: 600, width: 500, height: 500 });
    Actions.Click(image1, () => {
        GaaTil(scene2);
    })
    const lydUrl = tilfeldigKort.lyd;
    const lyd = new Blocks.Sound(lydUrl, {loop:false, auto:true})
    const image1 = new Blocks.Image("bilder/tilbake.png", { x: 25, y: 25, width: 100, height: 100 })
}

function utfordringsscene() {

    visKort(utfkort);
    const tekst = new Blocks.Text(tekstRandom, { style: "overskrift3", x: 300, y: 550, width: 300, height: 300 });
    const image1 = new Blocks.Image("bilder/tilbake.png", { x: 25, y: 25, width: 100, height: 100 })
    Actions.Click(image1, () => {
        GaaTil(scene2);
    })

    const lydUrl = tilfeldigKort.lyd;
    const lyd = new Blocks.Sound(lydUrl, {loop:false, auto:true})


}

