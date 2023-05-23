# ![LOGO](src/images/favicon-32x32.png) Liveworksheets Solver Extension

For English speakers [README_EN.md](./README_EN.md)

## Story of creation

One spring morning, I woke up, washed my face, had breakfast, brushed my teeth and opened Classroom, where I had already been assigned a task, namely "Solve the worksheet and attach the result for checking". And it completely ruined my mood! First, why is it so difficult? And secondly, why on such a wonderful day?

It was this morning that I came up with the idea: *"Why not develop some kind of program that will solve worksheets for me?"* (I couldn't think of a name)

And here is my creation in front of you!

## Purpose

Liveworksheets Solver is a cross-browser extension that will help you solve any "worksheet" (what else to call it?)

## Features

Can solve almost all types of problems:

- Write the correct answer & Speaking
- Drop down box for selection
- Options to choose from
- Check all the boxes
- *Connect with a pencil*
- *Move the blocks*

> About the last two. They require user actions, that is, the extension will not solve them, but only indicate where to draw or move.

## Installation

To install the extension, follow these steps:

1. Download the archive with the extension from the [Releases](https://github.com/XEPCOH-HACKERS/liveworksheets-solver/releases/latest).

2. Unzip the extension to a folder.

3. Open your browser and enter in the address bar:

    `chrome://extensions` for Chrome, Edge and Opera.

4. Turn on developer mode by clicking on the appropriate button.

5. Click the "Download unpacked extension" button and select the folder where you unzipped the extension.

6. After that, the extension will be installed and will appear in the list of installed extensions in the browser.

    > Since in order to install an extension in Firefox, you need to sign it and upload it to the Developer Hub, I'm working on automating this process. As soon as I'm done, Firefox support will be available.

## Usage

Just click on the extension in the toolbar and it will do (almost) everything for you.

### OR

The extension adds two buttons to the context menu (PCM), namely:

- Solve this worksheet (not yet)
- Check solution

I think it is clear what the first button does.

The second button (Check Solution) checks your worksheet without sending it to the teacher.

## Contribution

Who needs this? Just take it and use it!

Seriously, take it, write something useful, create a pull request, and I'll take a look.

Before you commit something, run these commands:

```bash
npm run lint
npm run format
```

## License

[MIT](./LICENSE)
