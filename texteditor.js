function editText(command, value) {
    var text = document.getElementById('text');
    document.execCommand(command, false, value);
    text.focus();
}
