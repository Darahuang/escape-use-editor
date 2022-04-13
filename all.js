const imageUrl = 'https://images.unsplash.com/photo-1486427944299-d1955d23e34d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80';

const toolbarOptions = [
  ['bold', 'italic', 'underline', 'strike'],
  ['blockquote', 'code-block'],
  [{ list: 'ordered' }, { list: 'bullet' }],
  [{ size: ['small', false, 'large', 'huge'] }],
  ['link', 'image'],
  ['clean']

];

function imageHandler() {
  // select local image
  const input = document.createElement('input');
  input.type = 'file';
  input.click();

  // Listen upload local image and insert image url to rich editor.
  input.addEventListener('change', (e) => {
    const range = this.quill.getSelection(); // Retrieves the user’s selection range
    const { value } = e.target;
    if (value) {
      this.quill.insertEmbed( // Insert embedded content into the editor
        range.index,
        'image',
        imageUrl,
        Quill.sources.USER
      );
    }
  });
}
const options = {
  debug: 'info',
  modules: {
    imageResize: {
      displaySize: true
    },
    toolbar: {
      container: toolbarOptions,
      handlers: {
        image: imageHandler
      }
    }
  },
  placeholder: '產品描述',
  theme: 'snow'
};
const editor = new Quill('#editor', options);
