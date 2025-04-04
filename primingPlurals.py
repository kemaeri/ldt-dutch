#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
This experiment was created using PsychoPy3 Experiment Builder (v2024.2.4),
    on maart 25, 2025, at 20:58
If you publish work using this script the most relevant publication is:

    Peirce J, Gray JR, Simpson S, MacAskill M, Höchenberger R, Sogo H, Kastman E, Lindeløv JK. (2019) 
        PsychoPy2: Experiments in behavior made easy Behav Res 51: 195. 
        https://doi.org/10.3758/s13428-018-01193-y

"""

# --- Import packages ---
from psychopy import locale_setup
from psychopy import prefs
from psychopy import plugins
plugins.activatePlugins()
prefs.hardware['audioLib'] = 'ptb'
prefs.hardware['audioLatencyMode'] = '3'
from psychopy import sound, gui, visual, core, data, event, logging, clock, colors, layout, hardware
from psychopy.tools import environmenttools
from psychopy.constants import (NOT_STARTED, STARTED, PLAYING, PAUSED,
                                STOPPED, FINISHED, PRESSED, RELEASED, FOREVER, priority)

import numpy as np  # whole numpy lib is available, prepend 'np.'
from numpy import (sin, cos, tan, log, log10, pi, average,
                   sqrt, std, deg2rad, rad2deg, linspace, asarray)
from numpy.random import random, randint, normal, shuffle, choice as randchoice
import os  # handy system and path functions
import sys  # to get file system encoding

import psychopy.iohub as io
from psychopy.hardware import keyboard

# --- Setup global variables (available in all functions) ---
# create a device manager to handle hardware (keyboards, mice, mirophones, speakers, etc.)
deviceManager = hardware.DeviceManager()
# ensure that relative paths start from the same directory as this script
_thisDir = os.path.dirname(os.path.abspath(__file__))
# store info about the experiment session
psychopyVersion = '2024.2.4'
expName = 'primingPlurals'  # from the Builder filename that created this script
# information about this experiment
expInfo = {
    'participant': '1',
    'date|hid': data.getDateStr(),
    'expName|hid': expName,
    'psychopyVersion|hid': psychopyVersion,
}

# --- Define some variables which will change depending on pilot mode ---
'''
To run in pilot mode, either use the run/pilot toggle in Builder, Coder and Runner, 
or run the experiment with `--pilot` as an argument. To change what pilot 
#mode does, check out the 'Pilot mode' tab in preferences.
'''
# work out from system args whether we are running in pilot mode
PILOTING = core.setPilotModeFromArgs()
# start off with values from experiment settings
_fullScr = False
_winSize = [2560, 1440]
# if in pilot mode, apply overrides according to preferences
if PILOTING:
    # force windowed mode
    if prefs.piloting['forceWindowed']:
        _fullScr = False
        # set window size
        _winSize = prefs.piloting['forcedWindowSize']

def showExpInfoDlg(expInfo):
    """
    Show participant info dialog.
    Parameters
    ==========
    expInfo : dict
        Information about this experiment.
    
    Returns
    ==========
    dict
        Information about this experiment.
    """
    # show participant info dialog
    dlg = gui.DlgFromDict(
        dictionary=expInfo, sortKeys=False, title=expName, alwaysOnTop=True
    )
    if dlg.OK == False:
        core.quit()  # user pressed cancel
    # return expInfo
    return expInfo


def setupData(expInfo, dataDir=None):
    """
    Make an ExperimentHandler to handle trials and saving.
    
    Parameters
    ==========
    expInfo : dict
        Information about this experiment, created by the `setupExpInfo` function.
    dataDir : Path, str or None
        Folder to save the data to, leave as None to create a folder in the current directory.    
    Returns
    ==========
    psychopy.data.ExperimentHandler
        Handler object for this experiment, contains the data to save and information about 
        where to save it to.
    """
    # remove dialog-specific syntax from expInfo
    for key, val in expInfo.copy().items():
        newKey, _ = data.utils.parsePipeSyntax(key)
        expInfo[newKey] = expInfo.pop(key)
    
    # data file name stem = absolute path + name; later add .psyexp, .csv, .log, etc
    if dataDir is None:
        dataDir = _thisDir
    filename = u'data/participant_%s_%s_%s' % (expInfo['participant'], expName, expInfo['date'])
    # make sure filename is relative to dataDir
    if os.path.isabs(filename):
        dataDir = os.path.commonprefix([dataDir, filename])
        filename = os.path.relpath(filename, dataDir)
    
    # an ExperimentHandler isn't essential but helps with data saving
    thisExp = data.ExperimentHandler(
        name=expName, version='',
        extraInfo=expInfo, runtimeInfo=None,
        originPath='C:\\Users\\marie\\Desktop\\Experiment Neurolinguïstiek\\primingPlurals.py',
        savePickle=True, saveWideText=True,
        dataFileName=dataDir + os.sep + filename, sortColumns='time'
    )
    thisExp.setPriority('thisRow.t', priority.CRITICAL)
    thisExp.setPriority('expName', priority.LOW)
    # return experiment handler
    return thisExp


def setupLogging(filename):
    """
    Setup a log file and tell it what level to log at.
    
    Parameters
    ==========
    filename : str or pathlib.Path
        Filename to save log file and data files as, doesn't need an extension.
    
    Returns
    ==========
    psychopy.logging.LogFile
        Text stream to receive inputs from the logging system.
    """
    # set how much information should be printed to the console / app
    if PILOTING:
        logging.console.setLevel(
            prefs.piloting['pilotConsoleLoggingLevel']
        )
    else:
        logging.console.setLevel('warning')


def setupWindow(expInfo=None, win=None):
    """
    Setup the Window
    
    Parameters
    ==========
    expInfo : dict
        Information about this experiment, created by the `setupExpInfo` function.
    win : psychopy.visual.Window
        Window to setup - leave as None to create a new window.
    
    Returns
    ==========
    psychopy.visual.Window
        Window in which to run this experiment.
    """
    if win is None:
        # if not given a window to setup, make one
        win = visual.Window(
            size=_winSize, fullscr=_fullScr, screen=0,
            winType='pyglet', allowGUI=True, allowStencil=False,
            monitor='testMonitor', color=[0,0,0], colorSpace='rgb',
            backgroundImage='', backgroundFit='none',
            blendMode='avg', useFBO=True,
            units='height',
            checkTiming=False  # we're going to do this ourselves in a moment
        )
    else:
        # if we have a window, just set the attributes which are safe to set
        win.color = [0,0,0]
        win.colorSpace = 'rgb'
        win.backgroundImage = ''
        win.backgroundFit = 'none'
        win.units = 'height'
    if expInfo is not None:
        # get/measure frame rate if not already in expInfo
        if win._monitorFrameRate is None:
            win._monitorFrameRate = win.getActualFrameRate(infoMsg='Attempting to measure frame rate of screen, please wait...')
        expInfo['frameRate'] = win._monitorFrameRate
    win.hideMessage()
    # show a visual indicator if we're in piloting mode
    if PILOTING and prefs.piloting['showPilotingIndicator']:
        win.showPilotingIndicator()
    
    return win


def setupDevices(expInfo, thisExp, win):
    """
    Setup whatever devices are available (mouse, keyboard, speaker, eyetracker, etc.) and add them to 
    the device manager (deviceManager)
    
    Parameters
    ==========
    expInfo : dict
        Information about this experiment, created by the `setupExpInfo` function.
    thisExp : psychopy.data.ExperimentHandler
        Handler object for this experiment, contains the data to save and information about 
        where to save it to.
    win : psychopy.visual.Window
        Window in which to run this experiment.
    Returns
    ==========
    bool
        True if completed successfully.
    """
    # --- Setup input devices ---
    ioConfig = {}
    
    # Setup iohub keyboard
    ioConfig['Keyboard'] = dict(use_keymap='psychopy')
    
    # Setup iohub experiment
    ioConfig['Experiment'] = dict(filename=thisExp.dataFileName)
    
    # Start ioHub server
    ioServer = io.launchHubServer(window=win, **ioConfig)
    
    # store ioServer object in the device manager
    deviceManager.ioServer = ioServer
    
    # create a default keyboard (e.g. to check for escape)
    if deviceManager.getDevice('defaultKeyboard') is None:
        deviceManager.addDevice(
            deviceClass='keyboard', deviceName='defaultKeyboard', backend='iohub'
        )
    if deviceManager.getDevice('welcomeKey') is None:
        # initialise welcomeKey
        welcomeKey = deviceManager.addDevice(
            deviceClass='keyboard',
            deviceName='welcomeKey',
        )
    if deviceManager.getDevice('primeResp') is None:
        # initialise primeResp
        primeResp = deviceManager.addDevice(
            deviceClass='keyboard',
            deviceName='primeResp',
        )
    if deviceManager.getDevice('trialResp') is None:
        # initialise trialResp
        trialResp = deviceManager.addDevice(
            deviceClass='keyboard',
            deviceName='trialResp',
        )
    if deviceManager.getDevice('endResp') is None:
        # initialise endResp
        endResp = deviceManager.addDevice(
            deviceClass='keyboard',
            deviceName='endResp',
        )
    # return True if completed successfully
    return True

def pauseExperiment(thisExp, win=None, timers=[], playbackComponents=[]):
    """
    Pause this experiment, preventing the flow from advancing to the next routine until resumed.
    
    Parameters
    ==========
    thisExp : psychopy.data.ExperimentHandler
        Handler object for this experiment, contains the data to save and information about 
        where to save it to.
    win : psychopy.visual.Window
        Window for this experiment.
    timers : list, tuple
        List of timers to reset once pausing is finished.
    playbackComponents : list, tuple
        List of any components with a `pause` method which need to be paused.
    """
    # if we are not paused, do nothing
    if thisExp.status != PAUSED:
        return
    
    # start a timer to figure out how long we're paused for
    pauseTimer = core.Clock()
    # pause any playback components
    for comp in playbackComponents:
        comp.pause()
    # make sure we have a keyboard
    defaultKeyboard = deviceManager.getDevice('defaultKeyboard')
    if defaultKeyboard is None:
        defaultKeyboard = deviceManager.addKeyboard(
            deviceClass='keyboard',
            deviceName='defaultKeyboard',
            backend='ioHub',
        )
    # run a while loop while we wait to unpause
    while thisExp.status == PAUSED:
        # check for quit (typically the Esc key)
        if defaultKeyboard.getKeys(keyList=['escape']):
            endExperiment(thisExp, win=win)
        # sleep 1ms so other threads can execute
        clock.time.sleep(0.001)
    # if stop was requested while paused, quit
    if thisExp.status == FINISHED:
        endExperiment(thisExp, win=win)
    # resume any playback components
    for comp in playbackComponents:
        comp.play()
    # reset any timers
    for timer in timers:
        timer.addTime(-pauseTimer.getTime())


def run(expInfo, thisExp, win, globalClock=None, thisSession=None):
    """
    Run the experiment flow.
    
    Parameters
    ==========
    expInfo : dict
        Information about this experiment, created by the `setupExpInfo` function.
    thisExp : psychopy.data.ExperimentHandler
        Handler object for this experiment, contains the data to save and information about 
        where to save it to.
    psychopy.visual.Window
        Window in which to run this experiment.
    globalClock : psychopy.core.clock.Clock or None
        Clock to get global time from - supply None to make a new one.
    thisSession : psychopy.session.Session or None
        Handle of the Session object this experiment is being run from, if any.
    """
    # mark experiment as started
    thisExp.status = STARTED
    # make sure window is set to foreground to prevent losing focus
    win.winHandle.activate()
    # make sure variables created by exec are available globally
    exec = environmenttools.setExecEnvironment(globals())
    # get device handles from dict of input devices
    ioServer = deviceManager.ioServer
    # get/create a default keyboard (e.g. to check for escape)
    defaultKeyboard = deviceManager.getDevice('defaultKeyboard')
    if defaultKeyboard is None:
        deviceManager.addDevice(
            deviceClass='keyboard', deviceName='defaultKeyboard', backend='ioHub'
        )
    eyetracker = deviceManager.getDevice('eyetracker')
    # make sure we're running in the directory for this experiment
    os.chdir(_thisDir)
    # get filename from ExperimentHandler for convenience
    filename = thisExp.dataFileName
    frameTolerance = 0.001  # how close to onset before 'same' frame
    endExpNow = False  # flag for 'escape' or other condition => quit the exp
    # get frame duration from frame rate in expInfo
    if 'frameRate' in expInfo and expInfo['frameRate'] is not None:
        frameDur = 1.0 / round(expInfo['frameRate'])
    else:
        frameDur = 1.0 / 60.0  # could not measure, so guess
    
    # Start Code - component code to be run after the window creation
    
    # --- Initialize components for Routine "welcomeScreen" ---
    welcomeText = visual.TextStim(win=win, name='welcomeText',
        text="Welkom bij het woordherkenningsexperiment!\n\nJe gaat straks woorden zien op het scherm. Sommige woorden zijn echte Nederlandse woorden en sommige woorden zijn nepwoorden. Jouw taak is om te bepalen of het getoonde woord echt is of nep.\n\nDruk op 'f' als het woord nep is.\nDruk op 'j' als het woord echt is.\n\nDruk op de spatiebalk om verder te gaan.",
        font='Arial',
        units='norm', pos=(0, 0), draggable=False, height=0.1, wrapWidth=1.8, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=0.0);
    welcomeKey = keyboard.Keyboard(deviceName='welcomeKey')
    # Run 'Begin Experiment' code from welcomeAlign
    # Code components should usually appear at the top
    # of the routine. This one has to appear after the
    # text component it refers to.
    welcomeText.alignText= 'center'
    expShelf = data.shelf.Shelf(scope='experiment', expPath=_thisDir)
    # create uniform conditions for counterbalance_exp
    counterbalance_expConditions = []
    
    for n in range(3):
        counterbalance_expConditions.append({
            'group': n,
            'probability': 1/3,
            'cap': 50
        })
    
    # create counterbalance object for counterbalance_exp 
    counterbalance_exp = data.Counterbalancer(
        shelf=expShelf,
        entry='counterbalance_exp',
        conditions=counterbalance_expConditions,
        nReps=1
    )
    
    # --- Initialize components for Routine "fixScreen" ---
    fix_rand = visual.TextStim(win=win, name='fix_rand',
        text='+',
        font='Open Sans',
        pos=(0, 0), draggable=False, height=0.1, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=0.0);
    
    # --- Initialize components for Routine "primeScreen" ---
    primeText = visual.TextStim(win=win, name='primeText',
        text='',
        font='Arial',
        pos=(0, 0), draggable=False, height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=0.0);
    primeResp = keyboard.Keyboard(deviceName='primeResp')
    
    # --- Initialize components for Routine "fixScreen" ---
    fix_rand = visual.TextStim(win=win, name='fix_rand',
        text='+',
        font='Open Sans',
        pos=(0, 0), draggable=False, height=0.1, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=0.0);
    
    # --- Initialize components for Routine "trialScreen" ---
    trialText = visual.TextStim(win=win, name='trialText',
        text='',
        font='Arial',
        pos=(0, 0), draggable=False, height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=0.0);
    trialResp = keyboard.Keyboard(deviceName='trialResp')
    
    # --- Initialize components for Routine "endScreen" ---
    endText = visual.TextStim(win=win, name='endText',
        text='Einde van het experiment\n\nBedankt voor het meedoen!\n\nDruk op spatiebalk om het experiment af te sluiten',
        font='Arial',
        units='norm', pos=(0, 0), draggable=False, height=0.1, wrapWidth=1.8, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=0.0);
    endResp = keyboard.Keyboard(deviceName='endResp')
    # Run 'Begin Experiment' code from endAlign
    # Code components should usually appear at the top
    # of the routine. This one has to appear after the
    # text component it refers to.
    endText.alignText= 'center'
    
    # create some handy timers
    
    # global clock to track the time since experiment started
    if globalClock is None:
        # create a clock if not given one
        globalClock = core.Clock()
    if isinstance(globalClock, str):
        # if given a string, make a clock accoridng to it
        if globalClock == 'float':
            # get timestamps as a simple value
            globalClock = core.Clock(format='float')
        elif globalClock == 'iso':
            # get timestamps in ISO format
            globalClock = core.Clock(format='%Y-%m-%d_%H:%M:%S.%f%z')
        else:
            # get timestamps in a custom format
            globalClock = core.Clock(format=globalClock)
    if ioServer is not None:
        ioServer.syncClock(globalClock)
    logging.setDefaultClock(globalClock)
    # routine timer to track time remaining of each (possibly non-slip) routine
    routineTimer = core.Clock()
    win.flip()  # flip window to reset last flip timer
    # store the exact time the global clock started
    expInfo['expStart'] = data.getDateStr(
        format='%Y-%m-%d %Hh%M.%S.%f %z', fractionalSecondDigits=6
    )
    
    # --- Prepare to start Routine "welcomeScreen" ---
    # create an object to store info about Routine welcomeScreen
    welcomeScreen = data.Routine(
        name='welcomeScreen',
        components=[welcomeText, welcomeKey],
    )
    welcomeScreen.status = NOT_STARTED
    continueRoutine = True
    # update component parameters for each repeat
    # create starting attributes for welcomeKey
    welcomeKey.keys = []
    welcomeKey.rt = []
    _welcomeKey_allKeys = []
    # store start times for welcomeScreen
    welcomeScreen.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
    welcomeScreen.tStart = globalClock.getTime(format='float')
    welcomeScreen.status = STARTED
    thisExp.addData('welcomeScreen.started', welcomeScreen.tStart)
    welcomeScreen.maxDuration = None
    # keep track of which components have finished
    welcomeScreenComponents = welcomeScreen.components
    for thisComponent in welcomeScreen.components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "welcomeScreen" ---
    welcomeScreen.forceEnded = routineForceEnded = not continueRoutine
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *welcomeText* updates
        
        # if welcomeText is starting this frame...
        if welcomeText.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            welcomeText.frameNStart = frameN  # exact frame index
            welcomeText.tStart = t  # local t and not account for scr refresh
            welcomeText.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(welcomeText, 'tStartRefresh')  # time at next scr refresh
            # update status
            welcomeText.status = STARTED
            welcomeText.setAutoDraw(True)
        
        # if welcomeText is active this frame...
        if welcomeText.status == STARTED:
            # update params
            pass
        
        # *welcomeKey* updates
        waitOnFlip = False
        
        # if welcomeKey is starting this frame...
        if welcomeKey.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            welcomeKey.frameNStart = frameN  # exact frame index
            welcomeKey.tStart = t  # local t and not account for scr refresh
            welcomeKey.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(welcomeKey, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'welcomeKey.started')
            # update status
            welcomeKey.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(welcomeKey.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(welcomeKey.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if welcomeKey.status == STARTED and not waitOnFlip:
            theseKeys = welcomeKey.getKeys(keyList=['space'], ignoreKeys=["escape"], waitRelease=False)
            _welcomeKey_allKeys.extend(theseKeys)
            if len(_welcomeKey_allKeys):
                welcomeKey.keys = _welcomeKey_allKeys[0].name  # just the first key pressed
                welcomeKey.rt = _welcomeKey_allKeys[0].rt
                welcomeKey.duration = _welcomeKey_allKeys[0].duration
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if defaultKeyboard.getKeys(keyList=["escape"]):
            thisExp.status = FINISHED
        if thisExp.status == FINISHED or endExpNow:
            endExperiment(thisExp, win=win)
            return
        # pause experiment here if requested
        if thisExp.status == PAUSED:
            pauseExperiment(
                thisExp=thisExp, 
                win=win, 
                timers=[routineTimer], 
                playbackComponents=[]
            )
            # skip the frame we paused on
            continue
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            welcomeScreen.forceEnded = routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in welcomeScreen.components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "welcomeScreen" ---
    for thisComponent in welcomeScreen.components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # store stop times for welcomeScreen
    welcomeScreen.tStop = globalClock.getTime(format='float')
    welcomeScreen.tStopRefresh = tThisFlipGlobal
    thisExp.addData('welcomeScreen.stopped', welcomeScreen.tStop)
    # check responses
    if welcomeKey.keys in ['', [], None]:  # No response was made
        welcomeKey.keys = None
    thisExp.addData('welcomeKey.keys',welcomeKey.keys)
    if welcomeKey.keys != None:  # we had a response
        thisExp.addData('welcomeKey.rt', welcomeKey.rt)
        thisExp.addData('welcomeKey.duration', welcomeKey.duration)
    thisExp.nextEntry()
    # the Routine "welcomeScreen" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    # get group from shelf
    counterbalance_exp.allocateGroup()
    # if slots and repeats are fully depleted, end the experiment now
    if counterbalance_exp.finished:
        # first print and log a message to make it clear why the experiment ended
        print('Slots for Counterbalancer counterbalance_exp have been fully depleted, ending experiment.')
        logging.exp('Slots for Counterbalancer counterbalance_exp have been fully depleted, ending experiment.')
        endExperiment(thisExp, win=win)
    thisExp.addData('counterbalance_exp.group', counterbalance_exp.group)
    for _key, _val in counterbalance_exp.params.items():
        thisExp.addData(f'counterbalance_exp.{_key}', _val)
    thisExp.addData('counterbalance_exp.remaining', counterbalance_exp.remaining)
    thisExp.nextEntry()
    # the Routine "counterbalance_exp" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # set up handler to look after randomisation of conditions etc
    trials = data.TrialHandler2(
        name='trials',
        nReps=1.0, 
        method='random', 
        extraInfo=expInfo, 
        originPath=-1, 
        trialList=data.importConditions("resources/list"+counterbalance_exp.group+".xlsx"), 
        seed=None, 
    )
    thisExp.addLoop(trials)  # add the loop to the experiment
    thisTrial = trials.trialList[0]  # so we can initialise stimuli with some values
    # abbreviate parameter names if possible (e.g. rgb = thisTrial.rgb)
    if thisTrial != None:
        for paramName in thisTrial:
            globals()[paramName] = thisTrial[paramName]
    if thisSession is not None:
        # if running in a Session with a Liaison client, send data up to now
        thisSession.sendExperimentData()
    
    for thisTrial in trials:
        currentLoop = trials
        thisExp.timestampOnFlip(win, 'thisRow.t', format=globalClock.format)
        if thisSession is not None:
            # if running in a Session with a Liaison client, send data up to now
            thisSession.sendExperimentData()
        # abbreviate parameter names if possible (e.g. rgb = thisTrial.rgb)
        if thisTrial != None:
            for paramName in thisTrial:
                globals()[paramName] = thisTrial[paramName]
        
        # --- Prepare to start Routine "fixScreen" ---
        # create an object to store info about Routine fixScreen
        fixScreen = data.Routine(
            name='fixScreen',
            components=[fix_rand],
        )
        fixScreen.status = NOT_STARTED
        continueRoutine = True
        # update component parameters for each repeat
        # store start times for fixScreen
        fixScreen.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
        fixScreen.tStart = globalClock.getTime(format='float')
        fixScreen.status = STARTED
        thisExp.addData('fixScreen.started', fixScreen.tStart)
        fixScreen.maxDuration = None
        # keep track of which components have finished
        fixScreenComponents = fixScreen.components
        for thisComponent in fixScreen.components:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        frameN = -1
        
        # --- Run Routine "fixScreen" ---
        # if trial has changed, end Routine now
        if isinstance(trials, data.TrialHandler2) and thisTrial.thisN != trials.thisTrial.thisN:
            continueRoutine = False
        fixScreen.forceEnded = routineForceEnded = not continueRoutine
        while continueRoutine:
            # get current time
            t = routineTimer.getTime()
            tThisFlip = win.getFutureFlipTime(clock=routineTimer)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *fix_rand* updates
            
            # if fix_rand is starting this frame...
            if fix_rand.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                fix_rand.frameNStart = frameN  # exact frame index
                fix_rand.tStart = t  # local t and not account for scr refresh
                fix_rand.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(fix_rand, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'fix_rand.started')
                # update status
                fix_rand.status = STARTED
                fix_rand.setAutoDraw(True)
            
            # if fix_rand is active this frame...
            if fix_rand.status == STARTED:
                # update params
                pass
            
            # if fix_rand is stopping this frame...
            if fix_rand.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > fix_rand.tStartRefresh + random()+0.3-frameTolerance:
                    # keep track of stop time/frame for later
                    fix_rand.tStop = t  # not accounting for scr refresh
                    fix_rand.tStopRefresh = tThisFlipGlobal  # on global time
                    fix_rand.frameNStop = frameN  # exact frame index
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'fix_rand.stopped')
                    # update status
                    fix_rand.status = FINISHED
                    fix_rand.setAutoDraw(False)
            
            # check for quit (typically the Esc key)
            if defaultKeyboard.getKeys(keyList=["escape"]):
                thisExp.status = FINISHED
            if thisExp.status == FINISHED or endExpNow:
                endExperiment(thisExp, win=win)
                return
            # pause experiment here if requested
            if thisExp.status == PAUSED:
                pauseExperiment(
                    thisExp=thisExp, 
                    win=win, 
                    timers=[routineTimer], 
                    playbackComponents=[]
                )
                # skip the frame we paused on
                continue
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                fixScreen.forceEnded = routineForceEnded = True
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in fixScreen.components:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # --- Ending Routine "fixScreen" ---
        for thisComponent in fixScreen.components:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        # store stop times for fixScreen
        fixScreen.tStop = globalClock.getTime(format='float')
        fixScreen.tStopRefresh = tThisFlipGlobal
        thisExp.addData('fixScreen.stopped', fixScreen.tStop)
        # the Routine "fixScreen" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        
        # --- Prepare to start Routine "primeScreen" ---
        # create an object to store info about Routine primeScreen
        primeScreen = data.Routine(
            name='primeScreen',
            components=[primeText, primeResp],
        )
        primeScreen.status = NOT_STARTED
        continueRoutine = True
        # update component parameters for each repeat
        primeText.setText(prime)
        # create starting attributes for primeResp
        primeResp.keys = []
        primeResp.rt = []
        _primeResp_allKeys = []
        # store start times for primeScreen
        primeScreen.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
        primeScreen.tStart = globalClock.getTime(format='float')
        primeScreen.status = STARTED
        thisExp.addData('primeScreen.started', primeScreen.tStart)
        primeScreen.maxDuration = None
        # keep track of which components have finished
        primeScreenComponents = primeScreen.components
        for thisComponent in primeScreen.components:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        frameN = -1
        
        # --- Run Routine "primeScreen" ---
        # if trial has changed, end Routine now
        if isinstance(trials, data.TrialHandler2) and thisTrial.thisN != trials.thisTrial.thisN:
            continueRoutine = False
        primeScreen.forceEnded = routineForceEnded = not continueRoutine
        while continueRoutine:
            # get current time
            t = routineTimer.getTime()
            tThisFlip = win.getFutureFlipTime(clock=routineTimer)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *primeText* updates
            
            # if primeText is starting this frame...
            if primeText.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                primeText.frameNStart = frameN  # exact frame index
                primeText.tStart = t  # local t and not account for scr refresh
                primeText.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(primeText, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'primeText.started')
                # update status
                primeText.status = STARTED
                primeText.setAutoDraw(True)
            
            # if primeText is active this frame...
            if primeText.status == STARTED:
                # update params
                pass
            
            # *primeResp* updates
            waitOnFlip = False
            
            # if primeResp is starting this frame...
            if primeResp.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                primeResp.frameNStart = frameN  # exact frame index
                primeResp.tStart = t  # local t and not account for scr refresh
                primeResp.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(primeResp, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'primeResp.started')
                # update status
                primeResp.status = STARTED
                # keyboard checking is just starting
                waitOnFlip = True
                win.callOnFlip(primeResp.clock.reset)  # t=0 on next screen flip
                win.callOnFlip(primeResp.clearEvents, eventType='keyboard')  # clear events on next screen flip
            if primeResp.status == STARTED and not waitOnFlip:
                theseKeys = primeResp.getKeys(keyList=['f','j'], ignoreKeys=["escape"], waitRelease=False)
                _primeResp_allKeys.extend(theseKeys)
                if len(_primeResp_allKeys):
                    primeResp.keys = _primeResp_allKeys[-1].name  # just the last key pressed
                    primeResp.rt = _primeResp_allKeys[-1].rt
                    primeResp.duration = _primeResp_allKeys[-1].duration
                    # a response ends the routine
                    continueRoutine = False
            
            # check for quit (typically the Esc key)
            if defaultKeyboard.getKeys(keyList=["escape"]):
                thisExp.status = FINISHED
            if thisExp.status == FINISHED or endExpNow:
                endExperiment(thisExp, win=win)
                return
            # pause experiment here if requested
            if thisExp.status == PAUSED:
                pauseExperiment(
                    thisExp=thisExp, 
                    win=win, 
                    timers=[routineTimer], 
                    playbackComponents=[]
                )
                # skip the frame we paused on
                continue
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                primeScreen.forceEnded = routineForceEnded = True
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in primeScreen.components:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # --- Ending Routine "primeScreen" ---
        for thisComponent in primeScreen.components:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        # store stop times for primeScreen
        primeScreen.tStop = globalClock.getTime(format='float')
        primeScreen.tStopRefresh = tThisFlipGlobal
        thisExp.addData('primeScreen.stopped', primeScreen.tStop)
        # check responses
        if primeResp.keys in ['', [], None]:  # No response was made
            primeResp.keys = None
        trials.addData('primeResp.keys',primeResp.keys)
        if primeResp.keys != None:  # we had a response
            trials.addData('primeResp.rt', primeResp.rt)
            trials.addData('primeResp.duration', primeResp.duration)
        # the Routine "primeScreen" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        
        # --- Prepare to start Routine "fixScreen" ---
        # create an object to store info about Routine fixScreen
        fixScreen = data.Routine(
            name='fixScreen',
            components=[fix_rand],
        )
        fixScreen.status = NOT_STARTED
        continueRoutine = True
        # update component parameters for each repeat
        # store start times for fixScreen
        fixScreen.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
        fixScreen.tStart = globalClock.getTime(format='float')
        fixScreen.status = STARTED
        thisExp.addData('fixScreen.started', fixScreen.tStart)
        fixScreen.maxDuration = None
        # keep track of which components have finished
        fixScreenComponents = fixScreen.components
        for thisComponent in fixScreen.components:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        frameN = -1
        
        # --- Run Routine "fixScreen" ---
        # if trial has changed, end Routine now
        if isinstance(trials, data.TrialHandler2) and thisTrial.thisN != trials.thisTrial.thisN:
            continueRoutine = False
        fixScreen.forceEnded = routineForceEnded = not continueRoutine
        while continueRoutine:
            # get current time
            t = routineTimer.getTime()
            tThisFlip = win.getFutureFlipTime(clock=routineTimer)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *fix_rand* updates
            
            # if fix_rand is starting this frame...
            if fix_rand.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                fix_rand.frameNStart = frameN  # exact frame index
                fix_rand.tStart = t  # local t and not account for scr refresh
                fix_rand.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(fix_rand, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'fix_rand.started')
                # update status
                fix_rand.status = STARTED
                fix_rand.setAutoDraw(True)
            
            # if fix_rand is active this frame...
            if fix_rand.status == STARTED:
                # update params
                pass
            
            # if fix_rand is stopping this frame...
            if fix_rand.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > fix_rand.tStartRefresh + random()+0.3-frameTolerance:
                    # keep track of stop time/frame for later
                    fix_rand.tStop = t  # not accounting for scr refresh
                    fix_rand.tStopRefresh = tThisFlipGlobal  # on global time
                    fix_rand.frameNStop = frameN  # exact frame index
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'fix_rand.stopped')
                    # update status
                    fix_rand.status = FINISHED
                    fix_rand.setAutoDraw(False)
            
            # check for quit (typically the Esc key)
            if defaultKeyboard.getKeys(keyList=["escape"]):
                thisExp.status = FINISHED
            if thisExp.status == FINISHED or endExpNow:
                endExperiment(thisExp, win=win)
                return
            # pause experiment here if requested
            if thisExp.status == PAUSED:
                pauseExperiment(
                    thisExp=thisExp, 
                    win=win, 
                    timers=[routineTimer], 
                    playbackComponents=[]
                )
                # skip the frame we paused on
                continue
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                fixScreen.forceEnded = routineForceEnded = True
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in fixScreen.components:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # --- Ending Routine "fixScreen" ---
        for thisComponent in fixScreen.components:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        # store stop times for fixScreen
        fixScreen.tStop = globalClock.getTime(format='float')
        fixScreen.tStopRefresh = tThisFlipGlobal
        thisExp.addData('fixScreen.stopped', fixScreen.tStop)
        # the Routine "fixScreen" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        
        # --- Prepare to start Routine "trialScreen" ---
        # create an object to store info about Routine trialScreen
        trialScreen = data.Routine(
            name='trialScreen',
            components=[trialText, trialResp],
        )
        trialScreen.status = NOT_STARTED
        continueRoutine = True
        # update component parameters for each repeat
        trialText.setText(target)
        # create starting attributes for trialResp
        trialResp.keys = []
        trialResp.rt = []
        _trialResp_allKeys = []
        # store start times for trialScreen
        trialScreen.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
        trialScreen.tStart = globalClock.getTime(format='float')
        trialScreen.status = STARTED
        thisExp.addData('trialScreen.started', trialScreen.tStart)
        trialScreen.maxDuration = None
        # keep track of which components have finished
        trialScreenComponents = trialScreen.components
        for thisComponent in trialScreen.components:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        frameN = -1
        
        # --- Run Routine "trialScreen" ---
        # if trial has changed, end Routine now
        if isinstance(trials, data.TrialHandler2) and thisTrial.thisN != trials.thisTrial.thisN:
            continueRoutine = False
        trialScreen.forceEnded = routineForceEnded = not continueRoutine
        while continueRoutine:
            # get current time
            t = routineTimer.getTime()
            tThisFlip = win.getFutureFlipTime(clock=routineTimer)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *trialText* updates
            
            # if trialText is starting this frame...
            if trialText.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                trialText.frameNStart = frameN  # exact frame index
                trialText.tStart = t  # local t and not account for scr refresh
                trialText.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(trialText, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'trialText.started')
                # update status
                trialText.status = STARTED
                trialText.setAutoDraw(True)
            
            # if trialText is active this frame...
            if trialText.status == STARTED:
                # update params
                pass
            
            # *trialResp* updates
            waitOnFlip = False
            
            # if trialResp is starting this frame...
            if trialResp.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                trialResp.frameNStart = frameN  # exact frame index
                trialResp.tStart = t  # local t and not account for scr refresh
                trialResp.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(trialResp, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'trialResp.started')
                # update status
                trialResp.status = STARTED
                # keyboard checking is just starting
                waitOnFlip = True
                win.callOnFlip(trialResp.clock.reset)  # t=0 on next screen flip
                win.callOnFlip(trialResp.clearEvents, eventType='keyboard')  # clear events on next screen flip
            if trialResp.status == STARTED and not waitOnFlip:
                theseKeys = trialResp.getKeys(keyList=['f','j'], ignoreKeys=["escape"], waitRelease=False)
                _trialResp_allKeys.extend(theseKeys)
                if len(_trialResp_allKeys):
                    trialResp.keys = _trialResp_allKeys[-1].name  # just the last key pressed
                    trialResp.rt = _trialResp_allKeys[-1].rt
                    trialResp.duration = _trialResp_allKeys[-1].duration
                    # a response ends the routine
                    continueRoutine = False
            
            # check for quit (typically the Esc key)
            if defaultKeyboard.getKeys(keyList=["escape"]):
                thisExp.status = FINISHED
            if thisExp.status == FINISHED or endExpNow:
                endExperiment(thisExp, win=win)
                return
            # pause experiment here if requested
            if thisExp.status == PAUSED:
                pauseExperiment(
                    thisExp=thisExp, 
                    win=win, 
                    timers=[routineTimer], 
                    playbackComponents=[]
                )
                # skip the frame we paused on
                continue
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                trialScreen.forceEnded = routineForceEnded = True
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in trialScreen.components:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # --- Ending Routine "trialScreen" ---
        for thisComponent in trialScreen.components:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        # store stop times for trialScreen
        trialScreen.tStop = globalClock.getTime(format='float')
        trialScreen.tStopRefresh = tThisFlipGlobal
        thisExp.addData('trialScreen.stopped', trialScreen.tStop)
        # check responses
        if trialResp.keys in ['', [], None]:  # No response was made
            trialResp.keys = None
        trials.addData('trialResp.keys',trialResp.keys)
        if trialResp.keys != None:  # we had a response
            trials.addData('trialResp.rt', trialResp.rt)
            trials.addData('trialResp.duration', trialResp.duration)
        # the Routine "trialScreen" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        thisExp.nextEntry()
        
    # completed 1.0 repeats of 'trials'
    
    if thisSession is not None:
        # if running in a Session with a Liaison client, send data up to now
        thisSession.sendExperimentData()
    
    # --- Prepare to start Routine "endScreen" ---
    # create an object to store info about Routine endScreen
    endScreen = data.Routine(
        name='endScreen',
        components=[endText, endResp],
    )
    endScreen.status = NOT_STARTED
    continueRoutine = True
    # update component parameters for each repeat
    # create starting attributes for endResp
    endResp.keys = []
    endResp.rt = []
    _endResp_allKeys = []
    # store start times for endScreen
    endScreen.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
    endScreen.tStart = globalClock.getTime(format='float')
    endScreen.status = STARTED
    thisExp.addData('endScreen.started', endScreen.tStart)
    endScreen.maxDuration = None
    # keep track of which components have finished
    endScreenComponents = endScreen.components
    for thisComponent in endScreen.components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "endScreen" ---
    endScreen.forceEnded = routineForceEnded = not continueRoutine
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *endText* updates
        
        # if endText is starting this frame...
        if endText.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            endText.frameNStart = frameN  # exact frame index
            endText.tStart = t  # local t and not account for scr refresh
            endText.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(endText, 'tStartRefresh')  # time at next scr refresh
            # update status
            endText.status = STARTED
            endText.setAutoDraw(True)
        
        # if endText is active this frame...
        if endText.status == STARTED:
            # update params
            pass
        
        # *endResp* updates
        waitOnFlip = False
        
        # if endResp is starting this frame...
        if endResp.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            endResp.frameNStart = frameN  # exact frame index
            endResp.tStart = t  # local t and not account for scr refresh
            endResp.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(endResp, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'endResp.started')
            # update status
            endResp.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(endResp.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(endResp.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if endResp.status == STARTED and not waitOnFlip:
            theseKeys = endResp.getKeys(keyList=['space'], ignoreKeys=["escape"], waitRelease=False)
            _endResp_allKeys.extend(theseKeys)
            if len(_endResp_allKeys):
                endResp.keys = _endResp_allKeys[0].name  # just the first key pressed
                endResp.rt = _endResp_allKeys[0].rt
                endResp.duration = _endResp_allKeys[0].duration
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if defaultKeyboard.getKeys(keyList=["escape"]):
            thisExp.status = FINISHED
        if thisExp.status == FINISHED or endExpNow:
            endExperiment(thisExp, win=win)
            return
        # pause experiment here if requested
        if thisExp.status == PAUSED:
            pauseExperiment(
                thisExp=thisExp, 
                win=win, 
                timers=[routineTimer], 
                playbackComponents=[]
            )
            # skip the frame we paused on
            continue
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            endScreen.forceEnded = routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in endScreen.components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "endScreen" ---
    for thisComponent in endScreen.components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # store stop times for endScreen
    endScreen.tStop = globalClock.getTime(format='float')
    endScreen.tStopRefresh = tThisFlipGlobal
    thisExp.addData('endScreen.stopped', endScreen.tStop)
    # check responses
    if endResp.keys in ['', [], None]:  # No response was made
        endResp.keys = None
    thisExp.addData('endResp.keys',endResp.keys)
    if endResp.keys != None:  # we had a response
        thisExp.addData('endResp.rt', endResp.rt)
        thisExp.addData('endResp.duration', endResp.duration)
    thisExp.nextEntry()
    # the Routine "endScreen" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # mark experiment as finished
    endExperiment(thisExp, win=win)


def saveData(thisExp):
    """
    Save data from this experiment
    
    Parameters
    ==========
    thisExp : psychopy.data.ExperimentHandler
        Handler object for this experiment, contains the data to save and information about 
        where to save it to.
    """
    filename = thisExp.dataFileName
    # these shouldn't be strictly necessary (should auto-save)
    thisExp.saveAsWideText(filename + '.csv', delim='auto')
    thisExp.saveAsPickle(filename)


def endExperiment(thisExp, win=None):
    """
    End this experiment, performing final shut down operations.
    
    This function does NOT close the window or end the Python process - use `quit` for this.
    
    Parameters
    ==========
    thisExp : psychopy.data.ExperimentHandler
        Handler object for this experiment, contains the data to save and information about 
        where to save it to.
    win : psychopy.visual.Window
        Window for this experiment.
    """
    if win is not None:
        # remove autodraw from all current components
        win.clearAutoDraw()
        # Flip one final time so any remaining win.callOnFlip() 
        # and win.timeOnFlip() tasks get executed
        win.flip()
    # return console logger level to WARNING
    logging.console.setLevel(logging.WARNING)
    # mark experiment handler as finished
    thisExp.status = FINISHED


def quit(thisExp, win=None, thisSession=None):
    """
    Fully quit, closing the window and ending the Python process.
    
    Parameters
    ==========
    win : psychopy.visual.Window
        Window to close.
    thisSession : psychopy.session.Session or None
        Handle of the Session object this experiment is being run from, if any.
    """
    thisExp.abort()  # or data files will save again on exit
    # make sure everything is closed down
    if win is not None:
        # Flip one final time so any remaining win.callOnFlip() 
        # and win.timeOnFlip() tasks get executed before quitting
        win.flip()
        win.close()
    if thisSession is not None:
        thisSession.stop()
    # terminate Python process
    core.quit()


# if running this experiment as a script...
if __name__ == '__main__':
    # call all functions in order
    expInfo = showExpInfoDlg(expInfo=expInfo)
    thisExp = setupData(expInfo=expInfo)
    logFile = setupLogging(filename=thisExp.dataFileName)
    win = setupWindow(expInfo=expInfo)
    setupDevices(expInfo=expInfo, thisExp=thisExp, win=win)
    run(
        expInfo=expInfo, 
        thisExp=thisExp, 
        win=win,
        globalClock='float'
    )
    saveData(thisExp=thisExp)
    quit(thisExp=thisExp, win=win)
