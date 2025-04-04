/*********************** 
 * Primingplurals *
 ***********************/


// store info about the experiment session:
let expName = 'primingPlurals';  // from the Builder filename that created this script
let expInfo = {
    'participant': '',
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
flowScheduler.add(welcomeScreenRoutineBegin());
flowScheduler.add(welcomeScreenRoutineEachFrame());
flowScheduler.add(welcomeScreenRoutineEnd());
flowScheduler.add(counterbalance_expRoutineBegin());
flowScheduler.add(counterbalance_expRoutineEachFrame());
flowScheduler.add(counterbalance_expRoutineEnd());
const trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trialsLoopBegin(trialsLoopScheduler));
flowScheduler.add(trialsLoopScheduler);
flowScheduler.add(trialsLoopEnd);





flowScheduler.add(endScreenRoutineBegin());
flowScheduler.add(endScreenRoutineEachFrame());
flowScheduler.add(endScreenRoutineEnd());
flowScheduler.add(quitPsychoJS, 'Thank you for your patience.', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, 'Thank you for your patience.', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
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
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/participant_${expInfo["participant"]}_${expName}_${expInfo["date"]}`);
  psychoJS.experiment.field_separator = '\t';


  return Scheduler.Event.NEXT;
}


var welcomeScreenClock;
var welcomeText;
var welcomeKey;
var resources;
var fixScreenClock;
var fix_rand;
var primeScreenClock;
var primeText;
var primeResp;
var trialScreenClock;
var trialText;
var trialResp;
var endScreenClock;
var endText;
var endResp;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "welcomeScreen"
  welcomeScreenClock = new util.Clock();
  welcomeText = new visual.TextStim({
    win: psychoJS.window,
    name: 'welcomeText',
    text: "Welkom bij het woordherkenningsexperiment!\n\nJe gaat straks woorden zien op het scherm. Sommige woorden zijn echte Nederlandse woorden en sommige woorden zijn nepwoorden. Jouw taak is om te bepalen of het getoonde woord echt is of nep.\n\nDruk op 'f' als het woord nep is.\nDruk op 'j' als het woord echt is.\n\nDruk op de spatiebalk om verder te gaan.",
    font: 'Arial',
    units: 'norm', 
    pos: [0, 0], draggable: false, height: 0.08,  wrapWidth: 1.2, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  welcomeKey = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Run 'Begin Experiment' code from welcomeAlign
  // Code component set to Both
  welcomeText.setAlignHoriz('center')
  resources = {
    status: PsychoJS.Status.NOT_STARTED
  };
  // Initialize components for Routine "fixScreen"
  fixScreenClock = new util.Clock();
  fix_rand = new visual.TextStim({
    win: psychoJS.window,
    name: 'fix_rand',
    text: '+',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "primeScreen"
  primeScreenClock = new util.Clock();
  primeText = new visual.TextStim({
    win: psychoJS.window,
    name: 'primeText',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  primeResp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "trialScreen"
  trialScreenClock = new util.Clock();
  trialText = new visual.TextStim({
    win: psychoJS.window,
    name: 'trialText',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  trialResp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "endScreen"
  endScreenClock = new util.Clock();
  endText = new visual.TextStim({
    win: psychoJS.window,
    name: 'endText',
    text: 'Einde van het experiment\n\nBedankt voor het meedoen!\n\nDruk op spatiebalk om het experiment af te sluiten',
    font: 'Arial',
    units: 'norm', 
    pos: [0, 0], draggable: false, height: 0.1,  wrapWidth: 1.8, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  endResp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Run 'Begin Experiment' code from endAlign
  // Code component set to Both
  endText.setAlignHoriz('center')
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var welcomeScreenMaxDurationReached;
var _welcomeKey_allKeys;
var welcomeScreenMaxDuration;
var welcomeScreenComponents;
function welcomeScreenRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'welcomeScreen' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    welcomeScreenClock.reset();
    routineTimer.reset();
    welcomeScreenMaxDurationReached = false;
    // update component parameters for each repeat
    welcomeKey.keys = undefined;
    welcomeKey.rt = undefined;
    _welcomeKey_allKeys = [];
    psychoJS.experiment.addData('welcomeScreen.started', globalClock.getTime());
    welcomeScreenMaxDuration = null
    // keep track of which components have finished
    welcomeScreenComponents = [];
    welcomeScreenComponents.push(welcomeText);
    welcomeScreenComponents.push(welcomeKey);
    welcomeScreenComponents.push(resources);
    
    welcomeScreenComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function welcomeScreenRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'welcomeScreen' ---
    // get current time
    t = welcomeScreenClock.getTime();
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
    
    // start downloading resources specified by component resources
    if (t >= 0 && resources.status === PsychoJS.Status.NOT_STARTED) {
      console.log('register and start downloading resources specified by component resources');
      await psychoJS.serverManager.prepareResources(["resources/list1.xlsx", "resources/list2.xlsx", "resources/list3.xlsx"]);
      resources.status = PsychoJS.Status.STARTED;
    }
    // check on the resources specified by component resources
    if (t >= null && resources.status === PsychoJS.Status.STARTED) {
      if (psychoJS.serverManager.getResourceStatus(["resources/list1.xlsx", "resources/list2.xlsx", "resources/list3.xlsx"]) === core.ServerManager.ResourceStatus.DOWNLOADED) {
        console.log('finished downloading resources specified by component resources');
        resources.status = PsychoJS.Status.FINISHED;
      } else {
        console.log('resource specified in resources took longer than expected to download');
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
    welcomeScreenComponents.forEach( function(thisComponent) {
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


function welcomeScreenRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'welcomeScreen' ---
    welcomeScreenComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('welcomeScreen.stopped', globalClock.getTime());
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
    // the Routine "welcomeScreen" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var counterbalance_exp;
function counterbalance_expRoutineBegin(snapshot) {
  return async function () {
    // create uniform conditions for counterbalance_exp
    let counterbalance_expConditions = [];
    for (let n = 0; n < 3; n++) {
        counterbalance_expConditions.push({
            'group': n,
            'probability': 1/3,
            'cap': 10
        });
    }
    
    // get counterbalancing group 
    counterbalance_exp = await psychoJS.shelf.counterbalanceSelect({
        key: ['counterbalance_exp', '@designer', '@experiment'],
        groups: counterbalance_expConditions.map(row => row.group),
        groupSizes: counterbalance_expConditions.map(row => row.cap),
    });
    // if slots and repeats are fully depleted, end the experiment now
    if (counterbalance_exp.finished) {
        quitPsychoJS('No more slots remaining for this study.', true)
    }
    psychoJS.experiment.addData('counterbalance_exp.group', counterbalance_exp.group)
    for (let _key in counterbalance_exp.params) {
        psychoJS.experiment.addData(`counterbalance_exp.${_key}`, counterbalance_exp.params[_key])
    }
    psychoJS.experiment.addData('counterbalance_exp.remaining', counterbalance_exp.remaining)
    return Scheduler.Event.NEXT;
  }
}

function counterbalance_expRoutineEachFrame(snapshot) {
    return async function () {
        return Scheduler.Event.NEXT;
    }
}

function counterbalance_expRoutineEnd(snapshot) {
    return async function () {
        return Scheduler.Event.NEXT;
    }
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
      trialList: (("resources/list" + counterbalance_exp.group) + ".xlsx"),
      seed: undefined, name: 'trials'
    });
    psychoJS.experiment.addLoop(trials); // add the loop to the experiment
    currentLoop = trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    trials.forEach(function() {
      snapshot = trials.getSnapshot();
    
      trialsLoopScheduler.add(importConditions(snapshot));
      trialsLoopScheduler.add(fixScreenRoutineBegin(snapshot));
      trialsLoopScheduler.add(fixScreenRoutineEachFrame());
      trialsLoopScheduler.add(fixScreenRoutineEnd(snapshot));
      trialsLoopScheduler.add(primeScreenRoutineBegin(snapshot));
      trialsLoopScheduler.add(primeScreenRoutineEachFrame());
      trialsLoopScheduler.add(primeScreenRoutineEnd(snapshot));
      trialsLoopScheduler.add(fixScreenRoutineBegin(snapshot));
      trialsLoopScheduler.add(fixScreenRoutineEachFrame());
      trialsLoopScheduler.add(fixScreenRoutineEnd(snapshot));
      trialsLoopScheduler.add(trialScreenRoutineBegin(snapshot));
      trialsLoopScheduler.add(trialScreenRoutineEachFrame());
      trialsLoopScheduler.add(trialScreenRoutineEnd(snapshot));
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


var fixScreenMaxDurationReached;
var fixScreenMaxDuration;
var fixScreenComponents;
function fixScreenRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'fixScreen' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    fixScreenClock.reset();
    routineTimer.reset();
    fixScreenMaxDurationReached = false;
    // update component parameters for each repeat
    psychoJS.experiment.addData('fixScreen.started', globalClock.getTime());
    fixScreenMaxDuration = null
    // keep track of which components have finished
    fixScreenComponents = [];
    fixScreenComponents.push(fix_rand);
    
    fixScreenComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function fixScreenRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'fixScreen' ---
    // get current time
    t = fixScreenClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *fix_rand* updates
    if (t >= 0.0 && fix_rand.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fix_rand.tStart = t;  // (not accounting for frame time here)
      fix_rand.frameNStart = frameN;  // exact frame index
      
      fix_rand.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + (Math.random() + 0.3) - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
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
    fixScreenComponents.forEach( function(thisComponent) {
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


function fixScreenRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'fixScreen' ---
    fixScreenComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('fixScreen.stopped', globalClock.getTime());
    // the Routine "fixScreen" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var primeScreenMaxDurationReached;
var _primeResp_allKeys;
var primeScreenMaxDuration;
var primeScreenComponents;
function primeScreenRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'primeScreen' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    primeScreenClock.reset();
    routineTimer.reset();
    primeScreenMaxDurationReached = false;
    // update component parameters for each repeat
    primeText.setText(prime);
    primeResp.keys = undefined;
    primeResp.rt = undefined;
    _primeResp_allKeys = [];
    psychoJS.experiment.addData('primeScreen.started', globalClock.getTime());
    primeScreenMaxDuration = null
    // keep track of which components have finished
    primeScreenComponents = [];
    primeScreenComponents.push(primeText);
    primeScreenComponents.push(primeResp);
    
    primeScreenComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function primeScreenRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'primeScreen' ---
    // get current time
    t = primeScreenClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *primeText* updates
    if (t >= 0.0 && primeText.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      primeText.tStart = t;  // (not accounting for frame time here)
      primeText.frameNStart = frameN;  // exact frame index
      
      primeText.setAutoDraw(true);
    }
    
    
    // *primeResp* updates
    if (t >= 0.0 && primeResp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      primeResp.tStart = t;  // (not accounting for frame time here)
      primeResp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { primeResp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { primeResp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { primeResp.clearEvents(); });
    }
    
    if (primeResp.status === PsychoJS.Status.STARTED) {
      let theseKeys = primeResp.getKeys({keyList: ['f', 'j'], waitRelease: false});
      _primeResp_allKeys = _primeResp_allKeys.concat(theseKeys);
      if (_primeResp_allKeys.length > 0) {
        primeResp.keys = _primeResp_allKeys[_primeResp_allKeys.length - 1].name;  // just the last key pressed
        primeResp.rt = _primeResp_allKeys[_primeResp_allKeys.length - 1].rt;
        primeResp.duration = _primeResp_allKeys[_primeResp_allKeys.length - 1].duration;
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
    primeScreenComponents.forEach( function(thisComponent) {
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


function primeScreenRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'primeScreen' ---
    primeScreenComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('primeScreen.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(primeResp.corr, level);
    }
    psychoJS.experiment.addData('primeResp.keys', primeResp.keys);
    if (typeof primeResp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('primeResp.rt', primeResp.rt);
        psychoJS.experiment.addData('primeResp.duration', primeResp.duration);
        routineTimer.reset();
        }
    
    primeResp.stop();
    // the Routine "primeScreen" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trialScreenMaxDurationReached;
var _trialResp_allKeys;
var trialScreenMaxDuration;
var trialScreenComponents;
function trialScreenRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'trialScreen' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    trialScreenClock.reset();
    routineTimer.reset();
    trialScreenMaxDurationReached = false;
    // update component parameters for each repeat
    trialText.setText(target);
    trialResp.keys = undefined;
    trialResp.rt = undefined;
    _trialResp_allKeys = [];
    psychoJS.experiment.addData('trialScreen.started', globalClock.getTime());
    trialScreenMaxDuration = null
    // keep track of which components have finished
    trialScreenComponents = [];
    trialScreenComponents.push(trialText);
    trialScreenComponents.push(trialResp);
    
    trialScreenComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function trialScreenRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'trialScreen' ---
    // get current time
    t = trialScreenClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *trialText* updates
    if (t >= 0.0 && trialText.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      trialText.tStart = t;  // (not accounting for frame time here)
      trialText.frameNStart = frameN;  // exact frame index
      
      trialText.setAutoDraw(true);
    }
    
    
    // *trialResp* updates
    if (t >= 0.0 && trialResp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      trialResp.tStart = t;  // (not accounting for frame time here)
      trialResp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { trialResp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { trialResp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { trialResp.clearEvents(); });
    }
    
    if (trialResp.status === PsychoJS.Status.STARTED) {
      let theseKeys = trialResp.getKeys({keyList: ['f', 'j'], waitRelease: false});
      _trialResp_allKeys = _trialResp_allKeys.concat(theseKeys);
      if (_trialResp_allKeys.length > 0) {
        trialResp.keys = _trialResp_allKeys[_trialResp_allKeys.length - 1].name;  // just the last key pressed
        trialResp.rt = _trialResp_allKeys[_trialResp_allKeys.length - 1].rt;
        trialResp.duration = _trialResp_allKeys[_trialResp_allKeys.length - 1].duration;
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
    trialScreenComponents.forEach( function(thisComponent) {
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


function trialScreenRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'trialScreen' ---
    trialScreenComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('trialScreen.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(trialResp.corr, level);
    }
    psychoJS.experiment.addData('trialResp.keys', trialResp.keys);
    if (typeof trialResp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('trialResp.rt', trialResp.rt);
        psychoJS.experiment.addData('trialResp.duration', trialResp.duration);
        routineTimer.reset();
        }
    
    trialResp.stop();
    // the Routine "trialScreen" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var endScreenMaxDurationReached;
var _endResp_allKeys;
var endScreenMaxDuration;
var endScreenComponents;
function endScreenRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'endScreen' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    endScreenClock.reset();
    routineTimer.reset();
    endScreenMaxDurationReached = false;
    // update component parameters for each repeat
    endResp.keys = undefined;
    endResp.rt = undefined;
    _endResp_allKeys = [];
    psychoJS.experiment.addData('endScreen.started', globalClock.getTime());
    endScreenMaxDuration = null
    // keep track of which components have finished
    endScreenComponents = [];
    endScreenComponents.push(endText);
    endScreenComponents.push(endResp);
    
    endScreenComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function endScreenRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'endScreen' ---
    // get current time
    t = endScreenClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *endText* updates
    if (t >= 0.0 && endText.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      endText.tStart = t;  // (not accounting for frame time here)
      endText.frameNStart = frameN;  // exact frame index
      
      endText.setAutoDraw(true);
    }
    
    
    // *endResp* updates
    if (t >= 0.0 && endResp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      endResp.tStart = t;  // (not accounting for frame time here)
      endResp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { endResp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { endResp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { endResp.clearEvents(); });
    }
    
    if (endResp.status === PsychoJS.Status.STARTED) {
      let theseKeys = endResp.getKeys({keyList: ['space'], waitRelease: false});
      _endResp_allKeys = _endResp_allKeys.concat(theseKeys);
      if (_endResp_allKeys.length > 0) {
        endResp.keys = _endResp_allKeys[0].name;  // just the first key pressed
        endResp.rt = _endResp_allKeys[0].rt;
        endResp.duration = _endResp_allKeys[0].duration;
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
    endScreenComponents.forEach( function(thisComponent) {
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


function endScreenRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'endScreen' ---
    endScreenComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('endScreen.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(endResp.corr, level);
    }
    psychoJS.experiment.addData('endResp.keys', endResp.keys);
    if (typeof endResp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('endResp.rt', endResp.rt);
        psychoJS.experiment.addData('endResp.duration', endResp.duration);
        routineTimer.reset();
        }
    
    endResp.stop();
    // the Routine "endScreen" was not non-slip safe, so reset the non-slip timer
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
  if (counterbalance_exp && !counterbalance_exp.finished) {
    await psychoJS.shelf.counterbalanceConfirm(
      ['counterbalance_exp', '@designer', '@experiment'],
      counterbalance_exp.participantToken,
      isCompleted
    );
  }
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
