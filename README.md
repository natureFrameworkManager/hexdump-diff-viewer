# Hexdump Diff Viewer

## Overview
The Hexdump Diff Viewer is a web application designed to compare two raw hexdump captures from Wireshark. It highlights the differences in byte data and displays the position and affected text, providing a clear visualization of the discrepancies between the two captures.

## Features
- Compare two hexdump strings byte by byte.
- Highlight differences in the byte data.
- Display the position of differences and the affected text.
- Simple web interface for easy interaction.

## Project Structure
```
hexdump-diff-viewer
├── public
│   ├── index.html        # Main HTML document for the web application
│   └── style.css         # Styles for the webpage
├── src
│   ├── compare.js        # Function to compare hexdump strings
│   ├── hexdumpParser.js  # Function to parse hexdump strings
│   └── main.js           # Entry point for the JavaScript application
└── README.md             # Project documentation
```

## Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd hexdump-diff-viewer
   ```
3. Launch Node live Server:
   ```
   npx servce
   ```

## Usage
1. Open `public/index.html` in a web browser.
2. Input the two hexdump strings you wish to compare.
   - You can export the hexdump from Wireshark with right-clicking on the packet output on the bottom right and selecting "copy bytes as Hex and ASCII dump"
4. Click the "Compare" button to view the differences highlighted on the webpage.

## Contributing
Contributions are welcome! Please feel free to submit a pull request or open an issue for any enhancements or bug fixes.

## License
This project is licensed under the Open Software License 3.0 License. See the LICENSE file for more details.
