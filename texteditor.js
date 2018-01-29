function edit(command = 'bold', value = null) {
    const text = document.getElementById('text');
    document.execCommand(command, false, value);
    text.focus();
}

function drawTextEditor() {
    const textEditor = document.getElementById('textEditor');
    
    // button bar를 만든다
    const buttonbar = document.createElement('div');
    buttonbar.className = 'editor';
    buttonbar.id = 'editor';
    textEditor.appendChild(buttonbar);

    // text를 만든다
    const text = document.createElement('div');
    text.contentEditable = true;
    text.className = 'text';
    text.id = 'text';
    textEditor.appendChild(text);

    // button을 만든다
    for(action in actions) {
        const button = document.createElement('button');
        button.className = 'button';
        button.type = 'button';
        button.title = actions[action].title;
        button.onclick = actions[action].result;
        button.innerHTML = actions[action].icon;
        buttonbar.appendChild(button);
    }
}

const actions = {
    bold: {
        icon: '<b>B</b>',
        title: 'Bold',
        result: () => edit('bold')
    },
    italic: {
        icon: '<i>I</i>',
        title: 'Italic',
        result: () => edit('italic')
    },
    underline: {
        icon: '<u>U</u>',
        title: 'Underline',
        result: () => edit('underline')
    },
    strikethrough: {
        icon: '<strike>S</strike>',
        title: 'Strike-through',
        result: () => edit('strikeThrough')
    },
    heading1: {
        icon: '<b>H<sub>1</sub></b>',
        title: 'Heading 1',
        result: () => edit('formatBlock', '<H1>')
    },
    heading2: {
        icon: '<b>H<sub>2</sub></b>',
        title: 'Heading 2',
        result: () => edit('formatBlock', '<H2>')
    },
    paragraph: {
        icon: '&#182',
        title: 'Paragraph',
        result: () => edit('formatBlock', '<P>')
    },
    quote: {
        icon: '&#8220; &#8221;',
        title: 'Quote',
        result: () => edit('formatBlock', '<BLOCKQUOTE>')
      },
      olist: {
        icon: '&#35;',
        title: 'Ordered List',
        result: () => edit('insertOrderedList')
      },
      ulist: {
        icon: '&#8226;',
        title: 'Unordered List',
        result: () => edit('insertUnorderedList')
      },
      code: {
        icon: '&lt;/&gt;',
        title: 'Code',
        result: () => edit('formatBlock', '<PRE>')
      },
      line: {
        icon: '&#8213;',
        title: 'Horizontal Line',
        result: () => edit('insertHorizontalRule')
    }
}

drawTextEditor();
