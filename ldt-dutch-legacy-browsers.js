/****************** 
 * Ldt-Dutch *
 ******************/


// store info about the experiment session:
let expName = 'ldt-dutch';  // from the Builder filename that created this script
let expInfo = {
    'participant': '',
    'list_no': ["1", "2", "3"],
};

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0,0,0]),
  units: 'height',
  waitBlanking: true,
  backgroundImage: '',
  backgroundFit: 'none',
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); },flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(welcomeRoutineBegin());
flowScheduler.add(welcomeRoutineEachFrame());
flowScheduler.add(welcomeRoutineEnd());
const practiceLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(practiceLoopBegin(practiceLoopScheduler));
flowScheduler.add(practiceLoopScheduler);
flowScheduler.add(practiceLoopEnd);







flowScheduler.add(startRoutineBegin());
flowScheduler.add(startRoutineEachFrame());
flowScheduler.add(startRoutineEnd());
const trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trialsLoopBegin(trialsLoopScheduler));
flowScheduler.add(trialsLoopScheduler);
flowScheduler.add(trialsLoopEnd);






flowScheduler.add(endRoutineBegin());
flowScheduler.add(endRoutineEachFrame());
flowScheduler.add(endRoutineEnd());
flowScheduler.add(quitPsychoJS, 'Bedankt voor het meedoen!', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, 'Bedankt voor het meedoen!', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
    {'name': 'resources/practice.xlsx', 'path': 'resources/practice.xlsx'},
    {'name': 'resources/volume_icon.png', 'path': 'resources/volume_icon.png'},
    {'name': 'resources/audio/aandacht.wav', 'path': 'resources/audio/aandacht.wav'},
    {'name': 'resources/audio/aannoelen.wav', 'path': 'resources/audio/aannoelen.wav'},
    {'name': 'resources/audio/aanpot.wav', 'path': 'resources/audio/aanpot.wav'},
    {'name': 'resources/audio/aantal.wav', 'path': 'resources/audio/aantal.wav'},
    {'name': 'resources/audio/aas.wav', 'path': 'resources/audio/aas.wav'},
    {'name': 'resources/audio/acteur.wav', 'path': 'resources/audio/acteur.wav'},
    {'name': 'resources/audio/acteurs.wav', 'path': 'resources/audio/acteurs.wav'},
    {'name': 'resources/audio/acties.wav', 'path': 'resources/audio/acties.wav'},
    {'name': 'resources/audio/adres.wav', 'path': 'resources/audio/adres.wav'},
    {'name': 'resources/audio/adruis.wav', 'path': 'resources/audio/adruis.wav'},
    {'name': 'resources/audio/afcert.wav', 'path': 'resources/audio/afcert.wav'},
    {'name': 'resources/audio/afkol.wav', 'path': 'resources/audio/afkol.wav'},
    {'name': 'resources/audio/afspraak.wav', 'path': 'resources/audio/afspraak.wav'},
    {'name': 'resources/audio/afstand.wav', 'path': 'resources/audio/afstand.wav'},
    {'name': 'resources/audio/afwas.wav', 'path': 'resources/audio/afwas.wav'},
    {'name': 'resources/audio/afziep.wav', 'path': 'resources/audio/afziep.wav'},
    {'name': 'resources/audio/alimd.wav', 'path': 'resources/audio/alimd.wav'},
    {'name': 'resources/audio/amateur.wav', 'path': 'resources/audio/amateur.wav'},
    {'name': 'resources/audio/amateurs.wav', 'path': 'resources/audio/amateurs.wav'},
    {'name': 'resources/audio/antwoord.wav', 'path': 'resources/audio/antwoord.wav'},
    {'name': 'resources/audio/appel.wav', 'path': 'resources/audio/appel.wav'},
    {'name': 'resources/audio/appels.wav', 'path': 'resources/audio/appels.wav'},
    {'name': 'resources/audio/applaus.wav', 'path': 'resources/audio/applaus.wav'},
    {'name': 'resources/audio/arroest.wav', 'path': 'resources/audio/arroest.wav'},
    {'name': 'resources/audio/arts.wav', 'path': 'resources/audio/arts.wav'},
    {'name': 'resources/audio/auto.wav', 'path': 'resources/audio/auto.wav'},
    {'name': 'resources/audio/baan.wav', 'path': 'resources/audio/baan.wav'},
    {'name': 'resources/audio/baas.wav', 'path': 'resources/audio/baas.wav'},
    {'name': 'resources/audio/baken.wav', 'path': 'resources/audio/baken.wav'},
    {'name': 'resources/audio/ballen.wav', 'path': 'resources/audio/ballen.wav'},
    {'name': 'resources/audio/bap.wav', 'path': 'resources/audio/bap.wav'},
    {'name': 'resources/audio/bark.wav', 'path': 'resources/audio/bark.wav'},
    {'name': 'resources/audio/bedwag.wav', 'path': 'resources/audio/bedwag.wav'},
    {'name': 'resources/audio/beelden.wav', 'path': 'resources/audio/beelden.wav'},
    {'name': 'resources/audio/been.wav', 'path': 'resources/audio/been.wav'},
    {'name': 'resources/audio/beer.wav', 'path': 'resources/audio/beer.wav'},
    {'name': 'resources/audio/begin.wav', 'path': 'resources/audio/begin.wav'},
    {'name': 'resources/audio/bellers.wav', 'path': 'resources/audio/bellers.wav'},
    {'name': 'resources/audio/bendes.wav', 'path': 'resources/audio/bendes.wav'},
    {'name': 'resources/audio/benen.wav', 'path': 'resources/audio/benen.wav'},
    {'name': 'resources/audio/berg.wav', 'path': 'resources/audio/berg.wav'},
    {'name': 'resources/audio/bergen.wav', 'path': 'resources/audio/bergen.wav'},
    {'name': 'resources/audio/bericht.wav', 'path': 'resources/audio/bericht.wav'},
    {'name': 'resources/audio/beslond.wav', 'path': 'resources/audio/beslond.wav'},
    {'name': 'resources/audio/bespeet.wav', 'path': 'resources/audio/bespeet.wav'},
    {'name': 'resources/audio/beugels.wav', 'path': 'resources/audio/beugels.wav'},
    {'name': 'resources/audio/beuten.wav', 'path': 'resources/audio/beuten.wav'},
    {'name': 'resources/audio/bewijs.wav', 'path': 'resources/audio/bewijs.wav'},
    {'name': 'resources/audio/bezems.wav', 'path': 'resources/audio/bezems.wav'},
    {'name': 'resources/audio/bezit.wav', 'path': 'resources/audio/bezit.wav'},
    {'name': 'resources/audio/bezoek.wav', 'path': 'resources/audio/bezoek.wav'},
    {'name': 'resources/audio/biel.wav', 'path': 'resources/audio/biel.wav'},
    {'name': 'resources/audio/biem.wav', 'path': 'resources/audio/biem.wav'},
    {'name': 'resources/audio/biert.wav', 'path': 'resources/audio/biert.wav'},
    {'name': 'resources/audio/blap.wav', 'path': 'resources/audio/blap.wav'},
    {'name': 'resources/audio/blit.wav', 'path': 'resources/audio/blit.wav'},
    {'name': 'resources/audio/bloemen.wav', 'path': 'resources/audio/bloemen.wav'},
    {'name': 'resources/audio/blofuil.wav', 'path': 'resources/audio/blofuil.wav'},
    {'name': 'resources/audio/blok.wav', 'path': 'resources/audio/blok.wav'},
    {'name': 'resources/audio/blokken.wav', 'path': 'resources/audio/blokken.wav'},
    {'name': 'resources/audio/boek.wav', 'path': 'resources/audio/boek.wav'},
    {'name': 'resources/audio/boeken.wav', 'path': 'resources/audio/boeken.wav'},
    {'name': 'resources/audio/boer.wav', 'path': 'resources/audio/boer.wav'},
    {'name': 'resources/audio/boeren.wav', 'path': 'resources/audio/boeren.wav'},
    {'name': 'resources/audio/bonus.wav', 'path': 'resources/audio/bonus.wav'},
    {'name': 'resources/audio/bonzel.wav', 'path': 'resources/audio/bonzel.wav'},
    {'name': 'resources/audio/boodschap.wav', 'path': 'resources/audio/boodschap.wav'},
    {'name': 'resources/audio/boof.wav', 'path': 'resources/audio/boof.wav'},
    {'name': 'resources/audio/bork.wav', 'path': 'resources/audio/bork.wav'},
    {'name': 'resources/audio/brars.wav', 'path': 'resources/audio/brars.wav'},
    {'name': 'resources/audio/bried.wav', 'path': 'resources/audio/bried.wav'},
    {'name': 'resources/audio/bril.wav', 'path': 'resources/audio/bril.wav'},
    {'name': 'resources/audio/broers.wav', 'path': 'resources/audio/broers.wav'},
    {'name': 'resources/audio/brot.wav', 'path': 'resources/audio/brot.wav'},
    {'name': 'resources/audio/bud.wav', 'path': 'resources/audio/bud.wav'},
    {'name': 'resources/audio/bureau.wav', 'path': 'resources/audio/bureau.wav'},
    {'name': 'resources/audio/burger.wav', 'path': 'resources/audio/burger.wav'},
    {'name': 'resources/audio/burgers.wav', 'path': 'resources/audio/burgers.wav'},
    {'name': 'resources/audio/cameras.wav', 'path': 'resources/audio/cameras.wav'},
    {'name': 'resources/audio/centen.wav', 'path': 'resources/audio/centen.wav'},
    {'name': 'resources/audio/christen.wav', 'path': 'resources/audio/christen.wav'},
    {'name': 'resources/audio/cijfers.wav', 'path': 'resources/audio/cijfers.wav'},
    {'name': 'resources/audio/cillen.wav', 'path': 'resources/audio/cillen.wav'},
    {'name': 'resources/audio/circus.wav', 'path': 'resources/audio/circus.wav'},
    {'name': 'resources/audio/collega.wav', 'path': 'resources/audio/collega.wav'},
    {'name': 'resources/audio/collegas.wav', 'path': 'resources/audio/collegas.wav'},
    {'name': 'resources/audio/culsuur.wav', 'path': 'resources/audio/culsuur.wav'},
    {'name': 'resources/audio/cursus.wav', 'path': 'resources/audio/cursus.wav'},
    {'name': 'resources/audio/cyclus.wav', 'path': 'resources/audio/cyclus.wav'},
    {'name': 'resources/audio/daart.wav', 'path': 'resources/audio/daart.wav'},
    {'name': 'resources/audio/daders.wav', 'path': 'resources/audio/daders.wav'},
    {'name': 'resources/audio/dag.wav', 'path': 'resources/audio/dag.wav'},
    {'name': 'resources/audio/dagen.wav', 'path': 'resources/audio/dagen.wav'},
    {'name': 'resources/audio/dame.wav', 'path': 'resources/audio/dame.wav'},
    {'name': 'resources/audio/dames.wav', 'path': 'resources/audio/dames.wav'},
    {'name': 'resources/audio/dansa.wav', 'path': 'resources/audio/dansa.wav'},
    {'name': 'resources/audio/dant.wav', 'path': 'resources/audio/dant.wav'},
    {'name': 'resources/audio/dap.wav', 'path': 'resources/audio/dap.wav'},
    {'name': 'resources/audio/dasten.wav', 'path': 'resources/audio/dasten.wav'},
    {'name': 'resources/audio/degen.wav', 'path': 'resources/audio/degen.wav'},
    {'name': 'resources/audio/deken.wav', 'path': 'resources/audio/deken.wav'},
    {'name': 'resources/audio/demel.wav', 'path': 'resources/audio/demel.wav'},
    {'name': 'resources/audio/dest.wav', 'path': 'resources/audio/dest.wav'},
    {'name': 'resources/audio/deuren.wav', 'path': 'resources/audio/deuren.wav'},
    {'name': 'resources/audio/didde.wav', 'path': 'resources/audio/didde.wav'},
    {'name': 'resources/audio/diem.wav', 'path': 'resources/audio/diem.wav'},
    {'name': 'resources/audio/dieren.wav', 'path': 'resources/audio/dieren.wav'},
    {'name': 'resources/audio/dilder.wav', 'path': 'resources/audio/dilder.wav'},
    {'name': 'resources/audio/ding.wav', 'path': 'resources/audio/ding.wav'},
    {'name': 'resources/audio/dingen.wav', 'path': 'resources/audio/dingen.wav'},
    {'name': 'resources/audio/dochters.wav', 'path': 'resources/audio/dochters.wav'},
    {'name': 'resources/audio/doelen.wav', 'path': 'resources/audio/doelen.wav'},
    {'name': 'resources/audio/doking.wav', 'path': 'resources/audio/doking.wav'},
    {'name': 'resources/audio/dokters.wav', 'path': 'resources/audio/dokters.wav'},
    {'name': 'resources/audio/dollars.wav', 'path': 'resources/audio/dollars.wav'},
    {'name': 'resources/audio/dolmen.wav', 'path': 'resources/audio/dolmen.wav'},
    {'name': 'resources/audio/donen.wav', 'path': 'resources/audio/donen.wav'},
    {'name': 'resources/audio/donut.wav', 'path': 'resources/audio/donut.wav'},
    {'name': 'resources/audio/donuts.wav', 'path': 'resources/audio/donuts.wav'},
    {'name': 'resources/audio/dorpen.wav', 'path': 'resources/audio/dorpen.wav'},
    {'name': 'resources/audio/dosis.wav', 'path': 'resources/audio/dosis.wav'},
    {'name': 'resources/audio/dovaan.wav', 'path': 'resources/audio/dovaan.wav'},
    {'name': 'resources/audio/draden.wav', 'path': 'resources/audio/draden.wav'},
    {'name': 'resources/audio/dromen.wav', 'path': 'resources/audio/dromen.wav'},
    {'name': 'resources/audio/droom.wav', 'path': 'resources/audio/droom.wav'},
    {'name': 'resources/audio/drunk.wav', 'path': 'resources/audio/drunk.wav'},
    {'name': 'resources/audio/duimen.wav', 'path': 'resources/audio/duimen.wav'},
    {'name': 'resources/audio/duis.wav', 'path': 'resources/audio/duis.wav'},
    {'name': 'resources/audio/dwee.wav', 'path': 'resources/audio/dwee.wav'},
    {'name': 'resources/audio/eiland.wav', 'path': 'resources/audio/eiland.wav'},
    {'name': 'resources/audio/examen.wav', 'path': 'resources/audio/examen.wav'},
    {'name': 'resources/audio/excuus.wav', 'path': 'resources/audio/excuus.wav'},
    {'name': 'resources/audio/ezels.wav', 'path': 'resources/audio/ezels.wav'},
    {'name': 'resources/audio/feestje.wav', 'path': 'resources/audio/feestje.wav'},
    {'name': 'resources/audio/feik.wav', 'path': 'resources/audio/feik.wav'},
    {'name': 'resources/audio/figier.wav', 'path': 'resources/audio/figier.wav'},
    {'name': 'resources/audio/films.wav', 'path': 'resources/audio/films.wav'},
    {'name': 'resources/audio/fleusde.wav', 'path': 'resources/audio/fleusde.wav'},
    {'name': 'resources/audio/fonds.wav', 'path': 'resources/audio/fonds.wav'},
    {'name': 'resources/audio/foto.wav', 'path': 'resources/audio/foto.wav'},
    {'name': 'resources/audio/fotos.wav', 'path': 'resources/audio/fotos.wav'},
    {'name': 'resources/audio/fouten.wav', 'path': 'resources/audio/fouten.wav'},
    {'name': 'resources/audio/fraat.wav', 'path': 'resources/audio/fraat.wav'},
    {'name': 'resources/audio/frartoor.wav', 'path': 'resources/audio/frartoor.wav'},
    {'name': 'resources/audio/frub.wav', 'path': 'resources/audio/frub.wav'},
    {'name': 'resources/audio/furkel.wav', 'path': 'resources/audio/furkel.wav'},
    {'name': 'resources/audio/gars.wav', 'path': 'resources/audio/gars.wav'},
    {'name': 'resources/audio/gast.wav', 'path': 'resources/audio/gast.wav'},
    {'name': 'resources/audio/gasten.wav', 'path': 'resources/audio/gasten.wav'},
    {'name': 'resources/audio/gaten.wav', 'path': 'resources/audio/gaten.wav'},
    {'name': 'resources/audio/gebied.wav', 'path': 'resources/audio/gebied.wav'},
    {'name': 'resources/audio/gebouw.wav', 'path': 'resources/audio/gebouw.wav'},
    {'name': 'resources/audio/gedocht.wav', 'path': 'resources/audio/gedocht.wav'},
    {'name': 'resources/audio/gedoe.wav', 'path': 'resources/audio/gedoe.wav'},
    {'name': 'resources/audio/gedrag.wav', 'path': 'resources/audio/gedrag.wav'},
    {'name': 'resources/audio/geer.wav', 'path': 'resources/audio/geer.wav'},
    {'name': 'resources/audio/gegeven.wav', 'path': 'resources/audio/gegeven.wav'},
    {'name': 'resources/audio/geheugen.wav', 'path': 'resources/audio/geheugen.wav'},
    {'name': 'resources/audio/geluid.wav', 'path': 'resources/audio/geluid.wav'},
    {'name': 'resources/audio/gemacht.wav', 'path': 'resources/audio/gemacht.wav'},
    {'name': 'resources/audio/genok.wav', 'path': 'resources/audio/genok.wav'},
    {'name': 'resources/audio/gerillen.wav', 'path': 'resources/audio/gerillen.wav'},
    {'name': 'resources/audio/gevaar.wav', 'path': 'resources/audio/gevaar.wav'},
    {'name': 'resources/audio/gevage.wav', 'path': 'resources/audio/gevage.wav'},
    {'name': 'resources/audio/gevoel.wav', 'path': 'resources/audio/gevoel.wav'},
    {'name': 'resources/audio/gezicht.wav', 'path': 'resources/audio/gezicht.wav'},
    {'name': 'resources/audio/gids.wav', 'path': 'resources/audio/gids.wav'},
    {'name': 'resources/audio/gilier.wav', 'path': 'resources/audio/gilier.wav'},
    {'name': 'resources/audio/glanding.wav', 'path': 'resources/audio/glanding.wav'},
    {'name': 'resources/audio/glas.wav', 'path': 'resources/audio/glas.wav'},
    {'name': 'resources/audio/glot.wav', 'path': 'resources/audio/glot.wav'},
    {'name': 'resources/audio/gnole.wav', 'path': 'resources/audio/gnole.wav'},
    {'name': 'resources/audio/gorannen.wav', 'path': 'resources/audio/gorannen.wav'},
    {'name': 'resources/audio/gous.wav', 'path': 'resources/audio/gous.wav'},
    {'name': 'resources/audio/graak.wav', 'path': 'resources/audio/graak.wav'},
    {'name': 'resources/audio/grappen.wav', 'path': 'resources/audio/grappen.wav'},
    {'name': 'resources/audio/groost.wav', 'path': 'resources/audio/groost.wav'},
    {'name': 'resources/audio/grort.wav', 'path': 'resources/audio/grort.wav'},
    {'name': 'resources/audio/guldel.wav', 'path': 'resources/audio/guldel.wav'},
    {'name': 'resources/audio/hals.wav', 'path': 'resources/audio/hals.wav'},
    {'name': 'resources/audio/hand.wav', 'path': 'resources/audio/hand.wav'},
    {'name': 'resources/audio/handen.wav', 'path': 'resources/audio/handen.wav'},
    {'name': 'resources/audio/harg.wav', 'path': 'resources/audio/harg.wav'},
    {'name': 'resources/audio/harnas.wav', 'path': 'resources/audio/harnas.wav'},
    {'name': 'resources/audio/hasten.wav', 'path': 'resources/audio/hasten.wav'},
    {'name': 'resources/audio/haven.wav', 'path': 'resources/audio/haven.wav'},
    {'name': 'resources/audio/hawel.wav', 'path': 'resources/audio/hawel.wav'},
    {'name': 'resources/audio/hekte.wav', 'path': 'resources/audio/hekte.wav'},
    {'name': 'resources/audio/helg.wav', 'path': 'resources/audio/helg.wav'},
    {'name': 'resources/audio/helk.wav', 'path': 'resources/audio/helk.wav'},
    {'name': 'resources/audio/hemel.wav', 'path': 'resources/audio/hemel.wav'},
    {'name': 'resources/audio/hemmer.wav', 'path': 'resources/audio/hemmer.wav'},
    {'name': 'resources/audio/heren.wav', 'path': 'resources/audio/heren.wav'},
    {'name': 'resources/audio/herkoden.wav', 'path': 'resources/audio/herkoden.wav'},
    {'name': 'resources/audio/heuk.wav', 'path': 'resources/audio/heuk.wav'},
    {'name': 'resources/audio/heup.wav', 'path': 'resources/audio/heup.wav'},
    {'name': 'resources/audio/heupen.wav', 'path': 'resources/audio/heupen.wav'},
    {'name': 'resources/audio/heuvel.wav', 'path': 'resources/audio/heuvel.wav'},
    {'name': 'resources/audio/heuvels.wav', 'path': 'resources/audio/heuvels.wav'},
    {'name': 'resources/audio/hieden.wav', 'path': 'resources/audio/hieden.wav'},
    {'name': 'resources/audio/hittel.wav', 'path': 'resources/audio/hittel.wav'},
    {'name': 'resources/audio/hobbels.wav', 'path': 'resources/audio/hobbels.wav'},
    {'name': 'resources/audio/honden.wav', 'path': 'resources/audio/honden.wav'},
    {'name': 'resources/audio/hoods.wav', 'path': 'resources/audio/hoods.wav'},
    {'name': 'resources/audio/hoofden.wav', 'path': 'resources/audio/hoofden.wav'},
    {'name': 'resources/audio/hotels.wav', 'path': 'resources/audio/hotels.wav'},
    {'name': 'resources/audio/hums.wav', 'path': 'resources/audio/hums.wav'},
    {'name': 'resources/audio/hus.wav', 'path': 'resources/audio/hus.wav'},
    {'name': 'resources/audio/idee.wav', 'path': 'resources/audio/idee.wav'},
    {'name': 'resources/audio/ies.wav', 'path': 'resources/audio/ies.wav'},
    {'name': 'resources/audio/indruk.wav', 'path': 'resources/audio/indruk.wav'},
    {'name': 'resources/audio/inhochten.wav', 'path': 'resources/audio/inhochten.wav'},
    {'name': 'resources/audio/insect.wav', 'path': 'resources/audio/insect.wav'},
    {'name': 'resources/audio/insecten.wav', 'path': 'resources/audio/insecten.wav'},
    {'name': 'resources/audio/intreek.wav', 'path': 'resources/audio/intreek.wav'},
    {'name': 'resources/audio/invorn.wav', 'path': 'resources/audio/invorn.wav'},
    {'name': 'resources/audio/inzweed.wav', 'path': 'resources/audio/inzweed.wav'},
    {'name': 'resources/audio/jager.wav', 'path': 'resources/audio/jager.wav'},
    {'name': 'resources/audio/jagers.wav', 'path': 'resources/audio/jagers.wav'},
    {'name': 'resources/audio/jerken.wav', 'path': 'resources/audio/jerken.wav'},
    {'name': 'resources/audio/jongen.wav', 'path': 'resources/audio/jongen.wav'},
    {'name': 'resources/audio/kaars.wav', 'path': 'resources/audio/kaars.wav'},
    {'name': 'resources/audio/kaart.wav', 'path': 'resources/audio/kaart.wav'},
    {'name': 'resources/audio/kaarten.wav', 'path': 'resources/audio/kaarten.wav'},
    {'name': 'resources/audio/kaas.wav', 'path': 'resources/audio/kaas.wav'},
    {'name': 'resources/audio/kaden.wav', 'path': 'resources/audio/kaden.wav'},
    {'name': 'resources/audio/kamers.wav', 'path': 'resources/audio/kamers.wav'},
    {'name': 'resources/audio/kansen.wav', 'path': 'resources/audio/kansen.wav'},
    {'name': 'resources/audio/kantoor.wav', 'path': 'resources/audio/kantoor.wav'},
    {'name': 'resources/audio/kapie.wav', 'path': 'resources/audio/kapie.wav'},
    {'name': 'resources/audio/kapsels.wav', 'path': 'resources/audio/kapsels.wav'},
    {'name': 'resources/audio/karste.wav', 'path': 'resources/audio/karste.wav'},
    {'name': 'resources/audio/kasteel.wav', 'path': 'resources/audio/kasteel.wav'},
    {'name': 'resources/audio/katten.wav', 'path': 'resources/audio/katten.wav'},
    {'name': 'resources/audio/keizer.wav', 'path': 'resources/audio/keizer.wav'},
    {'name': 'resources/audio/kekst.wav', 'path': 'resources/audio/kekst.wav'},
    {'name': 'resources/audio/kels.wav', 'path': 'resources/audio/kels.wav'},
    {'name': 'resources/audio/kennis.wav', 'path': 'resources/audio/kennis.wav'},
    {'name': 'resources/audio/kerel.wav', 'path': 'resources/audio/kerel.wav'},
    {'name': 'resources/audio/kerels.wav', 'path': 'resources/audio/kerels.wav'},
    {'name': 'resources/audio/kermis.wav', 'path': 'resources/audio/kermis.wav'},
    {'name': 'resources/audio/keten.wav', 'path': 'resources/audio/keten.wav'},
    {'name': 'resources/audio/keuken.wav', 'path': 'resources/audio/keuken.wav'},
    {'name': 'resources/audio/keuzes.wav', 'path': 'resources/audio/keuzes.wav'},
    {'name': 'resources/audio/kimpen.wav', 'path': 'resources/audio/kimpen.wav'},
    {'name': 'resources/audio/kipt.wav', 'path': 'resources/audio/kipt.wav'},
    {'name': 'resources/audio/klant.wav', 'path': 'resources/audio/klant.wav'},
    {'name': 'resources/audio/klanten.wav', 'path': 'resources/audio/klanten.wav'},
    {'name': 'resources/audio/kledeet.wav', 'path': 'resources/audio/kledeet.wav'},
    {'name': 'resources/audio/klens.wav', 'path': 'resources/audio/klens.wav'},
    {'name': 'resources/audio/kles.wav', 'path': 'resources/audio/kles.wav'},
    {'name': 'resources/audio/kliep.wav', 'path': 'resources/audio/kliep.wav'},
    {'name': 'resources/audio/klinkers.wav', 'path': 'resources/audio/klinkers.wav'},
    {'name': 'resources/audio/kliteek.wav', 'path': 'resources/audio/kliteek.wav'},
    {'name': 'resources/audio/kliter.wav', 'path': 'resources/audio/kliter.wav'},
    {'name': 'resources/audio/klokken.wav', 'path': 'resources/audio/klokken.wav'},
    {'name': 'resources/audio/kloosters.wav', 'path': 'resources/audio/kloosters.wav'},
    {'name': 'resources/audio/kluis.wav', 'path': 'resources/audio/kluis.wav'},
    {'name': 'resources/audio/klyppel.wav', 'path': 'resources/audio/klyppel.wav'},
    {'name': 'resources/audio/knes.wav', 'path': 'resources/audio/knes.wav'},
    {'name': 'resources/audio/knil.wav', 'path': 'resources/audio/knil.wav'},
    {'name': 'resources/audio/knoer.wav', 'path': 'resources/audio/knoer.wav'},
    {'name': 'resources/audio/knoop.wav', 'path': 'resources/audio/knoop.wav'},
    {'name': 'resources/audio/knopen.wav', 'path': 'resources/audio/knopen.wav'},
    {'name': 'resources/audio/knoppen.wav', 'path': 'resources/audio/knoppen.wav'},
    {'name': 'resources/audio/kodaal.wav', 'path': 'resources/audio/kodaal.wav'},
    {'name': 'resources/audio/koers.wav', 'path': 'resources/audio/koers.wav'},
    {'name': 'resources/audio/koets.wav', 'path': 'resources/audio/koets.wav'},
    {'name': 'resources/audio/koffer.wav', 'path': 'resources/audio/koffer.wav'},
    {'name': 'resources/audio/koffers.wav', 'path': 'resources/audio/koffers.wav'},
    {'name': 'resources/audio/komoet.wav', 'path': 'resources/audio/komoet.wav'},
    {'name': 'resources/audio/kompas.wav', 'path': 'resources/audio/kompas.wav'},
    {'name': 'resources/audio/koning.wav', 'path': 'resources/audio/koning.wav'},
    {'name': 'resources/audio/koppen.wav', 'path': 'resources/audio/koppen.wav'},
    {'name': 'resources/audio/kos.wav', 'path': 'resources/audio/kos.wav'},
    {'name': 'resources/audio/kostuum.wav', 'path': 'resources/audio/kostuum.wav'},
    {'name': 'resources/audio/kostuums.wav', 'path': 'resources/audio/kostuums.wav'},
    {'name': 'resources/audio/kraad.wav', 'path': 'resources/audio/kraad.wav'},
    {'name': 'resources/audio/krakin.wav', 'path': 'resources/audio/krakin.wav'},
    {'name': 'resources/audio/kransing.wav', 'path': 'resources/audio/kransing.wav'},
    {'name': 'resources/audio/kranten.wav', 'path': 'resources/audio/kranten.wav'},
    {'name': 'resources/audio/kreukels.wav', 'path': 'resources/audio/kreukels.wav'},
    {'name': 'resources/audio/krij.wav', 'path': 'resources/audio/krij.wav'},
    {'name': 'resources/audio/krijger.wav', 'path': 'resources/audio/krijger.wav'},
    {'name': 'resources/audio/krijgers.wav', 'path': 'resources/audio/krijgers.wav'},
    {'name': 'resources/audio/krivieken.wav', 'path': 'resources/audio/krivieken.wav'},
    {'name': 'resources/audio/krommel.wav', 'path': 'resources/audio/krommel.wav'},
    {'name': 'resources/audio/krook.wav', 'path': 'resources/audio/krook.wav'},
    {'name': 'resources/audio/kuiken.wav', 'path': 'resources/audio/kuiken.wav'},
    {'name': 'resources/audio/kussen.wav', 'path': 'resources/audio/kussen.wav'},
    {'name': 'resources/audio/ladders.wav', 'path': 'resources/audio/ladders.wav'},
    {'name': 'resources/audio/laken.wav', 'path': 'resources/audio/laken.wav'},
    {'name': 'resources/audio/lals.wav', 'path': 'resources/audio/lals.wav'},
    {'name': 'resources/audio/landen.wav', 'path': 'resources/audio/landen.wav'},
    {'name': 'resources/audio/lates.wav', 'path': 'resources/audio/lates.wav'},
    {'name': 'resources/audio/laver.wav', 'path': 'resources/audio/laver.wav'},
    {'name': 'resources/audio/leger.wav', 'path': 'resources/audio/leger.wav'},
    {'name': 'resources/audio/leiders.wav', 'path': 'resources/audio/leiders.wav'},
    {'name': 'resources/audio/leiding.wav', 'path': 'resources/audio/leiding.wav'},
    {'name': 'resources/audio/letter.wav', 'path': 'resources/audio/letter.wav'},
    {'name': 'resources/audio/letters.wav', 'path': 'resources/audio/letters.wav'},
    {'name': 'resources/audio/leugen.wav', 'path': 'resources/audio/leugen.wav'},
    {'name': 'resources/audio/leven.wav', 'path': 'resources/audio/leven.wav'},
    {'name': 'resources/audio/lichten.wav', 'path': 'resources/audio/lichten.wav'},
    {'name': 'resources/audio/liefde.wav', 'path': 'resources/audio/liefde.wav'},
    {'name': 'resources/audio/lijf.wav', 'path': 'resources/audio/lijf.wav'},
    {'name': 'resources/audio/lijnen.wav', 'path': 'resources/audio/lijnen.wav'},
    {'name': 'resources/audio/lijzer.wav', 'path': 'resources/audio/lijzer.wav'},
    {'name': 'resources/audio/lippen.wav', 'path': 'resources/audio/lippen.wav'},
    {'name': 'resources/audio/loem.wav', 'path': 'resources/audio/loem.wav'},
    {'name': 'resources/audio/long.wav', 'path': 'resources/audio/long.wav'},
    {'name': 'resources/audio/longen.wav', 'path': 'resources/audio/longen.wav'},
    {'name': 'resources/audio/loping.wav', 'path': 'resources/audio/loping.wav'},
    {'name': 'resources/audio/lopmel.wav', 'path': 'resources/audio/lopmel.wav'},
    {'name': 'resources/audio/lucifer.wav', 'path': 'resources/audio/lucifer.wav'},
    {'name': 'resources/audio/lucifers.wav', 'path': 'resources/audio/lucifers.wav'},
    {'name': 'resources/audio/lud.wav', 'path': 'resources/audio/lud.wav'},
    {'name': 'resources/audio/maanden.wav', 'path': 'resources/audio/maanden.wav'},
    {'name': 'resources/audio/mand.wav', 'path': 'resources/audio/mand.wav'},
    {'name': 'resources/audio/mannen.wav', 'path': 'resources/audio/mannen.wav'},
    {'name': 'resources/audio/manper.wav', 'path': 'resources/audio/manper.wav'},
    {'name': 'resources/audio/mas.wav', 'path': 'resources/audio/mas.wav'},
    {'name': 'resources/audio/maskers.wav', 'path': 'resources/audio/maskers.wav'},
    {'name': 'resources/audio/matras.wav', 'path': 'resources/audio/matras.wav'},
    {'name': 'resources/audio/meesters.wav', 'path': 'resources/audio/meesters.wav'},
    {'name': 'resources/audio/meneer.wav', 'path': 'resources/audio/meneer.wav'},
    {'name': 'resources/audio/mens.wav', 'path': 'resources/audio/mens.wav'},
    {'name': 'resources/audio/mijnen.wav', 'path': 'resources/audio/mijnen.wav'},
    {'name': 'resources/audio/mippen.wav', 'path': 'resources/audio/mippen.wav'},
    {'name': 'resources/audio/mipper.wav', 'path': 'resources/audio/mipper.wav'},
    {'name': 'resources/audio/missie.wav', 'path': 'resources/audio/missie.wav'},
    {'name': 'resources/audio/moeders.wav', 'path': 'resources/audio/moeders.wav'},
    {'name': 'resources/audio/moeite.wav', 'path': 'resources/audio/moeite.wav'},
    {'name': 'resources/audio/moeras.wav', 'path': 'resources/audio/moeras.wav'},
    {'name': 'resources/audio/molen.wav', 'path': 'resources/audio/molen.wav'},
    {'name': 'resources/audio/moment.wav', 'path': 'resources/audio/moment.wav'},
    {'name': 'resources/audio/monsters.wav', 'path': 'resources/audio/monsters.wav'},
    {'name': 'resources/audio/motor.wav', 'path': 'resources/audio/motor.wav'},
    {'name': 'resources/audio/motting.wav', 'path': 'resources/audio/motting.wav'},
    {'name': 'resources/audio/mowool.wav', 'path': 'resources/audio/mowool.wav'},
    {'name': 'resources/audio/muziek.wav', 'path': 'resources/audio/muziek.wav'},
    {'name': 'resources/audio/naald.wav', 'path': 'resources/audio/naald.wav'},
    {'name': 'resources/audio/naalden.wav', 'path': 'resources/audio/naalden.wav'},
    {'name': 'resources/audio/nachten.wav', 'path': 'resources/audio/nachten.wav'},
    {'name': 'resources/audio/nagels.wav', 'path': 'resources/audio/nagels.wav'},
    {'name': 'resources/audio/nas.wav', 'path': 'resources/audio/nas.wav'},
    {'name': 'resources/audio/navurf.wav', 'path': 'resources/audio/navurf.wav'},
    {'name': 'resources/audio/negen.wav', 'path': 'resources/audio/negen.wav'},
    {'name': 'resources/audio/nesten.wav', 'path': 'resources/audio/nesten.wav'},
    {'name': 'resources/audio/neugd.wav', 'path': 'resources/audio/neugd.wav'},
    {'name': 'resources/audio/nieuws.wav', 'path': 'resources/audio/nieuws.wav'},
    {'name': 'resources/audio/non.wav', 'path': 'resources/audio/non.wav'},
    {'name': 'resources/audio/nonnen.wav', 'path': 'resources/audio/nonnen.wav'},
    {'name': 'resources/audio/noorden.wav', 'path': 'resources/audio/noorden.wav'},
    {'name': 'resources/audio/nummers.wav', 'path': 'resources/audio/nummers.wav'},
    {'name': 'resources/audio/nuur.wav', 'path': 'resources/audio/nuur.wav'},
    {'name': 'resources/audio/ochtend.wav', 'path': 'resources/audio/ochtend.wav'},
    {'name': 'resources/audio/oester.wav', 'path': 'resources/audio/oester.wav'},
    {'name': 'resources/audio/oesters.wav', 'path': 'resources/audio/oesters.wav'},
    {'name': 'resources/audio/ogen.wav', 'path': 'resources/audio/ogen.wav'},
    {'name': 'resources/audio/ogjesk.wav', 'path': 'resources/audio/ogjesk.wav'},
    {'name': 'resources/audio/olie.wav', 'path': 'resources/audio/olie.wav'},
    {'name': 'resources/audio/ontbijt.wav', 'path': 'resources/audio/ontbijt.wav'},
    {'name': 'resources/audio/ontzeps.wav', 'path': 'resources/audio/ontzeps.wav'},
    {'name': 'resources/audio/onzin.wav', 'path': 'resources/audio/onzin.wav'},
    {'name': 'resources/audio/oosten.wav', 'path': 'resources/audio/oosten.wav'},
    {'name': 'resources/audio/oppas.wav', 'path': 'resources/audio/oppas.wav'},
    {'name': 'resources/audio/opplad.wav', 'path': 'resources/audio/opplad.wav'},
    {'name': 'resources/audio/optreden.wav', 'path': 'resources/audio/optreden.wav'},
    {'name': 'resources/audio/orders.wav', 'path': 'resources/audio/orders.wav'},
    {'name': 'resources/audio/orrijn.wav', 'path': 'resources/audio/orrijn.wav'},
    {'name': 'resources/audio/ouders.wav', 'path': 'resources/audio/ouders.wav'},
    {'name': 'resources/audio/oven.wav', 'path': 'resources/audio/oven.wav'},
    {'name': 'resources/audio/paam.wav', 'path': 'resources/audio/paam.wav'},
    {'name': 'resources/audio/padem.wav', 'path': 'resources/audio/padem.wav'},
    {'name': 'resources/audio/pagina.wav', 'path': 'resources/audio/pagina.wav'},
    {'name': 'resources/audio/paginas.wav', 'path': 'resources/audio/paginas.wav'},
    {'name': 'resources/audio/paleis.wav', 'path': 'resources/audio/paleis.wav'},
    {'name': 'resources/audio/pals.wav', 'path': 'resources/audio/pals.wav'},
    {'name': 'resources/audio/paniek.wav', 'path': 'resources/audio/paniek.wav'},
    {'name': 'resources/audio/pans.wav', 'path': 'resources/audio/pans.wav'},
    {'name': 'resources/audio/papeur.wav', 'path': 'resources/audio/papeur.wav'},
    {'name': 'resources/audio/parel.wav', 'path': 'resources/audio/parel.wav'},
    {'name': 'resources/audio/parels.wav', 'path': 'resources/audio/parels.wav'},
    {'name': 'resources/audio/partners.wav', 'path': 'resources/audio/partners.wav'},
    {'name': 'resources/audio/pauze.wav', 'path': 'resources/audio/pauze.wav'},
    {'name': 'resources/audio/pemmo.wav', 'path': 'resources/audio/pemmo.wav'},
    {'name': 'resources/audio/pengel.wav', 'path': 'resources/audio/pengel.wav'},
    {'name': 'resources/audio/penzing.wav', 'path': 'resources/audio/penzing.wav'},
    {'name': 'resources/audio/persoon.wav', 'path': 'resources/audio/persoon.wav'},
    {'name': 'resources/audio/pijl.wav', 'path': 'resources/audio/pijl.wav'},
    {'name': 'resources/audio/pijlen.wav', 'path': 'resources/audio/pijlen.wav'},
    {'name': 'resources/audio/pijver.wav', 'path': 'resources/audio/pijver.wav'},
    {'name': 'resources/audio/pilijk.wav', 'path': 'resources/audio/pilijk.wav'},
    {'name': 'resources/audio/pillen.wav', 'path': 'resources/audio/pillen.wav'},
    {'name': 'resources/audio/pippen.wav', 'path': 'resources/audio/pippen.wav'},
    {'name': 'resources/audio/plaatsen.wav', 'path': 'resources/audio/plaatsen.wav'},
    {'name': 'resources/audio/plan.wav', 'path': 'resources/audio/plan.wav'},
    {'name': 'resources/audio/planeet.wav', 'path': 'resources/audio/planeet.wav'},
    {'name': 'resources/audio/plannen.wav', 'path': 'resources/audio/plannen.wav'},
    {'name': 'resources/audio/plant.wav', 'path': 'resources/audio/plant.wav'},
    {'name': 'resources/audio/planten.wav', 'path': 'resources/audio/planten.wav'},
    {'name': 'resources/audio/plek.wav', 'path': 'resources/audio/plek.wav'},
    {'name': 'resources/audio/pluchten.wav', 'path': 'resources/audio/pluchten.wav'},
    {'name': 'resources/audio/politie.wav', 'path': 'resources/audio/politie.wav'},
    {'name': 'resources/audio/pomt.wav', 'path': 'resources/audio/pomt.wav'},
    {'name': 'resources/audio/poom.wav', 'path': 'resources/audio/poom.wav'},
    {'name': 'resources/audio/porkoor.wav', 'path': 'resources/audio/porkoor.wav'},
    {'name': 'resources/audio/pors.wav', 'path': 'resources/audio/pors.wav'},
    {'name': 'resources/audio/poster.wav', 'path': 'resources/audio/poster.wav'},
    {'name': 'resources/audio/posters.wav', 'path': 'resources/audio/posters.wav'},
    {'name': 'resources/audio/prinses.wav', 'path': 'resources/audio/prinses.wav'},
    {'name': 'resources/audio/problemen.wav', 'path': 'resources/audio/problemen.wav'},
    {'name': 'resources/audio/procent.wav', 'path': 'resources/audio/procent.wav'},
    {'name': 'resources/audio/projoet.wav', 'path': 'resources/audio/projoet.wav'},
    {'name': 'resources/audio/prust.wav', 'path': 'resources/audio/prust.wav'},
    {'name': 'resources/audio/punten.wav', 'path': 'resources/audio/punten.wav'},
    {'name': 'resources/audio/ragding.wav', 'path': 'resources/audio/ragding.wav'},
    {'name': 'resources/audio/ralor.wav', 'path': 'resources/audio/ralor.wav'},
    {'name': 'resources/audio/raptart.wav', 'path': 'resources/audio/raptart.wav'},
    {'name': 'resources/audio/rebby.wav', 'path': 'resources/audio/rebby.wav'},
    {'name': 'resources/audio/rechters.wav', 'path': 'resources/audio/rechters.wav'},
    {'name': 'resources/audio/reden.wav', 'path': 'resources/audio/reden.wav'},
    {'name': 'resources/audio/reeks.wav', 'path': 'resources/audio/reeks.wav'},
    {'name': 'resources/audio/reer.wav', 'path': 'resources/audio/reer.wav'},
    {'name': 'resources/audio/regel.wav', 'path': 'resources/audio/regel.wav'},
    {'name': 'resources/audio/regels.wav', 'path': 'resources/audio/regels.wav'},
    {'name': 'resources/audio/regen.wav', 'path': 'resources/audio/regen.wav'},
    {'name': 'resources/audio/rengen.wav', 'path': 'resources/audio/rengen.wav'},
    {'name': 'resources/audio/res.wav', 'path': 'resources/audio/res.wav'},
    {'name': 'resources/audio/respect.wav', 'path': 'resources/audio/respect.wav'},
    {'name': 'resources/audio/rest.wav', 'path': 'resources/audio/rest.wav'},
    {'name': 'resources/audio/ridder.wav', 'path': 'resources/audio/ridder.wav'},
    {'name': 'resources/audio/ridders.wav', 'path': 'resources/audio/ridders.wav'},
    {'name': 'resources/audio/ries.wav', 'path': 'resources/audio/ries.wav'},
    {'name': 'resources/audio/rimpels.wav', 'path': 'resources/audio/rimpels.wav'},
    {'name': 'resources/audio/ripge.wav', 'path': 'resources/audio/ripge.wav'},
    {'name': 'resources/audio/risicos.wav', 'path': 'resources/audio/risicos.wav'},
    {'name': 'resources/audio/robot.wav', 'path': 'resources/audio/robot.wav'},
    {'name': 'resources/audio/robots.wav', 'path': 'resources/audio/robots.wav'},
    {'name': 'resources/audio/roetter.wav', 'path': 'resources/audio/roetter.wav'},
    {'name': 'resources/audio/roffen.wav', 'path': 'resources/audio/roffen.wav'},
    {'name': 'resources/audio/rokers.wav', 'path': 'resources/audio/rokers.wav'},
    {'name': 'resources/audio/roogsel.wav', 'path': 'resources/audio/roogsel.wav'},
    {'name': 'resources/audio/rots.wav', 'path': 'resources/audio/rots.wav'},
    {'name': 'resources/audio/rotsen.wav', 'path': 'resources/audio/rotsen.wav'},
    {'name': 'resources/audio/scheegte.wav', 'path': 'resources/audio/scheegte.wav'},
    {'name': 'resources/audio/schern.wav', 'path': 'resources/audio/schern.wav'},
    {'name': 'resources/audio/schoenen.wav', 'path': 'resources/audio/schoenen.wav'},
    {'name': 'resources/audio/schouder.wav', 'path': 'resources/audio/schouder.wav'},
    {'name': 'resources/audio/schouders.wav', 'path': 'resources/audio/schouders.wav'},
    {'name': 'resources/audio/schrijvers.wav', 'path': 'resources/audio/schrijvers.wav'},
    {'name': 'resources/audio/schulling.wav', 'path': 'resources/audio/schulling.wav'},
    {'name': 'resources/audio/schunder.wav', 'path': 'resources/audio/schunder.wav'},
    {'name': 'resources/audio/sefhoren.wav', 'path': 'resources/audio/sefhoren.wav'},
    {'name': 'resources/audio/seizoenen.wav', 'path': 'resources/audio/seizoenen.wav'},
    {'name': 'resources/audio/sekken.wav', 'path': 'resources/audio/sekken.wav'},
    {'name': 'resources/audio/sigier.wav', 'path': 'resources/audio/sigier.wav'},
    {'name': 'resources/audio/sirene.wav', 'path': 'resources/audio/sirene.wav'},
    {'name': 'resources/audio/sirenes.wav', 'path': 'resources/audio/sirenes.wav'},
    {'name': 'resources/audio/slacond.wav', 'path': 'resources/audio/slacond.wav'},
    {'name': 'resources/audio/slading.wav', 'path': 'resources/audio/slading.wav'},
    {'name': 'resources/audio/slang.wav', 'path': 'resources/audio/slang.wav'},
    {'name': 'resources/audio/slangen.wav', 'path': 'resources/audio/slangen.wav'},
    {'name': 'resources/audio/slening.wav', 'path': 'resources/audio/slening.wav'},
    {'name': 'resources/audio/sleutel.wav', 'path': 'resources/audio/sleutel.wav'},
    {'name': 'resources/audio/sleutels.wav', 'path': 'resources/audio/sleutels.wav'},
    {'name': 'resources/audio/slift.wav', 'path': 'resources/audio/slift.wav'},
    {'name': 'resources/audio/slingers.wav', 'path': 'resources/audio/slingers.wav'},
    {'name': 'resources/audio/smaan.wav', 'path': 'resources/audio/smaan.wav'},
    {'name': 'resources/audio/smelk.wav', 'path': 'resources/audio/smelk.wav'},
    {'name': 'resources/audio/smoed.wav', 'path': 'resources/audio/smoed.wav'},
    {'name': 'resources/audio/smofes.wav', 'path': 'resources/audio/smofes.wav'},
    {'name': 'resources/audio/sneef.wav', 'path': 'resources/audio/sneef.wav'},
    {'name': 'resources/audio/sneppel.wav', 'path': 'resources/audio/sneppel.wav'},
    {'name': 'resources/audio/snevel.wav', 'path': 'resources/audio/snevel.wav'},
    {'name': 'resources/audio/sokken.wav', 'path': 'resources/audio/sokken.wav'},
    {'name': 'resources/audio/soorten.wav', 'path': 'resources/audio/soorten.wav'},
    {'name': 'resources/audio/speler.wav', 'path': 'resources/audio/speler.wav'},
    {'name': 'resources/audio/spelers.wav', 'path': 'resources/audio/spelers.wav'},
    {'name': 'resources/audio/spieren.wav', 'path': 'resources/audio/spieren.wav'},
    {'name': 'resources/audio/spijker.wav', 'path': 'resources/audio/spijker.wav'},
    {'name': 'resources/audio/spijkers.wav', 'path': 'resources/audio/spijkers.wav'},
    {'name': 'resources/audio/spoer.wav', 'path': 'resources/audio/spoer.wav'},
    {'name': 'resources/audio/spol.wav', 'path': 'resources/audio/spol.wav'},
    {'name': 'resources/audio/spollen.wav', 'path': 'resources/audio/spollen.wav'},
    {'name': 'resources/audio/sprading.wav', 'path': 'resources/audio/sprading.wav'},
    {'name': 'resources/audio/stam.wav', 'path': 'resources/audio/stam.wav'},
    {'name': 'resources/audio/stammen.wav', 'path': 'resources/audio/stammen.wav'},
    {'name': 'resources/audio/stantte.wav', 'path': 'resources/audio/stantte.wav'},
    {'name': 'resources/audio/stapels.wav', 'path': 'resources/audio/stapels.wav'},
    {'name': 'resources/audio/stemmen.wav', 'path': 'resources/audio/stemmen.wav'},
    {'name': 'resources/audio/stempels.wav', 'path': 'resources/audio/stempels.wav'},
    {'name': 'resources/audio/stemte.wav', 'path': 'resources/audio/stemte.wav'},
    {'name': 'resources/audio/ster.wav', 'path': 'resources/audio/ster.wav'},
    {'name': 'resources/audio/sterren.wav', 'path': 'resources/audio/sterren.wav'},
    {'name': 'resources/audio/steup.wav', 'path': 'resources/audio/steup.wav'},
    {'name': 'resources/audio/stid.wav', 'path': 'resources/audio/stid.wav'},
    {'name': 'resources/audio/stijp.wav', 'path': 'resources/audio/stijp.wav'},
    {'name': 'resources/audio/stoffen.wav', 'path': 'resources/audio/stoffen.wav'},
    {'name': 'resources/audio/storang.wav', 'path': 'resources/audio/storang.wav'},
    {'name': 'resources/audio/storn.wav', 'path': 'resources/audio/storn.wav'},
    {'name': 'resources/audio/streep.wav', 'path': 'resources/audio/streep.wav'},
    {'name': 'resources/audio/strepen.wav', 'path': 'resources/audio/strepen.wav'},
    {'name': 'resources/audio/strijder.wav', 'path': 'resources/audio/strijder.wav'},
    {'name': 'resources/audio/strijders.wav', 'path': 'resources/audio/strijders.wav'},
    {'name': 'resources/audio/stuin.wav', 'path': 'resources/audio/stuin.wav'},
    {'name': 'resources/audio/stuk.wav', 'path': 'resources/audio/stuk.wav'},
    {'name': 'resources/audio/stulee.wav', 'path': 'resources/audio/stulee.wav'},
    {'name': 'resources/audio/succes.wav', 'path': 'resources/audio/succes.wav'},
    {'name': 'resources/audio/systeem.wav', 'path': 'resources/audio/systeem.wav'},
    {'name': 'resources/audio/talekt.wav', 'path': 'resources/audio/talekt.wav'},
    {'name': 'resources/audio/tanden.wav', 'path': 'resources/audio/tanden.wav'},
    {'name': 'resources/audio/tapeuk.wav', 'path': 'resources/audio/tapeuk.wav'},
    {'name': 'resources/audio/tarm.wav', 'path': 'resources/audio/tarm.wav'},
    {'name': 'resources/audio/tasen.wav', 'path': 'resources/audio/tasen.wav'},
    {'name': 'resources/audio/tasteur.wav', 'path': 'resources/audio/tasteur.wav'},
    {'name': 'resources/audio/tek.wav', 'path': 'resources/audio/tek.wav'},
    {'name': 'resources/audio/teken.wav', 'path': 'resources/audio/teken.wav'},
    {'name': 'resources/audio/tenkkiek.wav', 'path': 'resources/audio/tenkkiek.wav'},
    {'name': 'resources/audio/tentamen.wav', 'path': 'resources/audio/tentamen.wav'},
    {'name': 'resources/audio/terras.wav', 'path': 'resources/audio/terras.wav'},
    {'name': 'resources/audio/tert.wav', 'path': 'resources/audio/tert.wav'},
    {'name': 'resources/audio/tes.wav', 'path': 'resources/audio/tes.wav'},
    {'name': 'resources/audio/tiek.wav', 'path': 'resources/audio/tiek.wav'},
    {'name': 'resources/audio/tiener.wav', 'path': 'resources/audio/tiener.wav'},
    {'name': 'resources/audio/tieners.wav', 'path': 'resources/audio/tieners.wav'},
    {'name': 'resources/audio/tijn.wav', 'path': 'resources/audio/tijn.wav'},
    {'name': 'resources/audio/tist.wav', 'path': 'resources/audio/tist.wav'},
    {'name': 'resources/audio/toekomst.wav', 'path': 'resources/audio/toekomst.wav'},
    {'name': 'resources/audio/toenacht.wav', 'path': 'resources/audio/toenacht.wav'},
    {'name': 'resources/audio/toets.wav', 'path': 'resources/audio/toets.wav'},
    {'name': 'resources/audio/tond.wav', 'path': 'resources/audio/tond.wav'},
    {'name': 'resources/audio/toren.wav', 'path': 'resources/audio/toren.wav'},
    {'name': 'resources/audio/traga.wav', 'path': 'resources/audio/traga.wav'},
    {'name': 'resources/audio/trekkers.wav', 'path': 'resources/audio/trekkers.wav'},
    {'name': 'resources/audio/trep.wav', 'path': 'resources/audio/trep.wav'},
    {'name': 'resources/audio/troksem.wav', 'path': 'resources/audio/troksem.wav'},
    {'name': 'resources/audio/tunnels.wav', 'path': 'resources/audio/tunnels.wav'},
    {'name': 'resources/audio/twijfels.wav', 'path': 'resources/audio/twijfels.wav'},
    {'name': 'resources/audio/types.wav', 'path': 'resources/audio/types.wav'},
    {'name': 'resources/audio/vaast.wav', 'path': 'resources/audio/vaast.wav'},
    {'name': 'resources/audio/varen.wav', 'path': 'resources/audio/varen.wav'},
    {'name': 'resources/audio/varken.wav', 'path': 'resources/audio/varken.wav'},
    {'name': 'resources/audio/vas.wav', 'path': 'resources/audio/vas.wav'},
    {'name': 'resources/audio/velden.wav', 'path': 'resources/audio/velden.wav'},
    {'name': 'resources/audio/verganden.wav', 'path': 'resources/audio/verganden.wav'},
    {'name': 'resources/audio/verglad.wav', 'path': 'resources/audio/verglad.wav'},
    {'name': 'resources/audio/verhaal.wav', 'path': 'resources/audio/verhaal.wav'},
    {'name': 'resources/audio/verlaar.wav', 'path': 'resources/audio/verlaar.wav'},
    {'name': 'resources/audio/verlies.wav', 'path': 'resources/audio/verlies.wav'},
    {'name': 'resources/audio/vermoeden.wav', 'path': 'resources/audio/vermoeden.wav'},
    {'name': 'resources/audio/vermogen.wav', 'path': 'resources/audio/vermogen.wav'},
    {'name': 'resources/audio/verploef.wav', 'path': 'resources/audio/verploef.wav'},
    {'name': 'resources/audio/verrier.wav', 'path': 'resources/audio/verrier.wav'},
    {'name': 'resources/audio/verschil.wav', 'path': 'resources/audio/verschil.wav'},
    {'name': 'resources/audio/verstand.wav', 'path': 'resources/audio/verstand.wav'},
    {'name': 'resources/audio/vert.wav', 'path': 'resources/audio/vert.wav'},
    {'name': 'resources/audio/vertrek.wav', 'path': 'resources/audio/vertrek.wav'},
    {'name': 'resources/audio/vertrouwen.wav', 'path': 'resources/audio/vertrouwen.wav'},
    {'name': 'resources/audio/verwij.wav', 'path': 'resources/audio/verwij.wav'},
    {'name': 'resources/audio/verwoor.wav', 'path': 'resources/audio/verwoor.wav'},
    {'name': 'resources/audio/verzet.wav', 'path': 'resources/audio/verzet.wav'},
    {'name': 'resources/audio/veulen.wav', 'path': 'resources/audio/veulen.wav'},
    {'name': 'resources/audio/vinger.wav', 'path': 'resources/audio/vinger.wav'},
    {'name': 'resources/audio/vingers.wav', 'path': 'resources/audio/vingers.wav'},
    {'name': 'resources/audio/vis.wav', 'path': 'resources/audio/vis.wav'},
    {'name': 'resources/audio/vissen.wav', 'path': 'resources/audio/vissen.wav'},
    {'name': 'resources/audio/visser.wav', 'path': 'resources/audio/visser.wav'},
    {'name': 'resources/audio/vissers.wav', 'path': 'resources/audio/vissers.wav'},
    {'name': 'resources/audio/vlam.wav', 'path': 'resources/audio/vlam.wav'},
    {'name': 'resources/audio/vlammen.wav', 'path': 'resources/audio/vlammen.wav'},
    {'name': 'resources/audio/vlek.wav', 'path': 'resources/audio/vlek.wav'},
    {'name': 'resources/audio/vlekken.wav', 'path': 'resources/audio/vlekken.wav'},
    {'name': 'resources/audio/vliegtuig.wav', 'path': 'resources/audio/vliegtuig.wav'},
    {'name': 'resources/audio/vliffel.wav', 'path': 'resources/audio/vliffel.wav'},
    {'name': 'resources/audio/vlinder.wav', 'path': 'resources/audio/vlinder.wav'},
    {'name': 'resources/audio/vlinders.wav', 'path': 'resources/audio/vlinders.wav'},
    {'name': 'resources/audio/voch.wav', 'path': 'resources/audio/voch.wav'},
    {'name': 'resources/audio/vodef.wav', 'path': 'resources/audio/vodef.wav'},
    {'name': 'resources/audio/voet.wav', 'path': 'resources/audio/voet.wav'},
    {'name': 'resources/audio/voeten.wav', 'path': 'resources/audio/voeten.wav'},
    {'name': 'resources/audio/vogel.wav', 'path': 'resources/audio/vogel.wav'},
    {'name': 'resources/audio/vogels.wav', 'path': 'resources/audio/vogels.wav'},
    {'name': 'resources/audio/volloe.wav', 'path': 'resources/audio/volloe.wav'},
    {'name': 'resources/audio/vonnis.wav', 'path': 'resources/audio/vonnis.wav'},
    {'name': 'resources/audio/voorgakt.wav', 'path': 'resources/audio/voorgakt.wav'},
    {'name': 'resources/audio/voornemen.wav', 'path': 'resources/audio/voornemen.wav'},
    {'name': 'resources/audio/voornerf.wav', 'path': 'resources/audio/voornerf.wav'},
    {'name': 'resources/audio/voortiel.wav', 'path': 'resources/audio/voortiel.wav'},
    {'name': 'resources/audio/vormen.wav', 'path': 'resources/audio/vormen.wav'},
    {'name': 'resources/audio/vrede.wav', 'path': 'resources/audio/vrede.wav'},
    {'name': 'resources/audio/vriend.wav', 'path': 'resources/audio/vriend.wav'},
    {'name': 'resources/audio/vrienden.wav', 'path': 'resources/audio/vrienden.wav'},
    {'name': 'resources/audio/vrouwen.wav', 'path': 'resources/audio/vrouwen.wav'},
    {'name': 'resources/audio/vuilnis.wav', 'path': 'resources/audio/vuilnis.wav'},
    {'name': 'resources/audio/vuut.wav', 'path': 'resources/audio/vuut.wav'},
    {'name': 'resources/audio/waardes.wav', 'path': 'resources/audio/waardes.wav'},
    {'name': 'resources/audio/waat.wav', 'path': 'resources/audio/waat.wav'},
    {'name': 'resources/audio/wachters.wav', 'path': 'resources/audio/wachters.wav'},
    {'name': 'resources/audio/wagen.wav', 'path': 'resources/audio/wagen.wav'},
    {'name': 'resources/audio/walvis.wav', 'path': 'resources/audio/walvis.wav'},
    {'name': 'resources/audio/wanst.wav', 'path': 'resources/audio/wanst.wav'},
    {'name': 'resources/audio/wanveep.wav', 'path': 'resources/audio/wanveep.wav'},
    {'name': 'resources/audio/wapen.wav', 'path': 'resources/audio/wapen.wav'},
    {'name': 'resources/audio/week.wav', 'path': 'resources/audio/week.wav'},
    {'name': 'resources/audio/weken.wav', 'path': 'resources/audio/weken.wav'},
    {'name': 'resources/audio/wels.wav', 'path': 'resources/audio/wels.wav'},
    {'name': 'resources/audio/wengen.wav', 'path': 'resources/audio/wengen.wav'},
    {'name': 'resources/audio/wens.wav', 'path': 'resources/audio/wens.wav'},
    {'name': 'resources/audio/wensen.wav', 'path': 'resources/audio/wensen.wav'},
    {'name': 'resources/audio/wereld.wav', 'path': 'resources/audio/wereld.wav'},
    {'name': 'resources/audio/westen.wav', 'path': 'resources/audio/westen.wav'},
    {'name': 'resources/audio/wetten.wav', 'path': 'resources/audio/wetten.wav'},
    {'name': 'resources/audio/wezen.wav', 'path': 'resources/audio/wezen.wav'},
    {'name': 'resources/audio/wiel.wav', 'path': 'resources/audio/wiel.wav'},
    {'name': 'resources/audio/wielen.wav', 'path': 'resources/audio/wielen.wav'},
    {'name': 'resources/audio/wievel.wav', 'path': 'resources/audio/wievel.wav'},
    {'name': 'resources/audio/winkels.wav', 'path': 'resources/audio/winkels.wav'},
    {'name': 'resources/audio/winter.wav', 'path': 'resources/audio/winter.wav'},
    {'name': 'resources/audio/wipsen.wav', 'path': 'resources/audio/wipsen.wav'},
    {'name': 'resources/audio/wiro.wav', 'path': 'resources/audio/wiro.wav'},
    {'name': 'resources/audio/woede.wav', 'path': 'resources/audio/woede.wav'},
    {'name': 'resources/audio/wolken.wav', 'path': 'resources/audio/wolken.wav'},
    {'name': 'resources/audio/womel.wav', 'path': 'resources/audio/womel.wav'},
    {'name': 'resources/audio/wond.wav', 'path': 'resources/audio/wond.wav'},
    {'name': 'resources/audio/wonden.wav', 'path': 'resources/audio/wonden.wav'},
    {'name': 'resources/audio/wonder.wav', 'path': 'resources/audio/wonder.wav'},
    {'name': 'resources/audio/woorden.wav', 'path': 'resources/audio/woorden.wav'},
    {'name': 'resources/audio/wortel.wav', 'path': 'resources/audio/wortel.wav'},
    {'name': 'resources/audio/wortels.wav', 'path': 'resources/audio/wortels.wav'},
    {'name': 'resources/audio/wukker.wav', 'path': 'resources/audio/wukker.wav'},
    {'name': 'resources/audio/zadels.wav', 'path': 'resources/audio/zadels.wav'},
    {'name': 'resources/audio/zaken.wav', 'path': 'resources/audio/zaken.wav'},
    {'name': 'resources/audio/zalder.wav', 'path': 'resources/audio/zalder.wav'},
    {'name': 'resources/audio/zan.wav', 'path': 'resources/audio/zan.wav'},
    {'name': 'resources/audio/zarder.wav', 'path': 'resources/audio/zarder.wav'},
    {'name': 'resources/audio/zas.wav', 'path': 'resources/audio/zas.wav'},
    {'name': 'resources/audio/zegen.wav', 'path': 'resources/audio/zegen.wav'},
    {'name': 'resources/audio/zek.wav', 'path': 'resources/audio/zek.wav'},
    {'name': 'resources/audio/zetver.wav', 'path': 'resources/audio/zetver.wav'},
    {'name': 'resources/audio/zetzerken.wav', 'path': 'resources/audio/zetzerken.wav'},
    {'name': 'resources/audio/ziektes.wav', 'path': 'resources/audio/ziektes.wav'},
    {'name': 'resources/audio/zielen.wav', 'path': 'resources/audio/zielen.wav'},
    {'name': 'resources/audio/zis.wav', 'path': 'resources/audio/zis.wav'},
    {'name': 'resources/audio/zoe.wav', 'path': 'resources/audio/zoe.wav'},
    {'name': 'resources/audio/zomers.wav', 'path': 'resources/audio/zomers.wav'},
    {'name': 'resources/audio/zorg.wav', 'path': 'resources/audio/zorg.wav'},
    {'name': 'resources/audio/zorgen.wav', 'path': 'resources/audio/zorgen.wav'},
    {'name': 'resources/audio/zuiden.wav', 'path': 'resources/audio/zuiden.wav'},
    {'name': 'resources/audio/zun.wav', 'path': 'resources/audio/zun.wav'},
    {'name': 'resources/audio/zwaktes.wav', 'path': 'resources/audio/zwaktes.wav'},
    {'name': 'resources/audio/zwerver.wav', 'path': 'resources/audio/zwerver.wav'},
    {'name': 'resources/audio/zwervers.wav', 'path': 'resources/audio/zwervers.wav'},
    {'name': 'resources/list1.xlsx', 'path': 'resources/list1.xlsx'},
    {'name': 'resources/list2.xlsx', 'path': 'resources/list2.xlsx'},
    {'name': 'resources/list3.xlsx', 'path': 'resources/list3.xlsx'},
    {'name': 'resources/practice.xlsx', 'path': 'resources/practice.xlsx'},
    {'name': 'resources/volume_icon.png', 'path': 'resources/volume_icon.png'},
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.INFO);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2024.2.4';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  psychoJS.setRedirectUrls('https://kemaeri.github.io/ldt-dutch/debrief', '');


  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/participant_${expInfo["participant"]}_${expName}_${expInfo["date"]}`);
  psychoJS.experiment.field_separator = '\t';


  return Scheduler.Event.NEXT;
}


var welcomeClock;
var welcomeText;
var welcomeKey;
var fixClock;
var fix_rand;
var primeStimClock;
var primeAudio;
var primeImage;
var primeKey;
var feedbackClock;
var primed;
var feedbackText;
var targetStimClock;
var targetAudio;
var targetImage;
var targetKey;
var startClock;
var startText;
var startKey;
var pauseClock;
var breakN;
var breakOn;
var breakText;
var breakKey;
var endClock;
var endText;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "welcome"
  welcomeClock = new util.Clock();
  welcomeText = new visual.TextStim({
    win: psychoJS.window,
    name: 'welcomeText',
    text: "Welkom bij het woordherkenningsexperiment!\n\nOp het scherm verschijnen straks woorden. Sommige zijn echte Nederlandse woorden en sommige zijn nepwoorden. Het doel is om te bepalen of het getoonde woord echt is of nep.\n\nDruk op 'j' als het woord echt is.\nDruk op 'f' als het woord nep is.\n\nWe gaan eerst even oefenen.\n\nDruk op de spatiebalk om verder te gaan.",
    font: 'Arial',
    units: 'norm', 
    pos: [0, 0], draggable: false, height: 0.08,  wrapWidth: 1.5, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  welcomeKey = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "fix"
  fixClock = new util.Clock();
  fix_rand = new visual.TextStim({
    win: psychoJS.window,
    name: 'fix_rand',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  // Initialize components for Routine "primeStim"
  primeStimClock = new util.Clock();
  primeAudio = new sound.Sound({
      win: psychoJS.window,
      value: 'A',
      secs: (- 1),
      });
  primeAudio.setVolume(1.0);
  primeImage = new visual.ImageStim({
    win : psychoJS.window,
    name : 'primeImage', units : undefined, 
    image : 'resources/volume_icon.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [0.2, 0.2],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  primeKey = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "feedback"
  feedbackClock = new util.Clock();
  // Run 'Begin Experiment' code from feedbackCode
  primed = true;
  
  feedbackText = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedbackText',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  // Initialize components for Routine "targetStim"
  targetStimClock = new util.Clock();
  targetAudio = new sound.Sound({
      win: psychoJS.window,
      value: 'A',
      secs: (- 1),
      });
  targetAudio.setVolume(1.0);
  targetImage = new visual.ImageStim({
    win : psychoJS.window,
    name : 'targetImage', units : undefined, 
    image : 'resources/volume_icon.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [0.2, 0.2],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  targetKey = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "start"
  startClock = new util.Clock();
  startText = new visual.TextStim({
    win: psychoJS.window,
    name: 'startText',
    text: 'Goed gedaan!\n\nWe gaan nu verder met het echte experiment. Het experiment is opgedeeld in 8 blokken. Tussen de blokken is er steeds een pauzemoment.\n\nVeel succes!\n\nDruk op de spatiebalk om te beginnen',
    font: 'Arial',
    units: 'norm', 
    pos: [0, 0], draggable: false, height: 0.1,  wrapWidth: 1.8, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  startKey = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "pause"
  pauseClock = new util.Clock();
  // Run 'Begin Experiment' code from breakCode
  function multiples(value, length) {
      return [...util.range(value, ((length * value) + 1), value)];
  }
  breakN = 0;
  breakOn = multiples(36, 8);
  
  breakText = new visual.TextStim({
    win: psychoJS.window,
    name: 'breakText',
    text: '',
    font: 'Arial',
    units: 'norm', 
    pos: [0, 0], draggable: false, height: 0.1,  wrapWidth: 1.8, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  breakKey = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "end"
  endClock = new util.Clock();
  endText = new visual.TextStim({
    win: psychoJS.window,
    name: 'endText',
    text: 'Einde van het experiment.\n\nEen moment geduld a.u.b.\nDe antwoorden worden opgeslagen...',
    font: 'Arial',
    units: 'norm', 
    pos: [0, 0], draggable: false, height: 0.1,  wrapWidth: 1.8, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var welcomeMaxDurationReached;
var _welcomeKey_allKeys;
var welcomeMaxDuration;
var welcomeComponents;
function welcomeRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'welcome' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    welcomeClock.reset();
    routineTimer.reset();
    welcomeMaxDurationReached = false;
    // update component parameters for each repeat
    welcomeKey.keys = undefined;
    welcomeKey.rt = undefined;
    _welcomeKey_allKeys = [];
    psychoJS.experiment.addData('welcome.started', globalClock.getTime());
    welcomeMaxDuration = null
    // keep track of which components have finished
    welcomeComponents = [];
    welcomeComponents.push(welcomeText);
    welcomeComponents.push(welcomeKey);
    
    welcomeComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function welcomeRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'welcome' ---
    // get current time
    t = welcomeClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *welcomeText* updates
    if (t >= 0.0 && welcomeText.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      welcomeText.tStart = t;  // (not accounting for frame time here)
      welcomeText.frameNStart = frameN;  // exact frame index
      
      welcomeText.setAutoDraw(true);
    }
    
    
    // *welcomeKey* updates
    if (t >= 0.0 && welcomeKey.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      welcomeKey.tStart = t;  // (not accounting for frame time here)
      welcomeKey.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { welcomeKey.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { welcomeKey.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { welcomeKey.clearEvents(); });
    }
    
    if (welcomeKey.status === PsychoJS.Status.STARTED) {
      let theseKeys = welcomeKey.getKeys({keyList: ['space'], waitRelease: false});
      _welcomeKey_allKeys = _welcomeKey_allKeys.concat(theseKeys);
      if (_welcomeKey_allKeys.length > 0) {
        welcomeKey.keys = _welcomeKey_allKeys[0].name;  // just the first key pressed
        welcomeKey.rt = _welcomeKey_allKeys[0].rt;
        welcomeKey.duration = _welcomeKey_allKeys[0].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    welcomeComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function welcomeRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'welcome' ---
    welcomeComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('welcome.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(welcomeKey.corr, level);
    }
    psychoJS.experiment.addData('welcomeKey.keys', welcomeKey.keys);
    if (typeof welcomeKey.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('welcomeKey.rt', welcomeKey.rt);
        psychoJS.experiment.addData('welcomeKey.duration', welcomeKey.duration);
        routineTimer.reset();
        }
    
    welcomeKey.stop();
    // the Routine "welcome" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var practice;
function practiceLoopBegin(practiceLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    practice = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'resources/practice.xlsx',
      seed: undefined, name: 'practice'
    });
    psychoJS.experiment.addLoop(practice); // add the loop to the experiment
    currentLoop = practice;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    practice.forEach(function() {
      snapshot = practice.getSnapshot();
    
      practiceLoopScheduler.add(importConditions(snapshot));
      practiceLoopScheduler.add(fixRoutineBegin(snapshot));
      practiceLoopScheduler.add(fixRoutineEachFrame());
      practiceLoopScheduler.add(fixRoutineEnd(snapshot));
      practiceLoopScheduler.add(primeStimRoutineBegin(snapshot));
      practiceLoopScheduler.add(primeStimRoutineEachFrame());
      practiceLoopScheduler.add(primeStimRoutineEnd(snapshot));
      practiceLoopScheduler.add(feedbackRoutineBegin(snapshot));
      practiceLoopScheduler.add(feedbackRoutineEachFrame());
      practiceLoopScheduler.add(feedbackRoutineEnd(snapshot));
      practiceLoopScheduler.add(fixRoutineBegin(snapshot));
      practiceLoopScheduler.add(fixRoutineEachFrame());
      practiceLoopScheduler.add(fixRoutineEnd(snapshot));
      practiceLoopScheduler.add(targetStimRoutineBegin(snapshot));
      practiceLoopScheduler.add(targetStimRoutineEachFrame());
      practiceLoopScheduler.add(targetStimRoutineEnd(snapshot));
      practiceLoopScheduler.add(feedbackRoutineBegin(snapshot));
      practiceLoopScheduler.add(feedbackRoutineEachFrame());
      practiceLoopScheduler.add(feedbackRoutineEnd(snapshot));
      practiceLoopScheduler.add(practiceLoopEndIteration(practiceLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function practiceLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(practice);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function practiceLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var trials;
function trialsLoopBegin(trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: (("resources/list" + expInfo["list_no"]) + ".xlsx"),
      seed: undefined, name: 'trials'
    });
    psychoJS.experiment.addLoop(trials); // add the loop to the experiment
    currentLoop = trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    trials.forEach(function() {
      snapshot = trials.getSnapshot();
    
      trialsLoopScheduler.add(importConditions(snapshot));
      trialsLoopScheduler.add(fixRoutineBegin(snapshot));
      trialsLoopScheduler.add(fixRoutineEachFrame());
      trialsLoopScheduler.add(fixRoutineEnd(snapshot));
      trialsLoopScheduler.add(primeStimRoutineBegin(snapshot));
      trialsLoopScheduler.add(primeStimRoutineEachFrame());
      trialsLoopScheduler.add(primeStimRoutineEnd(snapshot));
      trialsLoopScheduler.add(fixRoutineBegin(snapshot));
      trialsLoopScheduler.add(fixRoutineEachFrame());
      trialsLoopScheduler.add(fixRoutineEnd(snapshot));
      trialsLoopScheduler.add(targetStimRoutineBegin(snapshot));
      trialsLoopScheduler.add(targetStimRoutineEachFrame());
      trialsLoopScheduler.add(targetStimRoutineEnd(snapshot));
      trialsLoopScheduler.add(pauseRoutineBegin(snapshot));
      trialsLoopScheduler.add(pauseRoutineEachFrame());
      trialsLoopScheduler.add(pauseRoutineEnd(snapshot));
      trialsLoopScheduler.add(trialsLoopEndIteration(trialsLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function trialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trialsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var fixMaxDurationReached;
var interval;
var fixMaxDuration;
var fixComponents;
function fixRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'fix' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    fixClock.reset();
    routineTimer.reset();
    fixMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from intervalCode
    interval = ((util.randint(0, 700) + 300) / 1000);
    
    fix_rand.setText('+');
    psychoJS.experiment.addData('fix.started', globalClock.getTime());
    fixMaxDuration = null
    // keep track of which components have finished
    fixComponents = [];
    fixComponents.push(fix_rand);
    
    fixComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function fixRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'fix' ---
    // get current time
    t = fixClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *fix_rand* updates
    if (t >= 0.0 && fix_rand.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fix_rand.tStart = t;  // (not accounting for frame time here)
      fix_rand.frameNStart = frameN;  // exact frame index
      
      fix_rand.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + interval - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (fix_rand.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      fix_rand.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    fixComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function fixRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'fix' ---
    fixComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('fix.stopped', globalClock.getTime());
    // the Routine "fix" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var primeStimMaxDurationReached;
var _primeKey_allKeys;
var primeStimMaxDuration;
var primeStimComponents;
function primeStimRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'primeStim' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    primeStimClock.reset();
    routineTimer.reset();
    primeStimMaxDurationReached = false;
    // update component parameters for each repeat
    primeAudio.setValue(`resources/audio/${prime_audio}`);
    primeAudio.setVolume(1.0);
    primeKey.keys = undefined;
    primeKey.rt = undefined;
    _primeKey_allKeys = [];
    psychoJS.experiment.addData('primeStim.started', globalClock.getTime());
    primeStimMaxDuration = null
    // keep track of which components have finished
    primeStimComponents = [];
    primeStimComponents.push(primeAudio);
    primeStimComponents.push(primeImage);
    primeStimComponents.push(primeKey);
    
    primeStimComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function primeStimRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'primeStim' ---
    // get current time
    t = primeStimClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // start/stop primeAudio
    if (t >= 0.1 && primeAudio.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      primeAudio.tStart = t;  // (not accounting for frame time here)
      primeAudio.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ primeAudio.play(); });  // screen flip
      primeAudio.status = PsychoJS.Status.STARTED;
    }
    if (t >= (primeAudio.getDuration() + primeAudio.tStart)     && primeAudio.status === PsychoJS.Status.STARTED) {
      primeAudio.stop();  // stop the sound (if longer than duration)
      primeAudio.status = PsychoJS.Status.FINISHED;
    }
    
    // *primeImage* updates
    if (t >= 0.0 && primeImage.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      primeImage.tStart = t;  // (not accounting for frame time here)
      primeImage.frameNStart = frameN;  // exact frame index
      
      primeImage.setAutoDraw(true);
    }
    
    
    // *primeKey* updates
    if (t >= 0.0 && primeKey.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      primeKey.tStart = t;  // (not accounting for frame time here)
      primeKey.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { primeKey.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { primeKey.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { primeKey.clearEvents(); });
    }
    
    if (primeKey.status === PsychoJS.Status.STARTED) {
      let theseKeys = primeKey.getKeys({keyList: ['f', 'j'], waitRelease: false});
      _primeKey_allKeys = _primeKey_allKeys.concat(theseKeys);
      if (_primeKey_allKeys.length > 0) {
        primeKey.keys = _primeKey_allKeys[_primeKey_allKeys.length - 1].name;  // just the last key pressed
        primeKey.rt = _primeKey_allKeys[_primeKey_allKeys.length - 1].rt;
        primeKey.duration = _primeKey_allKeys[_primeKey_allKeys.length - 1].duration;
        // was this correct?
        if (primeKey.keys == prime_corrAns) {
            primeKey.corr = 1;
        } else {
            primeKey.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    primeStimComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function primeStimRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'primeStim' ---
    primeStimComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('primeStim.stopped', globalClock.getTime());
    primeAudio.stop();  // ensure sound has stopped at end of Routine
    // was no response the correct answer?!
    if (primeKey.keys === undefined) {
      if (['None','none',undefined].includes(prime_corrAns)) {
         primeKey.corr = 1;  // correct non-response
      } else {
         primeKey.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(primeKey.corr, level);
    }
    psychoJS.experiment.addData('primeKey.keys', primeKey.keys);
    psychoJS.experiment.addData('primeKey.corr', primeKey.corr);
    if (typeof primeKey.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('primeKey.rt', primeKey.rt);
        psychoJS.experiment.addData('primeKey.duration', primeKey.duration);
        routineTimer.reset();
        }
    
    primeKey.stop();
    // the Routine "primeStim" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var feedbackMaxDurationReached;
var fb_text;
var fb_col;
var feedbackMaxDuration;
var feedbackComponents;
function feedbackRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'feedback' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    feedbackClock.reset(routineTimer.getTime());
    routineTimer.add(0.500000);
    feedbackMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from feedbackCode
    fb_text = "no key_resp component found - look at the Std out window for info";
    fb_col = "black";
    primed = (! primed);
    try {
        if ((primed === false)) {
            if (primeKey.corr) {
                fb_text = "O";
                fb_col = "green";
            } else {
                fb_text = "X";
                fb_col = "red";
            }
        }
        if ((primed === true)) {
            if (targetKey.corr) {
                fb_text = "O";
                fb_col = "green";
            } else {
                fb_text = "X";
                fb_col = "red";
            }
        }
    } catch(e) {
        console.log("Make sure that you have:\n1. a routine with a keyboard component in it called \"key_resp\"\n 2. In the key_Resp component in the \"data\" tab select \"Store Correct\".\n in the \"Correct answer\" field use \"$corrAns\" (where corrAns is a column header in your conditions file indicating the correct key press");
    }
    
    feedbackText.setColor(new util.Color(fb_col));
    feedbackText.setText(fb_text);
    psychoJS.experiment.addData('feedback.started', globalClock.getTime());
    feedbackMaxDuration = null
    // keep track of which components have finished
    feedbackComponents = [];
    feedbackComponents.push(feedbackText);
    
    feedbackComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function feedbackRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'feedback' ---
    // get current time
    t = feedbackClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *feedbackText* updates
    if (t >= 0.0 && feedbackText.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      feedbackText.tStart = t;  // (not accounting for frame time here)
      feedbackText.frameNStart = frameN;  // exact frame index
      
      feedbackText.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (feedbackText.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      feedbackText.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    feedbackComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function feedbackRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'feedback' ---
    feedbackComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('feedback.stopped', globalClock.getTime());
    if (feedbackMaxDurationReached) {
        feedbackClock.add(feedbackMaxDuration);
    } else {
        feedbackClock.add(0.500000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var targetStimMaxDurationReached;
var _targetKey_allKeys;
var targetStimMaxDuration;
var targetStimComponents;
function targetStimRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'targetStim' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    targetStimClock.reset();
    routineTimer.reset();
    targetStimMaxDurationReached = false;
    // update component parameters for each repeat
    targetAudio.setValue(`resources/audio/${target_audio}`);
    targetAudio.setVolume(1.0);
    targetKey.keys = undefined;
    targetKey.rt = undefined;
    _targetKey_allKeys = [];
    psychoJS.experiment.addData('targetStim.started', globalClock.getTime());
    targetStimMaxDuration = null
    // keep track of which components have finished
    targetStimComponents = [];
    targetStimComponents.push(targetAudio);
    targetStimComponents.push(targetImage);
    targetStimComponents.push(targetKey);
    
    targetStimComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function targetStimRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'targetStim' ---
    // get current time
    t = targetStimClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // start/stop targetAudio
    if (t >= 0.1 && targetAudio.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      targetAudio.tStart = t;  // (not accounting for frame time here)
      targetAudio.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ targetAudio.play(); });  // screen flip
      targetAudio.status = PsychoJS.Status.STARTED;
    }
    if (t >= (targetAudio.getDuration() + targetAudio.tStart)     && targetAudio.status === PsychoJS.Status.STARTED) {
      targetAudio.stop();  // stop the sound (if longer than duration)
      targetAudio.status = PsychoJS.Status.FINISHED;
    }
    
    // *targetImage* updates
    if (t >= 0.0 && targetImage.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      targetImage.tStart = t;  // (not accounting for frame time here)
      targetImage.frameNStart = frameN;  // exact frame index
      
      targetImage.setAutoDraw(true);
    }
    
    
    // *targetKey* updates
    if (t >= 0.0 && targetKey.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      targetKey.tStart = t;  // (not accounting for frame time here)
      targetKey.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { targetKey.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { targetKey.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { targetKey.clearEvents(); });
    }
    
    if (targetKey.status === PsychoJS.Status.STARTED) {
      let theseKeys = targetKey.getKeys({keyList: ['f', 'j'], waitRelease: false});
      _targetKey_allKeys = _targetKey_allKeys.concat(theseKeys);
      if (_targetKey_allKeys.length > 0) {
        targetKey.keys = _targetKey_allKeys[_targetKey_allKeys.length - 1].name;  // just the last key pressed
        targetKey.rt = _targetKey_allKeys[_targetKey_allKeys.length - 1].rt;
        targetKey.duration = _targetKey_allKeys[_targetKey_allKeys.length - 1].duration;
        // was this correct?
        if (targetKey.keys == target_corrAns) {
            targetKey.corr = 1;
        } else {
            targetKey.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    targetStimComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function targetStimRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'targetStim' ---
    targetStimComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('targetStim.stopped', globalClock.getTime());
    targetAudio.stop();  // ensure sound has stopped at end of Routine
    // was no response the correct answer?!
    if (targetKey.keys === undefined) {
      if (['None','none',undefined].includes(target_corrAns)) {
         targetKey.corr = 1;  // correct non-response
      } else {
         targetKey.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(targetKey.corr, level);
    }
    psychoJS.experiment.addData('targetKey.keys', targetKey.keys);
    psychoJS.experiment.addData('targetKey.corr', targetKey.corr);
    if (typeof targetKey.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('targetKey.rt', targetKey.rt);
        psychoJS.experiment.addData('targetKey.duration', targetKey.duration);
        routineTimer.reset();
        }
    
    targetKey.stop();
    // the Routine "targetStim" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var startMaxDurationReached;
var _startKey_allKeys;
var startMaxDuration;
var startComponents;
function startRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'start' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    startClock.reset();
    routineTimer.reset();
    startMaxDurationReached = false;
    // update component parameters for each repeat
    startKey.keys = undefined;
    startKey.rt = undefined;
    _startKey_allKeys = [];
    psychoJS.experiment.addData('start.started', globalClock.getTime());
    startMaxDuration = null
    // keep track of which components have finished
    startComponents = [];
    startComponents.push(startText);
    startComponents.push(startKey);
    
    startComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function startRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'start' ---
    // get current time
    t = startClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *startText* updates
    if (t >= 0.0 && startText.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      startText.tStart = t;  // (not accounting for frame time here)
      startText.frameNStart = frameN;  // exact frame index
      
      startText.setAutoDraw(true);
    }
    
    
    // *startKey* updates
    if (t >= 0.0 && startKey.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      startKey.tStart = t;  // (not accounting for frame time here)
      startKey.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { startKey.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { startKey.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { startKey.clearEvents(); });
    }
    
    if (startKey.status === PsychoJS.Status.STARTED) {
      let theseKeys = startKey.getKeys({keyList: ['space'], waitRelease: false});
      _startKey_allKeys = _startKey_allKeys.concat(theseKeys);
      if (_startKey_allKeys.length > 0) {
        startKey.keys = _startKey_allKeys[0].name;  // just the first key pressed
        startKey.rt = _startKey_allKeys[0].rt;
        startKey.duration = _startKey_allKeys[0].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    startComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function startRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'start' ---
    startComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('start.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(startKey.corr, level);
    }
    psychoJS.experiment.addData('startKey.keys', startKey.keys);
    if (typeof startKey.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('startKey.rt', startKey.rt);
        psychoJS.experiment.addData('startKey.duration', startKey.duration);
        routineTimer.reset();
        }
    
    startKey.stop();
    // the Routine "start" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var pauseMaxDurationReached;
var _pj;
var text;
var _breakKey_allKeys;
var pauseMaxDuration;
var pauseComponents;
function pauseRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'pause' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    pauseClock.reset();
    routineTimer.reset();
    pauseMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from breakCode
    var _pj;
    function _pj_snippets(container) {
        function in_es6(left, right) {
            if (((right instanceof Array) || ((typeof right) === "string"))) {
                return (right.indexOf(left) > (- 1));
            } else {
                if (((right instanceof Map) || (right instanceof Set) || (right instanceof WeakMap) || (right instanceof WeakSet))) {
                    return right.has(left);
                } else {
                    return (left in right);
                }
            }
        }
        container["in_es6"] = in_es6;
        return container;
    }
    _pj = {};
    _pj_snippets(_pj);
    if (_pj.in_es6((trials.thisN + 1), breakOn.slice(0, (- 1)))) {
        continueRoutine = true;
        breakText.setText("");
        breakN = (breakN + 1);
        text = `Dit was blok ${breakN} van de ${breakOn.length}
    
        Neem even pauze en druk dan op de spatiebalk om verder te gaan.`;
        breakText.setText(text);
    } else {
        continueRoutine = false;
    }
    
    breakKey.keys = undefined;
    breakKey.rt = undefined;
    _breakKey_allKeys = [];
    psychoJS.experiment.addData('pause.started', globalClock.getTime());
    pauseMaxDuration = null
    // keep track of which components have finished
    pauseComponents = [];
    pauseComponents.push(breakText);
    pauseComponents.push(breakKey);
    
    pauseComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function pauseRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'pause' ---
    // get current time
    t = pauseClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *breakText* updates
    if (t >= 0.0 && breakText.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      breakText.tStart = t;  // (not accounting for frame time here)
      breakText.frameNStart = frameN;  // exact frame index
      
      breakText.setAutoDraw(true);
    }
    
    
    // *breakKey* updates
    if (t >= 0.0 && breakKey.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      breakKey.tStart = t;  // (not accounting for frame time here)
      breakKey.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { breakKey.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { breakKey.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { breakKey.clearEvents(); });
    }
    
    if (breakKey.status === PsychoJS.Status.STARTED) {
      let theseKeys = breakKey.getKeys({keyList: ['space'], waitRelease: false});
      _breakKey_allKeys = _breakKey_allKeys.concat(theseKeys);
      if (_breakKey_allKeys.length > 0) {
        breakKey.keys = _breakKey_allKeys[0].name;  // just the first key pressed
        breakKey.rt = _breakKey_allKeys[0].rt;
        breakKey.duration = _breakKey_allKeys[0].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    pauseComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function pauseRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'pause' ---
    pauseComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('pause.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(breakKey.corr, level);
    }
    psychoJS.experiment.addData('breakKey.keys', breakKey.keys);
    if (typeof breakKey.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('breakKey.rt', breakKey.rt);
        psychoJS.experiment.addData('breakKey.duration', breakKey.duration);
        routineTimer.reset();
        }
    
    breakKey.stop();
    // the Routine "pause" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var endMaxDurationReached;
var endMaxDuration;
var endComponents;
function endRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'end' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    endClock.reset();
    routineTimer.reset();
    endMaxDurationReached = false;
    // update component parameters for each repeat
    // Disable downloading results to browser
    psychoJS._saveResults = 0;
    
    // Generate filename for results
    let filename = "list_" + expInfo["list_no"] + "_participant_" + expInfo["participant"] + "_" + psychoJS._experiment._experimentName + '_' + psychoJS._experiment._datetime;
    
    // Convert data object to JSON
    let dataJSON = JSON.stringify(psychoJS.experiment._trialsData);
    
    // Send data to OSF
    fetch("https://pipe.jspsych.org/api/data/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "*/*",
          },
          body: JSON.stringify({
            experimentID: "ZEVejS01TpMw",
            filename: `${filename}.json`,
            data: dataJSON,
          }),
    }).then(response => response.json()).then(data => {
        console.log(data);
        quitPsychoJS("Bedankt voor het meedoen!",true);
    });
    
    psychoJS.experiment.addData('end.started', globalClock.getTime());
    endMaxDuration = null
    // keep track of which components have finished
    endComponents = [];
    endComponents.push(endText);
    
    endComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function endRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'end' ---
    // get current time
    t = endClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *endText* updates
    if (t >= 0.0 && endText.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      endText.tStart = t;  // (not accounting for frame time here)
      endText.frameNStart = frameN;  // exact frame index
      
      endText.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    endComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function endRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'end' ---
    endComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('end.stopped', globalClock.getTime());
    // the Routine "end" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
