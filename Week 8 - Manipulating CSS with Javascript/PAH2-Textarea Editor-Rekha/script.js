// Wait for DOM content to fully load as requested
document.addEventListener('DOMContentLoaded', () => {
    
    // Select HTML elements
    const editor = document.getElementById('editor');
    const fontSizeSelect = document.getElementById('fontSizeSelect');
    const fontColorSelect = document.getElementById('fontColorSelect');
    const boldBtn = document.getElementById('boldBtn');
    const italicBtn = document.getElementById('italicBtn');
    const resetBtn = document.getElementById('resetBtn');

    // Ensure the text area matches default states on initial load
    editor.style.fontSize = '12px';
    editor.style.color = 'black';
    editor.style.fontWeight = 'normal';
    editor.style.fontStyle = 'normal';

    // Update Font Size
    fontSizeSelect.addEventListener('change', (e) => {
        editor.style.fontSize = e.target.value;
    });

    // Update Font Color
    fontColorSelect.addEventListener('change', (e) => {
        editor.style.color = e.target.value;
    });

    // Toggle Bold Style
    boldBtn.addEventListener('click', () => {
        boldBtn.classList.toggle('active');
        if (boldBtn.classList.contains('active')) {
            editor.style.fontWeight = 'bold';
        } else {
            editor.style.fontWeight = 'normal';
        }
    });

    // Toggle Italic Style
    italicBtn.addEventListener('click', () => {
        italicBtn.classList.toggle('active');
        if (italicBtn.classList.contains('active')) {
            editor.style.fontStyle = 'italic';
        } else {
            editor.style.fontStyle = 'normal';
        }
    });

    // Reset All Styles to Defaults
    resetBtn.addEventListener('click', () => {
        // Reset dropdown values
        fontSizeSelect.value = '12px';
        fontColorSelect.value = 'black';
        
        // Remove active class from toggle buttons
        boldBtn.classList.remove('active');
        italicBtn.classList.remove('active');
        
        // Reset actual textarea styles
        editor.style.fontSize = '12px';
        editor.style.color = 'black';
        editor.style.fontWeight = 'normal';
        editor.style.fontStyle = 'normal';
    });
});