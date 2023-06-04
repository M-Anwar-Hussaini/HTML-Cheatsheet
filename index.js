const main = document.querySelector('main');
const info = [
  // 1
  {
    title: 'Basic Tags',
    tagName: ['html', 'head', 'body', 'title'],
    desciption: ['Creates an HTML document', "Sets off the title & other info that isn't displayed", 'Sets off the visible portion of the document', `Puts name of the document in the title bar; when bookmarking pages, this is what is bookmarked`],
  },

  // 2
  {
    title: 'Text Tags',
    tagName: ['pre', 'h1 --> h6', 'b', 'i', 'tt', 'code', 'cite', 'address', 'em', 'strong', 'a'],
    desciption: [`Creates preformatted text`, `Creates headlines -- H1=largest, H6=smallest`, `Creates bold text (should use strong instead)`, `Creates italicized text (should use <em> instead)`, `Creates typewriter-style text`, `Used to define source code, usually monospace`, `Creates a citation, usually processed in italics`, `Creates address section, usually processed in italics`, `Emphasizes a word (usually processed in bold)`, `Emphasizes a word (usually processed in bold)`, `Creates a hyperlink to a Uniform Resource Locator`],
  },

  // 3
  {
    title: 'Forms',
    tagName: ['form', 'select', 'option', 'textarea', `input type="checkbox"`, `input type="radio"`, `input type="text"`, `input type="submit"`, `input type="image"`, `input type="reset"`],
    desciption: [`Define a form`, `Creates a pulldown menu`, `Sets off each menu item`, `Creates a text box area. Columns set the width;  rows set the height.`, `Creates a checkbox.`, `Creates a radio button.`, `Creates a one-line text area. Size sets length, in characters.`, `Creates a submit button. Value sets the text in the submit button.`, `Creates a submit button using an image. `, `Creates a reset button`],
  },

  // 4
  {
    title: 'Tables',
    tagName: [`table`, 'tr', 'td', 'th', 'thead', 'tbody', 'tfoot'],
    desciption: ['Creates a table', 'Sets off each row in a table', 'Sets off each cell in a row', 'Sets off the table header (a normal cell with bold,centered text)', 'Creats header part of thable', 'Creats body part of thable', 'Creats footer of thable'],
  },

  // 5
  {
    title: 'Lists',
    tagName: ['ul', 'ol', 'li', 'dl', 'dt', 'dd'],
    desciption: ['Creates an unordered list', 'Creates an ordered list', 'Encompases each list item', 'Creates a defination list', ' Precedes eachdefintion term', ' Precedes eachdefintion'],
  },

  // 6
  {
    title: 'Graphic Elements',
    tagName: ['hr', 'img src="URL"'],
    desciption: ['Inserts a horizontal rule', 'Adds image; it is a separate file located at the URL'],
  },

  // 7
  {
    title: 'HTML5 input tag attributes ',
    tagName: ['input type="email"', 'input type="URL"', 'input type="number"', 'input type="range"', 'input type="date"', 'input type="search"', 'input type="color"'],
    desciption: [' Sets a single-line textbox for email addresses', ' Sets a single-line textbox for URLs ', ' Sets a single-line textbox for a number ', ' Sets a single-line text box for a range of numbers ', 'Sets a single-line text box with a calendarshowing the date/month/week/time', ' Sets a single-line text box for searching ', ' Sets a single-line text box for picking a color'],
  },

  // 8
  {
    title: 'HTML 5 Semantic Tags',
    tagName: ['header', 'main', 'aside', 'details', 'figcaption', 'mark', 'menuitem', 'progress', 'rt', 'summary', 'time', 'footer', 'article', 'section', 'dialog', 'figure', 'nav', 'meter'],
    desciption: ['The header block for a documetn', 'the main content for a document', 'for content contained in a sidebar', 'Additional facts or information that users can view/hid', 'a <i>figure</i> element caption that describes the figure', 'display highlighted text withen the content', 'The menu item a user can raise from a popup menu', 'The progress of a task, usually used for a progress bar','display east asian typography character details', 'Contains a heading for a <i>details</i> element', 'Identifies time and date', 'The footer block for a document', 'Identifies an article withen a document', 'A section block in a document', 'A box or window for a dialog', 'A content block featuring diagrams, photos, illustrations, and more', 'Navigation links for users', 'The scalar measurement withen a known array'],
  },

];

let counter = 1;

info.forEach((el, i) => {
  const section = document.createElement('section');
  const tableBody = document.createElement('tbody');
  el.tagName.forEach((tag, index) => {
    const tableRow = document.createElement('tr');
    tableRow.classList = 'row row-cols-2 row-cols-md-3 align-items-center';
    tableRow.innerHTML = `
      <th class='col-4 col-md-1'>${counter++}</th>              
      <td class='col-8 col-md-3 fst-italic'>&lt;${tag}&gt;</td>
      <td class="col-12 col-md-8">${el.desciption[index]}</td>    
    `;
    tableBody.appendChild(tableRow);
  });
  section.innerHTML = `
      <div class="container">
        <h2 class="mt-5 text-muted">${el.title}</h2>
        <table class="table table-bordered table-striped table-hover border-success-subtle">
          <thead class="table-success">
            <tr class="row row row-cols-2 row-cols-md-3">
              <th class="col-4 col-md-1">No.</th>
              <th class="col-8 col-md-3">Tag Name</th>
              <th class="col-12 col-md-8">Description</th>
            </tr>
          </thead>
          ${tableBody.innerHTML}
        </table>
      </div>
  `;
  main.appendChild(section);
});
