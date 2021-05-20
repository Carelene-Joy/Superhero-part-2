var canvas = new fabric.Canvas ("mycanvas")
var playerx = 10
var playery = 10
var blockwidth = 30
var blockheight = 30
var playerobject = ""
var blockobject = ''

function player () {
    // from URL contains 2 arguments-1.Pic url 2. Function (Img) is used to upload that image in canvas
    // (Img)- is the object for the image set by default
    // the object (Img) is assigned to playerobject variable.
    fabric.Image.fromURL ("player.png", function (Img) {
    playerobject=Img
    playerobject.scaleToWidth (150)
    playerobject.scaleToHeight (150)
    playerobject.set ({
        top:playery,
        left:playerx
    })
    canvas.add (playerobject)
    } 
    )

}

function superhero (blockname) {
fabric.Image.fromURL  (blockname, function (Img) {
    blockobject=Img
    blockobject.scaleToWidth (blockwidth)
    blockobject.scaleToHeight (blockheight)
    blockobject.set ({
        top:playery,
        left:playerx
    })
    canvas.add (blockobject)

})
}
window.addEventListener("keydown", kd)

function kd (e) {
    keypress=e.keyCode
    console.log (keypress)
    if ( keypress== "73") {//i
        blockwidth+=10
        blockheight+=10
        document.getElementById ("cw").innerHTML=blockwidth
        document.getElementById ("ch").innerHTML=blockheight
    }
    if ( keypress== "83") {//s
        blockwidth-=10
        blockheight-=10
        document.getElementById ("cw").innerHTML=blockwidth
        document.getElementById ("ch").innerHTML=blockheight
    }
    if ( keypress== "38") {
        up()
    } 
    if ( keypress== "40") {
        down()
    } 
    if ( keypress== "37") {
        left()
    } 
    if ( keypress== "39") {
        right()
    } 

    
    if ( keypress== "82") {
        superhero ("righthand.png")
    }  

    if ( keypress== "70") {
        superhero ("face.png")

    }  
    
    if ( keypress== "75") {
        superhero ("hulk_knees.png")
    }
    
    if ( keypress== "66") {
        superhero ("ironman_body.png")
    } 
    
    if ( keypress== "76") {
        superhero ("thor_left_hand.png")
    } 
    if ( keypress== "8") {//backspace
        canvas.remove(canvas.getActiveObject())
    } 
    
    
}

function up () {
    if (playery>0) {
        playery=playery-30
        player ()
        canvas.remove (playerobject)
    }
}

function down () {
    if (playery<450) {
        playery=playery+30
        player ()
        canvas.remove (playerobject)
    }
}

function left () {
    if (playerx>=0) {
        playerx=playerx-30
        player ()
        canvas.remove (playerobject)
    }
}

function right () {
    if (playerx<650) {
        playerx=playerx+30
        player ()
        canvas.remove (playerobject)
    }
}