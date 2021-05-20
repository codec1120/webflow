const default_main_color_rgb = jQuery('.main-color-identifier').css('background-color'),
    default_secondary_color_rgb = jQuery('.secondary-color-identifier').css('background-color');


// Append Color Scheme Picker
const color_scheme_picker_element = ` <div class="color-scheme-icon pointer"  onclick="displayColorSchemeSelector()" >
        <div class="row">
        <div class="column">
            <div class="card">
            <img src="libraries/images/sound-module-line.png">
            </div>
        </div>
        </div>
        </div>
        <div class="row color-scheme-picker pointer" >
        <div class="column">
        <div class="card card-title">
            <h4>Choose Color Scheme</h4>
        </div>
        <div class="card card-body">
            <button class="btn color-scheme-btn" onclick="changeColor('#DD9B2A', '#141B25')"><i class="fas fa-circle gold-navy"></i> <span>GOLD AND NAVY BLUE</span></button>
            <button class="btn color-scheme-btn" onclick="changeColor('#8A0814', 'black')"><i class="fas fa-circle red-black"></i> <span>RED AND BLACK</span></button>
            <button class="btn color-scheme-btn" onclick="changeColor('#7CBA19', 'black')"><i class="fas fa-circle green-black"></i> <span>GREEN AND BLACK</span></button>
            <div>
            <input type="color" id="main-color" value="#ffffff" onchange="customColor()">
            <input type="color" id="secondary-color" value="#ffffff" onchange="customColor()">
            <span>Custom</span>
            </div>
        </div>
        <div class="card card-footer">
            <button class="btn card-footer-close-btn-reset" onclick="resetColor()">
            <span>Reset</span>
            </button>
            <button class="btn card-footer-close-btn-close" onclick="hideColorSchemePicker()">
            <span>Close</span>
            </button>
        </div>
        </div>
        </div>`;
jQuery('body').append(color_scheme_picker_element);
// End Here


function displayColorSchemeSelector () 
{
    // Hide Icon
   const color_scheme_icon = document.getElementsByClassName('color-scheme-icon')[0];
   color_scheme_icon.style.display = "none";

   // Display color scheme picker
   const color_scheme_picker = document.getElementsByClassName('color-scheme-picker')[0];
   color_scheme_picker.classList.add('slideIn');

}

function hideColorSchemePicker () 
{
    // Hide Select Picker
   const color_scheme_picker = document.getElementsByClassName('color-scheme-picker')[0];
   color_scheme_picker.classList.remove('slideIn');

    // Display Icon
    const colo_scheme_icon = document.getElementsByClassName('color-scheme-icon')[0];
    colo_scheme_icon.style.display = "block";

}

function changeColor (mainColor, secondaryColor) 
{
    
    if (mainColor) {
        // Change Background Color
        const classDivToChangeColors = document.querySelectorAll(".color-changer-identifier-div");
        Array.prototype.forEach.call(classDivToChangeColors, function (elem) { 
            elem.style.background= mainColor;
        });

        if (secondaryColor) {
            // Change Secondary Background Color
            const classSecondaryDivToChangeColors = document.querySelectorAll(".color-changer-identifier-secondary-div");
            Array.prototype.forEach.call(classSecondaryDivToChangeColors, function (elem) { 
                elem.style.background= secondaryColor;
            });
        }
       
         // Change Text Color
         const classTextToChangeColors = document.querySelectorAll(".color-changer-identifier-text");
         Array.prototype.forEach.call(classTextToChangeColors, function (elem) { 
             elem.style.color= mainColor;
         });
    }
}

function customColor ()
{
    const mainColor = document.getElementById('main-color'),
        secondaryColor = document.getElementById('secondary-color');

    // Change Colors base from the selected custom colors
    return changeColor(mainColor.value, secondaryColor.value);

} 

function resetColor () 
{
    const classDivToChangeColors = document.querySelectorAll(".color-changer-identifier-div");
            Array.prototype.forEach.call(classDivToChangeColors, function (elem) { 
                elem.style.background= default_main_color_rgb;
            });

    // Change Secondary Background Color
    const classSecondaryDivToChangeColors = document.querySelectorAll(".color-changer-identifier-secondary-div");
        Array.prototype.forEach.call(classSecondaryDivToChangeColors, function (elem) { 
            elem.style.background= default_secondary_color_rgb;
        });

    // Change Text Color
    const classTextToChangeColors = document.querySelectorAll(".color-changer-identifier-text");
        Array.prototype.forEach.call(classTextToChangeColors, function (elem) { 
            elem.style.color= default_main_color_rgb;
        });
}