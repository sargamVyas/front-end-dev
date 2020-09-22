/**
 * 
 */

const entryForm = document.getElementById('entryForm');
const entriesSection = document.querySelector('#entries');
const entryTextbox = document.querySelector('.entry-textbox');
const entriesNav = document.querySelector('.entries-nav');

let count = 1;

function addEntryToDom(event) 
{
	
	let today = new Date();

	let date = today.getFullYear() 
	+ '-' + (today.getMonth()+1) 
	+ '-' +  today.getDate();
	
    event.preventDefault();
    
    const entryDiv = document.createElement('div');
    entryDiv.className = 'single-entry';
    entryDiv.innerText = entryTextbox.value;
    entryDiv.style.display = 'none';
    entriesSection.appendChild(entryDiv);
    entryTextbox.value = '';
    
    const displayEntryButton = document.createElement('button');
    displayEntryButton.className = 'display-entry-button';
    displayEntryButton.innerText = 'Entry ' + count + ': '+ date;
    entriesNav.appendChild(displayEntryButton);

    displayEntryButton.addEventListener('click', function() 
    {
    	const allEntries = document.querySelectorAll('.single-entry');
        for (let index=0; index < allEntries.length; index++) 
        {
            allEntries[index].style.display = 'none';
        }
        entryDiv.style.display = 'block';        
    })
    
    count++;
}

entryForm.addEventListener('submit', addEntryToDom);
