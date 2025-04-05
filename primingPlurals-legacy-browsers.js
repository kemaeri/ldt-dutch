/*********************** 
 * Primingplurals *
 ***********************/


// store info about the experiment session:
let expName = 'primingPlurals';  // from the Builder filename that created this script
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
flowScheduler.add(quitPsychoJS, 'Thank you for your patience.', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, 'Thank you for your patience.', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
    {'name': 'resources/practice.xlsx', 'path': 'resources/practice.xlsx'},
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


var welcomeClock;
var resources;
var welcomeText;
var welcomeKey;
var fixClock;
var fix_rand;
var primeStimClock;
var primeText;
var primeKey;
var feedbackClock;
var primed;
var feedbackText;
var targetStimClock;
var targetText;
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
  resources = {
    status: PsychoJS.Status.NOT_STARTED
  };
  welcomeText = new visual.TextStim({
    win: psychoJS.window,
    name: 'welcomeText',
    text: "Welkom bij het woordherkenningsexperiment!\n\nOp het scherm verschijnen straks woorden. Sommige zijn echte Nederlandse woorden en sommige zijn nepwoorden. Het doel is om te bepalen of het getoonde woord echt is of nep.\n\nDruk op 'j' als het woord echt is.\nDruk op 'f' als het woord nep is.\n\nWe gaan eerst even oefenen.\n\nDruk op de spatiebalk om verder te gaan.",
    font: 'Arial',
    units: 'norm', 
    pos: [0, 0], draggable: false, height: 0.08,  wrapWidth: 1.5, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
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
  targetText = new visual.TextStim({
    win: psychoJS.window,
    name: 'targetText',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
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
    welcomeComponents.push(resources);
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
    // start downloading resources specified by component resources
    if (t >= 0 && resources.status === PsychoJS.Status.NOT_STARTED) {
      console.log('register and start downloading resources specified by component resources');
      await psychoJS.serverManager.prepareResources(["resources/list1.xlsx", "resources/list2.xlsx", "resources/list3.xlsx", "resources/practice.xlsx"]);
      resources.status = PsychoJS.Status.STARTED;
    }
    // check on the resources specified by component resources
    if (t >= null && resources.status === PsychoJS.Status.STARTED) {
      if (psychoJS.serverManager.getResourceStatus(["resources/list1.xlsx", "resources/list2.xlsx", "resources/list3.xlsx", "resources/practice.xlsx"]) === core.ServerManager.ResourceStatus.DOWNLOADED) {
        console.log('finished downloading resources specified by component resources');
        resources.status = PsychoJS.Status.FINISHED;
      } else {
        console.log('resource specified in resources took longer than expected to download');
      }
    }
    
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
    primeText.setText(prime);
    primeKey.keys = undefined;
    primeKey.rt = undefined;
    _primeKey_allKeys = [];
    psychoJS.experiment.addData('primeStim.started', globalClock.getTime());
    primeStimMaxDuration = null
    // keep track of which components have finished
    primeStimComponents = [];
    primeStimComponents.push(primeText);
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
    
    // *primeText* updates
    if (t >= 0 && primeText.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      primeText.tStart = t;  // (not accounting for frame time here)
      primeText.frameNStart = frameN;  // exact frame index
      
      primeText.setAutoDraw(true);
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
    targetText.setText(target);
    targetKey.keys = undefined;
    targetKey.rt = undefined;
    _targetKey_allKeys = [];
    psychoJS.experiment.addData('targetStim.started', globalClock.getTime());
    targetStimMaxDuration = null
    // keep track of which components have finished
    targetStimComponents = [];
    targetStimComponents.push(targetText);
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
    
    // *targetText* updates
    if (t >= 0 && targetText.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      targetText.tStart = t;  // (not accounting for frame time here)
      targetText.frameNStart = frameN;  // exact frame index
      
      targetText.setAutoDraw(true);
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
        breakN = (breakN + 1);
    } else {
        continueRoutine = false;
    }
    
    breakText.setText(`Dit was blok ${breakN} van de ${breakOn.length}`);
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
        quitPsychoJS();
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
