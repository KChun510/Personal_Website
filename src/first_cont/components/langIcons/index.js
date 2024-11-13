const langIcons = {
    CSS: (<small className='text'>
        <svg xmlns='http://www.w3.org/2000/svg' width='30' height='30' fill='black' className='bi bi-dot' viewBox='0 0 16 16'>
            <path d='M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z' />
        </svg>CSS
    </small>
    ),
    JavaScript: (<small className='text'>
        <svg xmlns='http://www.w3.org/2000/svg' width='30' height='30' fill='yellow' className='bi bi-dot' viewBox='0 0 16 16'>
            <path d='M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z' />
        </svg>JavaScript
    </small>
    ),
    Python: (
        <small className='text'>
            <svg xmlns='http://www.w3.org/2000/svg' width='30' height='30' fill='orange' className='bi bi-dot' viewBox='0 0 16 16'>
                <path d='M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z' />
            </svg>Python
        </small>
    ),
    "C++": (
        <small className='text'>
            <svg xmlns='http://www.w3.org/2000/svg' width='30' height='30' fill='blue' className='bi bi-dot' viewBox='0 0 16 16'>
                <path d='M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z' />
            </svg>C++
        </small>
    ),
    HTML: (
        <small className='text'>
            <svg xmlns='http://www.w3.org/2000/svg' width='30' height='30' fill='green' className='bi bi-dot' viewBox='0 0 16 16'>
                <path d='M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z' />
            </svg>HTML
        </small>
    ),
    PHP: (
        <small className='text'>
            <svg xmlns='http://www.w3.org/2000/svg' width='30' height='30' fill='purple' className='bi bi-dot' viewBox='0 0 16 16'>
                <path d='M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z' />
            </svg>PHP
        </small>
    ),
    TypeScript: (<small className='text'>
        <svg xmlns='http://www.w3.org/2000/svg' width='30' height='30' fill='cornflowerblue' className='bi bi-dot' viewBox='0 0 16 16'>
            <path d='M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z' />
        </svg>TypeScript
    </small>
    ),
    Lua: (<small className='text'>
        <svg xmlns='http://www.w3.org/2000/svg' width='30' height='30' fill='lightblue' className='bi bi-dot' viewBox='0 0 16 16'>
            <path d='M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z' />
        </svg>Lua
    </small>
    ),
    Shell: (<small className='text'>
        <svg xmlns='http://www.w3.org/2000/svg' width='30' height='30' fill='lightgreen' className='bi bi-dot' viewBox='0 0 16 16'>
            <path d='M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z' />
        </svg>Shell
    </small>
    ),
    C: (<small className='text'>
        <svg xmlns='http://www.w3.org/2000/svg' width='30' height='30' fill='gray' className='bi bi-dot' viewBox='0 0 16 16'>
            <path d='M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z' />
        </svg>C
    </small>
    ),
    Assembly: (<small className='text'>
        <svg xmlns='http://www.w3.org/2000/svg' width='30' height='30' fill='brown' className='bi bi-dot' viewBox='0 0 16 16'>
            <path d='M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z' />
        </svg>Assembly
    </small>
    ),    
    PowerShell: (<small className='text'>
        <svg xmlns='http://www.w3.org/2000/svg' width='30' height='30' fill='rgb(47, 47, 91)' className='bi bi-dot' viewBox='0 0 16 16'>
            <path d='M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z' />
        </svg>PowerShell
    </small>
    ),
    null: null
}

function CreateIcon({ lang }) {
    return (
        <>
            {langIcons[lang]}
        </>

    )
}

export default CreateIcon
