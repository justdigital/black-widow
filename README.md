# README

### Black Widow - Never leave words alone

## What?
WidowJS will make your broken texts never leave a word alone on the last line, see [demo](http://justdigital.github.io/black-widow/)

## Browsers
  
  - IE9
  - Chrome 4
  - Firefox 3.5
  - Opera 10.1
  - Safari 3.1
  - IOS Safari 3.2
  - Android Browser 2.1
  - Opera Mini 8
  - Blackberry Browser 7
  - Opera Mobile 12
  - Chrome for Android 49
  - Firefox for Android 45
  - IE Mobile 10
  - UC Browser for Android 9.9
  - Edge 12

## How to use

Include this to your pages:
```
  <script type="text/javascript" src="widow.js"></script>
```
Call widow's init script:
```
Widow.init(); 
```

If you want to change some options before initializing:
```
// Values in this example are the default ones
Widow.defaultClass = "text";  // The class of the container where the paragraphs will be found
Widow.defaultElement = "p";   // The elements inside the containers that will be parsed and broken
Widow.addNoWrapToText = true; // Automatically add no-wrap css property to parsed texts
Widow.init(); 
```

## Licensing

Copyright 2016 Black Widow

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

[http://www.apache.org/licenses/LICENSE-2.0](http://www.apache.org/licenses/LICENSE-2.0)

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
