let dark_theme = document.querySelector('.theme')
let dark_theme_color = ['#707070', '#c9c1c1', 'black', 'green','#393e46', 'green','red']
let light_theme_color = ['#afadad', '#eae6e6','white', '#8db596','#707070', '#8db596', '#ec524b'] 
function change_dark_theme()
{
    let variable = []

    let side_note = document.querySelector('.notes')
    variable.push(side_note)

    let new_note = document.querySelector('.new_note')
    variable.push(new_note)

    let text_area = document.querySelector('.contain')
    variable.push(text_area)

    let button1 = document.querySelector('.button1')
    variable.push(button1)

    let button2 = document.querySelector('.button2')
    let text = change_theme_text(button2)
    dark_theme.textContent = text
    variable.push(dark_theme)

    let button3 = document.querySelector('.button3')
    variable.push(button3)

    let button4 = document.querySelector('.button4')
    variable.push(button4)

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
    dark_theme.addEventListener('click',change_dark_theme)
}
function change_font_color_to_white(posiiton, color)
{
    posiiton.style.color = color
}

dark_theme.addEventListener('click',change_dark_theme)

