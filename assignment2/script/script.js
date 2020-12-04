let side_note = document.querySelector('.notes')
let new_note = document.querySelector('.new_note')
let text_area = document.querySelector('.contain')
let new_note_btn = document.querySelector('.button1')
let dark_theme_btn = document.querySelector('.button2')
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
    variable.push(new_note_btn)

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


function make_textarea_visible()
{
    text_area.classList.toggle('hidden')
    save_btn.classList.toggle('hidden')
    cancel_btn.classList.toggle('hidden')
    text_area.value = 'add some new notes...'
    new_note_btn.addEventListener('click', make_textarea_visible)
}
cancel_btn.addEventListener('click', make_textarea_visible)

let note1 = {title:"note one", body:"some text 1"} 
let note2 = {title:"note two", body:"some text 2"} 
let note_list = document.querySelector('.noteArray')
let note_content = [note1, note2]

function add_to_note_content()
{
    let lines = text_area.value.split('\n')
    let note_title = document.createElement('li')
    let note_body = []
    note_title.textContent = lines[0]
    for (let line =1; line < lines.length; line++)
    {
        obj =lines[line];
        note_body.push(obj);
        
    }
    let new_note = {title: note_title, body: note_body}
    note_content.push(new_note)
    note_list.appendChild(note_title)
    text_area.value = 'Add some note......'
}
save_btn.addEventListener('click', add_to_note_content)

let lst = document.querySelector('.noteArray')
function click_note(e)
{
    let title = e.target.innerText
    let notes = document.querySelectorAll('li')
    for (let index in notes)
    {
        if (title === notes[index].innerText)
        {
            text_area.value = ''
            let all_content = note_content[index]['body']
            if (index>=2)
            {
                for (let item of all_content)
                {
                    text_area.value += item +'\r\n'
                }
            }
            else
            {
                text_area.value = all_content
            }
        }
    }
    
}
lst.addEventListener('click',click_note)

