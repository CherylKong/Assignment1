let dark_theme_btn = document.querySelector('.button2')
let side_note = document.querySelector('.notes')
let new_note = document.querySelector('.new_note')
let text_area = document.querySelector('.contain')
let new_notes = document.querySelector('.button1')
let save_btn = document.querySelector('.button3')
let cancel_btn = document.querySelector('.button4')

let dark_theme_color = ['#707070', '#c9c1c1', 'black', 'green','#393e46', 'green','red']
let light_theme_color = ['#afadad', '#eae6e6','white', '#8db596','#707070', '#8db596', '#ec524b'] 

function change_dark_theme()
{
    let variable = []

    variable.push(side_note)
    variable.push(new_note)
    variable.push(text_area)
    variable.push(new_notes)

    let text = change_theme_text(dark_theme_btn)
    dark_theme_btn.textContent = text
    variable.push(dark_theme_btn)
    variable.push(save_btn)
    variable.push(cancel_btn)

    change_theme(text, variable)
}

function change_theme_text(theme_text)
{
    let text = theme_text.innerText
    if(text === "Light Theme")
    {
        text = "Dark Theme"
    }
    else
    {
        text = "Light Theme"
    }
    return text
}
function change_theme(text,variable)
{
    if (text === "Light Theme")
    {
        for (let index in variable)
        {
            variable[index].style.backgroundColor = dark_theme_color[index]
            variable[index].style.color = 'white'
        }
    
    }
    else
    {
        for (let index in variable)
        {
           variable[index].style.backgroundColor = light_theme_color[index] 
           variable[index].style.color = 'black'
        }
    
    }
    dark_theme_btn.addEventListener('click',change_dark_theme)
}
function change_font_color_to_white(posiiton, color)
{
    posiiton.style.color = color
}

dark_theme_btn.addEventListener('click',change_dark_theme)

function hide_textarea()
{
    text_area.style.visibility='hidden'
    save_btn.style.visibility='hidden'
    cancel_btn.style.visibility='hidden'
}
cancel_btn.addEventListener('click', hide_textarea)
