```javascript
// Using !important (Use cautiously)
<div class="bg-gray-100 p-4">
  <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded bg-blue-500 !important">
    Click me
  </button>
</div>

// Better approach: using more specific classes and avoiding !important
<div class="bg-gray-100 p-4">
  <div class="relative">
    <button class="absolute top-0 left-0 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      Click me
    </button>
  </div>
</div>
```