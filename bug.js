```javascript
// ... some Tailwind CSS classes ...
<div class="bg-gray-100 p-4">
  <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
    Click me
  </button>
</div>
```

This might look fine, but if you have a complex layout or many nested elements, it can easily lead to unexpected behavior.  For example, `bg-gray-100` might be overridden by a parent container or the `hover` effect might not work as expected due to specificity conflicts.