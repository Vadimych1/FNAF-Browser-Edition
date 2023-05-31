var SOUNDS = {
    "ambient": {
        "ambient1": document.querySelector("#ambient1"),
        "blip": document.querySelector("#blip"),
        "buzzlight": document.querySelector("#buzzlight"),
        "fan": document.querySelector("#fan"),
        "night_end": document.querySelector("#night_end"),
        "yey": document.querySelector("#yey"),
    },

    "animatronics": {
        "scream": document.querySelector("#scream"),
        "hallway": document.querySelector("#hallway"),
        "mangl": document.querySelector("#mangl"),
        "marionette": document.querySelector("#marionette_killing"),
        "metalrun": document.querySelector("#metalrun"),
        "metalwalk": [
            document.querySelector("#metalwalk1"),
            document.querySelector("#metalwalk2"),
            document.querySelector("#metalwalk3"),
        ],
        "music_box": document.querySelector("#music_box"),
        "ventwalk": document.querySelector("#ventwalk"),
        "walk": [
            document.querySelector("#walk1"),
            document.querySelector("#walk2"),
            document.querySelector("#walk3"),
            document.querySelector("#walk4"),
            document.querySelector("#walk5"),
        ]
    },

    "baloonboy": {
        "hello": document.querySelector("#hello"),
        "hi": document.querySelector("#hi"),
        "laugh": document.querySelector("#laugh"),
    },

    "calls": {
        "calls": [
            document.querySelector("#call1"),
            document.querySelector("#call2"),
            document.querySelector("#call3"),
            document.querySelector("#call4"),
            document.querySelector("#call5"),
            document.querySelector("#call6"),
        ]
    },

    "camera": {
        "glitch": document.querySelector("#camera_glitch"),
        "monitor_pull": document.querySelector("#monitor_pullup"),
        "stare": document.querySelector("#stare"),
        "static": document.querySelector("#static"),
    },

    "flashlight": {
        "error": document.querySelector("#error"),
        "flashlight": document.querySelector("#flashlight"),
    },

    "mask": {
        "mask_pulldown": document.querySelector("#mask_pulldown"),
        "mask": document.querySelector("#mask"),
        "mask_pullup": document.querySelector("#mask_pullup"),
    },
}

SOUNDS["ambient"]["fan"].addEventListener('timeupdate', function(){
    var buffer = .50
    if(this.currentTime > this.duration - buffer){
        this.currentTime = 0
        this.play()
    }
});

SOUNDS["mask"]["mask"].addEventListener('timeupdate', function(){
    var buffer = .50
    if(this.currentTime > this.duration - buffer){
        this.currentTime = 0
        this.play()
    }
});

SOUNDS["ambient"]["buzzlight"].addEventListener('timeupdate', function(){
    var buffer = .50
    if(this.currentTime > this.duration - buffer){
        this.currentTime = 0
        this.play()
    }
});

SOUNDS["ambient"]["ambient1"].addEventListener('timeupdate', function(){
    var buffer = .50
    if(this.currentTime > this.duration - buffer){
        this.currentTime = 0
        this.play()
    }
});

hallway_buffer_offset = 0
SOUNDS["animatronics"]["hallway"].addEventListener('timeupdate', function(){
    var buffer = .4121+hallway_buffer_offset
    if(this.currentTime > this.duration - buffer){
        this.currentTime = 0
        this.play()
        hallway_buffer_offset+=.00005
    }
});

SOUNDS["animatronics"]["marionette"].addEventListener('timeupdate', function(){
    var buffer = .50
    if(this.currentTime > this.duration - buffer){
        this.currentTime = 0
        this.play()
    }
});

SOUNDS["animatronics"]["music_box"].addEventListener('timeupdate', function(){
    var buffer = .50
    if(this.currentTime > this.duration - buffer){
        this.currentTime = 0
        this.play()
    }
});

SOUNDS["animatronics"]["mangl"].addEventListener('timeupdate', function(){
    var buffer = .50
    if(this.currentTime > this.duration - buffer){
        this.currentTime = 0
        this.play()
    }
});