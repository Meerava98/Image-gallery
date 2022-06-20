var element_interval;
function resize_function(){
    if ($(window).width() < 576) {
        element_interval = 1;
    }else if ($(window).width() < 768){
        element_interval = 2;
    }else if ($(window).width() < 992){
        element_interval = 3;
    }else if ($(window).width() < 1200){
        element_interval = 5;
    }else { element_interval = 9; }    
}


$(window).resize(function(){
    resize_function();
})  

    
$(document).keydown(function(event) {
    var z = document.getElementsByClassName("selected");
    
    if (event.shiftKey) {
        switch(event.which) {
            case 37:
                var z = document.getElementsByClassName("selected");
                var l = z.length;
                if( (l-1) > 0){
                $(z[l - 1]).removeClass("selected");
                 }
                // console.log(z);
                break;
            case 39:
                // console.log(z);
                $(z).addClass("selected");
                $(z).next().addClass("selected");
                // $(z).prev().addClass("selected");
                break;
        }   
    } else {
    
var a = document.getElementsByClassName("selected");

var all_elements = document.getElementsByClassName("img_class");
var length_elements = (all_elements.length);    
    
    switch (event.keyCode) {
        case 37:
            // left 
            var b = document.getElementsByClassName("first");
            var a = document.getElementsByClassName("selected");
            var c = ( a[0] == b[0] ) ? "true" : "false";
            // console.log(c);
            if( c == "true" )
               {          
                $(a).removeClass("selected");
                $('#parent div:last').addClass("selected");
               }  
               else{
                $(a).removeClass("selected").prev().addClass("selected");
               }             
            break;
        case 38:
            // up 
            var a = document.getElementsByClassName("selected");
            var element_index = $('.selected').index();
            // console.log(element_index);
            var current_index = element_index - element_interval;
            if( current_index < 0){
                var x = all_elements[0];
            }
            else{
                var x = all_elements[current_index];
                $(a).removeClass("selected");
                $(x).addClass("selected");
            }            
            break;  
        case 39:      
        // right        
            var b = document.getElementsByClassName("last");
            var a = document.getElementsByClassName("selected");
            var c = ( a[0] == b[0] ) ? "true" : "false";
            // console.log(c);
            if( c == "true" )
               {          
                $(a).removeClass("selected");
                $('#parent div:first').addClass("selected");
               }  
               else{
                $(a).removeClass("selected").next().addClass("selected");
               }             
            break;
        case 40: 
        // down
        var a = document.getElementsByClassName("selected");
        var element_index = $('.selected').index();
        // console.log(element_index);
        var current_index = element_index + element_interval;
        // console.log(current_index);
        if( current_index >= length_elements){
            var x = all_elements[length_elements];
        }
        else{
            var x = all_elements[current_index];
            $(a).removeClass("selected");
            $(x).addClass("selected");
        }        
        break;    
    }
}
});






 