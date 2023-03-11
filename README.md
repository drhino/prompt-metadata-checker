# Prompt Metadata Checker for Stable Diffusion Images

Reads the metadata of an AI generated image (using the `Exif` or `tEXT` enclosed in that image file). Populates the prompt, seed, sampler, and more. Known to work well with images generated using AUTOMATIC1111, InvokeAI or NMKD. Supports both `.png` and `.jpeg` images.

If you run into any issues: please open up an Issue here on Github or talk to us on Discord.

This is a port into PromptHero of a community extension originally made by [@HE1CO](https://github.com/HE1CO/Postie) and later revamped by [@drhino](https://github.com/drhino)


## Motivation
This is what we use in [our prompt upload page](https://prompthero.com/prompt/upload). When you drop a valid image generated with A1111 or a supported program, this is what auto-fills all the fields in the page.

## Contribute
If you would like for PromptHero to support reading the metadata of other file formats or images generated by other programs, please feel free to open a pull request!

## How to develop
The heavy-lifting work is done in the JS files found under `src/vendor/postie`. That's where most of the original browser extension's code has been imported.

The `src/controllers` folder holds the [Stimulus](https://github.com/hotwired/stimulus) controller that manages the user interface found in `index.html`

JavaScript code is imported/managed using [Import Maps](https://www.honeybadger.io/blog/import-maps). The project importmap is found in `index.html`

To develop, just open `index.html` in a web browser and edit the relevant JS files. No JS tooling required.

## Features
 - Automagically fills upload info in the form after you choose a file
 - Works with images generated by [Stable Diffusion web UI](https://github.com/AUTOMATIC1111/stable-diffusion-webui), [InvokeAI](https://github.com/invoke-ai/InvokeAI), and [NMKD](https://nmkd.itch.io/t2i-gui)

## Limitations

 - NMKD: The model hash is not saved in the PNG metadata, so the model name and version can't be auto-filled
 - General: Inpainting overwrites the original prompt info, so the extension will autofill the inpaint prompt
