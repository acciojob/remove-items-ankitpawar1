//your JS code here. If required.
function removeColor() {
    var select = document.getElementById('colorSelect');
    var selectedOption = select.options[select.selectedIndex];

    if (selectedOption) {
        select.remove(selectedOption.index);
    }
}
