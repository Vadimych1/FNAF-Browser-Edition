{document.addEventListener("keydown", function (e) {
    if (e.code=="KeyP") { // HIDE DEBUG
        showDebug = true;
    }

    if (e.code=="KeyO") { // SHOW DEBUG
        showDebug = false;
    }

    if (e.code=="KeyI") { // RELOAD
        var a = confirm("Game will reload! Continue?")

        if (a) {
            document.cookie = "night=1"
            document.location.reload()
        }
    }

    if (e.code=="Space") {
        camera_on = !camera_on;

        if (camera_on) {
            SOUNDS["camera"]["tablet_on"].play()
            setTimeout(function () {
                camera_tablet_canvas.style.zIndex = 1;
                document.querySelector(".cameras_tablet_hover").style.zIndex = 3;
                switch_frame = 0;
            }, 120)
        } else {
            SOUNDS["camera"]["tablet_off"].play()
            camera_tablet_canvas.style.zIndex = -1;
            document.querySelector(".cameras_tablet_hover").style.zIndex = -3;
        }
    }

    keyspressed[e.code] = true;
})

document.addEventListener("keyup", function (e) {
    keyspressed[e.code] = false;
})// DEBUG
}

let keyspressed = {
    "ArrowLeft": false,
    "ArrowRight": false,
    "KeyF": false,
}

document.addEventListener("mousemove", function (e) {
    if (e.clientX<50) {
        keyspressed["ArrowLeft"]=true;
    } else {
        keyspressed["ArrowLeft"]=false;
    }

    if (e.clientX>window.innerWidth-50) {
        keyspressed["ArrowRight"]=true;
    } else {
        keyspressed["ArrowRight"]=false;
    }
})

document.addEventListener("click", unshowmessage)

$(".cam1")[0].addEventListener("click", function () {
    current_camera = 1;
    console.log(`Switched camera. Current: ${current_camera}`);
})
$(".cam2")[0].addEventListener("click", function () {
    current_camera = 2;
    console.log(`Switched camera. Current: ${current_camera}`);
})
$(".cam3")[0].addEventListener("click", function () {
    current_camera = 3;
    console.log(`Switched camera. Current: ${current_camera}`);
})
$(".cam4")[0].addEventListener("click", function () {
    current_camera = 4;
    console.log(`Switched camera. Current: ${current_camera}`);
})
$(".cam5")[0].addEventListener("click", function () {
    current_camera = 5;
    console.log(`Switched camera. Current: ${current_camera}`);
})
$(".cam6")[0].addEventListener("click", function () {
    current_camera = 6;
    console.log(`Switched camera. Current: ${current_camera}`);
})
$(".cam7")[0].addEventListener("click", function () {
    current_camera = 7;
    console.log(`Switched camera. Current: ${current_camera}`);
})
$(".cam8")[0].addEventListener("click", function () {
    current_camera = 8;
    console.log(`Switched camera. Current: ${current_camera}`);
})
$(".cam9")[0].addEventListener("click", function () {
    current_camera = 9;
    console.log(`Switched camera. Current: ${current_camera}`);
})
$(".cam10")[0].addEventListener("click", function () {
    current_camera = 10;
    console.log(`Switched camera. Current: ${current_camera}`);
})
$(".cam11")[0].addEventListener("click", function () {
    current_camera = 11;
    console.log(`Switched camera. Current: ${current_camera}`);
})
$(".cam12")[0].addEventListener("click", function () {
    current_camera = 12;
    console.log(`Switched camera. Current: ${current_camera}`);
})


window.addEventListener("resize", function () {
    cvs.width = this.window.innerWidth;
    cvs.height = this.window.innerHeight;
})

function unshowmessage() {
    soundsOn = true;
    $(".pressMessage").fadeTo("0.1s", 0)
    $(".pressMessage").remove()
    removeEventListener("click", unshowmessage)
}

var soundsOn = false;

var left_light_on = false;
var right_light_on = false;

var tablet_frame = 0;

var switch_frame = 0;

const cvs = document.querySelector("canvas");
const ctx = cvs.getContext("2d");

cvs.width = window.innerWidth;
cvs.height = window.innerHeight;

const AI_NUMBERS_AT_NIGHTS = [
    // 1
    {
        "old_freddy": [0],
        "old_bonny": [0],
        "old_chicka": [0],
        "foxy": [0],
        "golden_freddy": [0], 
        "toy_freddy": [0, 2], 
        "toy_bonny": [0, 2, 3], 
        "toy_chicka": [0, 2], 
        "mangl": [0], 
        "baloonboy": [0],
        "marionette": [0, 1]
    },

    // 2
    {
        "old_freddy": [0],
        "old_bonny": [0],
        "old_chicka": [0],
        "foxy": [1],
        "golden_freddy": [Math.round(Math.random())], 
        "toy_freddy": [2], 
        "toy_bonny": [3], 
        "toy_chicka": [3], 
        "mangl": [3], 
        "baloonboy": [3],
        "marionette": [5]
    },

    // 3
    {
        "old_freddy": [0, 2],
        "old_bonny": [1, 3],
        "old_chicka": [1, 2],
        "foxy": [2, 3],
        "golden_freddy": [Math.round(Math.random())], 
        "toy_freddy": [0], 
        "toy_bonny": [0, 1], 
        "toy_chicka": [0, 1], 
        "mangl": [0], 
        "baloonboy": [1, 2],
        "marionette": [8]
    },

    // 4
    {
        "old_freddy": [0, 3],
        "old_bonny": [1, 4],
        "old_chicka": [0, 4],
        "foxy": [7],
        "golden_freddy": [Math.round(Math.random())], 
        "toy_freddy": [0], 
        "toy_bonny": [0, 1], 
        "toy_chicka": [0], 
        "mangl": [5], 
        "baloonboy": [3],
        "marionette": [9]
    },

    // 5
    {
        "old_freddy": [2, 5],
        "old_bonny": [2, 5],
        "old_chicka": [2, 5],
        "foxy": [5, 7],
        "golden_freddy": [Math.round(Math.random())], 
        "toy_freddy": [5, 1], 
        "toy_bonny": [2], 
        "toy_chicka": [2], 
        "mangl": [1, 10], 
        "baloonboy": [5],
        "marionette": [10]
    },

    // 6
    {
        "old_freddy": [5, 10],
        "old_bonny": [5, 10],
        "old_chicka": [5, 10],
        "foxy": [10, 15],
        "golden_freddy": [0.1, 3], 
        "toy_freddy": [5], 
        "toy_bonny": [5], 
        "toy_chicka": [5], 
        "mangl": [3, 10], 
        "baloonboy": [9],
        "marionette": [15]
    },
]

const AFTER_ONE_ANIMATRONICS_AT_NIGHTS = [
    [], // First night
    [], // Second night
    [["old_freddy", 1], ["old_bonny", 1], ["old_chicka", 1], ["foxy", 1], ["toy_bonny", 1], ["toy_chicka", 1], ["baloonboy", 1]], // Third night
    [], // Fourth night
    [["old_freddy", 1], ["old_bonny", 1], ["old_chicka", 1], ["foxy", 1], ["toy_freddy", 1], ["mangl", 1]], // Fifth night
    [], // Sixth night
]

const AFTER_TWO_ANIMATRONICS_AT_NIGHTS = [
    [["toy_bonny", 1], ["toy_chicka", 1], ["marionette", 1]], // First night
    [], // Second night
    [], // Third night
    [["old_freddy", 1], ["old_bonny", 1], ["old_chicka", 1], ["toy_bonny", 1]], // Fourth night
    [], // Fifth night
    [["old_freddy", 1], ["old_chicka", 1], ["old_bonny", 1], ["foxy", 1], ["golden_freddy", 1], ["mangl", 1]], // Sixth night
]

const AFTER_THREE_ANIMATRONICS_AT_NIGHTS = [
    [["toy_freddy", 1], ["toy_bonny", 2]], // First night
    [], // Second night
    [], // Third night
    [], // Fourth night
    [], // Fifth night
    [], // Sixth night
]

const POSITIONS = {
    "show_stage": {"canGoTo": ["game_area", "main_hall", "hallway", "party_room4", "party_room2", "party_room1", "party_room3"], "canAnimatronics": ["toy_freddy", "toy_bonny", "toy_chicka"]},
    "prize_corner": {"canGoTo": ["main_hall", ], "canAnimatronics": ["mangl"]},
    "game_area": {"canGoTo": [], "canAnimatronics": ["baloonboy", "toy_freddy", "mangl"]},
    "kids_cove": {"canGoTo": [], "canAnimatronics": ["mangl"]},
    "parts_service": {"canGoTo": ["main_hall", "hallway"], "canAnimatronics": ["old_chicka", "old_bonny", "old_freddy", "foxy"]},
    "main_hall": {"canGoTo": ["party_room1", "party_room2", "party_room3", "party_room4"], "canAnimatronics": ["mangl", "old_bonny", "toy_chicka", "old_freddy"]},
    "party_room1": {"canGoTo": ["left_vent", "hallway"], "canAnimatronics": ["old_bonny", "toy_chicka", "mangl"]},
    "party_room2": {"canGoTo": ["right_vent", "hallway"], "canAnimatronics": ["toy_bonny", "old_ckicka", "mangl"]},
    "party_room3": {"canGoTo": ["hallway"], "canAnimatronics": ["old_freddy", "toy_bonny"]},
    "party_room4": {"canGoTo": ["hallway"], "canAnimatronics": ["toy_bonny", "old_chicka", "toy_chicka"]},
    "left_vent": {"canGoTo": ["party_room1"], "canAnimatronics": ["baloonboy", "toy_chicka", "old_bonny"]},
    "right_vent": {"canGoTo": ["party_room2"], "canAnimatronics": ["toy_bonny", "old_chicka", "mangl"]},
    "hallway": {"canGoTo": [], "canAnimatronics": ["golden_freddy", "foxy", "toy_freddy", "toy_chicka", "old_bonny", "mangl", "old_freddy"]},
}

var ANIMATRONICS = {
    "old_freddy": {
        "position": "spawn",
        "ai_number": 0,
        "can_kill": true,
        "can_now_kill": false,
        "can_be_with_foxy": false
    }, 

    "old_bonny": {
        "position": "spawn",
        "ai_number": 0,
        "can_kill": true,
        "can_now_kill": false,
        "can_be_with_foxy": true
    }, 

    "old_chicka": {
        "position": "spawn",
        "ai_number": 0,
        "can_kill": true,
        "can_now_kill": false,
        "can_be_with_foxy": false
    }, 

    "foxy": {
        "position": "spawn",
        "ai_number": 0,
        "can_kill": true,
        "can_now_kill": false,
        "can_be_with_foxy": true
    }, 

    "golden_freddy": {
        "position": "spawn",
        "ai_number": 0,
        "can_kill": false,
        "can_be_with_foxy": false
    }, 

    "toy_freddy": {
        "position": "spawn",
        "ai_number": 0,
        "can_kill": true,
        "can_now_kill": false,
        "can_be_with_foxy": true
    },

    "toy_bonny": {
        "position": "spawn",
        "ai_number": 0,
        "can_kill": true,
        "can_now_kill": false,
        "can_be_with_foxy": false
    }, 

    "toy_chicka": {
        "position": "spawn",
        "ai_number": 0,
        "can_kill": true,
        "can_now_kill": false,
        "can_be_with_foxy": false
    }, 

    "mangl": {
        "position": "spawn",
        "ai_number": 0,
        "can_kill": true,
        "can_now_kill": false,
        "can_be_with_foxy": true
    },

    "baloonboy": {
        "position": "spawn",
        "ai_number": 0,
        "can_kill": false,
        "can_be_with_foxy": false
    },

    "marionette": {
        "position": "spawn",
        "ai_number": 0,
        "can_kill": true,
        "can_now_kill": false,
        "can_be_with_foxy": true
    },
}

var ANIMATRONICS_NAMES = [
    "old_freddy",
    "old_chicka",
    "old_bonny",
    "toy_freddy",
    "toy_bonny",
    'toy_chicka',
    "golden_freddy",
    "marionette",
    "foxy",
    "mangl",
    "baloonboy"
]

document.querySelectorAll(".cam").forEach(elem => {
    elem.addEventListener("click", function () {
        switch_frame = 0;
    })
})


// ASSETS
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
        "tablet_on": $("#tablet_on")[0],
        "tablet_off": $("#tablet_off")[0],
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

var TEXTURES = {
    "places": {
        "game_area": {
            "baloonboy_dark": $("#game_area_baloonboy_dark")[0],
            "baloonboy_light": $("#game_area_baloonboy_light")[0]
        },

        "kids_cove": {
            "mangl_light": $("#kids_cove_mangl_light")[0],
            "none_dark": $("#kids_cove_none_dark")[0],
            "none_light": $("#kids_cove_none_light")[0]
        },

        "left_vent": {
            "none_dark": $("#left_vent_none_dark")[0],
            "none_light": $("#left_vent_none_light")[0],
        },

        "main_hall": {
            "none_dark": $("#main_hall_none_dark")[0],
            "none_light": $("#main_hall_none_light")[0],
            "old_bonny_light": $("#main_hall_old_bonny_light")[0],
            "old_freddy_light": $("#main_hall_old_freddy_light")[0],
        },

        "main_room": {
            "normal_hall_light": document.querySelector("#main_room_normal_hall_light"),
            "normal_left_light": document.querySelector("#main_room_normal_left_light"),
            "normal_right_light": document.querySelector("#main_room_normal_right_light"),
            "default": document.querySelector("#main_room_default"),

            "baloonboy_left_light": $("#main_room_baloonboy_left_light")[0],

            "foxy_and_old_bonny_hall_light": $("#main_room_foxe_and_old_bonny_hall_light")[0],
            "foxy_hall_light": $("#main_room_foxy_hall_light")[0],

            "golden_freddy_hall_light": $("#main_room_golden_freddy_hall_light")[0],

            "mangl_and_foxy_hall_light": $("#main_room_mangl_and_foxy_hall_light")[0],
            "mangl_hall_light": $("#main_room_mangl_hall_light")[0],
            "mangl_right_light": $("#main_room_mangl_right_light")[0],

            "old_bonny_center": $("#main_room_old_bonny_center")[0],
            "old_bonny_hall_light": $("#main_room_old_bonny_hall_light")[0],
            "old_chicka_center": $("#main_room_old_chicka_center")[0],
            "old_freddy_hall_light": $("#main_room_old_freddy_hall_light")[0],

            "toy_bonny_right_light": $("#main_room_toy_bonny_right_light")[0],
            "toy_chicka_hall_light": $("#main_room_toy_chicka_hall_light")[0],
            "toy_chicka_left_light": $("#main_room_toy_chicka_left_light")[0],
            "toy_freddy_hall_middle_light": $("#main_room_toy_freddy_hall_middle_light")[0],
            "toy_freddy_hall_near_light": $("#main_room_toy_freddy_hall_near_light")[0]
        },

        "parts_service": {
            "all_light": $("#parts_service_all_light")[0],
            "foxy_light": $("#parts_service_foxy_light")[0],
            "none_light": $("#parts_service_none_light")[0],
            "old_freddy_light": $("#parts_service_old_freddy_light")[0],
            "shadow_freddy_light": $("#parts_service_shadow_freddy")[0],
            "none_dark": $("#parts_service_none_dark")[0],
            "old_chicka_and_old_freddy_light": $("#parts_service_old_chicka_and_old_freddy_light")[0],
        },

        "party_room_1": {
            "none_dark": $("#party_room1_none_dark")[0],
            "none_light": $("#party_room1_none_light")[0],
            "old_bonny_light": $("#party_room1_old_bonny_light")[0],
        },

        "party_room_2": {
            "none_dark": $("#party_room2_none_dark")[0],
            "none_light": $("#party_room2_none_light")[0],
            "old_chicka_dark": $("#party_room2_old_chicka_dark")[0],
            "old_chicka_light": $("#party_room2_old_chicka_light")[0],
            "toy_bonny_light": $("#party_room2_toy_bonny_light")[0],
        },

        "party_room_3": {
            "none_dark": $("#party_room3_none_dark")[0],
            "none_light": $("#party_room3_none_light")[0],
            "old_freddy_dark": $("#party_room3_old_freddy_dark")[0],
            "old_freddy_light": $("#party_room3_old_freddy_light")[0],
            "toy_bonny_light": $("#party_room3_toy_bonny_light")[0],
        },

        "party_room_4": {
            "none_dark": $("#party_room4_none_dark")[0],
            "none_light": $("#party_room4_none_light")[0],
            "old_chicka_light": $("#party_room4_old_chicka_light")[0],
            "toy_bonny_dark": $("#party_room4_toy_bonny_dark")[0],
            "toy_bonny_light": $("#party_room4_toy_bonny_light")[0],
            "toy_chicka_light": $("#party_room4_toy_chicka_light")[0],
        },

        "prize_corner": {
            "box_opened_light": $("#prize_corner_box_opened_light")[0],
            "marionette_stage1_light": $("#prize_corner_marionette_stage1_light")[0],
            "marionette_stage2_light": $("#prize_corner_marionette_stage2_light")[0],
            "none_dark": $("#prize_corner_none_dark")[0],
            "none_light": $("#prize_corner_none_light")[0],
        },

        "right_vent": {
            "mangl_light": $("#right_vent_mangl_light")[0],
            "none_dark": $("#right_vent_none_dark")[0],
            "none_light": $("#right_vent_none_light")[0],
            "old_chicka_light": $("#right_vent_old_chicka_light")[0],
            "toy_bonny_light": $("#right_vent_toy_bonny_light")[0],
        },

        "show_stage": {
            "all_dark": $("#show_stage_all_dark")[0],
            "all_light": $("#show_stage_all_light")[0],
            "toy_freddy_and_toy_chicka_light": $("#show_stage_toy_freddy_and_toy_chicka_light")[0],
            "toy_freddy_and_toy_chicka_dark": $("#show_stage_toy_freddy_and_toy_chicka_light")[0],
            "freddy_dark": $("#show_stage_toy_freddy_dark")[0],
            "freddy_light": $("#show_stage_toy_freddy_light")[0],
        }
    },

    "camera": {
        "decor": {
            "map": document.querySelector("#cam_map"),
        },

        "switch_animation": getAnimationFrames("switch_animation", 6),

        "pull_animation": getAnimationFrames("tablet_pull_animation", 11),

        "texts": {
            "numbers": getAnimationFrames("cam_number_", 13),
            "texts": {},

            "active": document.querySelector("#active_camera"),
            "not_active": document.querySelector("#not_active_camera"),
        },
        "grayscale": getAnimationFrames("grayscale", 12),
    },

    "table": getAnimationFrames("table", 5),

    "light_buttons": {
        "left_on": document.querySelector("#light_left_on"),
        "left_off": document.querySelector("#light_left_off"),
        "right_on": document.querySelector("#light_right_on"),
        "right_off": document.querySelector("#light_right_off"),
    },

    "battery": getAnimationFrames("battery", 5),
}

var CURRENT_SOUNDS = {
    "hall": false,
    "fan": true,
    "scary_ambient": false,
    "buzzlight": true,
    "marionette": false,
    "mangl": false,
    "music_box": false,
}

var CAMERAS = [
    {
    "texture": TEXTURES["places"]["main_room"]["default"], 
    "left_vent_texture": TEXTURES["places"]["main_room"]["normal_left_light"], 
    "right_vent_texture": TEXTURES["places"]["main_room"]["normal_right_light"],
    "hall_texture": TEXTURES["places"]["main_room"]["normal_hall_light"],
    },

    {
    "dark_texture": TEXTURES["places"]["party_room_1"]["none_dark"], 
    "light_texture": TEXTURES["places"]["party_room_1"]["none_light"],
    "offset": Math.trunc(Math.random()*200),
    },

    {
    "dark_texture": TEXTURES["places"]["party_room_2"]["none_dark"], 
    "light_texture": TEXTURES["places"]["party_room_2"]["none_light"],
    "offset": Math.trunc(Math.random()*200),
    },

    {
    "dark_texture": TEXTURES["places"]["party_room_3"]["none_dark"], 
    "light_texture": TEXTURES["places"]["party_room_3"]["none_light"],
    "offset": Math.trunc(Math.random()*200),
    },

    {
    "dark_texture": TEXTURES["places"]["party_room_4"]["none_dark"], 
    "light_texture": TEXTURES["places"]["party_room_4"]["none_light"],
    "offset": Math.trunc(Math.random()*200),
    },

    {
    "dark_texture": TEXTURES["places"]["left_vent"]["none_dark"], 
    "light_texture": TEXTURES["places"]["left_vent"]["none_light"],
    "offset": Math.trunc(Math.random()*200),
    },

    {
    "dark_texture": TEXTURES["places"]["right_vent"]["none_dark"], 
    "light_texture": TEXTURES["places"]["right_vent"]["none_light"],
    "offset": Math.trunc(Math.random()*200),
    },

    {
    "dark_texture": TEXTURES["places"]["main_hall"]["none_dark"], 
    "light_texture": TEXTURES["places"]["main_hall"]["none_light"],
    "offset": Math.trunc(Math.random()*200),
    },

    {
    "dark_texture": TEXTURES["places"]["parts_service"]["none_dark"], 
    "light_texture": TEXTURES["places"]["parts_service"]["all_light"],
    "offset": Math.trunc(Math.random()*200),
    },

    {
    "dark_texture": TEXTURES["places"]["show_stage"]["all_dark"], 
    "light_texture": TEXTURES["places"]["show_stage"]["all_light"],
    "offset": Math.trunc(Math.random()*200),
    },

    {
    "dark_texture": TEXTURES["places"]["game_area"]["baloonboy_dark"], 
    "light_texture": TEXTURES["places"]["game_area"]["baloonboy_light"],
    "offset": Math.trunc(Math.random()*200),
    },

    {
    "dark_texture": TEXTURES["places"]["prize_corner"]["none_dark"], 
    "light_texture": TEXTURES["places"]["prize_corner"]["none_light"],
    "offset": Math.trunc(Math.random()*200),
    },

    {
    "dark_texture": TEXTURES["places"]["kids_cove"]["none_dark"], 
    "light_texture": TEXTURES["places"]["kids_cove"]["mangl_light"],
    "offset": Math.trunc(Math.random()*200),
    },
]

var CAMERAS_HITBOXES = [
    document.querySelector(".cam1"),
    document.querySelector(".cam2"),
    document.querySelector(".cam3"),
    document.querySelector(".cam4"),
    document.querySelector(".cam5"),
    document.querySelector(".cam6"),
    document.querySelector(".cam7"),
    document.querySelector(".cam8"),
    document.querySelector(".cam9"),
    document.querySelector(".cam10"),
    document.querySelector(".cam11"),
    document.querySelector(".cam12"),
]

// GAME

// init
{
    var cookieNight = getCookie("night")
    var night = cookieNight ? cookieNight : 1;
    console.log("Night "+night);
    
    var camera_on = false;
    var time = 0;
    var tickTime = 0;
    var musicBoxLoad = 100;
    var curNight = AI_NUMBERS_AT_NIGHTS[night-1];
    var nightSurvived = false;
    var showDebug = false;
    var debugMessage = "";
    var current_camera = 1;
    var mainroom_xoffset = 100;
    var tabletick = 0;
    var D = 0;
    var battery_energy = 100;
}

const hourlen = 15; // DEFAULT VALUE - 15

const camera_tablet_canvas = document.querySelector("#camera_tablet");
camera_tablet_canvas.width = window.innerWidth;
camera_tablet_canvas.height = window.innerHeight;

const camera_tablet = camera_tablet_canvas.getContext("2d");

let call_played = false;

ANIMATRONICS_NAMES.forEach(anim => {
        ANIMATRONICS[anim]["ai_number"] = curNight[anim][0];
})

function getCookie(name) {
    var matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : null;
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getAnimationFrames(classname, framesNum) {
    var frames = [];

    var i = 0;

    while (i<framesNum) {
        let elem = document.querySelector("#"+classname+i);
        if (elem!=null) {
            frames.push(elem);
            i+=1;
        } else {
            i+=1;
        }
    }

    return frames;
}   

document.querySelector(".light1").addEventListener("mouseenter", function (e) {
    left_light_on = true;
})

document.querySelector(".light1").addEventListener("mouseleave", function (e) {
    left_light_on = false;
})

document.querySelector(".light2").addEventListener("mouseenter", function (e) {
    right_light_on = true;
})

document.querySelector(".light2").addEventListener("mouseleave", function (e) {
    right_light_on = false;
})

// main

// TICKS
var tick = setInterval(function () {
    tickTime+=1;
    if (tickTime%hourlen==0) {
        time+=1;
    }

    if (time==1) {
        AFTER_ONE_ANIMATRONICS_AT_NIGHTS[night-1].forEach(z => {
            var anim = z[0];
            var loc = z[1];

            ANIMATRONICS[anim]["ai_number"] = curNight[anim][loc]
        })
    }

    if (time==2) {
        AFTER_TWO_ANIMATRONICS_AT_NIGHTS[night-1].forEach(z => {
            var anim = z[0];
            var loc = z[1];

            ANIMATRONICS[anim]["ai_number"] = curNight[anim][loc]
        })
    }

    if (time==3) {
        AFTER_THREE_ANIMATRONICS_AT_NIGHTS[night-1].forEach(z => {
            var anim = z[0];
            var loc = z[1];

            ANIMATRONICS[anim]["ai_number"] = curNight[anim][loc]
        })
    }

    ANIMATRONICS_NAMES.forEach(aName => {
        if (aName!="marionette"&&aName!="foxy"){
            var randainum = getRandomInt(1, 20);
            var curainum = ANIMATRONICS[aName]["ai_number"]

            if (randainum <= curainum) {
                debugMessage = ""
                debugMessage += "Moved "+aName;

                // MOVE
            }
        } else {
            if (aName=="foxy") {
                var move = ((21+getRandomInt(1, 5))-D)<=ANIMATRONICS["foxy"]["ai_number"];
                if (move) {
                    // FOXY MOVE
                    debugMessage = ""
                    debugMessage+="Moved foxy"
                }
            }
        };
    })

    if (time==6) {
        if (night!=6) {
            nightSurvived = true;
            document.cookie = `night=${Number(night)+1}`

            SOUNDS.ambient.night_end.play()

            setTimeout(function () {
                SOUNDS.ambient.yey.play()
            }, 1000)

            setTimeout(function () {
                document.location.reload()
            }, 14000)
        } else {
            nightSurvived = true;
            document.cookie = "night=1"
            document.cookie = "survivedAll=true"

            SOUNDS.ambient.night_end.play()

            setTimeout(function () {
                SOUNDS.ambient.yey.play()
            }, 1000)

            setTimeout(function () {
                document.location.replace("./")
            }, 14000)
        }
    }
}, 5000);

var marionette_tick = setInterval(function () {
    musicBoxLoad-=0.5*ANIMATRONICS["marionette"]["ai_number"];
    musicBoxLoad = Math.trunc(musicBoxLoad*10)/10;
}, 1000)


// DRAWS
function draw() {
    requestAnimationFrame(draw);

    if ((keyspressed["KeyF"] || left_light_on || right_light_on) && battery_energy>0) {
        battery_energy-=0.03;
    }

    if (!camera_on) {
        // camera_tablet_canvas.style.zIndex = -1;
        // document.querySelector(".cameras_tablet_hover").style.zIndex = -2;

        ctx.clearRect(0, 0, cvs.width, cvs.height);
        ctx.fillStyle = "white";
        ctx.font = "bold 40px sans-serif";
        
        if (!left_light_on && !right_light_on && !keyspressed["KeyF"]) {
            ctx.drawImage(CAMERAS[0]["texture"], 0-mainroom_xoffset, 0, window.innerWidth+200, window.innerHeight);
        } else if (right_light_on) {
            ctx.drawImage(CAMERAS[0]["right_vent_texture"], 0-mainroom_xoffset, 0, window.innerWidth+200, window.innerHeight);
        } else if (left_light_on){
            ctx.drawImage(CAMERAS[0]["left_vent_texture"], 0-mainroom_xoffset, 0, window.innerWidth+200, window.innerHeight);
        } else {
            ctx.drawImage(CAMERAS[0]["hall_texture"], 0-mainroom_xoffset, 0, window.innerWidth+200, window.innerHeight);
        }
        
        ctx.drawImage(TEXTURES["table"][tabletick], (window.innerWidth/2-TEXTURES["table"][tabletick].width/2)+120-mainroom_xoffset, window.innerHeight-TEXTURES["table"][tabletick].height)

        if (tabletick==3) {
            tabletick = 0;
        } else {
            tabletick += 1;
        }

        if (left_light_on) {
            ctx.drawImage(TEXTURES["light_buttons"]["left_on"], 100-mainroom_xoffset, 370);
        } else {
            ctx.drawImage(TEXTURES["light_buttons"]["left_off"], 100-mainroom_xoffset, 370);
        }

        if (right_light_on) {
            ctx.drawImage(TEXTURES["light_buttons"]["right_on"], window.innerWidth+20-mainroom_xoffset, 370)
        } else {
            ctx.drawImage(TEXTURES["light_buttons"]["right_off"], window.innerWidth+20-mainroom_xoffset, 370)
        }
        
        document.querySelector(".light1").style.left = (100-mainroom_xoffset)+"px";
        document.querySelector(".light2").style.left = (window.innerWidth+20-mainroom_xoffset)+"px";

        var curTime;

        if (time==0) {
            curTime="NIGHT "+night+"  12 PM";
        } else {
            curTime = "NIGHT "+night+"  "+time+" AM";
        }

        if (battery_energy/25 > 3) {
            ctx.drawImage(TEXTURES["battery"][4], 50, 50)
        } else if (battery_energy/25 > 2) {
            ctx.drawImage(TEXTURES["battery"][3], 50, 50)
        } else if (battery_energy/25 > 1) {
            ctx.drawImage(TEXTURES["battery"][2], 50, 50)
        } else if (battery_energy/25 > 0) {
            ctx.drawImage(TEXTURES["battery"][1], 50, 50)
        } else {
            ctx.drawImage(TEXTURES["battery"][0], 50, 50)
        }

        ctx.fillText(curTime, cvs.width-400, 70);
    } else if (tablet_frame==10){
        camera_tablet.clearRect(0, 0, camera_tablet_canvas.width, camera_tablet_canvas.height);
        camera_tablet.fillStyle = "white";
        camera_tablet.font = "bold 40px sans-serif";

        // texture
        if (keyspressed["KeyF"]) {
            camera_tablet.drawImage(CAMERAS[current_camera]["light_texture"], -100, 0, window.innerWidth+200, window.innerHeight)
        } else {
            camera_tablet.drawImage(CAMERAS[current_camera]["dark_texture"], -100, 0, window.innerWidth+200, window.innerHeight)
        }
        
        // map
        camera_tablet.drawImage(
            TEXTURES["camera"]["decor"]["map"], 
            window.innerWidth-TEXTURES["camera"]["decor"]["map"].width-30, 
            window.innerHeight-TEXTURES["camera"]["decor"]["map"].height-30,
        ) 
        
        let cameras_offsets = [
            [22, 170, 0, 0],
            [157, 170, 0, 0],
            [20, 100, 0, 0],
            [155, 100, 0, 0],
            [25, 255, 0, 0],
            [150, 255, 0, 0],
            [175, 40, 0, 0],
            [22, 30, 0, 0],
            [335, 0, 6, 0],
            [265, 115, 0, 0],
            [370, 80, 0, 0],
            [350, 165, 0, 0],
        ];

        let i = 0
        while (i<TEXTURES["camera"]["texts"]["numbers"].length) {
            if (current_camera-1==i) {
                camera_tablet.drawImage(
                TEXTURES["camera"]["texts"]["active"],
                window.innerWidth-TEXTURES["camera"]["decor"]["map"].width+cameras_offsets[i][0]-20, 
                window.innerHeight-TEXTURES["camera"]["decor"]["map"].height+cameras_offsets[i][1]-5,
                )
            } else {
                camera_tablet.drawImage(
                TEXTURES["camera"]["texts"]["not_active"],
                window.innerWidth-TEXTURES["camera"]["decor"]["map"].width+cameras_offsets[i][0]-25, 
                window.innerHeight-TEXTURES["camera"]["decor"]["map"].height+cameras_offsets[i][1]-5,
                )
            }

            camera_tablet.drawImage(
                TEXTURES["camera"]["texts"]["numbers"][i], 
                window.innerWidth-TEXTURES["camera"]["decor"]["map"].width+cameras_offsets[i][0]+cameras_offsets[i][2], 
                window.innerHeight-TEXTURES["camera"]["decor"]["map"].height+cameras_offsets[i][1]+cameras_offsets[i][3],
            )

            document.querySelector(".cam"+(i+1)).style.left = window.innerWidth-TEXTURES["camera"]["decor"]["map"].width+cameras_offsets[i][0]-20;
            document.querySelector(".cam"+(i+1)).style.top = window.innerHeight-TEXTURES["camera"]["decor"]["map"].height+cameras_offsets[i][1]-5;
            i+=1
        }

        // TIME
        var curTime;

        if (time==0) {
            curTime="12 PM";
        } else {
            curTime = " "+time+" AM";
        }

        camera_tablet.fillText(curTime, camera_tablet_canvas.width-200, 70);
        
        // Помехи
        if (switch_frame<=4) {
            camera_tablet.drawImage(TEXTURES["camera"]["switch_animation"][switch_frame], 0, 0, window.innerWidth, window.innerHeight)
            switch_frame+=1;
        }
    }

    if (camera_on && tablet_frame<10) {
        ctx.drawImage(TEXTURES.camera.pull_animation[Math.trunc(tablet_frame)], 0, 0, window.innerWidth, window.innerHeight),
        tablet_frame+=1
    } else if (!camera_on && tablet_frame>1) {
        ctx.drawImage(TEXTURES.camera.pull_animation[Math.trunc(tablet_frame)], 0, 0, window.innerWidth, window.innerHeight),
        tablet_frame-=1;

        camera_tablet_canvas.style.zIndex = -1;
        document.querySelector(".cameras_tablet_hover").style.zIndex = -2;
    }

    if (nightSurvived) {
        camera_tablet_canvas.zIndex = -5;
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, cvs.width, cvs.height)

        ctx.fillStyle = "white";
        ctx.fillText("6 AM", cvs.width/2-100, cvs.height/2-5);
    }

    // SOUNDS BLOCK START
    if (soundsOn) {
        if (left_light_on || right_light_on) {
            CURRENT_SOUNDS["buzzlight"]=true;
        } else {
            CURRENT_SOUNDS["buzzlight"]=false;
        }

        if (CURRENT_SOUNDS["scary_ambient"]) {
            SOUNDS["ambient"]["ambient1"].play()
        } else {
            SOUNDS["ambient"]["ambient1"].pause()
        }

        if (CURRENT_SOUNDS["fan"]) {
            SOUNDS["ambient"]["fan"].play()
        } else {
            SOUNDS["ambient"]["fan"].pause()
        }
        
        if (CURRENT_SOUNDS["buzzlight"]) {
            SOUNDS["ambient"]["buzzlight"].play()
        } else {
            SOUNDS["ambient"]["buzzlight"].pause()
        }

        if (CURRENT_SOUNDS["hall"]) {
            SOUNDS["animatronics"]["hallway"].play()
        } else {
            SOUNDS["animatronics"]["hallway"].pause()
        }

        if (!call_played) {
            SOUNDS["calls"]["calls"][night-1].play()
            call_played = true;
        }
    }
    // SOUNDS BLOCK END

    if (keyspressed["ArrowLeft"] && mainroom_xoffset>0) {
        mainroom_xoffset-=10;
    }

    if (keyspressed["ArrowRight"] && mainroom_xoffset<200) {
        mainroom_xoffset+=10;
    }   

    if (showDebug) {
        drawDebug();
    }
}

function drawDebug() {
    offsetX = -80;
    offsetY = -100;

    ctx.fillStyle = "white";
    ctx.font = "20px sans-serif";

    ctx.fillText(`TickTime: ${tickTime}`, 100+offsetX, 400+offsetY);
    var x = 0;
    var y = 0;

    ANIMATRONICS_NAMES.forEach(name => {
        ctx.fillText(`${name}: ${ANIMATRONICS[name]["ai_number"]}`, 100+x+offsetX, 450+y+offsetY);
        y+=30;

        if (y==90) {
            x+=160;
            y=0;
        }
    })
    ctx.fillText("Music box load: "+musicBoxLoad, 100+offsetX, 570+offsetY)

    ctx.fillText("Animatronics info:", 100+offsetX, 600+offsetY)
    ctx.fillText(debugMessage, 100+offsetX, 620+offsetY)
} // DEBUG

requestAnimationFrame(draw);